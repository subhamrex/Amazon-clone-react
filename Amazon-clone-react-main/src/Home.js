import React from 'react'
import poster from './pics/posterPrime.jpg'
import "./Home.css"
import Product from './Product';
import prod1 from './pics/headphn.jpg'
import prod2 from './pics/trimmer.jpg'
import prod3 from './pics/applewatch.jpg'
import prod4 from './pics/realme.jpg'
import prod5 from './pics/antivirus.jpg'
import prod6 from './pics/mitv.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={poster} alt="alt.img" />

                <div className="home_row">
                    <Product
                        id="49012"
                        title="Cosmic byte Headphone with Mic"
                        price={899}
                        image={prod1}
                        rating={5} />
                    <Product
                        id="490124"
                        title="Trimmer for Men | USB charging cordless rechargeable Beard Trimmer"
                        price={499}
                        image={prod2}
                        rating={4} />

                </div>

                <div className="home_row">
                    <Product
                        id="497012"
                        title="
                        Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band"
                        price={49999}
                        image={prod3}
                        rating={5} />
                    <Product
                        id="490782"
                        title="Realme Narzo 20A (Victory Blue, 4 GB RAM, 64 GB Storage)"
                        price={12999}
                        image={prod4}
                        rating={4} />
                    <Product
                        id="4901245"
                        title="Kaspersky Total Security - 1 User, 1 Year (CD)"
                        price={499}
                        image={prod5}
                        rating={5} />

                </div>

                <div className="home_row">
                    <Product
                        id="49012458"
                        title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV"
                        price={14999}
                        image={prod6}
                        rating={3} />

                </div>

            </div>
        </div>
    )
}

export default Home
