export interface Project {
  href: string;
  thumbnail: string;
  title: string;
}

export const LIST_OF_PROJECTS: Project[] = [
  {
    href: "https://lluvias.jaimeelingeniero.es",
    thumbnail: "./assets/my-projects/lluvias.png",
    title: "Lluvias"
  },
  {
    href: "https://puntuaciones.jaimeelingeniero.es",
    thumbnail: "./assets/my-projects/puntuaciones.png",
    title: "Puntuaciones"
  },
  {
    href: "/creador-iconos-svg",
    thumbnail: "./assets/my-projects/creadoriconossvg.png",
    title: "Creador de iconos svg"
  },
  {
    href: "/codigo-qr",
    thumbnail: "./assets/my-projects/codigoqr.png",
    title: "Generador de códigos qr"
  },
  {
    href: "/comparar-ficheros",
    thumbnail: "./assets/my-projects/compararficheros.png",
    title: "App para comparar ficheros"
  },
]