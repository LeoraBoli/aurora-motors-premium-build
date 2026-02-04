import lamborghiniImg from '@/assets/car-lamborghini.jpg';
import ferrariImg from '@/assets/car-ferrari.jpg';
import porscheImg from '@/assets/car-porsche.jpg';
import bmwImg from '@/assets/car-bmw-m8.jpg';
import mercedesImg from '@/assets/car-mercedes-amg.jpg';
import audiImg from '@/assets/car-audi-rs.jpg';
import mclarenImg from '@/assets/car-mclaren.jpg';
import bentleyImg from '@/assets/car-bentley.jpg';
import rollsRoyceImg from '@/assets/car-rolls-royce.jpg';
import porscheVideo from '@/assets/porsche-video.mp4';
import huracanVideo from '@/assets/huracan-video.mp4';
import ferrariVideo from '@/assets/ferrari-video.mp4';
import rollsRoyceVideo from '@/assets/rolls-royce-video.mp4';
import bentleyVideo from '@/assets/bentley-video.mp4';
import audiEtronVideo from '@/assets/audi-etron-video.mp4';
import amgGtVideo from '@/assets/amg-gt-video.mp4';
import bmwM8Video from '@/assets/bmw-m8-video.mp4';

export interface CarSpec {
  label: string;
  value: string;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  price: string;
  priceValue: number;
  year: number;
  spec1: string;
  spec2: string;
  image: string;
  gallery: string[];
  video?: string;
  badge?: string;
  description: string;
  specs: CarSpec[];
  features: string[];
}

export const cars: Car[] = [
  {
    id: 'lamborghini-huracan-evo',
    name: 'Huracán EVO',
    brand: 'Lamborghini',
    price: 'R$ 3.490.000',
    priceValue: 3490000,
    year: 2024,
    spec1: '0-100 km/h em 2.9s',
    spec2: '640 cv',
    image: lamborghiniImg,
    gallery: [lamborghiniImg, lamborghiniImg, lamborghiniImg, lamborghiniImg],
    video: huracanVideo,
    badge: 'Destaque',
    description: 'O Lamborghini Huracán EVO representa a evolução perfeita de um superesportivo já icônico. Com motor V10 de 5.2 litros naturalmente aspirado, entrega 640 cv de potência pura e um som que emociona a cada aceleração.',
    specs: [
      { label: 'Motor', value: 'V10 5.2L Aspirado' },
      { label: 'Potência', value: '640 cv @ 8.000 rpm' },
      { label: 'Torque', value: '600 Nm @ 6.500 rpm' },
      { label: '0-100 km/h', value: '2.9 segundos' },
      { label: 'Velocidade Máxima', value: '325 km/h' },
      { label: 'Transmissão', value: '7 marchas DCT' },
      { label: 'Tração', value: 'Integral AWD' },
      { label: 'Peso', value: '1.422 kg' },
    ],
    features: [
      'Sistema LDVI (Lamborghini Dinamica Veicolo Integrata)',
      'Display digital touchscreen 8.4"',
      'Sistema de som premium',
      'Bancos esportivos em Alcantara',
      'Rodas forjadas 20"',
      'Freios carbono-cerâmicos',
      'Suspensão magneto-reológica',
      'Modo de condução: Strada, Sport, Corsa',
    ],
  },
  {
    id: 'ferrari-f8-tributo',
    name: 'F8 Tributo',
    brand: 'Ferrari',
    price: 'R$ 4.200.000',
    priceValue: 4200000,
    year: 2024,
    spec1: '0-100 km/h em 2.9s',
    spec2: '710 cv',
    image: ferrariImg,
    gallery: [ferrariImg, ferrariImg, ferrariImg, ferrariImg],
    video: ferrariVideo,
    badge: 'Exclusivo',
    description: 'O Ferrari F8 Tributo é uma homenagem ao motor V8 mais poderoso da história da marca. Com 710 cv extraídos de um propulsor biturbo de 3.9 litros, este superesportivo combina tecnologia de ponta derivada da Fórmula 1 com o design italiano mais refinado.',
    specs: [
      { label: 'Motor', value: 'V8 3.9L Biturbo' },
      { label: 'Potência', value: '710 cv @ 8.000 rpm' },
      { label: 'Torque', value: '770 Nm @ 3.250 rpm' },
      { label: '0-100 km/h', value: '2.9 segundos' },
      { label: 'Velocidade Máxima', value: '340 km/h' },
      { label: 'Transmissão', value: '7 marchas F1 DCT' },
      { label: 'Tração', value: 'Traseira RWD' },
      { label: 'Peso', value: '1.330 kg' },
    ],
    features: [
      'Side Slip Control 6.1',
      'Ferrari Dynamic Enhancer',
      'Display curvo 16"',
      'Apple CarPlay',
      'Bancos racing em carbono',
      'Rodas forjadas em diamante',
      'Aerodinâmica ativa S-Duct',
      'Manettino com 5 modos',
    ],
  },
  {
    id: 'porsche-911-turbo-s',
    name: '911 Turbo S',
    brand: 'Porsche',
    price: 'R$ 1.850.000',
    priceValue: 1850000,
    year: 2024,
    spec1: '0-100 km/h em 2.7s',
    spec2: '650 cv',
    image: porscheImg,
    gallery: [porscheImg, porscheImg, porscheImg, porscheImg],
    video: porscheVideo,
    description: 'O Porsche 911 Turbo S é a referência em superesportivos para uso diário. Seu motor boxer biturbo de 3.8 litros entrega 650 cv com refinamento inigualável.',
    specs: [
      { label: 'Motor', value: 'Boxer 6 3.8L Biturbo' },
      { label: 'Potência', value: '650 cv @ 6.750 rpm' },
      { label: 'Torque', value: '800 Nm @ 2.500 rpm' },
      { label: '0-100 km/h', value: '2.7 segundos' },
      { label: 'Velocidade Máxima', value: '330 km/h' },
      { label: 'Transmissão', value: '8 marchas PDK' },
      { label: 'Tração', value: 'Integral PTM' },
      { label: 'Peso', value: '1.640 kg' },
    ],
    features: [
      'Porsche Active Suspension Management',
      'Porsche Torque Vectoring Plus',
      'PCM 6.0 com display 10.9"',
      'Bose Surround Sound System',
      'Sport Chrono Package',
      'Rodas 20"/21" exclusivas Turbo S',
      'PCCB (Freios carbono-cerâmicos)',
      'Rear-axle steering',
    ],
  },
  {
    id: 'mclaren-720s',
    name: '720S Spider',
    brand: 'McLaren',
    price: 'R$ 3.890.000',
    priceValue: 3890000,
    year: 2024,
    spec1: '0-100 km/h em 2.9s',
    spec2: '720 cv',
    image: mclarenImg,
    gallery: [mclarenImg, mclarenImg, mclarenImg, mclarenImg],
    badge: 'Novo',
    description: 'O McLaren 720S Spider combina a emoção de um superesportivo com a liberdade de um conversível. O teto retrátil em apenas 11 segundos revela uma experiência de condução incomparável.',
    specs: [
      { label: 'Motor', value: 'V8 4.0L Biturbo' },
      { label: 'Potência', value: '720 cv @ 7.500 rpm' },
      { label: 'Torque', value: '770 Nm @ 5.500 rpm' },
      { label: '0-100 km/h', value: '2.9 segundos' },
      { label: 'Velocidade Máxima', value: '341 km/h' },
      { label: 'Transmissão', value: '7 marchas SSG' },
      { label: 'Tração', value: 'Traseira RWD' },
      { label: 'Peso', value: '1.332 kg' },
    ],
    features: [
      'Monocoque de fibra de carbono',
      'Teto retrátil em 11 segundos',
      'Active Dynamics Panel',
      'McLaren Track Telemetry',
      'Freios carbono-cerâmicos',
      'Suspensão Proactive Chassis Control II',
      'Display vertical 8"',
      'Bancos em Alcantara e couro',
    ],
  },
  {
    id: 'bmw-m8-competition',
    name: 'M8 Competition',
    brand: 'BMW M',
    price: 'R$ 1.290.000',
    priceValue: 1290000,
    year: 2024,
    spec1: '0-100 km/h em 3.2s',
    spec2: '625 cv',
    image: bmwImg,
    gallery: [bmwImg, bmwImg, bmwImg, bmwImg],
    video: bmwM8Video,
    description: 'O BMW M8 Competition é a expressão máxima do luxo esportivo alemão. Com motor V8 biturbo de 625 cv, oferece performance brutal com o conforto de um gran turismo.',
    specs: [
      { label: 'Motor', value: 'V8 4.4L Biturbo' },
      { label: 'Potência', value: '625 cv @ 6.000 rpm' },
      { label: 'Torque', value: '750 Nm @ 1.800 rpm' },
      { label: '0-100 km/h', value: '3.2 segundos' },
      { label: 'Velocidade Máxima', value: '305 km/h' },
      { label: 'Transmissão', value: '8 marchas Steptronic' },
      { label: 'Tração', value: 'Integral M xDrive' },
      { label: 'Peso', value: '1.885 kg' },
    ],
    features: [
      'M xDrive com modos de tração',
      'M Compound Brakes',
      'BMW Live Cockpit Professional',
      'Harman Kardon Surround',
      'Bancos M em couro Merino',
      'Head-up Display',
      'Driving Assistant Professional',
      'M Carbon exterior package',
    ],
  },
  {
    id: 'mercedes-amg-gt',
    name: 'AMG GT Black Series',
    brand: 'Mercedes-AMG',
    price: 'R$ 4.500.000',
    priceValue: 4500000,
    year: 2024,
    spec1: '0-100 km/h em 3.2s',
    spec2: '730 cv',
    image: mercedesImg,
    gallery: [mercedesImg, mercedesImg, mercedesImg, mercedesImg],
    video: amgGtVideo,
    badge: 'Limitado',
    description: 'O Mercedes-AMG GT Black Series é o modelo mais radical já produzido pela AMG. Com 730 cv e aerodinâmica derivada da GT3, é uma máquina de pista homologada para as ruas.',
    specs: [
      { label: 'Motor', value: 'V8 4.0L Biturbo' },
      { label: 'Potência', value: '730 cv @ 6.700 rpm' },
      { label: 'Torque', value: '800 Nm @ 2.000 rpm' },
      { label: '0-100 km/h', value: '3.2 segundos' },
      { label: 'Velocidade Máxima', value: '325 km/h' },
      { label: 'Transmissão', value: '7 marchas AMG DCT' },
      { label: 'Tração', value: 'Traseira RWD' },
      { label: 'Peso', value: '1.550 kg' },
    ],
    features: [
      'Aerofólio ajustável em carbono',
      'AMG TRACK PACE',
      'AMG Traction Control 9 níveis',
      'Suspensão de competição',
      'Roll cage opcional',
      'Freios carbono-cerâmicos',
      'Display duplo 12.3"',
      'Capô em carbono com extratores',
    ],
  },
  {
    id: 'audi-rs-etron-gt',
    name: 'RS e-tron GT',
    brand: 'Audi RS',
    price: 'R$ 1.190.000',
    priceValue: 1190000,
    year: 2024,
    spec1: '0-100 km/h em 3.3s',
    spec2: '646 cv',
    image: audiImg,
    gallery: [audiImg, audiImg, audiImg, audiImg],
    video: audiEtronVideo,
    badge: 'Elétrico',
    description: 'O Audi RS e-tron GT representa o futuro da performance elétrica. Com dois motores elétricos entregando 646 cv, oferece aceleração brutal com zero emissões e design revolucionário.',
    specs: [
      { label: 'Motor', value: 'Dual Electric Motors' },
      { label: 'Potência', value: '646 cv (boost)' },
      { label: 'Torque', value: '830 Nm instantâneo' },
      { label: '0-100 km/h', value: '3.3 segundos' },
      { label: 'Velocidade Máxima', value: '250 km/h' },
      { label: 'Transmissão', value: '2 marchas (traseiro)' },
      { label: 'Tração', value: 'Integral quattro' },
      { label: 'Autonomia', value: '472 km WLTP' },
    ],
    features: [
      'Arquitetura 800V',
      'Carregamento 270 kW DC',
      'Suspensão pneumática adaptativa',
      'Audi Virtual Cockpit Plus',
      'Bang & Olufsen 3D Sound',
      'Matrix LED headlights',
      'Recuperação de energia ajustável',
      'Teto panorâmico em carbono',
    ],
  },
  {
    id: 'bentley-continental-gt',
    name: 'Continental GT Speed',
    brand: 'Bentley',
    price: 'R$ 2.890.000',
    priceValue: 2890000,
    year: 2024,
    spec1: '0-100 km/h em 3.5s',
    spec2: '659 cv',
    image: bentleyImg,
    gallery: [bentleyImg, bentleyImg, bentleyImg, bentleyImg],
    video: bentleyVideo,
    description: 'O Bentley Continental GT Speed é a combinação perfeita de potência bruta e luxo artesanal britânico. Com motor W12 biturbo, é o grand tourer definitivo.',
    specs: [
      { label: 'Motor', value: 'W12 6.0L Biturbo' },
      { label: 'Potência', value: '659 cv @ 5.000 rpm' },
      { label: 'Torque', value: '900 Nm @ 1.350 rpm' },
      { label: '0-100 km/h', value: '3.5 segundos' },
      { label: 'Velocidade Máxima', value: '335 km/h' },
      { label: 'Transmissão', value: '8 marchas DCT' },
      { label: 'Tração', value: 'Integral AWD' },
      { label: 'Peso', value: '2.273 kg' },
    ],
    features: [
      'Interior em couro e madeira artesanal',
      'Naim for Bentley audio 2.200W',
      'Bentley Rotating Display',
      'Ar condicionado 4 zonas',
      'Bancos climatizados e massageadores',
      'Night Vision',
      'Freios carbono-cerâmicos 440mm',
      'Suspensão pneumática ativa',
    ],
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Ghost Black Badge',
    brand: 'Rolls-Royce',
    price: 'R$ 5.200.000',
    priceValue: 5200000,
    year: 2024,
    spec1: '0-100 km/h em 4.5s',
    spec2: '600 cv',
    image: rollsRoyceImg,
    gallery: [rollsRoyceImg, rollsRoyceImg, rollsRoyceImg, rollsRoyceImg],
    video: rollsRoyceVideo,
    badge: 'Ultra Luxo',
    description: 'O Rolls-Royce Ghost Black Badge é a expressão mais ousada do luxo supremo. Com acabamentos escurecidos e potência aumentada, representa a perfeição artesanal britânica.',
    specs: [
      { label: 'Motor', value: 'V12 6.75L Biturbo' },
      { label: 'Potência', value: '600 cv @ 5.000 rpm' },
      { label: 'Torque', value: '900 Nm @ 1.700 rpm' },
      { label: '0-100 km/h', value: '4.5 segundos' },
      { label: 'Velocidade Máxima', value: '250 km/h' },
      { label: 'Transmissão', value: '8 marchas ZF' },
      { label: 'Tração', value: 'Integral AWD' },
      { label: 'Peso', value: '2.490 kg' },
    ],
    features: [
      'Starlight Headliner',
      'Bespoke Audio 18 speakers',
      'Planar Suspension System',
      'Doors electrically operated',
      'Spirit of Ecstasy illuminated',
      'Lambswool floor mats',
      'Champagne cooler integrado',
      'Relógio Rolls-Royce exclusivo',
    ],
  },
];

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};
