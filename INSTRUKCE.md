# Instrukce pro úpravu landing page

## Kde měnit texty

### Hlavní texty (src/pages/index.astro)

1. **Hero sekce** (řádky ~15-28):
   - Eyebrow text: "AI školení pro firmy"
   - H1 nadpis: "Školíme AI tak, aby zítra šetřila čas."
   - Podnadpis: "Praktické workshopy, bezpečné školení týmů..."

2. **Typografický claim** (řádky ~70-85):
   - H2 nadpis: "Praktické AI dovednosti pro reálnou práci."
   - Popisné texty pod nadpisem

3. **3 Pilíře** (řádky ~90-140):
   - Názvy pilířů a jejich popisy

4. **Gradient banner** (řádky ~145-170):
   - H2 nadpis: "Chcete, aby AI pomáhala vašemu týmu do 14 dnů?"

5. **Formulář sekce** (řádky ~200-250):
   - H2 nadpis: "Domluvme školení"
   - Úvodní text nad formulářem

### Header (src/components/Header.astro)

- Logo text: "NázevFirmy" (řádek ~10)
- Menu položky: Školení, Služby, Reference, Blog, Kontakt

### Footer (src/components/Footer.astro)

- Kontaktní údaje (řádky ~20-25):
  - Email: info@nazevfirmy.cz
  - Telefon: +420 XXX XXX XXX
  - Adresa: Praha, Česká republika
- Odkazy na sociální sítě (řádky ~30-45)

### SEO a meta tagy (src/layouts/BaseLayout.astro)

- Title a description v `src/pages/index.astro` (řádek 7)
- Site URL v `src/layouts/BaseLayout.astro` (řádek ~12): `const siteUrl = "https://example.com";`

## Kde měnit loga

### Logo firmy

1. **Header**: Nahraďte text "NázevFirmy" v `src/components/Header.astro` (řádek ~10) za `<img>` tag s logem
2. **Favicon**: Nahraďte `public/favicon.svg` skutečným faviconem

### Loga partnerů (Trusted by sekce)

V `src/pages/index.astro` v sekci "Trusted By" (řádky ~175-185) nahraďte placeholder divy za skutečné loga:

```astro
<div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
  <img src="/logos/partner1.svg" alt="Partner 1" class="h-12" />
  <img src="/logos/partner2.svg" alt="Partner 2" class="h-12" />
  <!-- atd. -->
</div>
```

## Kde měnit obrázky

### Hero vizuál

V `src/pages/index.astro` v Hero sekci (řádky ~48-60) nahraďte placeholder div za skutečný obrázek:

```astro
<img 
  src="/images/hero-image.jpg" 
  alt="AI školení" 
  class="w-full h-auto rounded-2xl"
  loading="eager"
/>
```

### Gradient banner vizuál

V `src/pages/index.astro` v Gradient banner sekci (řádky ~160-170) nahraďte placeholder za obrázek.

### OG Image

Nahraďte `public/og-image.jpg` obrázkem pro sociální sítě (doporučená velikost: 1200x630px).

## Formulář - připojení backendu

Formulář je momentálně placeholder. Pro připojení:

### Varianta 1: Formspree

1. Zaregistrujte se na https://formspree.io
2. V `src/pages/index.astro` přidejte do `<form>` tagu:
   ```astro
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Varianta 2: Vlastní endpoint

1. Vytvořte API endpoint (např. `/api/contact`)
2. Přidejte do formuláře:
   ```astro
   <form action="/api/contact" method="POST">
   ```

### Varianta 3: Webhook (Make.com, Zapier, atd.)

1. Získejte webhook URL
2. Přidejte do formuláře:
   ```astro
   <form action="YOUR_WEBHOOK_URL" method="POST">
   ```

**Poznámka**: Aktuálně je formulář bez `<form>` tagu - je potřeba ho přidat a upravit podle zvolené varianty.

## Barvy a design

Barvy jsou definované v `tailwind.config.mjs`:
- Primary barvy: `primary-50` až `primary-900`
- Hlavní barva: `primary-600` (#0ea5e9)

Pro změnu barev upravte hodnoty v `tailwind.config.mjs`.

## Fonty

Fonty jsou načítané z Google Fonts:
- Sans: Inter
- Serif italic: Playfair Display Italic

Pro změnu fontů upravte `src/layouts/BaseLayout.astro` (řádek ~30) a `tailwind.config.mjs`.

## Strukturovaná data (JSON-LD)

V `src/pages/index.astro` na konci souboru (řádky ~310+) je JSON-LD schema. Upravte:
- Název firmy
- URL
- Email
- Odkazy na sociální sítě

## Build a nasazení

```bash
# Instalace závislostí
npm install

# Vývojový server
npm run dev

# Build pro produkci
npm run build

# Preview produkční build
npm run preview
```

Build výstup je v `dist/` složce.
