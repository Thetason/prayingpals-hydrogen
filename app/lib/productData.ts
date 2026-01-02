// Product Data for Little Nazareth Shop

export interface Product {
  id: string;
  name: string;
  englishName: string;
  koreanName: string;
  description: string;
  price: number;
  image: string;
  images?: string[]; // 멀티 이미지 (제품 상세용)
  category: 'plushie' | 'sticker' | 'book' | 'accessory' | 'homegoods';
  characterId?: string;
  inStock: boolean;
  stock: number; // 재고 수량
  featured?: boolean;
}

export const products: Product[] = [
  // 인형 (Plushies)
  {
    id: 'lambie-plush',
    name: 'Lambie Plushie',
    englishName: 'Lambie Plushie',
    koreanName: '램비 인형',
    description: '눈물이 많은 우리 램비 친구! 부드러운 양털 소재로 포근하게 안아줄 수 있어요.',
    price: 72000,
    image: '/products/lambie-plush.jpg',
    category: 'plushie',
    characterId: 'lamb',
    stock: 28,
    inStock: true,
    featured: true,
  },
  {
    id: 'ari-plush',
    name: 'Ari Plushie',
    englishName: 'Ari Plushie',
    koreanName: '아리 인형',
    description: '용감한 척하지만 사실은 귀여운 아리! 폭신한 갈기가 매력 포인트예요.',
    price: 72000,
    image: '/products/ari-plush.jpg',
    images: [
      '/products/ari-plush-1.jpg', // 정면 (기도 포즈)
      '/products/ari-plush-2.jpg', // 측면
      '/products/ari-plush-3.jpg', // 뒷면
      '/products/ari-plush-4.jpg', // 얼굴 클로즈업
      '/products/ari-plush-5.jpg', // 얼굴+상반신 클로즈업
    ],
    category: 'plushie',
    characterId: 'lion',
    stock: 42,
    inStock: true,
    featured: true,
  },
  {
    id: 'davi-plush',
    name: 'Davi Plushie',
    englishName: 'Davi Plushie',
    koreanName: '다비 인형',
    description: '용기의 조약돌을 품은 귀여운 다람쥐 다비! 미니 사이즈로 가방에 달아보세요.',
    price: 72000,
    image: '/products/davi-plush.jpg',
    images: [
      '/products/davi-plush-1.jpg', // 정면
      '/products/davi-plush-2.jpg', // 뒷면
      '/products/davi-plush-3.jpg', // 측면
      '/products/davi-plush-4.jpg', // 클로즈업
    ],
    category: 'plushie',
    characterId: 'squirrel',
    stock: 35,
    inStock: true,
  },
  {
    id: 'coco-plush',
    name: 'Coco Plushie',
    englishName: 'Coco Plushie',
    koreanName: '코코 인형',
    description: '늘 졸린 코코 곰돌이! 초콜릿 향기가 나는 담요와 함께해요.',
    price: 72000,
    image: '/products/coco-plush.jpg',
    category: 'plushie',
    characterId: 'bear',
    stock: 19,
    inStock: true,
    featured: true,
  },

  // 스티커 세트 - 판매 중단
  {
    id: 'character-sticker-set',
    name: 'Character Sticker Set',
    englishName: 'Character Sticker Set',
    koreanName: '캐릭터 스티커 세트',
    description: '리틀 나사렛 친구들이 한 세트에! 다이어리, 노트북을 꾸며보세요.',
    price: 12000,
    image: '/products/sticker-set.jpg',
    category: 'sticker',
    stock: 0,
    inStock: false,
  },

  // 스토리북 - 판매 중단
  {
    id: 'story-book',
    name: 'Little Nazareth Story Book',
    englishName: 'Little Nazareth Story Book',
    koreanName: '리틀 나사렛 스토리북',
    description: '친구들의 따뜻한 이야기가 담긴 그림책. 잠들기 전 읽기 좋아요.',
    price: 18000,
    image: '/products/story-book.jpg',
    category: 'book',
    stock: 0,
    inStock: false,
    featured: false,
  },

  // 홈굿즈 - 판매 중단
  {
    id: 'coco-blanket',
    name: 'Coco Blanket',
    englishName: 'Coco Blanket',
    koreanName: '코코 담요',
    description: '코코처럼 포근한 담요! 초콜릿 브라운 색상으로 따뜻해요.',
    price: 45000,
    image: '/products/coco-blanket.jpg',
    category: 'homegoods',
    characterId: 'bear',
    stock: 0,
    inStock: false,
  },
  {
    id: 'character-cushion',
    name: 'Character Cushion',
    englishName: 'Character Cushion',
    koreanName: '캐릭터 쿠션',
    description: '좋아하는 친구를 골라 쿠션으로! 소파나 침대를 꾸며보세요.',
    price: 28000,
    image: '/products/character-cushion.jpg',
    category: 'homegoods',
    stock: 0,
    inStock: false,
  },

  // 액세서리 - 판매 중단
  {
    id: 'character-keychain',
    name: 'Character Keychain',
    englishName: 'Character Keychain',
    koreanName: '캐릭터 키링',
    description: '귀여운 아크릴 키링! 가방이나 열쇠에 달아보세요.',
    price: 8000,
    image: '/products/keychain.jpg',
    category: 'accessory',
    stock: 0,
    inStock: false,
  },
  {
    id: 'eco-bag',
    name: 'Little Nazareth Eco Bag',
    englishName: 'Little Nazareth Eco Bag',
    koreanName: '리틀 나사렛 에코백',
    description: '친구들이 그려진 튼튼한 에코백. 장바구니로 활용하기 좋아요.',
    price: 15000,
    image: '/products/eco-bag.jpg',
    category: 'accessory',
    stock: 0,
    inStock: false,
  },
];

export const categories = {
  plushie: { name: '인형', emoji: '🧸' },
  // sticker: { name: '스티커', emoji: '✨' },
  // book: { name: '책', emoji: '📚' },
  // accessory: { name: '액세서리', emoji: '🎒' },
  // homegoods: { name: '홈굿즈', emoji: '🏠' },
};
