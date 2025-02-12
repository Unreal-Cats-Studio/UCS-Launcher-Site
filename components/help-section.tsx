"use client"

import { useTranslation } from "@/components/i18n-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HelpSection() {
  const { t } = useTranslation()

  const faqs = [
    { question: "faq1Question", answer: "faq1Answer" },
    { question: "faq2Question", answer: "faq2Answer" },
    { question: "faq3Question", answer: "faq3Answer" },
    { question: "faq4Question", answer: "faq4Answer" },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gradient">{t("helpAndSupport")}</h1>
        <p className="text-center mb-12 text-muted-foreground">{t("helpDescription")}</p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{t(faq.question)}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t(faq.answer)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

