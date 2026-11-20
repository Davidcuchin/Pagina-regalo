import fs from "node:fs";
import path from "node:path";
import Regalo from "@/components/Regalo";

// Si agregas una imagen de Snoopy en public/ (ej. public/snoopy.png),
// se usa automáticamente en la portada.
function buscarSnoopy(): string | null {
  const dir = path.join(process.cwd(), "public");
  if (!fs.existsSync(dir)) return null;
  const candidato = fs
    .readdirSync(dir)
    .find((f) => /^snoopy\.(png|jpe?g|webp|gif|svg)$/i.test(f));
  return candidato ? `/${candidato}` : null;
}

export default function Page() {
  const snoopy = buscarSnoopy();
  return <Regalo snoopySrc={snoopy} />;
}
