"use client";

import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { Heart } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/40 bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <Logo />

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground md:items-end md:text-right">
            <p>{t("rights")}</p>
            <p className="flex items-center gap-1">
              {t("madeWith")} <Heart className="h-3 w-3 fill-primary text-primary" /> {t("by")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
