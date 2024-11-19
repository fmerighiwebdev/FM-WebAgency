import alTeatro1 from "../assets/al-teatro.webp";
import trePini1 from "../assets/tre-pini.webp";
import esc1 from "../assets/esc.webp";

import websiteIcon from "../assets/website.svg";
import appIcon from "../assets/app.svg";
import cartIcon from "../assets/cart.svg";

export const projects = {
  "ristorante-al-teatro": {
    title: 'Ristorante Pizzeria "Al Teatro"',
    address: "Via Angelo Anelli, 40A",
    city: "Desenzano del Garda (BS)",
    serviceIcon: websiteIcon,
    serviceText: "Sito Web",
    shortDescription:
      "Ristorante Pizzeria Al Teatro, un locale che combina un'atmosfera accogliente con una cucina unica e ricercata.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Sed ac felis metus. Etiam non erat tortor. Phasellus bibendum fringilla libero, sit amet accumsan elit fringilla nec. Donec sit amet tincidunt libero. Cras malesuada nulla sed quam volutpat condimentum. Sed ac ligula sit amet mi scelerisque imperdiet. Praesent ut magna non nulla convallis venenatis.",
    images: [alTeatro1],
    url: "https://www.ristorantealteatro.it",
  },
  "ristorante-3-pini": {
    title: 'Ristorante Pizzeria "3 Pini"',
    address: "Via Stazione Mori, 14",
    city: "Rovereto (TN)",
    serviceIcon: websiteIcon,
    serviceText: "Sito Web",
    shortDescription:
      "Ristorante Pizzeria Tre Pini, un locale rustico ed elegante che offre spazi ampi e versatili per ogni tipo di occasione, dai pranzi di lavoro alle cerimonie più importanti.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    images: [trePini1],
    url: "https://www.ristorante3pini.it",
  },
  "esc-corporation": {
    title: "Entropy Search Conscious Corporation",
    address: "Via Don Lorenzo Guetti, 9",
    city: "Trento (TN)",
    serviceIcon: cartIcon,
    serviceText: "eCommerce",
    shortDescription:
      "ESC CORP, un brand di streetwear, fondato da tre giovani appassionati, che celebra l’autenticità e l’espressione individuale attraverso capi che combinano arte, musica e cultura urban.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    images: [esc1],
    url: "https://www.esccorp.it",
  }
};
