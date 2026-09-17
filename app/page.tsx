"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans relative">
      {/* Hamburger menu (top left) */}
      <div className="fixed top-4 left-4 z-50 p-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full bg-white/20 dark:bg-black/20 p-2 hover:bg-white/10 dark:hover:bg-black/10 focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg className="h-6 w-6 stroke-white dark:stroke-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 dark:bg-white/50 backdrop-blur-sm flex items-center justify-center">
          <nav className="bg-white dark:bg-black rounded-lg p-6 w-full max-w-md space-y-4 shadow-lg">
            <h2 className="text-xl font-bold text-center text-black dark:text-white">Menú</h2>
            <div className="space-y-2">
              <Link href="/" className="block px-4 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                Inicio
              </Link>
              <Link href="/servicios" className="block px-4 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                Servicios
              </Link>
              <Link href="/profesionales" className="block px-4 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                Profesionales
              </Link>
              <Link href="/testimonios" className="block px-4 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                Testimonios
              </Link>
              <Link href="/contacto" className="block px-4 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
                Contacto
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 focus:outline-none"
            >
              Cerrar
            </button>
          </nav>
        </div>
      )}

      {/* Hero section */}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="inline-block">
            {/* Placeholder logo - you can replace with actual image */}
            <span className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              Sonrisa Saludable
            </span>
          </div>

          {/* Tagline */}
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white max-w-2xl">
            Cuidamos tu sonrisa con tecnología y calidez
          </h1>

          {/* Subtext */}
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
            Servicios dentales de alta calidad para toda la familia. Agenda tu cita hoy mismo.
          </p>

          {/* CTA Button */}
          <Link href="/reserva" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg">
            Agendar Cita
          </Link>
        </div>
      </div>
    </div>
  );
}
