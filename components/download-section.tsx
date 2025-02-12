"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

interface Release {
  tag_name: string
  assets: Array<{
    name: string
    browser_download_url: string
  }>
}

export function DownloadSection() {
  const [latestRelease, setLatestRelease] = useState<Release | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { t } = useTranslation()

  useEffect(() => {
    fetch("https://api.github.com/repos/your-username/ucs-launcher/releases/latest")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch latest release")
        }
        return response.json()
      })
      .then((data) => {
        setLatestRelease(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching latest release:", error)
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  const windowsAsset = latestRelease?.assets?.find((asset) => asset.name.endsWith(".exe"))

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gradient">{t("downloadUCSLauncher")}</h1>
        {isLoading ? (
          <p className="text-muted-foreground">{t("loadingVersion")}</p>
        ) : error ? (
          <p className="text-red-500">
            {t("errorFetchingRelease")}: {error}
          </p>
        ) : latestRelease ? (
          <>
            <p className="text-muted-foreground mb-8">{t("latestVersion", { version: latestRelease.tag_name })}</p>
            {windowsAsset ? (
              <Button asChild size="lg" className="gap-2">
                <a href={windowsAsset.browser_download_url} download>
                  <Download className="w-5 h-5" />
                  {t("downloadForWindows")}
                </a>
              </Button>
            ) : (
              <p className="text-muted-foreground">{t("noDownloadAvailable")}</p>
            )}
          </>
        ) : (
          <p className="text-muted-foreground">{t("noReleaseFound")}</p>
        )}
      </div>
    </section>
  )
}

