"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/components/i18n-provider"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient">{t("heroTitle")}</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">{t("heroSubtitle")}</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/download">
                <Download className="w-5 h-5" />
                {t("downloadNow")}
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="gap-2">
              <Link href="/about">
                {t("learnMore")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <Image
            src="/ucs-launcher-screenshot.png"
            alt="UCS Launcher Screenshot"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg shadow-2xl"
            priority
          />
          <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

