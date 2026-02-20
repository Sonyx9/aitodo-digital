# AI Školení - Landing Page

Moderní one-page landing page pro firmu poskytující AI školení.

## Instalace

```bash
npm install
```

## Vývoj

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Struktura projektu

- `src/pages/index.astro` - Hlavní landing page
- `src/components/` - Komponenty (Header, Footer, atd.)
- `src/layouts/` - Layout komponenty
- `public/` - Statické soubory (obrázky, favicon)

## Kde měnit texty

Texty jsou v `src/pages/index.astro` a v jednotlivých komponentách. Hledejte komentáře `<!-- TODO: Změnit text -->` pro místa, která je potřeba upravit.

## Kde měnit loga

Loga partnerů jsou v `src/pages/index.astro` v sekci "Trusted by". Nahraďte placeholder texty skutečnými logy.

## GitHub Pages

Po pushi na `main` workflow nasadí build do větve `gh-pages`. V repozitáři **Settings → Pages** zvol **Source: Deploy from a branch**, branch **gh-pages**, folder **/ (root)**. Web bude na `https://sonyx9.github.io/aitodo-digital/`.
