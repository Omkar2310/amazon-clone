import React from 'react'
import './Home.css'
import Product from './Product.js'
function Home() {
	return (
		<div>
			<div className="home_container">
				<img className="home_image"  src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/June/POD-graphics/fd_1500x600._CB430207207_.jpg
				" alt=""/>
			</div>

			<div className="home_row">
				<Product id="11" title="The Subtle Art of Not Giving a F*ck"
				price={600} image="https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg"
				rating={5}

				/>
				<Product id="12" title="Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black) "
				price={30000} image="https://images-na.ssl-images-amazon.com/images/I/71el-PAu1IL._SL1500_.jpg"
				rating={4}

				/>
			</div>

			<div className="home_row">
				<Product id="13" title="Deckup Giona Office Table and Study Desk "
				price={5699} image="https://images-na.ssl-images-amazon.com/images/I/719swtaPoEL._SL1500_.jpg"
				rating={4}
				/>
				<Product id="14" title="Nokia 5.3 Android One Smartphone with Quad Camera, 4 GB RAM and 64 GB Storage - Charcoal  "
				price={13999} image="https://images-na.ssl-images-amazon.com/images/I/61L1ItFgFHL._SL1500_.jpg"
				rating={4}
				/>
				
				<Product id="15" title="Boult Audio BassBuds X1 in-Ear Wired Earphones with Mic and 10mm Powerful Driver for Extra Bass and HD Sound"
				price={999} image="https://images-na.ssl-images-amazon.com/images/I/718Ey6DDmjL._SL1500_.jpg"
				rating={4}
				/>
			</div>

			<div className="home_row">
				<Product id="16" title="Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AR+Webcam "
			price={56999} image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
				rating={5}
				/>
				
			</div>
		</div>
	)
}

export default Home