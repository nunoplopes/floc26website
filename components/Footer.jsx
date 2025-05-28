'use client'
import React from 'react'
import Link from 'next/link'
import { FiMail, FiTwitter, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-neutral-900">About FLoC 2026</h3>
            <p className="text-neutral-600 text-xl">
              The Federated Logic Conference (FLoC) brings together the world's leading researchers 
              in logic and computer science.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-800">Quick Links</h3>
            <ul className="space-y-2 text-xl">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-xl">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/committees" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-xl">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-xl">
                  Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-800">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-neutral-600 text-xl">
                <FiMail className="w-4 h-4 text-red-500" />
                <a href="mailto:webmaster@floc26.org" className="hover:text-red-500 transition-colors duration-300">
                  webmaster@floc26.org
                </a>
              </li>
              <li className="text-neutral-600 text-xl">
                FLoC 2026 Organizing Committee
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/floc26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/floc22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/floc26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-red-500 transition-colors duration-300"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">
              © {new Date().getFullYear()} FLoC 2026. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link href="/" className="text-neutral-600 hover:text-red-500 transition-colors duration-300 text-sm">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}