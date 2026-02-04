import lamborghiniImg from '@/assets/car-lamborghini.jpg';
import ferrariImg from '@/assets/car-ferrari.jpg';
import porscheImg from '@/assets/car-porsche.jpg';

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
    badge: 'Destaque',
    description: 'O Lamborghini Huracán EVO representa a evolução perfeita de um superesportivo já icônico. Com motor V10 de 5.2 litros naturalmente aspirado, entrega 640 cv de potência pura e um som que emociona a cada aceleração. A aerodinâmica avançada e o sistema de tração integral garantem performance e controle excepcionais.',
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
    description: 'O Porsche 911 Turbo S é a referência em superesportivos para uso diário. Seu motor boxer biturbo de 3.8 litros entrega 650 cv com refinamento inigualável. A tração integral Porsche e a transmissão PDK de 8 velocidades garantem performance brutal com conforto supremo.',
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
];

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};
