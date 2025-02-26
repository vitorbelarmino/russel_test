import {
  headset,
  logitech,
  mouse1,
  mouse2,
  placaV1,
  placaV2,
  placaV3,
  placaV4,
  placaV5,
  soundbox,
} from "../assets";

const promotions = [
  {
    name: "Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 com Lightspeed, 32000 DPI, Sensor Hero 2, com Bateria Recarregável, Preto",
    fullPrice: "R$ 1.629,48",
    promotionPrice: "R$ 814,90",
    brandLogo: logitech,
    image: mouse1,
  },
  {
    name: "Mouse Gamer Sem Fio Logitech G502 LIGHTSPEED RGB LIGHTSYNC, Ajuste Peso, 11 Botões, Recarregável, Compatível POWERPLAY",
    fullPrice: "R$ 705,87",
    promotionPrice: "R$ 499,99",
    brandLogo: logitech,
    image: mouse2,
  },
  {
    name: "Headset Gamer Sem Fio Logitech G Astro A30, Drivers 40mm, Bluetooth, PS e PC, Azul Escuro",
    fullPrice: "R$ 1.999,99",
    promotionPrice: "R$ 1.499,99",
    brandLogo: logitech,
    image: headset,
  },
  {
    name: "Caixa de som Logitech G560 com RGB LIGHTSYNC, Sistema 2.1 e Conexão Bluetooth, USB ou 3,5mm",
    fullPrice: "R$ 1.777,77",
    promotionPrice: "R$ 999,90",
    brandLogo: logitech,
    image: soundbox,
  },
];

const products = [
  {
    name: "Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6",
    fullPrice: "R$ 2.267,47",
    promotionPrice: "R$ 1.349,99",
    discountPix: 20,
    image: placaV1,
  },
  {
    name: "Placa de Vídeo RX 6750XT Gaming XFX Graphics Card AMD Radeon, 12GB GDDR6, Ray tracing, Fidelity FX",
    fullPrice: "R$ 4.229,99",
    promotionPrice: "R$ 2.999,99",
    discountPix: 20,
    image: placaV2,
  },
  {
    name: "Placa de Vídeo RTX 4060 AERO OC Gigabyte NVIDIA GeForce, 8GB GDDR6, RGB, DLSS, Ray Tracing, Branco",
    fullPrice: "R$ 3.599,99",
    promotionPrice: "R$ 2.499,99",
    discountPix: 20,
    image: placaV3,
  },
  {
    name: "Placa de Vídeo GTX 1650 D6 Ventus XS OCV3 MSI NVIDIA GeForce, 4GB GDDR6, G- Sync",
    fullPrice: "R$ 1.047,36",
    promotionPrice: "R$ 799,99",
    discountPix: 20,
    image: placaV4,
  },
  {
    name: "Placa de Vídeo Gigabyte Radeon RX 6600 EAGLE AMD, 8GB GDDR6, Preto",
    fullPrice: "R$ 2.477,94",
    promotionPrice: "R$ 1.399,99",
    discountPix: 20,
    image: placaV5,
  },
];

export { promotions, products };
