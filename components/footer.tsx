"use client"
import { useTranslation } from "@/components/i18n-provider"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image className="h-10 w-auto" src="/ucs-launcher-logo.png" alt="UCS Launcher" width={40} height={40} />
            <p className="text-base text-muted-foreground">Launch and play games made by Unreal Cats Studio.</p>
            <div className="flex space-x-6">{/* Add social media icons here */}</div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      Mods
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/help" className="text-base text-muted-foreground hover:text-foreground">
                      {t("help")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      {t("contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-muted-foreground hover:text-foreground">
                      {t("about")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-muted-foreground hover:text-foreground">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            &copy; {new Date().getFullYear()} Unreal Cats Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

