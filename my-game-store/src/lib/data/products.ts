// src/lib/data/products.ts

// ตรวจสอบว่ามี interface นี้
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

// **ที่สำคัญที่สุด: ตรวจสอบว่ามี `export const products` บรรทัดนี้**
export const products: Product[] = [
  {
    id: 1,
    name: 'Elden Ring',
    price: 1790,
    description: 'เกม Action RPG สุดท้าทายในโลกแฟนตาซีอันกว้างใหญ่จาก FromSoftware ที่จะทดสอบฝีมือของคุณ',
    imageUrl: 'https://via.placeholder.com/400x300.png/FFC815/292929?text=Elden+Ring',
    category: 'Action RPG',
  },
  {
    id: 2,
    name: 'Cyberpunk 2077',
    price: 1899,
    description: 'สวมบทบาทเป็น V ทหารรับจ้างในมหานคร Night City ที่เต็มไปด้วยแสงสีและเทคโนโลยีสุดล้ำ',
    imageUrl: 'https://via.placeholder.com/400x300.png/FFC815/292929?text=Cyberpunk',
    category: 'Action RPG',
  },
  // ... สินค้าอื่นๆ
];