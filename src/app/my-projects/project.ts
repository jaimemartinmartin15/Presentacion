export interface Project {
  href: string;
  thumbnail: string;
  title: string;
}

export const LIST_OF_PROJECTS: Project[] = [
  {
    href: 'https://lluvias.jaimeelingeniero.es',
    thumbnail: './assets/my-projects/lluvias.png',
    title: 'Lluvias',
  },
  {
    href: 'https://puntuaciones.jaimeelingeniero.es',
    thumbnail: './assets/my-projects/puntuaciones.png',
    title: 'Puntuaciones',
  },
  {
    href: 'https://listas.jaimeelingeniero.es',
    thumbnail: './assets/my-projects/listas.png',
    title: 'Listas',
  },
  {
    href: '/creador-iconos-svg',
    thumbnail: './assets/my-projects/creadoriconossvg.png',
    title: 'Editor SVG',
  },
  {
    href: '/codigo-qr',
    thumbnail: './assets/my-projects/codigoqr.png',
    title: 'Código QR',
  },
  {
    href: '/comparar-ficheros',
    thumbnail: './assets/my-projects/compararficheros.png',
    title: 'Comparar ficheros',
  },
  {
    href: '/como-resolver-el-cubo-de-rubik',
    thumbnail: './assets/my-projects/cuboderubik.png',
    title: 'Cubo de Rubik',
  },
];
