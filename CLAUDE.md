# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

«Siete cartas para Ari»: a mobile-first gift web page for the user's girlfriend, Ari, celebrating seven months together. Built with Next.js (App Router), TypeScript, and plain CSS. No database, accounts, or API keys — everything runs client-side, with envelope progress persisted in `localStorage`.

The full product brief (in Spanish) is the source of truth for this project:

### La experiencia

1. Portada: casita roja bajo un cielo estrellado, ambientación inspirada en Snoopy y Peanuts. Título «Ari, te llegó correo» y botón «Abrir mi buzón».
2. Al tocarlo, aparecen siete sobres numerados, abribles en cualquier orden. Cada sobre se despliega como una cartita breve. Mostrar cuántos ha leído y permitir reabrir cualquiera.
3. Temas de las cartitas: lo bonito de tenerla en mi vida, las ganas de contarle cómo me fue, los momentos simples, lo que admiro de ella, las ganas de abrazarla, la ilusión de seguir haciendo planes, y lo feliz que me hace compartir estos siete meses.
4. Al abrir las siete, aparece un botón «Una última cosita» que muestra la carta de aniversario y enciende siete estrellas en el cielo.

### Carta final (usar literalmente, firmada por David)

> Ari, feliz siete meses, mi amor.
>
> Me encanta que, cuando me pasa algo bueno o veo una tontera que me da risa, una de las primeras cosas que pienso es «tengo que contárselo a Ari». Hasta en los días más normales encuentro algún momento en que me dan ganas de estar contigo.
>
> Te hice este regalito porque quería que tuvieras un lugarcito al que volver cuando quieras acordarte de cuánto te amo. Gracias por estos siete meses, amor. Me hace muy feliz estar contigo y me ilusiona todo lo que todavía nos queda por vivir juntos.
>
> Te amo mucho, Ari.
>
> David ♡

### Estilo y personalización

- Casita roja, fondo azul noche, papel crema, detalles estilo viñeta de Snoopy. Si hay una imagen de Snoopy en `public/`, usarla en la portada; si no, la escena debe verse completa con casita, buzón y estrellas.
- Mobile-first: texto legible, sobres fáciles de tocar, animaciones suaves. Respetar `prefers-reduced-motion` y permitir navegación por teclado.
- Siete cartitas en español, dos o tres frases cada una. No inventar fechas, anécdotas, apodos ni recuerdos específicos.
- Nombres, siete cartitas y carta final viven en un solo archivo fácil de editar: `src/content/regalo.ts`.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server
npm run build      # production build (must compile cleanly)
npm start          # serve the production build
```

Delivery bar: the project must work out of the box with `npm install` + `npm run dev`, `npm run build` must succeed, and a brief README must explain how to edit messages, add an image, and run the project. The user handles cloud deployment.
