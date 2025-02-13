"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useTranslation } from "@/components/i18n-provider"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-background/50">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/ucs-launcher-logo.png" alt="UCS Launcher" width={32} height={32} className="w-8 h-8" />
            <span className="font-medium text-gradient">UCS Launcher</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/download" className="text-sm hover:text-primary transition-colors">
            {t("download")}
          </Link>
          <Link href="/about" className="text-sm hover:text-primary transition-colors">
            {t("about")}
          </Link>
          <Link href="/help" className="text-sm hover:text-primary transition-colors">
            {t("help")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/download">{t("download")}</Link>
          </Button>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link href="/download" className="text-sm hover:text-primary transition-colors" onClick={toggleMenu}>
              {t("download")}
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors" onClick={toggleMenu}>
              {t("about")}
            </Link>
            <Link href="/help" className="text-sm hover:text-primary transition-colors" onClick={toggleMenu}>
              {t("help")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

