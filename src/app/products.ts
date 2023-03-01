export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  brand: string;
  category: string;
  like: number;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 11 Pro Max',
    price: 499.99,
    description:
      'Smart Phone, Memory: 64GB, OS: IOS 12, color : Midnight Green',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hbd/32284847439902/apple-iphone-11-pro-64gb-seryj-1005129-1-Container.jpg',
    rating: 4.3,
    brand: 'Apple',
    category: 'Phone',
    like: 0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-pro-64gb-seryi-1005129/?c=750000000#!/item',
  },
  {
    id: 2,
    name: 'IPhone 12 Pro Max',
    price: 49.6,
    description:
      'Apple Smart Phone, Memory: 256GB, OS: IOS 12, color: Pacific Blue',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h8c/32680476966942/apple-iphone-12-pro-max-128gb-sinij-100658112-1-Container.jpg',
    rating: 4.3,
    brand: 'Apple',
    category: 'Phone',
    like: 0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-pro-max-128gb-sinii-100658112/?c=750000000#!/item',
  },
  {
    id: 3,
    name: 'iPhone 11',
    price: 189.99,
    description: 'Apple Smart Phone, Memory: 32GB, OS: IOS, color: Black',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/hfa/32690571706398/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg',
    rating: 4.5,
    brand: 'Apple',
    category: 'Phone',
    like: 0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000#!/item',
  },
  {
    id: 4,
    name: 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop ',
    price: 429.99,
    description:
      'Gaming Laptop, Hard Disk Size: 256 GB, OS: Windows 11, color : Black',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/hf7/48739797762078/acer-nitro-5-an515-55-50za-nh-q7mer-00c-cernyj-103698214-1.jpg',
    rating: 4.6,
    brand: 'Acer',
    category: 'Laptop',
    like: 0,
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-55-50za-nh-q7mer-00c-chernyi-103698214/?c=750000000#!/item',
  },
  {
    id: 5,
    name: 'Apple MacBook Air Laptop 2020',
    price: 729.99,
    description: 'Laptop, Hard Disk Size: 256 GB, OS: Mac OS, color : Silver',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg',
    rating: 4.8,
    brand: 'Apple',
    category: 'Laptop',
    like: 0,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000#!/item',
  },
  {
    id: 6,
    name: 'JBL headset SG500',
    price: 29.99,
    description:
      'Gaming Headset with Noise Cancelling Microphone, color : Black',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg',
    rating: 4.4,
    brand: 'JBL',
    category: 'Headset',
    like: 0,
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item',
  },
  {
    id: 7,
    name: 'Наушники Xiaomi Redmi AirDots S',
    price: 49.99,
    description:
      'Gaming Headset with Noise Cancelling Microphone, color : Black',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/h14/49203489308702/xiaomi-redmi-airdots-s-chernyi-100286960-1.jpg',
    rating: 4.3,
    brand: 'Airdots',
    category: 'Headset',
    like: 0,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-airdots-s-chernyi-100286960/?c=750000000#!/item',
  },
  {
    id: 8,
    name: 'HyperX headset SG500',
    price: 68.99,
    description:
      'Gaming Headset with Noise Cancelling Microphone, color : Black',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h16/50101937078302/hyperx-cloud-ii-pro-gaming-headset4p5l9aa-cernyj-104498632-1.jpg',
    rating: 4.6,
    brand: 'HyperX',
    category: 'Headset',
    like: 0,
    link: 'https://kaspi.kz/shop/p/hyperx-cloud-ii-pro-gaming-headset-4p5l9aa-chernyi-104498632/?c=750000000#!/item',
  },
  {
    id: 9,
    name: 'Razer headset SG500',
    price: 39.99,
    description:
      'Gaming Headset with Noise Cancelling Microphone, color : Green',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/h1e/61997405470750/razer-blackshark-v2-usb-mic-enhancer-rz04-03230100-r3m1-cernyj-101515013-1-Container.jpg',
    rating: 4.6,
    brand: 'Razer',
    category: 'Headset',
    like: 0,
    link: 'https://kaspi.kz/shop/p/razer-blackshark-v2-usb-mic-enhancer-rz04-03230100-r3m1-chernyi-101515013/?c=750000000#!/item',
  },
  {
    id: 10,
    name: 'HP Flagship 15.6',
    price: 769.99,
    description:
      'Laptop, Hard Disk Size: 1 TB, OS: Windows 11, color : Spruce Blue',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/hc8/66164590510110/hp-15-fa0015ci-6k5r9ea-temno-sinii-107737890-6.jpg',
    rating: 5.0,
    brand: 'HP',
    category: 'Laptop',
    like: 0,
    link: 'https://kaspi.kz/shop/p/hp-15-fa0015ci-6k5r9ea-temno-sinii-107737890/?c=750000000#!/item',
  },
  {
    id: 11,
    name: 'Ala case для iPhone 11',
    price: 200,
    description: 'Transparent case for Iphone 11',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h42/48677606293534/ala-case-dla-iphone-11-prozracnyj-103661424-1.jpg',
    rating: 5.0,
    brand: 'Apple',
    category: 'Accessories',
    like: 0,
    link: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000#!/item',
  },
  {
    id: 12,
    name: 'Чехол Smart Case для Apple iPhone 11',
    price: 900,
    description: 'Dark green case for Iphone 11',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h1e/66096381394974/smart-case-dlya-apple-iphone-11-temno-zelenyi-107703267-1.jpg',
    rating: 5.0,
    brand: 'Apple',
    category: 'Accessories',
    like: 0,
    link: 'https://kaspi.kz/shop/p/smart-case-dlja-apple-iphone-11-temno-zelenyi-107703267/?c=750000000#!/item',
  },
  {
    id: 13,
    name: 'ArtisBOOM для Apple iPhone 11 черный',
    price: 1000,
    description: 'Black case for Iphone 11',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/h2f/48575486722078/11199-dlya-iphone-11-chernyi-103593377-1.jpg',
    rating: 5.0,
    brand: 'HP',
    category: 'Accessories',
    like: 0,
    link: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/h2f/48575486722078/11199-dlya-iphone-11-chernyi-103593377-1.jpg',
  },
];
