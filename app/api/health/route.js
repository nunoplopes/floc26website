import { prisma } from '@/lib/prisma'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Test Prisma connection
    const dbResult = await prisma.$queryRaw`SELECT version() as version, now() as timestamp`
    
    // Test Supabase client connection
    const { data: authData } = await supabase.auth.getSession()
    
    return Response.json({
      status: 'healthy',
      database: {
        connected: true,
        version: dbResult[0]?.version?.split(' ')[0],
        timestamp: dbResult[0]?.timestamp
      },
      supabase: {
        connected: true,
        project: 'xminrnlmxacutbzctidq'
      },
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Health check failed:', error)
    
    return Response.json({
      status: 'unhealthy',
      error: error.message,
      code: error.code,
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}