import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sharp from 'sharp'
import { optimize as optimizeSvg } from 'svgo'

function formatSize(bytes) {
  return `${(bytes / 1024).toFixed(2)} KB`
}

function imageOptimizerPlugin() {
  return {
    name: 'vite-plugin-image-optimizer',
    apply: 'build',

    async generateBundle(_, bundle) {
      const conversions = []

      for (const [fileName, assetInfo] of Object.entries(bundle)) {
        if (assetInfo.type !== 'asset' || !assetInfo.source) continue

        if (/\.(png|jpe?g)$/i.test(fileName)) {
          const inputBuffer = Buffer.isBuffer(assetInfo.source)
            ? assetInfo.source
            : Buffer.from(assetInfo.source)
          const inputSize = inputBuffer.byteLength

          const [webpBuffer, avifBuffer] = await Promise.all([
            sharp(inputBuffer).webp({ quality: 75 }).toBuffer(),
            sharp(inputBuffer).avif({ quality: 75 }).toBuffer()
          ])

          const webpSize = webpBuffer.byteLength
          const avifSize = avifBuffer.byteLength

          const isAvifSmaller = avifSize <= webpSize
          const outputBuffer = isAvifSmaller ? avifBuffer : webpBuffer
          const outputSize = outputBuffer.byteLength
          const ext = isAvifSmaller ? '.avif' : '.webp'

          if (outputSize >= inputSize) {
            console.log(`❌ ${fileName} skip conversion to ${ext}: ${formatSize(inputSize)} → ${formatSize(outputSize)}`)
            continue
          }

          const assetId = this.emitFile({
            type: 'asset',
            name: fileName.replace(/^assets\//, '')
                          .replace(/-[a-z0-9_-]{8}\.[a-z]+$/i, ext),
            source: outputBuffer
          })

          const outputFileName = this.getFileName(assetId)
          const diff = ((1 - outputSize / inputSize) * 100).toFixed(1)
          console.log(`✅ [${ext.slice(1).toUpperCase()}] ${fileName} → ${outputFileName} | ${formatSize(inputSize)} → ${formatSize(outputSize)} (${diff}% smaller)`)
          conversions.push({ old: fileName, new: outputFileName })
          delete bundle[fileName]
        }

        else if (/\.svg$/i.test(fileName)) {
          try {
            const svgSource = assetInfo.source.toString()
            const { data: optimizedSvg } = optimizeSvg(svgSource)
            assetInfo.source = optimizedSvg

            const inputSize = Buffer.byteLength(svgSource)
            const outputSize = Buffer.byteLength(optimizedSvg)
            const diff = ((1 - outputSize / inputSize) * 100).toFixed(1)
            console.log(`✅ [SVG]  ${fileName} optimized | ${formatSize(inputSize)} → ${formatSize(outputSize)} (${diff}% smaller)`)
          } catch (e) {
            console.warn(`⚠️ SVGO optimization failed for ${fileName}:`, e)
          }
        }
      }

      // --- Rewrite references in emitted assets ---
      for (const [, assetInfo] of Object.entries(bundle)) {
        if (!assetInfo.code) continue
        for (const { old, new: newFile } of conversions) {
          assetInfo.code = assetInfo.code.replaceAll(old, newFile)
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    imageOptimizerPlugin()
  ],
  build: {
    assetsInlineLimit: 0,
  }
})
