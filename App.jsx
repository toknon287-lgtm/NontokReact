import { useState } from 'react'
import UserCard from './components/UserCard'
import ProductCard from './components/ProductCard'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const users = [
    {
      id: 1,
      name: 'ปัญญาดี ปิ่นทอง',
      role: 'Owner',
      email: 'toknon287@gmail.com',
      phone: '083-274-4118',
      image: 'https://media.tenor.com/JdDKwpI5SfgAAAAe/zzz.png'
    }
  ];

  const products = [
  {
    id: 1,
    name: 'The Classic Aviator',
    price: 9900,
    category: 'Sunglasses',
    description: 'แว่นกันแดดทรงนักบินสุดคลาสสิก วัสดุไทเทเนียม เลนส์ Polarized',
    image: 'https://images2.ray-ban.com//cdn-record-files/dressedon/fc4446ec-740a-4788-8978-b10600a65a2c/0RB3025__SHOOT__om1.png'
  },
  {
    id: 2,
    name: 'Luxury Cateye Gold',
    price: 12500,
    category: 'Sunglasses',
    description: 'แว่นตาทรง Cateye เฟรมทองคำขาว เหมาะสำหรับสุภาพสตรี',
    image: 'https://ae01.alicdn.com/kf/Sa5aff12af0824b53b11f040300ebcf5e8/New-Vintage-Gold-Side-Cat-Eye-Sunglasses-Luxury-Glasses-Women-Big-Frame-Black-Shades-For-Women.jpg'
  },
  {
    id: 3,
    name: 'Sporty Carbon Fiber',
    price: 8500,
    category: 'Sunglasses',
    description: 'แว่นทรงสปอร์ต ผลิตจากคาร์บอนไฟเบอร์ ทนทานและเบาเป็นพิเศษ',
    image: 'https://www.simplycarbonfiber.com/cdn/shop/products/sport-real-carbon-fiber-sunglasses-polarized-lens-fully-carbon-fiber-carbon-fiber-sunglasses-full-cf-467469.jpg?v=1608344279'
  },
  {
    id: 4,
    name: 'Sleek Black Titanium',
    price: 6500,
    category: 'Eyeglasses',
    description: 'กรอบแว่นสายตาทรงสี่เหลี่ยมผืนผ้า ผลิตจากไทเทเนียม น้ำหนักเบา',
    image: 'https://i.etsystatic.com/9503960/r/il/38a048/6263702934/il_570xN.6263702934_2g9g.jpg'
  },
  {
    id: 5,
    name: 'Vintage Round Acetate',
    price: 5200,
    category: 'Eyeglasses',
    description: 'แว่นทรงกลมสไตล์วินเทจ วัสดุ Acetate พรีเมียม สีฮาวานา',
    image: 'https://i.ebayimg.com/images/g/fBUAAOSwZptiPdNy/s-l400.jpg'
  },
  {
    id: 6,
    name: 'Rimless Minimalist',
    price: 7800,
    category: 'Eyeglasses',
    description: 'แว่นไร้กรอบดีไซน์มินิมอล เน้นความเบาและมุมมองที่กว้างขวาง',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfh1nWbc8pfhTvrWI5C0SyAcUNJs1szpdTfQ&s'
  },
  {
    id: 7,
    name: 'The Productivity Shield',
    price: 3900,
    category: 'Blue Light',
    description: 'เลนส์ตัดแสงสีฟ้าประสิทธิภาพสูง ช่วยลดอาการตาล้าจากการใช้งานคอมพิวเตอร์',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUBQNvGa0wHVMolAziq7R6BeBnzRyG3QJrw&s'
  },
  {
    id: 8,
    name: 'Gaming Clarity Pro',
    price: 4500,
    category: 'Blue Light',
    description: 'กรอบแว่นน้ำหนักเบาพิเศษและเลนส์ที่เหมาะสำหรับการเล่นเกมมาราธอน',
    image: 'https://www.zennioptical.com/blog/wp-content/uploads/2024/02/gaming_1.jpg'
  },
  {
    id: 9,
    name: 'Office Chic Frame',
    price: 3200,
    category: 'Blue Light',
    description: 'แว่นทรงแฟชั่นที่มาพร้อมเลนส์ตัดแสงสีฟ้า เหมาะสำหรับใส่ทำงานในออฟฟิศ',
    image: 'https://i.pinimg.com/originals/38/2e/35/382e35b6b11ca1c4b6641a06c5097e64.jpg'
  },
  {
    id: 10,
    name: 'Luxury Leather Case',
    price: 1500,
    category: 'Accessories',
    description: 'กล่องแว่นหนังแท้ระดับพรีเมียม ป้องกันรอยขีดข่วนได้อย่างสมบูรณ์แบบ',
    image: 'https://vonbaer.com/cdn/shop/files/von-baer-deluxe-luxury-leather-glasses-case-with-sunglasses-inside-brown-held-by-the-women-in-porsche-car.jpg?v=1760449573'
  },
  {
    id: 11,
    name: 'Microfiber Cleaning Cloth',
    price: 350,
    category: 'Accessories',
    description: 'ผ้าไมโครไฟเบอร์สำหรับทำความสะอาดเลนส์ ไม่ทิ้งรอยขนแมว',
    image: 'https://m.media-amazon.com/images/I/81igwECeynL.jpg'
  },
  {
    id: 12,
    name: 'Anti-Fog Lens Spray',
    price: 590,
    category: 'Accessories',
    description: 'สเปรย์ป้องกันฝ้าไอน้ำ เหมาะสำหรับผู้สวมใส่แมสก์และสภาพอากาศชื้น',
    image: 'https://phillips-safety.com/wp-content/uploads/2023/01/accessories-Anti-Fog_Lens_Cleaner_Spray-front-1000x1000-1.jpg'
  }
];
const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="center-content" style={{ minHeight: '100vh' }}>
      <div className="container w-100 flex-grow-1">
        
        <header className="text-center my-5">
          <h1 className="display-4 fw-bold mb-3 text-gold">Nontok Glasses 💎</h1>
        </header>

        <div className="w-100">
          <section className="mb-5 center-content">
            <h2 className="mb-5">Meet Our Visionary Team</h2>
            <div className="row justify-content-center w-100">
              {users.map((user) => (
                <UserCard
                  key={user.id}
                  {...user}
                />
              ))}
            </div>
          </section>

          <section className="center-content">
            
            <div className="mb-4 text-center">
              <h2 className="mb-3">Explore The Collection</h2>
              <div className="btn-group" role="group">
                {categories.map(category => (
                  <button
                    key={category}
                    type="button"
                    className={`btn ${
                      selectedCategory === category 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="row justify-content-center w-100">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="alert alert-info text-center mt-4 w-50">
                ไม่มีสินค้าในหมวดหมู่นี้
              </div>
            )}
          </section>
        </div>
      </div>
      
      <footer className="bg-dark-overlay text-white text-center py-4 mt-5 w-100">
        <div className="container">
          <p className="mb-0 small">© 2025 Nontok . All Rights Reserved. | Designed for Luxury Vision.</p>
        </div>
      </footer>
    </div>
  )
}

export default App