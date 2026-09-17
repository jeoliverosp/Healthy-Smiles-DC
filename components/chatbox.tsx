"use client";

import { useState } from "react";
import { X, MessageCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "menu" | "zip" | "location-result" | "services" | "contact";

const LOCATIONS = [
  { name: "Silver Spring", address: "11016 New Hampshire Ave, Silver Spring, MD 20904", phone: "(301) 838-4291", zip: "20904" },
  { name: "Rockville", address: "1600 Veirs Mill Rd, Rockville, MD 20851", phone: "(301) 838-3180", zip: "20851" },
  { name: "College Park", address: "4809 Greenbelt Rd, College Park, MD 20740", phone: "(240) 696-3668", zip: "20740" },
];

const SERVICES = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics",
  "Emergency",
  "Root Canal",
  "Dental Crowns",
  "Exam & Cleaning",
];

export default function Chatbox() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("menu");
  const [zipInput, setZipInput] = useState("");
  const [nearbyLocation, setNearbyLocation] = useState<typeof LOCATIONS[0] | null>(null);

  const handleZipSubmit = () => {
    const match = LOCATIONS.find((l) => l.zip === zipInput.trim()) || LOCATIONS[0];
    setNearbyLocation(match);
    setStep("location-result");
  };

  const reset = () => {
    setStep("menu");
    setZipInput("");
    setNearbyLocation(null);
  };

  return (
    <>
      {/* ── FAB Button ── */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-[90] h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-normal",
          "bg-gold hover:bg-brown hover:text-cream text-ink"
        )}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* ── Chat Panel ── */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-[90] w-[340px] max-w-[calc(100vw-3rem)] rounded-lg bg-white shadow-2xl border border-cream-hover overflow-hidden transition-all duration-300 origin-bottom-right",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Chat assistant"
      >
        {/* Header */}
        <div className="bg-ink text-cream px-5 py-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center shrink-0">
            <span className="text-ink font-display font-bold text-sm">HS</span>
          </div>
          <div>
            <p className="font-display font-semibold text-sm">Healthy Smiles</p>
            <p className="text-cream/50 text-xs">How can we help?</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 min-h-[280px] flex flex-col gap-3">

          {/* ── Menu ── */}
          {step === "menu" && (
            <>
              <p className="text-brown text-sm">Hi! How can I help you today?</p>
              <button
                onClick={() => setStep("zip")}
                className="flex items-center gap-3 w-full p-3 rounded-lg border border-cream-hover hover:border-gold text-left transition-colors group"
              >
                <MapPin className="h-5 w-5 text-gold shrink-0" />
                <span className="text-ink text-sm font-medium flex-1">Find a Location</span>
                <ArrowRight className="h-4 w-4 text-brown/30 group-hover:text-gold transition-colors" />
              </button>
              <button
                onClick={() => setStep("services")}
                className="flex items-center gap-3 w-full p-3 rounded-lg border border-cream-hover hover:border-gold text-left transition-colors group"
              >
                <span className="text-gold text-lg shrink-0">🦷</span>
                <span className="text-ink text-sm font-medium flex-1">Dental Services</span>
                <ArrowRight className="h-4 w-4 text-brown/30 group-hover:text-gold transition-colors" />
              </button>
              <button
                onClick={() => setStep("contact")}
                className="flex items-center gap-3 w-full p-3 rounded-lg border border-cream-hover hover:border-gold text-left transition-colors group"
              >
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span className="text-ink text-sm font-medium flex-1">Talk to Someone</span>
                <ArrowRight className="h-4 w-4 text-brown/30 group-hover:text-gold transition-colors" />
              </button>
            </>
          )}

          {/* ── Zip Code Input ── */}
          {step === "zip" && (
            <>
              <button onClick={reset} className="text-gold text-sm self-start hover:underline">
                ← Back
              </button>
              <p className="text-brown text-sm">What&apos;s your zip code?</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  placeholder="e.g. 20904"
                  maxLength={5}
                  aria-label="Zip code"
                  className="flex-1 border border-cream-hover rounded-lg px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold"
                  onKeyDown={(e) => e.key === "Enter" && handleZipSubmit()}
                />
                <button
                  onClick={handleZipSubmit}
                  className="btn btn-gold text-sm px-4 py-2"
                >
                  Find
                </button>
              </div>
            </>
          )}

          {/* ── Location Result ── */}
          {step === "location-result" && nearbyLocation && (
            <>
              <button onClick={() => setStep("zip")} className="text-gold text-sm self-start hover:underline">
                ← Back
              </button>
              <p className="text-brown text-sm">Nearest location:</p>
              <div className="rounded-lg border border-gold/30 bg-cream/50 p-4 space-y-2">
                <h4 className="font-display font-semibold text-ink">{nearbyLocation.name}</h4>
                <p className="text-brown text-sm">{nearbyLocation.address}</p>
                <a
                  href={`tel:${nearbyLocation.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-gold text-sm font-medium no-underline hover:text-brown transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {nearbyLocation.phone}
                </a>
              </div>
              {/* Map placeholder */}
              <div className="aspect-[16/9] rounded-lg bg-cream-hover flex items-center justify-center">
                <span className="text-brown/30 text-xs uppercase tracking-widest">Google Maps</span>
              </div>
            </>
          )}

          {/* ── Services List ── */}
          {step === "services" && (
            <>
              <button onClick={reset} className="text-gold text-sm self-start hover:underline">
                ← Back
              </button>
              <p className="text-brown text-sm">Our services:</p>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((s) => (
                  <a
                    key={s}
                    href={`/services`}
                    className="p-2 rounded border border-cream-hover text-xs text-ink font-medium hover:border-gold hover:text-gold transition-colors no-underline text-center"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </>
          )}

          {/* ── Contact ── */}
          {step === "contact" && (
            <>
              <button onClick={reset} className="text-gold text-sm self-start hover:underline">
                ← Back
              </button>
              <p className="text-brown text-sm">Call us at:</p>
              {LOCATIONS.map((loc) => (
                <a
                  key={loc.name}
                  href={`tel:${loc.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-cream-hover hover:border-gold text-left transition-colors no-underline group"
                >
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <div className="flex-1">
                    <p className="text-ink text-sm font-medium">{loc.name}</p>
                    <p className="text-brown text-xs">{loc.phone}</p>
                  </div>
                </a>
              ))}
              <p className="text-brown/50 text-xs text-center mt-2">
                Emergency? Call now — we&apos;re here to help.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
