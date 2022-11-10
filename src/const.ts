interface Palette {
  [key: string]: Color;
}

interface Color {
  hex: string;
  r: number;
  g: number;
  b: number;
  h?: number;
  s?: number;
  l?: number;
}

export const palette: Palette = {
  acero: { hex: '#aca1b3', r: 172, g: 161, b: 179 },
  ambar: { hex: '#f59149', r: 245, g: 145, b: 73 },
  arandano: { hex: '#66050d', r: 102, g: 5, b: 13 },
  arena: { hex: '#fff7cc', r: 255, g: 247, b: 204 },
  blanco: { hex: '#ffffff', r: 255, g: 255, b: 255 },
  bombon: { hex: '#fc7ea8', r: 252, g: 126, b: 168 },
  cajeta: { hex: '#b36b24', r: 179, g: 107, b: 36 },
  cedro: { hex: '#00806a', r: 0, g: 128, b: 106 },
  chapopote: { hex: '#241f26', r: 36, g: 31, b: 38 },
  chicle: { hex: '#f7577f', r: 247, g: 87, b: 127 },
  cielo: { hex: '#7aadf5', r: 122, g: 173, b: 245 },
  cobalto: { hex: '#1262b3', r: 18, g: 98, b: 179 },
  detergente: { hex: '#1f84cc', r: 31, g: 132, b: 204 },
  flan: { hex: '#fabb64', r: 250, g: 187, b: 100 },
  fresa: { hex: '#e62e4d', r: 230, g: 46, b: 77 },
  grafito: { hex: '#3d3640', r: 61, g: 54, b: 64 },
  hielo: { hex: '#7ae0f5', r: 122, g: 224, b: 245 },
  hierro: { hex: '#796c80', r: 121, g: 108, b: 128 },
  jade: { hex: '#0f474d', r: 15, g: 71, b: 77 },
  kawaii: { hex: '#e9abf5', r: 233, g: 171, b: 245 },
  ladrillo: { hex: '#cc5f29', r: 204, g: 95, b: 41 },
  lapis: { hex: '#000066', r: 0, g: 0, b: 102 },
  lavanda: { hex: '#6246eb', r: 98, g: 70, b: 235 },
  limon: { hex: '#089969', r: 8, g: 153, b: 105 },
  magia: { hex: '#a37af5', r: 163, g: 122, b: 245 },
  mantequilla: { hex: '#f7ff99', r: 247, g: 255, b: 153 },
  manzana: { hex: '#b31b34', r: 179, g: 27, b: 52 },
  marino: { hex: '#030f33', r: 3, g: 15, b: 51 },
  menta: { hex: '#1fcccc', r: 31, g: 204, b: 204 },
  mota: { hex: '#12b362', r: 18, g: 179, b: 98 },
  musgo: { hex: '#9eed77', r: 158, g: 237, b: 119 },
  nube: { hex: '#dfd9ff', r: 223, g: 217, b: 255 },
  obsidiana: { hex: '#0c0a0d', r: 12, g: 10, b: 13 },
  papel: { hex: '#eee6f2', r: 238, g: 230, b: 242 },
  pastel: { hex: '#fa96c8', r: 250, g: 150, b: 200 },
  pitahaya: { hex: '#b3128a', r: 179, g: 18, b: 138 },
  plata: { hex: '#d5ced9', r: 213, g: 206, b: 217 },
  princesa: { hex: '#d0bbfa', r: 208, g: 187, b: 250 },
  pulpo: { hex: '#660546', r: 102, g: 5, b: 70 },
  tortilla: { hex: '#ffea80', r: 255, g: 234, b: 128 },
  turquesa: { hex: '#088199', r: 8, g: 129, b: 153 },
  uva: { hex: '#380899', r: 56, g: 8, b: 153 },
  vinca: { hex: '#afbbfa', r: 175, g: 187, b: 250 },
  vino: { hex: '#400020', r: 64, g: 0, b: 32 },
  wasabi: { hex: '#d0fa7d', r: 208, g: 250, b: 125 },
};

/*
export const palette: Palette = {
  acero: {
    hex: '#aca1b3',
  },
  ambar: {
    hex: '#f59149',
  },
  arandano: {
    hex: '#66050d',
  },
  arena: {
    hex: '#fff7cc',
  },
  blanco: {
    hex: '#ffffff',
  },
  bombon: {
    hex: '#fc7ea8',
  },
  cajeta: {
    hex: '#b36b24',
  },
  cedro: {
    hex: '#00806a',
  },
  chapopote: {
    hex: '#241f26',
  },
  chicle: {
    hex: '#f7577f',
  },
  cielo: {
    hex: '#7aadf5',
  },
  cobalto: {
    hex: '#1262b3',
  },
  detergente: {
    hex: '#1f84cc',
  },
  flan: {
    hex: '#fabb64',
  },
  fresa: {
    hex: '#e62e4d',
  },
  grafito: {
    hex: '#3d3640',
  },
  hielo: {
    hex: '#7ae0f5',
  },
  hierro: {
    hex: '#796c80',
  },
  jade: {
    hex: '#0f474d',
  },
  kawaii: {
    hex: '#e9abf5',
  },
  ladrillo: {
    hex: '#cc5f29',
  },
  lapis: {
    hex: '#000066',
  },
  lavanda: {
    hex: '#6246eb',
  },
  limon: {
    hex: '#089969',
  },
  magia: {
    hex: '#a37af5',
  },
  mantequilla: {
    hex: '#f7ff99',
  },
  manzana: {
    hex: '#b31b34',
  },
  marino: {
    hex: '#030f33',
  },
  menta: {
    hex: '#1fcccc',
  },
  mota: {
    hex: '#12b362',
  },
  musgo: {
    hex: '#9eed77',
  },
  nube: {
    hex: '#dfd9ff',
  },
  obsidiana: {
    hex: '#0c0a0d',
  },
  papel: {
    hex: '#eee6f2',
  },
  pastel: {
    hex: '#fa96c8',
  },
  pitahaya: {
    hex: '#b3128a',
  },
  plata: {
    hex: '#d5ced9',
  },
  princesa: {
    hex: '#d0bbfa',
  },
  pulpo: {
    hex: '#660546',
  },
  tortilla: {
    hex: '#ffea80',
  },
  turquesa: {
    hex: '#088199',
  },
  uva: {
    hex: '#380899',
  },
  vinca: {
    hex: '#afbbfa',
  },
  vino: {
    hex: '#400020',
  },
  wasabi: {
    hex: '#d0fa7d',
  },
};
// */

export const paletteDisplay = [
  'cielo',
  'vinca',
  'nube',
  'kawaii',
  'pastel',
  'blanco',
  'blanco',
  'detergente',
  'blanco',
  'princesa',
  'blanco',
  'bombon',
  'pitahaya',
  'pulpo',
  'cobalto',
  'blanco',
  'magia',
  'blanco',
  'chicle',
  'blanco',
  'vino',
  'lapis',
  'uva',
  'lavanda',
  'blanco',
  'fresa',
  'manzana',
  'arandano',
  'marino',
  'blanco',
  'blanco',
  'blanco',
  'blanco',
  'blanco',
  'ladrillo',
  'jade',
  'cedro',
  'limon',
  'mota',
  'blanco',
  'cajeta',
  'ambar',
  'turquesa',
  'blanco',
  'blanco',
  'musgo',
  'blanco',
  'blanco',
  'flan',
  'menta',
  'hielo',
  'blanco',
  'wasabi',
  'mantequilla',
  'arena',
  'tortilla',
];

export const graysDisplay = [
  'obsidiana',
  'chapopote',
  'grafito',
  'hierro',
  'acero',
  'plata',
  'papel',
];