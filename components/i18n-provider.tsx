"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

const translations = {
  en: {
    download: "Download",
    about: "About",
    help: "Help",
    contact: "Contact", // Add this line
    toggleTheme: "Toggle theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    heroTitle: "Your Gateway to Unreal Cats Studio Games",
    heroSubtitle: "Download and manage Unreal Cats Studio games with ease using UCS Launcher",
    downloadNow: "Download Now",
    learnMore: "Learn More",
    downloadUCSLauncher: "Download UCS Launcher",
    latestVersion: "Latest version: {version}",
    loadingVersion: "Loading latest version...",
    downloadForWindows: "Download for Windows",
    noDownloadAvailable: "No download available at the moment",
    noReleaseFound: "No release found",
    errorFetchingRelease: "Error fetching release",
    aboutUCSLauncher: "About UCS Launcher",
    aboutDescription1:
      "UCS Launcher is the official platform for Unreal Cats Studio games, designed to streamline your gaming experience. With our intuitive interface and powerful features, managing and launching your favorite Unreal Cats Studio games has never been easier.",
    aboutDescription2:
      "Our team is dedicated to providing a seamless, user-friendly experience for players of Unreal Cats Studio games. Whether you're a casual player or a hardcore enthusiast, UCS Launcher enhances your gaming experience.",
    keyFeatures: "Key Features",
    feature1: "Easy management and organization of Unreal Cats Studio games",
    feature2: "One-click game launches for all Unreal Cats Studio titles",
    feature3: "Automatic updates for games and the launcher itself",
    feature4: "Exclusive content and early access to Unreal Cats Studio releases",
    helpAndSupport: "Help & Support",
    helpDescription:
      "Find answers to common questions about UCS Launcher below. If you need further assistance, please contact our support team.",
    faq1Question: "How do I install UCS Launcher?",
    faq1Answer:
      "Download the installer from our website, run it, and follow the on-screen instructions. It's that simple!",
    faq2Question: "How do I add Unreal Cats Studio games to UCS Launcher?",
    faq2Answer:
      "UCS Launcher automatically detects installed Unreal Cats Studio games. You can also purchase and download new games directly through the launcher.",
    faq3Question: "Is UCS Launcher free to use?",
    faq3Answer: "Yes, UCS Launcher is completely free to download and use. You only pay for the games you purchase.",
    faq4Question: "How do I update UCS Launcher?",
    faq4Answer:
      "UCS Launcher automatically checks for updates on startup. You can also manually check for updates in the settings menu.",
  },
  // Add more languages as needed
}

const I18nContext = createContext({
  t: (key: string, params?: Record<string, string>) => key,
  setLanguage: (lang: string) => {},
})

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const t = (key: string, params?: Record<string, string>) => {
    let translation =
      translations[language as keyof typeof translations]?.[key as keyof (typeof translations)["en"]] || key
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(`{${paramKey}}`, paramValue)
      })
    }
    return translation
  }

  return <I18nContext.Provider value={{ t, setLanguage }}>{children}</I18nContext.Provider>
}

export const useTranslation = () => useContext(I18nContext)

