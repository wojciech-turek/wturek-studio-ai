"use client";

import { useTranslations } from "next-intl";
import { Sparkles, Zap, MessageSquare, Code } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    key: "contentGeneration",
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    key: "automation",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    key: "consulting",
    icon: MessageSquare,
    gradient: "from-orange-500 to-red-500",
  },
  {
    key: "development",
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Icon Container */}
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`${service.key}.description`)}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
