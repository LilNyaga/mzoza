/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'industrial',
    name: 'Industrial Machines',
    description: 'High-speed, durable machines for commercial production.',
    image: '/pic/alexander-andrews-jNKv4QohAk0-unsplash.jpg',
    matchKey: 'Industrial',
  },
  {
    id: 'home',
    name: 'Sewing & Quilting Machines',
    description: 'Versatile machines for home businesses and tailors.',
    image: '/pic/amirhossein-soltani-nge-woZspNk-unsplash.jpg',
    matchKey: 'Home',
  },
  {
    id: 'long-arm-quilting-machines',
    name: 'Long Arm Quilting Machines',
    description: 'Extended arm quilting machines for large-scale projects and intricate designs.',
    image: '/pic/anna-kumpan-fTsHer02aEI-unsplash.jpg',
    matchKey: 'Long Arm Quilting Machines',
  },
  {
    id: 'overlock',
    name: 'Serger & Overlock Machines',
    description: 'Professional finishing and specialized stitching solutions.',
    image: '/pic/ashley-diane-worsham-F14VKsS0iL8-unsplash.jpg',
    matchKey: 'Overlock',
  },
  {
    id: 'coverstitch-machines',
    name: 'Coverstitch Machines',
    description: 'Professional coverstitch machines for knitwear and activewear construction.',
    image: '/pic/ashley-diane-worsham-k8WsZMKAafQ-unsplash.jpg',
    matchKey: 'Coverstitch Machines',
  },
  {
    id: 'embroidery',
    name: 'Embroidery Machines',
    description: 'Precision computerized machines for intricate designs.',
    image: '/pic/collab-media-upKXvfgKABY-unsplash.jpg',
    matchKey: 'Embroidery',
  },
  {
    id: 'presser-feet',
    name: 'Presser Feet',
    description: 'A wide variety of presser feet for all sewing techniques and fabrics.',
    image: '/pic/compagnons--0w8N0QmfCI-unsplash.jpg',
    matchKey: 'Presser Feet',
  },
  {
    id: 'serger-feet',
    name: 'Serger Feet',
    description: 'Specialized feet designed for serger and overlock machines.',
    image: '/pic/em-sin-d5KNEWmXKmA-unsplash.jpg',
    matchKey: 'Serger Feet',
  },
  {
    id: 'bobbins',
    name: 'Bobbins',
    description: 'High-quality bobbins compatible with all major sewing machine brands.',
    image: '/pic/guick-xFAWasO5Zxc-unsplash.jpg',
    matchKey: 'Bobbins',
  },
  {
    id: 'bobbin-cases',
    name: 'Bobbin Cases',
    description: 'Durable bobbin cases ensuring smooth thread delivery and tension.',
    image: '/pic/juan-gomez-9L0zCCeD6J4-unsplash.jpg',
    matchKey: 'Bobbin Cases',
  },
  {
    id: 'foot-controls',
    name: 'Foot Controls',
    description: 'Responsive foot pedals and controls for precise sewing operation.',
    image: '/pic/kemal-berkay-dogan--AshMf5huHM-unsplash.jpg',
    matchKey: 'Foot Controls',
  },
  {
    id: 'power-cords',
    name: 'Power Cords',
    description: 'Reliable power cords and adapters for all sewing machine models.',
    image: '/pic/levi-gatimu-GGeg6Bn2ILE-unsplash.jpg',
    matchKey: 'Power Cords',
  },
];

export const CATEGORY_LINKS: Record<string, string> = {
  industrial: '/catalog/industrial',
  home: '/catalog/home',
  embroidery: '/catalog/embroidery',
  overlock: '/catalog/overlock',
  'long-arm-quilting-machines': '/catalog/long-arm-quilting-machines',
  'coverstitch-machines': '/catalog/coverstitch-machines',
  'presser-feet': '/catalog/presser-feet',
  'serger-feet': '/catalog/serger-feet',
  bobbins: '/catalog/bobbins',
  'bobbin-cases': '/catalog/bobbin-cases',
  'foot-controls': '/catalog/foot-controls',
  'power-cords': '/catalog/power-cords',
};

export const PRODUCTS: Product[] = [
  // Industrial Machines
  {
    id: 'tr-1000-pro',
    name: 'TRACE 1000 PRO',
    category: 'Industrial',
    brand: 'TRACE',
    price: 1299,
    description: 'The ultimate workhorse for modern textile factories. Precision stitching meets unparalleled speed.',
    features: [
      'Automatic thread cutter',
      'Integrated direct drive motor',
      'Electronic tension control',
      'Programmable stitch patterns'
    ],
    specs: {
      'Max Speed': '5000 SPM',
      'Motor Type': 'Direct Drive Servo',
      'Lubrication': 'Automatic',
      'Needle Type': 'DBx1'
    },
    images: ['/pic/alexander-andrews-jNKv4QohAk0-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Best Seller', 'Commercial Grade'],
    rating: 4.9,
    reviewsCount: 124,
    usageType: 'Commercial',
    powerType: 'Servo Motor',
    speed: 5000
  },
  {
    id: 'tr-9000-hd',
    name: 'TRACE 9000 HD',
    category: 'Industrial',
    brand: 'TRACE',
    price: 1599,
    description: 'Heavy-duty industrial machine built for the toughest materials and highest volume production.',
    features: [
      'Reinforced metal frame',
      'High-torque clutch motor',
      'Extra large bobbin',
      'Heavy-duty needle bar'
    ],
    specs: {
      'Max Speed': '4500 SPM',
      'Motor Type': 'Clutch Motor',
      'Lubrication': 'Manual',
      'Needle Type': 'DBx1'
    },
    images: ['/pic/luba-glazunova-cNafR4gDSp8-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Heavy Duty'],
    rating: 4.8,
    reviewsCount: 56,
    usageType: 'Commercial',
    powerType: 'Clutch Motor',
    speed: 4500
  },
  // Sewing & Quilting Machines
  {
    id: 'tr-home-s1',
    name: 'TRACE Home Studio S1',
    category: 'Home',
    brand: 'TRACE',
    price: 499,
    description: 'Heavy-duty performance in a compact frame. Perfect for boutique designers and home-based businesses.',
    features: [
      'Cast metal internal frame',
      '90 built-in stitch patterns',
      'One-step buttonhole',
      'Adjustable foot pressure'
    ],
    specs: {
      'Speed': '850 SPM',
      'Stitch Count': '90',
      'Motor': '90W High Torque',
      'Weight': '12kg'
    },
    images: ['/pic/amirhossein-soltani-nge-woZspNk-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Top Choice'],
    rating: 4.7,
    reviewsCount: 231,
    usageType: 'Residential',
    powerType: 'Electric',
    speed: 850
  },
  {
    id: 'tr-home-quilt-pro',
    name: 'TRACE QuiltPro 7000',
    category: 'Home',
    brand: 'TRACE',
    price: 699,
    description: 'Quilting specialized machine with extended table and advanced stitch regulation.',
    features: [
      'Extended quilting table',
      'Needle up/down positioning',
      'Thread cut button',
      'Independent bobbin winding'
    ],
    specs: {
      'Speed': '800 SPM',
      'Stitch Count': '120',
      'Motor': '100W High Torque',
      'Weight': '15kg'
    },
    images: ['/pic/volha-flaxeco-omgRZCmTvUM-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Quilting Special'],
    rating: 4.6,
    reviewsCount: 89,
    usageType: 'Residential',
    powerType: 'Electric',
    speed: 800
  },
  // Embroidery Machines
  {
    id: 'tr-e95-elite',
    name: 'TRACE E95 Elite Embroidery',
    category: 'Embroidery',
    brand: 'TRACE',
    price: 3499,
    description: '15-needle commercial embroidery system with AI-assisted pathing and intelligent thread break detection.',
    features: [
      '15 Needles / 15 Colors',
      'Intelligent pathing engine',
      'Massive 1200x500mm field',
      'Remote wireless upload'
    ],
    specs: {
      'Head count': '1 Head',
      'Needles': '15',
      'Speed': '1200 SPM',
      'Field Size': '1200x500mm'
    },
    images: ['/pic/collab-media-upKXvfgKABY-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Advanced Tech'],
    rating: 5.0,
    reviewsCount: 18,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 1200
  },
  {
    id: 'tr-e60-pro',
    name: 'TRACE E60 Pro Embroidery',
    category: 'Embroidery',
    brand: 'TRACE',
    price: 1899,
    description: '6-needle embroidery machine perfect for small shops and startups.',
    features: [
      '6 Needles / 6 Colors',
      'Auto thread trimmer',
      '500x400mm embroidery field',
      'USB + WiFi connectivity'
    ],
    specs: {
      'Head count': '1 Head',
      'Needles': '6',
      'Speed': '1000 SPM',
      'Field Size': '500x400mm'
    },
    images: ['/pic/ugandan-crafts-ZWxPGOcUzR4-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Startup Friendly'],
    rating: 4.8,
    reviewsCount: 42,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 1000
  },
  // Overlock Machines
  {
    id: 'tr-v8-stitch',
    name: 'V8 Master Stitch',
    category: 'Overlock',
    brand: 'TRACE',
    price: 899,
    description: 'Professional 4-thread overlocker for clean finishes and durable seams on any fabric.',
    features: [
      'Differential feed',
      'Adjustable cutting width',
      'Built-in rolled hem',
      'Heavy-duty metal frame'
    ],
    specs: {
      'Speed': '1300 SPM',
      'Threads': '3/4 Thread',
      'Stitch Length': '1-4mm',
      'Power': '120W'
    },
    images: ['/pic/ashley-diane-worsham-F14VKsS0iL8-unsplash.jpg'],
    stockStatus: 'Low Stock',
    badges: ['New'],
    rating: 4.8,
    reviewsCount: 42,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 1300
  },
  {
    id: 'tr-v6-air',
    name: 'TRACE V6 Air Threader',
    category: 'Overlock',
    brand: 'TRACE',
    price: 749,
    description: '6-thread overlock with automatic air threading for ultimate convenience.',
    features: [
      'Air threading system',
      '6-thread capability',
      'Auto-tension',
      'Built-in needle threader'
    ],
    specs: {
      'Speed': '1500 SPM',
      'Threads': '2/3/4/5/6 Thread',
      'Stitch Length': '0.8-5mm',
      'Power': '150W'
    },
    images: ['/pic/roman-spiridonov-qI9H5nyhrV8-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Air Threader'],
    rating: 4.7,
    reviewsCount: 31,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 1500
  },
  // Long Arm Quilting Machines
  {
    id: 'tr-laq-5000',
    name: 'TRACE LAQ-5000 Crown',
    category: 'Long Arm Quilting Machines',
    brand: 'TRACE',
    price: 2999,
    description: 'Premium long arm quilting system with 14-foot frame and computerised patterns.',
    features: [
      '14-foot quilting frame',
      'Computerised pattern library',
      '360-degree rotation',
      'Laser guidance system'
    ],
    specs: {
      'Max Speed': '1200 SPM',
      'Frame Size': '14ft x 8ft',
      'Needle Type': 'MR',
      'Throat Space': '24 inches'
    },
    images: ['/pic/anna-kumpan-fTsHer02aEI-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Premium'],
    rating: 4.9,
    reviewsCount: 15,
    usageType: 'Commercial',
    powerType: 'Servo Motor',
    speed: 1200
  },
  {
    id: 'tr-laq-3000',
    name: 'TRACE LAQ-3000 Royale',
    category: 'Long Arm Quilting Machines',
    brand: 'TRACE',
    price: 1899,
    description: 'Mid-range long arm with 10-foot frame, perfect for growing quilting businesses.',
    features: [
      '10-foot quilting frame',
      'Basic pattern stitching',
      'Electric stitch regulation',
      'Adjustable height'
    ],
    specs: {
      'Max Speed': '1000 SPM',
      'Frame Size': '10ft x 8ft',
      'Needle Type': 'MR',
      'Throat Space': '20 inches'
    },
    images: ['/pic/tanya-barrow-D-b-b-yk2gg-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Best Value'],
    rating: 4.7,
    reviewsCount: 23,
    usageType: 'Commercial',
    powerType: 'Servo Motor',
    speed: 1000
  },
  // Coverstitch Machines
  {
    id: 'tr-cs-5500',
    name: 'TRACE CS-5500 Professional',
    category: 'Coverstitch Machines',
    brand: 'TRACE',
    price: 1299,
    description: 'Commercial-grade coverstitch with 3-needle capability and adjustable stitch width.',
    features: [
      '3-needle coverstitch',
      'Adjustable stitch width up to 10mm',
      'Differential feed',
      'Auto thread tension'
    ],
    specs: {
      'Speed': '1500 SPM',
      'Needles': '3',
      'Stitch Width': '1-10mm',
      'Threads': '4'
    },
    images: ['/pic/ashley-diane-worsham-k8WsZMKAafQ-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Professional'],
    rating: 4.8,
    reviewsCount: 19,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 1500
  },
  {
    id: 'tr-cs-3500',
    name: 'TRACE CS-3500 Elite',
    category: 'Coverstitch Machines',
    brand: 'TRACE',
    price: 899,
    description: 'Reliable 2-needle coverstitch perfect for activewear and knitwear construction.',
    features: [
      '2-needle coverstitch',
      'Adjustable stitch width 3-7mm',
      'Quick change needle plate',
      'Elastic binding function'
    ],
    specs: {
      'Speed': '1200 SPM',
      'Needles': '2',
      'Stitch Width': '3-7mm',
      'Threads': '3-4'
    },
    images: ['/pic/em-sin-d5KNEWmXKmA-unsplash.jpg'],
    stockStatus: 'Low Stock',
    badges: ['New Arrival'],
    rating: 4.6,
    reviewsCount: 27,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 1200
  },
  // Presser Feet
  {
    id: 'pf-universal-set',
    name: 'TRACE Universal Presser Foot Set',
    category: 'Presser Feet',
    brand: 'TRACE',
    price: 79,
    description: 'Complete 12-piece presser foot set for all sewing techniques. Compatible with most machines.',
    features: [
      '12 different foot types',
      'Universal shank adapter',
      'Hardened steel construction',
      'Storage case included'
    ],
    specs: {
      'Pieces': '12',
      'Material': 'Steel',
      'Compat': 'Most brands',
      'Warranty': '1 Year'
    },
    images: ['/pic/compagnons--0w8N0QmfCI-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Best Seller'],
    rating: 4.9,
    reviewsCount: 156,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  {
    id: 'pf-zipper-foot',
    name: 'TRACE Zipper Foot',
    category: 'Presser Feet',
    brand: 'TRACE',
    price: 19,
    description: 'Specialized foot for easy zipper installation on any fabric type.',
    features: [
      'Adjustable position',
      'Narrow profile design',
      'Snap-on attachment',
      'Metal construction'
    ],
    specs: {
      'Type': 'Zipper',
      'Shank': 'Low',
      'Material': 'Metal',
      'Weight': '50g'
    },
    images: ['/pic/thomas-wolter-0iSB2L_lTSU-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.8,
    reviewsCount: 89,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  {
    id: 'pf-walking-foot',
    name: 'TRACE Walking Foot',
    category: 'Presser Feet',
    brand: 'TRACE',
    price: 39,
    description: 'Even feed foot for smooth stitching on multiple layers and difficult fabrics.',
    features: [
      'Dual feed mechanism',
      'Adjustable pressure',
      'Quilting compatible',
      'Leather friendly'
    ],
    specs: {
      'Type': 'Walking',
      'Shank': 'Low/High adapter',
      'Material': 'Metal/Plastic',
      'Weight': '120g'
    },
    images: ['/pic/victoria-nazaruk-bbyoN-AT_4M-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.7,
    reviewsCount: 67,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  // Serger Feet
  {
    id: 'sf-cutter-blade',
    name: 'TRACE Serger Blade Set',
    category: 'Serger Feet',
    brand: 'TRACE',
    price: 49,
    description: 'Replacement serrated blades for clean cutting on all serger models.',
    features: [
      'Tungsten carbide tipped',
      'Fits all major brands',
      '2-blade set',
      'Long-lasting edge'
    ],
    specs: {
      'Type': 'Blade Set',
      'Material': 'Tungsten Carbide',
      'Quantity': '2 pcs',
      'Fits': 'Most sergers'
    },
    images: ['/pic/guick-xFAWasO5Zxc-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.6,
    reviewsCount: 112,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  {
    id: 'sf-differential-kit',
    name: 'TRACE Differential Feed Kit',
    category: 'Serger Feet',
    brand: 'TRACE',
    price: 89,
    description: 'Enhanced differential feed foot for stretchy fabrics and perfect seam gathers.',
    features: [
      'Adjustable differential ratio',
      'Puckering prevention',
      'Knit fabric specialist',
      'Easy installation'
    ],
    specs: {
      'Type': 'Differential Feed',
      'Adjustment': '0.5-2.0',
      'Material': 'Steel',
      'Fits': 'TRACE sergers'
    },
    images: ['/pic/marilia-castelli-m-Yko_dziqo-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Advanced'],
    rating: 4.8,
    reviewsCount: 34,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  // Bobbins
  {
    id: 'bob-hd-class-15',
    name: 'TRACE HD Bobbins Class 15 (10pk)',
    category: 'Bobbins',
    brand: 'TRACE',
    price: 15,
    description: 'High-density bobbins for Class 15 machines. Smooth thread flow and consistent tension.',
    features: [
      '10-pack convenience',
      'High-density plastic',
      'Tension grooves',
      'Smooth spindle fit'
    ],
    specs: {
      'Type': 'Class 15',
      'Quantity': '10',
      'Material': 'High-Density Plastic',
      'Color': 'Clear'
    },
    images: ['/pic/thomas-wolter-UgIWjp7hwhU-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.7,
    reviewsCount: 203,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  {
    id: 'bob-quilt-long',
    name: 'TRACE Quilting Bobbins (15pk)',
    category: 'Bobbins',
    brand: 'TRACE',
    price: 12,
    description: 'Extra-long bobbins for quilting machines. Holds 40% more thread than standard.',
    features: [
      '15-pack value',
      'Extended capacity',
      'Ideal for quilting',
      'Compatible with most longarms'
    ],
    specs: {
      'Type': 'Quilting Long',
      'Quantity': '15',
      'Material': 'Plastic',
      'Capacity': '+40%'
    },
    images: ['/pic/juan-gomez-9L0zCCeD6J4-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.6,
    reviewsCount: 78,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  // Bobbin Cases
  {
    id: 'bc-standard-mr',
    name: 'TRACE Standard Bobbin Case - MR',
    category: 'Bobbin Cases',
    brand: 'TRACE',
    price: 8,
    description: 'Replacement bobbin case for most JUKI and industrial machines using MR bobbins.',
    features: [
      'OEM quality replacement',
      'Tension screw adjustable',
      'Durable metal body',
      'Easy to install'
    ],
    specs: {
      'Bobbin Type': 'MR',
      'Material': 'Metal',
      'Compat': 'JUKI industrial',
      'Adjustable': 'Yes'
    },
    images: ['/pic/kemal-berkay-dogan--AshMf5huHM-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.5,
    reviewsCount: 145,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  {
    id: 'bc-magnetic-juki',
    name: 'TRACE Magnetic Bobbin Case',
    category: 'Bobbin Cases',
    brand: 'TRACE',
    price: 12,
    description: 'Magnetic anti-tangle bobbin case for JUKI domestic and industrial machines.',
    features: [
      'Magnetic tension control',
      'Prevents thread bird-nesting',
      'Smooth winding',
      'Fits most JUKI models'
    ],
    specs: {
      'Bobbin Type': 'Class 15',
      'Special': 'Magnetic Tension',
      'Compat': 'JUKI universal',
      'Install': 'Tool-free'
    },
    images: ['/pic/omar-alrawi-Dq8XPlyHmoI-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: ['Popular'],
    rating: 4.8,
    reviewsCount: 92,
    usageType: 'Residential',
    powerType: 'Manual',
    speed: 0
  },
  // Foot Controls
  {
    id: 'fc-electronic-trace',
    name: 'TRACE Electronic Foot Control',
    category: 'Foot Controls',
    brand: 'TRACE',
    price: 45,
    description: 'Speed-sensitive electronic pedal for TRACE machines. Soft start and needle position memory.',
    features: [
      'Speed sensitive',
      'Soft start function',
      'Needle up/down memory',
      '3-pin connector'
    ],
    specs: {
      'Type': 'Electronic',
      'Voltage': '110V',
      'Compat': 'TRACE machines',
      'Cord Length': '5ft'
    },
    images: ['/pic/levi-gatimu-GGeg6Bn2ILE-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.7,
    reviewsCount: 134,
    usageType: 'Residential',
    powerType: 'Electric',
    speed: 0
  },
  {
    id: 'fc-dual-function',
    name: 'TRACE Dual Function Pedal',
    category: 'Foot Controls',
    brand: 'TRACE',
    price: 59,
    description: 'Dual-purpose pedal with separate controls for speed and stitch length on compatible models.',
    features: [
      'Dual control zones',
      'Variable speed',
      'Stitch length adjust',
      'Ergonomic design'
    ],
    specs: {
      'Type': 'Dual Function',
      'Features': 'Speed + Length',
      'Compat': 'TRACE Pro series',
      'Weight': '450g'
    },
    images: ['/pic/tuyen-vo-SzvDQHor9XU-unsplash.jpg'],
    stockStatus: 'Low Stock',
    badges: ['Pro Grade'],
    rating: 4.6,
    reviewsCount: 58,
    usageType: 'Commercial',
    powerType: 'Electric',
    speed: 0
  },
  // Power Cords
  {
    id: 'pc-heavy-duty-6ft',
    name: 'TRACE Heavy Duty Power Cord - 6ft',
    category: 'Power Cords',
    brand: 'TRACE',
    price: 29,
    description: 'Industrial-grade power cord with heavy shielding and strain relief.',
    features: [
      '16 AWG heavy gauge',
      ' strain relief collar',
      'UL certified',
      '6ft length'
    ],
    specs: {
      'Length': '6 feet',
      'Gauge': '16 AWG',
      'Rating': '13A 125V',
      'Cert': 'UL Listed'
    },
    images: ['/pic/thomas-wolter-UgIWjp7hwhU-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.8,
    reviewsCount: 187,
    usageType: 'Residential',
    powerType: 'Electric',
    speed: 0
  },
  {
    id: 'pc-extension-10ft',
    name: 'TRACE Extension Cord - 10ft',
    category: 'Power Cords',
    brand: 'TRACE',
    price: 19,
    description: 'Heavy-duty extension cord for reaching distant outlets. Safe for all sewing machines.',
    features: [
      '10ft reach',
      '3-outlet strip',
      'Surge protection',
      'Retractable design'
    ],
    specs: {
      'Length': '10 feet',
      'Outlets': '3',
      'Protection': 'Surge',
      'Gauge': '14 AWG'
    },
    images: ['/pic/victoria-nazaruk-bbyoN-AT_4M-unsplash.jpg'],
    stockStatus: 'In Stock',
    badges: null,
    rating: 4.5,
    reviewsCount: 95,
    usageType: 'Residential',
    powerType: 'Electric',
    speed: 0
  }
];
