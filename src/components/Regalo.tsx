"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  nombres,
  textos,
  cartitas,
  cartaFinal,
  firmaFinal,
} from "@/content/regalo";

const STORAGE_KEY = "regalo-ari-sobres-v1";
const TOTAL = cartitas.length;

type Etapa = "portada" | "buzon";

function leerProgreso(): Set<number> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(
      Array.isArray(arr) ? arr.filter((i) => Number.isInteger(i) && i >= 0 && i < TOTAL) : []
    );
  } catch {
    return new Set();
  }
}

export default function Regalo({ snoopySrc }: { snoopySrc: string | null }) {
  const [etapa, setEtapa] = useState<Etapa>("portada");
  const [leidas, setLeidas] = useState<Set<number>>(new Set());
  const [abierta, setAbierta] = useState<number | null>(null);
  const [finalAbierto, setFinalAbierto] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);

  // Cargar progreso guardado
  useEffect(() => {
    setLeidas(leerProgreso());
  }, []);

  // Persistir progreso
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...leidas]));
    } catch {
      /* sin localStorage, el regalo sigue funcionando */
    }
  }, [leidas]);

  const todasLeidas = leidas.size === TOTAL;
  const estrellasEncendidas = todasLeidas;

  const abrirCartita = useCallback((i: number) => {
    setAbierta(i);
    setLeidas((prev) => new Set(prev).add(i));
  }, []);

  // Teclado: Escape cierra el sobre abierto
  useEffect(() => {
    if (abierta === null && !finalAbierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAbierta(null);
        setFinalAbierto(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierta, finalAbierto]);

  // Focus al abrir un sobre (accesibilidad)
  useEffect(() => {
    if (abierta !== null || finalAbierto) {
      cerrarRef.current?.focus();
    }
  }, [abierta, finalAbierto]);

  const estrellas = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => ({
        id: i,
        top: Math.random() * 70,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 2.5,
        delay: Math.random() * 4,
        dur: 2.5 + Math.random() * 3,
      })),
    []
  );

  return (
    <main className="escena" aria-label={`Regalo de ${nombres.el} para ${nombres.ella}`}>
      {/* Cielo estrellado */}
      <div className="cielo" aria-hidden="true">
        {estrellas.map((s) => (
          <span
            key={s.id}
            className={`estrella ${estrellasEncendidas && s.id < 7 ? "estrella-brillante" : ""}`}
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
            }}
          />
        ))}
        <div className="luna" />
      </div>

      {/* Suelo / colina */}
      <div className="suelo" aria-hidden="true" />

      {/* Casita roja estilo Peanuts */}
      <div className="casita" aria-hidden="true">
        <div className="chimenea" />
        <div className="techo" />
        <div className="cuerpo">
          <div className="ventana" />
          <div className="puerta" />
        </div>
        {/* Buzón */}
        <div className="buzon">
          <div className="buzon-caja">
            <div className="buzon-boca" />
            <div className="buzon-bandera" />
          </div>
          <div className="buzon-poste" />
        </div>
        {snoopySrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={snoopySrc} alt="" className="snoopy" />
        )}
      </div>

      {/* Contenido según etapa */}
      {etapa === "portada" ? (
        <section className="portada">
          <h1 className="titulo">{textos.tituloPortada}</h1>
          <p className="subtitulo">
            Siete meses juntos, siete cartitas para ti. Con todo mi amor, {nombres.el}.
          </p>
          <button className="boton boton-principal" onClick={() => setEtapa("buzon")}>
            {textos.botonPortada} 📬
          </button>
        </section>
      ) : (
        <section className="buzon-vista" aria-live="polite">
          <h2 className="titulo titulo-buzon">Tu buzón, {nombres.ella} 💌</h2>
          <p className="subtitulo">{textos.subtituloSobres}</p>

          <div className="sobres" role="list">
            {cartitas.map((_, i) => {
              const leida = leidas.has(i);
              return (
                <button
                  key={i}
                  role="listitem"
                  className={`sobre ${leida ? "sobre-leido" : ""}`}
                  onClick={() => abrirCartita(i)}
                  aria-label={`Cartita ${i + 1}${leida ? " (ya leída, puedes volver a abrirla)" : ""}`}
                >
                  <span className="sello">{i + 1}</span>
                  <span className="sobre-texto">
                    {leida ? "Volver a leer ♡" : "Ábreme"}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="contador">{textos.contador(leidas.size, TOTAL)}</p>

          {todasLeidas && (
            <button className="boton boton-final" onClick={() => setFinalAbierto(true)}>
              {textos.botonFinal} ✨
            </button>
          )}
        </section>
      )}

      {/* Sobre abierto: cartita */}
      {abierta !== null && (
        <div
          className="overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Cartita ${abierta + 1} de ${TOTAL}`}
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === overlayRef.current) setAbierta(null);
          }}
        >
          <div className="cartita">
            <p className="cartita-numero">Cartita {abierta + 1} de {TOTAL}</p>
            <p className="cartita-texto">{cartitas[abierta]}</p>
            <p className="cartita-firma">Con amor, {nombres.el} ♡</p>
            <button ref={cerrarRef} className="boton boton-cerrar" onClick={() => setAbierta(null)}>
              Cerrar cartita
            </button>
          </div>
        </div>
      )}

      {/* Carta final */}
      {finalAbierto && (
        <div
          className="overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Carta de aniversario"
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === overlayRef.current) setFinalAbierto(false);
          }}
        >
          <div className="cartita cartita-final">
            <p className="cartita-numero">Para ti, mi amor</p>
            {cartaFinal.split("\n\n").map((parrafo, i) => (
              <p key={i} className="cartita-texto">
                {parrafo}
              </p>
            ))}
            <p className="cartita-firma">{firmaFinal}</p>
            <button
              ref={cerrarRef}
              className="boton boton-cerrar"
              onClick={() => setFinalAbierto(false)}
            >
              Volver al cielo estrellado ✨
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
