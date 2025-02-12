"use client"

import { useTranslation } from "@/components/i18n-provider"

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gradient">{t("aboutUCSLauncher")}</h1>
        <div className="space-y-6">
          <p className="text-muted-foreground">{t("aboutDescription1")}</p>
          <p className="text-muted-foreground">{t("aboutDescription2")}</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gradient">{t("keyFeatures")}</h2>
          <ul className="list-none pl-6 space-y-4">
            {["feature1", "feature2", "feature3", "feature4"].map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{t(feature)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

