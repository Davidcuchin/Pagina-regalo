# 💌 Siete cartas para Ari

Una página web de regalo, por nuestros siete meses juntos. Siete cartitas bajo un cielo estrellado, con una casita roja estilo Snoopy y una carta final que enciende siete estrellas.

Hecho con Next.js (App Router), TypeScript y CSS puro. Sin base de datos, sin cuentas, sin claves de API.

## Ejecutar el proyecto

```bash
npm install
npm run dev      # desarrollo → http://localhost:3000
npm run build    # compilación de producción
npm start        # servir la versión de producción
```

## Cómo cambiar los mensajes

Todo el contenido está en **un solo archivo**: [`src/content/regalo.ts`](src/content/regalo.ts).

- **Nombres**: `nombres.ella` y `nombres.el`
- **Textos de botones y títulos**: objeto `textos`
- **Las siete cartitas**: array `cartitas` (dos o tres frases cada una)
- **La carta final**: `cartaFinal` y `firmaFinal`

Edita ese archivo, guarda, y la página se actualiza sola en desarrollo.

## Cómo agregar una imagen de Snoopy

1. Copia tu imagen en `public/` con el nombre `snoopy.png` (también sirve `.jpg`, `.webp`, `.gif` o `.svg`).
2. ¡Listo! La imagen aparece automáticamente en la portada, junto a la casita.

Si no hay imagen, la escena se ve completa de todas formas: casita, buzón, luna y estrellas.

## Cómo funciona

- El progreso de los sobres abiertos se guarda en `localStorage`, así que Ari puede recargar la página y retomar donde iba.
- Las cartitas se pueden abrir en cualquier orden y volver a leer cuantas veces quiera.
- Al abrir las siete, aparece el botón «Una última cosita» con la carta de aniversario, y se encienden siete estrellas doradas en el cielo.
- Diseñada primero para celular, con animaciones suaves que se desactivan si el sistema tiene «movimiento reducido», y navegable con teclado (Tab, Enter, Escape).

---

Hecho con mucho amor, David ♡
