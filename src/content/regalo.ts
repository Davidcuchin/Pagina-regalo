// ─────────────────────────────────────────────────────────────
// ✏️ EDITA AQUÍ — todo el contenido del regalo en un solo lugar.
// Cambia los nombres, las cartitas o la carta final a tu gusto.
// ─────────────────────────────────────────────────────────────

export const nombres = {
  ella: "Ari",
  el: "David",
};

export const textos = {
  tituloPortada: "Ari, te llegó correo",
  botonPortada: "Abrir mi buzón",
  botonFinal: "Una última cosita",
  subtituloSobres: "Siete cartitas hechas para ti. Ábrelas en el orden que quieras.",
  contador: (leidas: number, total: number) =>
    leidas === total
      ? "¡Las abriste todas, mi amor! 💌"
      : `Has leído ${leidas} de ${total} cartitas`,
};

// Las siete cartitas: dos o tres frases cada una.
export const cartitas: string[] = [
  "Tenerte en mi vida hace que todo se sienta más bonito. Contigo hasta un día gris tiene algo de luz, y no me canso de agradecer que hayas llegado tú.",

  "Cada vez que me pasa algo bueno, o veo una tontera que me da risa, pienso: «tengo que contárselo a Ari». Eres la persona con la que más ganas tengo de compartir todo.",

  "Me encantan los momentos simples contigo: una conversación larga, una siesta junta, una caminata sin rumbo. Contigo, lo cotidiano se vuelve mi lugar favorito.",

  "Admiro muchísimo lo que eres: tu forma de querer, tu risa, tu manera de ver las cosas. Me inspiras a ser mejor, y me siento afortunado de estar a tu lado.",

  "Hay días en que lo único que quiero es abrazarte y quedarme ahí un rato. Un abrazo tuyo arregla cosas que ni yo sé explicar.",

  "Me ilusiona todo lo que nos queda por hacer: los planes que ya tenemos y los que todavía no se nos han ocurrido. Contigo, el futuro se ve precioso.",

  "Siete meses compartidos contigo, y cada uno me ha hecho más feliz que el anterior. Gracias por estar aquí, por elegirme y por dejarme amarte.",
];

// La carta final del aniversario.
export const cartaFinal = `Ari, feliz siete meses, mi amor.

Me encanta que, cuando me pasa algo bueno o veo una tontera que me da risa, una de las primeras cosas que pienso es «tengo que contárselo a Ari». Hasta en los días más normales encuentro algún momento en que me dan ganas de estar contigo.

Te hice este regalito porque quería que tuvieras un lugarcito al que volver cuando quieras acordarte de cuánto te amo. Gracias por estos siete meses, amor. Me hace muy feliz estar contigo y me ilusiona todo lo que todavía nos queda por vivir juntos.

Te amo mucho, Ari.`;

export const firmaFinal = "David ♡";
