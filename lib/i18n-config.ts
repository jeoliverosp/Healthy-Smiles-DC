export const locales = ["en", "es", "zh", "ko", "fa", "fr", "hi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
