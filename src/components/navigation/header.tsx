'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Search, GraduationCap } from 'lucide-react'
import { cn } from '@/utils/cn'
import { openSearchModal } from '@/utils/open-search'
import { mainNavigation } from '@/lib/navigation'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-heading font-bold text-xl text-dark">ТимГид</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-8">
          {mainNavigation.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-gray"
                )}
              >
                {item.title}
              </Link>
              
              {/* Dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-3 py-2 text-sm rounded-md transition-colors",
                          pathname === child.href
                            ? "bg-primary-50 text-primary"
                            : "hover:bg-light text-gray"
                        )}
                      >
                        <div className="font-medium">{child.title}</div>
                        {child.description && (
                          <div className="text-xs text-gray-500 mt-1">
                            {child.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const target = e.target as HTMLInputElement
                  openSearchModal(target.value)
                }
              }}
              onFocus={() => openSearchModal('')}
              className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer"
              readOnly
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-gray hover:text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4">
            <nav className="space-y-4">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-base font-medium",
                      pathname === item.href ? "text-primary" : "text-dark"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  
                  {item.children && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block text-sm",
                            pathname === child.href
                              ? "text-primary"
                              : "text-gray"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Mobile Search */}
            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const target = e.target as HTMLInputElement
                      openSearchModal(target.value)
                    }
                  }}
                  onFocus={() => openSearchModal('')}
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumbs removed as per requirement */}
    </header>
  )
} 