"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export const LANGUAGES = [
  { code: "EN", flag: "🇺🇸", locale: "en", label: "English" },
  { code: "ES", flag: "🇪🇸", locale: "es", label: "Español" },
  { code: "ZH", flag: "🇨🇳", locale: "zh", label: "中文" },
  { code: "KO", flag: "🇰🇷", locale: "ko", label: "한국어" },
  { code: "FA", flag: "🇮🇷", locale: "fa", label: "فارسی" },
  { code: "FR", flag: "🇫🇷", locale: "fr", label: "Français" },
  { code: "HI", flag: "🇮🇳", locale: "hi", label: "हिन्दी" },
] as const;

const LOCALES = LANGUAGES.map((l) => l.locale);

export default function LanguageSelect({ dark = true }: { dark?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const current = (() => {
    const seg = pathname.split("/")[1];
    return LOCALES.includes(seg as (typeof LOCALES)[number]) ? seg : "en";
  })();

  useEffect(() => {
    document.documentElement.lang = current;
    document.documentElement.dir = current === "fa" ? "rtl" : "ltr";
  }, [current]);

  const onChange = (locale: string) => {
    const parts = pathname.split("/");
    if (LOCALES.includes(parts[1] as (typeof LOCALES)[number])) {
      parts[1] = locale;
    } else {
      parts.splice(1, 0, locale);
    }
    router.push(parts.join("/") || "/");
  };

  return (
    <label
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 transition-colors",
        dark
          ? "border-cream/25 bg-white/5 hover:border-gold/60"
          : "border-brown/25 bg-white hover:border-gold"
      )}
    >
      <Globe className="h-3.5 w-3.5 text-gold shrink-0" aria-hidden="true" />
      <span className="sr-only">Language / Idioma</span>
      <select
        value={current}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Language / Idioma"
        className={cn(
          "cursor-pointer appearance-none bg-transparent pr-0 text-xs font-body font-semibold tracking-wider outline-none",
          dark ? "text-cream" : "text-ink",
          "[&>option]:text-ink"
        )}
      >
        {LANGUAGES.map((l) => (
          <option key={l.locale} value={l.locale}>
            {l.flag} {l.code}
          </option>
        ))}
      </select>
    </label>
  );
}
