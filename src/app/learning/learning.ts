export interface Learning {
  href: string;
  thumbnail: string;
  subject: string;
  lesson: string;
}

export const LIST_OF_LEARNINGS: Learning[] = [
  {
    href: "/comprende-rxjs",
    thumbnail: "./presentacion/assets/learning/frontendrxjs.png",
    subject: "Frontend",
    lesson: "RxJs",
  },
  {
    href: "/redes/dns",
    thumbnail: "./presentacion/assets/learning/redesdns.png",
    subject: "Redes",
    lesson: "DNS",
  },
  {
    href: "/bases-de-datos/sql",
    thumbnail: "./presentacion/assets/learning/basesdedatossql.png",
    subject: "Bases de datos",
    lesson: "SQL",
  },
  {
    href: "/comandos",
    thumbnail: "./presentacion/assets/learning/sistemasoperativoscomandos.png",
    subject: "Sistemas operativos",
    lesson: "Comandos",
  },
]