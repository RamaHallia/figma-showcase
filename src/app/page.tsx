"use client";

import { useState } from "react";

export default function DesignSystemShowcase() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [inputSuccess, setInputSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in-down">
          <h1 className="text-display-2xl gradient-text">
            Design System Showcase
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Démonstration complète de tous les composants et styles du design
            system exporté depuis Figma
          </p>
        </header>

        {/* === COLORS SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Couleurs</h2>
            <p className="text-body-md text-neutral-600">
              Palette de couleurs complète : Brand, Accent et Neutrals
            </p>
          </div>

          {/* Brand Colors */}
          <div>
            <h3 className="text-heading-5 mb-4">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Orange 400", color: "bg-brand-orange-400" },
                { name: "Orange 500", color: "bg-brand-orange-500" },
                { name: "Orange 600", color: "bg-brand-orange-600" },
                { name: "Orange 700", color: "bg-brand-orange-700" },
                { name: "Purple 400", color: "bg-brand-purple-400" },
                { name: "Purple 500", color: "bg-brand-purple-500" },
                { name: "Purple 600", color: "bg-brand-purple-600" },
                { name: "Blue 400", color: "bg-brand-blue-400" },
                { name: "Blue 500", color: "bg-brand-blue-500" },
                { name: "Blue 600", color: "bg-brand-blue-600" },
                { name: "Green 400", color: "bg-brand-green-400" },
                { name: "Green 500", color: "bg-brand-green-500" },
                { name: "Green 600", color: "bg-brand-green-600" },
              ].map((item) => (
                <div key={item.name} className="space-y-2">
                  <div
                    className={`${item.color} h-20 rounded-lg shadow-sm border border-neutral-300`}
                  />
                  <p className="text-caption-md text-neutral-700">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div>
            <h3 className="text-heading-5 mb-4">Accent Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Red 100", color: "bg-accent-red-100" },
                { name: "Red 300", color: "bg-accent-red-300" },
                { name: "Red 500", color: "bg-accent-red-500" },
                { name: "Red 800", color: "bg-accent-red-800" },
                { name: "Green 100", color: "bg-accent-green-100" },
                { name: "Green 400", color: "bg-accent-green-400" },
                { name: "Green 500", color: "bg-accent-green-500" },
                { name: "Green 600", color: "bg-accent-green-600" },
                { name: "Blue 100", color: "bg-accent-blue-100" },
                { name: "Blue 400", color: "bg-accent-blue-400" },
                { name: "Blue 500", color: "bg-accent-blue-500" },
                { name: "Blue 600", color: "bg-accent-blue-600" },
              ].map((item) => (
                <div key={item.name} className="space-y-2">
                  <div
                    className={`${item.color} h-20 rounded-lg shadow-sm border border-neutral-300`}
                  />
                  <p className="text-caption-md text-neutral-700">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div>
            <h3 className="text-heading-5 mb-4">Neutral Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {[
                { name: "50", color: "bg-neutral-50" },
                { name: "100", color: "bg-neutral-100" },
                { name: "200", color: "bg-neutral-200" },
                { name: "300", color: "bg-neutral-300" },
                { name: "400", color: "bg-neutral-400" },
                { name: "500", color: "bg-neutral-500" },
                { name: "600", color: "bg-neutral-600" },
                { name: "700", color: "bg-neutral-700" },
                { name: "800", color: "bg-neutral-800" },
                { name: "900", color: "bg-neutral-900" },
              ].map((item) => (
                <div key={item.name} className="space-y-2">
                  <div
                    className={`${item.color} h-20 rounded-lg shadow-sm border border-neutral-300`}
                  />
                  <p className="text-caption-md text-neutral-700">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gradients */}
          <div>
            <h3 className="text-heading-5 mb-4">Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="gradient-bg h-32 rounded-lg shadow-sm" />
                <p className="text-caption-md text-neutral-700">Brand Gradient</p>
              </div>
              <div className="space-y-2">
                <div className="gradient-border h-32 rounded-lg shadow-sm" />
                <p className="text-caption-md text-neutral-700">Border Shine</p>
              </div>
            </div>
          </div>
        </section>

        {/* === TYPOGRAPHY SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Typographie</h2>
            <p className="text-body-md text-neutral-600">
              Tous les styles de texte avec les fonts Thunder et Inter
            </p>
          </div>

          {/* Display */}
          <div className="space-y-4">
            <h3 className="text-heading-5">Display</h3>
            <div className="space-y-3 p-6 bg-neutral-50 rounded-lg">
              <p className="text-display-2xl">Display 2XL - 72px</p>
              <p className="text-display-xl">Display XL - 60px</p>
              <p className="text-display-lg">Display LG - 52px</p>
            </div>
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h3 className="text-heading-5">Headings</h3>
            <div className="space-y-3 p-6 bg-neutral-50 rounded-lg">
              <h1 className="text-heading-1">Heading 1 - 48px</h1>
              <h2 className="text-heading-2">Heading 2 - 32px</h2>
              <h3 className="text-heading-3">Heading 3 - 28px</h3>
              <h4 className="text-heading-4">Heading 4 - 24px</h4>
              <h5 className="text-heading-5">Heading 5 - 20px</h5>
              <h6 className="text-heading-6">Heading 6 - 18px</h6>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <h3 className="text-heading-5">Body Text</h3>
            <div className="space-y-3 p-6 bg-neutral-50 rounded-lg">
              <p className="text-body-lg">Body Large - 18px</p>
              <p className="text-body-md">Body Medium - 16px</p>
              <p className="text-body-sm">Body Small - 14px</p>
              <p className="text-body-xs">Body Extra Small - 12px</p>
            </div>
          </div>

          {/* Labels & Buttons */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-heading-5">Labels</h3>
              <div className="space-y-3 p-6 bg-neutral-50 rounded-lg">
                <p className="text-label-lg">Label Large - 16px</p>
                <p className="text-label-md">Label Medium - 14px</p>
                <p className="text-label-sm">Label Small - 12px</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-heading-5">Button Text</h3>
              <div className="space-y-3 p-6 bg-neutral-50 rounded-lg">
                <p className="text-button-lg">Button Large - 18px</p>
                <p className="text-button-md">Button Medium - 16px</p>
                <p className="text-button-sm">Button Small - 14px</p>
              </div>
            </div>
          </div>

          {/* Captions */}
          <div className="space-y-4">
            <h3 className="text-heading-5">Captions</h3>
            <div className="space-y-3 p-6 bg-neutral-50 rounded-lg">
              <p className="text-caption-md">Caption Medium - 13px</p>
              <p className="text-caption-sm">Caption Small - 12px</p>
            </div>
          </div>
        </section>

        {/* === BUTTONS SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Boutons</h2>
            <p className="text-body-md text-neutral-600">
              Différentes variantes et tailles de boutons
            </p>
          </div>

          {/* Button Variants */}
          <div className="space-y-6">
            <div>
              <h3 className="text-heading-5 mb-4">Variantes</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">Primary Button</button>
                <button className="btn-secondary">Secondary Button</button>
                <button className="btn-ghost">Ghost Button</button>
                <button className="btn-primary" disabled>
                  Disabled Button
                </button>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h3 className="text-heading-5 mb-4">Tailles</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="btn-primary btn-lg">Large Button</button>
                <button className="btn-primary">Medium Button</button>
                <button className="btn-primary btn-sm">Small Button</button>
              </div>
            </div>

            {/* Buttons with Icons */}
            <div>
              <h3 className="text-heading-5 mb-4">Avec Icônes</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Ajouter
                </button>
                <button className="btn-secondary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Modifier
                </button>
                <button className="btn-ghost">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* === INPUTS SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Formulaires</h2>
            <p className="text-body-md text-neutral-600">
              Champs de formulaire avec différents états
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Default Input */}
            <div className="space-y-2">
              <label className="text-label-md block">Input par défaut</label>
              <input
                type="text"
                className="input"
                placeholder="Entrez votre texte..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <p className="text-caption-sm text-neutral-500">
                Texte d&apos;aide
              </p>
            </div>

            {/* Error Input */}
            <div className="space-y-2">
              <label className="text-label-md block">Input avec erreur</label>
              <input
                type="email"
                className="input input-error"
                placeholder="email@exemple.com"
              />
              <p className="text-caption-sm text-accent-red-500">
                Email invalide
              </p>
            </div>

            {/* Success Input */}
            <div className="space-y-2">
              <label className="text-label-md block">Input validé</label>
              <input
                type="text"
                className="input input-success"
                placeholder="Validé"
                value="John Doe"
                readOnly
              />
              <p className="text-caption-sm text-accent-green-500">
                Validation réussie
              </p>
            </div>

            {/* Disabled Input */}
            <div className="space-y-2">
              <label className="text-label-md block text-neutral-500">
                Input désactivé
              </label>
              <input
                type="text"
                className="input opacity-50 cursor-not-allowed"
                placeholder="Désactivé"
                disabled
              />
              <p className="text-caption-sm text-neutral-500">
                Ce champ est désactivé
              </p>
            </div>

            {/* Textarea */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-label-md block">Zone de texte</label>
              <textarea
                className="input min-h-[120px] resize-y"
                placeholder="Entrez votre message..."
              />
              <p className="text-caption-sm text-neutral-500">
                Maximum 500 caractères
              </p>
            </div>
          </div>
        </section>

        {/* === CARDS SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Cartes</h2>
            <p className="text-body-md text-neutral-600">
              Différents styles de cartes avec contenu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Default Card */}
            <div className="card space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange-500 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-heading-5">Carte Standard</h3>
              <p className="text-body-sm text-neutral-600">
                Une carte simple avec un style par défaut. Parfaite pour
                présenter du contenu de manière claire et organisée.
              </p>
              <button className="btn-primary btn-sm w-full">
                En savoir plus
              </button>
            </div>

            {/* Highlight Card */}
            <div className="card-highlight space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-purple-500 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-heading-5">Carte Mise en Avant</h3>
              <p className="text-body-sm text-neutral-600">
                Une carte avec un fond légèrement différent pour mettre en
                évidence un élément important.
              </p>
              <button className="btn-secondary btn-sm w-full">
                Découvrir
              </button>
            </div>

            {/* Card with gradient */}
            <div className="card space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-bg opacity-10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-green-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-heading-5 mt-4">Carte Spéciale</h3>
                <p className="text-body-sm text-neutral-600">
                  Une carte avec un effet de gradient en arrière-plan pour
                  attirer l&apos;attention.
                </p>
                <button className="btn-ghost btn-sm w-full mt-4">
                  Voir détails
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* === TAGS SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Tags</h2>
            <p className="text-body-md text-neutral-600">
              Étiquettes pour catégoriser et organiser le contenu
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-heading-6 mb-3">Tags par défaut</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tag">Design</span>
                <span className="tag">Développement</span>
                <span className="tag">Marketing</span>
                <span className="tag">UX/UI</span>
              </div>
            </div>

            <div>
              <h3 className="text-heading-6 mb-3">Tags colorés</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tag-primary">Important</span>
                <span className="tag-success">Validé</span>
                <span className="tag-error">Erreur</span>
                <span className="tag-warning">Attention</span>
              </div>
            </div>

            <div>
              <h3 className="text-heading-6 mb-3">Tags avec icônes</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tag">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Vérifié
                </span>
                <span className="tag-primary">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  Nouveau
                </span>
                <span className="tag-success">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Rapide
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* === STATUS MESSAGES SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Messages de Statut</h2>
            <p className="text-body-md text-neutral-600">
              Messages pour informer l&apos;utilisateur des différents états
            </p>
          </div>

          <div className="space-y-4">
            {/* Success Message */}
            <div className="p-4 bg-accent-green-100 border-2 border-accent-green-500 rounded-lg flex items-start gap-3">
              <svg
                className="w-6 h-6 text-accent-green-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="text-label-lg text-accent-green-600 mb-1">
                  Opération réussie
                </h4>
                <p className="text-body-sm text-accent-green-600">
                  Vos modifications ont été enregistrées avec succès.
                </p>
              </div>
        </div>

            {/* Error Message */}
            <div className="p-4 bg-accent-red-100 border-2 border-accent-red-500 rounded-lg flex items-start gap-3">
              <svg
                className="w-6 h-6 text-accent-red-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="text-label-lg text-accent-red-500 mb-1">
                  Une erreur est survenue
                </h4>
                <p className="text-body-sm text-accent-red-500">
                  Impossible de traiter votre demande. Veuillez réessayer.
                </p>
              </div>
            </div>

            {/* Warning Message */}
            <div className="p-4 bg-accent-blue-100 border-2 border-accent-blue-500 rounded-lg flex items-start gap-3">
              <svg
                className="w-6 h-6 text-accent-blue-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h4 className="text-label-lg text-accent-blue-500 mb-1">
                  Attention requise
                </h4>
                <p className="text-body-sm text-accent-blue-500">
                  Cette action nécessite une confirmation de votre part.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === SPACING & SIZING SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Espacements & Tailles</h2>
            <p className="text-body-md text-neutral-600">
              Système d&apos;espacement et de dimensionnement cohérent
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Spacing */}
            <div>
              <h3 className="text-heading-5 mb-4">Espacements</h3>
              <div className="space-y-3 bg-neutral-50 p-6 rounded-lg">
                {[
                  { name: "0px", size: "0" },
                  { name: "2px", size: "2" },
                  { name: "4px", size: "4" },
                  { name: "8px", size: "8" },
                  { name: "12px", size: "12" },
                  { name: "16px", size: "16" },
                  { name: "20px", size: "20" },
                  { name: "24px", size: "24" },
                  { name: "32px", size: "32" },
                  { name: "40px", size: "40" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <span className="text-label-sm w-16">{item.name}</span>
                    <div
                      className="h-8 bg-brand-orange-500 rounded"
                      style={{ width: item.name }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sizing */}
            <div>
              <h3 className="text-heading-5 mb-4">Tailles</h3>
              <div className="space-y-4 bg-neutral-50 p-6 rounded-lg">
                {[
                  { name: "XS", size: "16px" },
                  { name: "SM", size: "24px" },
                  { name: "MD", size: "32px" },
                  { name: "LG", size: "40px" },
                  { name: "XL", size: "64px" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <span className="text-label-sm w-12">{item.name}</span>
                    <div
                      className="bg-brand-blue-500 rounded-lg"
                      style={{ width: item.size, height: item.size }}
                    />
                    <span className="text-caption-sm text-neutral-600">
                      {item.size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === BORDER RADIUS SECTION === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Arrondis</h2>
            <p className="text-body-md text-neutral-600">
              Différentes valeurs de border-radius
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "None", radius: "0px" },
              { name: "Small", radius: "4px" },
              { name: "Medium", radius: "8px" },
              { name: "Large", radius: "16px" },
              { name: "Full", radius: "9999px" },
            ].map((item) => (
              <div key={item.name} className="space-y-3">
                <div
                  className="h-24 bg-brand-purple-500"
                  style={{ borderRadius: item.radius }}
                />
                <div className="text-center">
                  <p className="text-label-md">{item.name}</p>
                  <p className="text-caption-sm text-neutral-600">
                    {item.radius}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === ANIMATIONS SECTION === */}
        <section className="space-y-8">
          <div>
            <h2 className="text-heading-2 mb-2">Animations</h2>
            <p className="text-body-md text-neutral-600">
              Animations d&apos;entrée disponibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card animate-fade-in-up space-y-2">
              <h4 className="text-heading-6">Fade In Up</h4>
              <p className="text-body-sm text-neutral-600">
                Animation depuis le bas
              </p>
            </div>
            <div className="card animate-fade-in-down space-y-2">
              <h4 className="text-heading-6">Fade In Down</h4>
              <p className="text-body-sm text-neutral-600">
                Animation depuis le haut
              </p>
            </div>
            <div className="card animate-fade-in-left space-y-2">
              <h4 className="text-heading-6">Fade In Left</h4>
              <p className="text-body-sm text-neutral-600">
                Animation depuis la gauche
              </p>
            </div>
            <div className="card animate-fade-in-right space-y-2">
              <h4 className="text-heading-6">Fade In Right</h4>
              <p className="text-body-sm text-neutral-600">
                Animation depuis la droite
              </p>
            </div>
          </div>
        </section>

        {/* === INTERACTIVE COMPONENTS === */}
        <section className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-heading-2 mb-2">Composants Interactifs</h2>
            <p className="text-body-md text-neutral-600">
              Exemples de composants avec interactions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Login Form Example */}
            <div className="card space-y-6">
              <div>
                <h3 className="text-heading-4 mb-2">Formulaire de Connexion</h3>
                <p className="text-body-sm text-neutral-600">
                  Exemple complet d&apos;un formulaire
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-label-md">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-label-md">Mot de passe</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-body-sm cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Se souvenir de moi</span>
                  </label>
                  <a href="#" className="text-body-sm text-brand-orange-700">
                    Mot de passe oublié ?
          </a>
        </div>

                <button className="btn-primary w-full">Se connecter</button>
                <button className="btn-secondary w-full">
                  Créer un compte
                </button>
              </div>
            </div>

            {/* Pricing Card Example */}
            <div className="card-highlight space-y-6">
              <div>
                <span className="tag-primary mb-3 inline-block">
                  Le plus populaire
                </span>
                <h3 className="text-heading-3 mb-2">Plan Premium</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-display-lg gradient-text">49€</span>
                  <span className="text-body-md text-neutral-600">/mois</span>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Accès illimité",
                  "Support prioritaire",
                  "Analytics avancés",
                  "API complète",
                  "Export des données",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-brand-orange-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-body-md">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-primary w-full btn-lg">
                Commencer maintenant
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-neutral-300 animate-fade-in-up">
          <p className="text-body-md text-neutral-600 mb-2">
            Design System exporté depuis Figma
          </p>
          <p className="text-caption-md text-neutral-500">
            Tous les styles et composants sont basés sur les variables du
            design system
          </p>
        </footer>
      </div>
    </div>
  );
}
