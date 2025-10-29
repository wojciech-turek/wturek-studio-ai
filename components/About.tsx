"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const skillKeys = ["ai", "fullstack", "python", "automation", "consulting", "customerFocus"];

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">{t("expertise")}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium">{t(`skills.${key}`)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
