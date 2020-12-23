import { Car } from '../../models/api.models';

const desc = `
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
`;

const teaser =
  'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.';

export const data: Car[] = [
  {
    id: 'bmw-m2-2021',
    brand: 'BMW',
    model: 'M2',
    year: 2021,
    price: {
      original: 59895,
      final: 64145,
    },
    image: {
      caption: 'Third best car ever',
      src: 'assets/images/brands/bmw/m2.jpg',
    },
    teaser,
    description: desc,
    features: {
      engine:
        '405-hp, twin-turbocharged and intercooled DOHC 24 valve 3.0 liter inline 6',
      transmission: '6-speed manual',
      seats: 4,
      drivetrain: 'RWD',
      length: 176.2,
      wheelbase: 106.0,
      width: 73.0,
      height: 55.5,
    },
  },
  {
    id: 'mazda-mx5-2021',
    brand: 'Mazda',
    model: 'Miata',
    year: 2021,
    price: {
      original: 30290,
      final: 33615,
    },
    image: {
      caption: 'Best car ever',
      src: 'assets/images/brands/mazda/mx5.jpg',
    },
    teaser,
    description: desc,
    features: {
      engine: '181-hp, 2.0-liter I-4 (regular gas)',
      transmission: '6-speed manual',
      seats: 2,
      drivetrain: 'RWD',
      length: 154.1,
      wheelbase: 90.9,
      width: 68.3,
      height: 48.8,
    },
  },
];
