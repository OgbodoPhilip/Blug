import React from 'react'
import SectionHeader from '../common/section-header'
import { Calendar, Rocket } from 'lucide-react'
import ProductCard from '../products/product-card';
import EmptyState from '../common/empty-state';

type Props = {}

const RecentlyLaunched = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=60",
    name: "Aero-Flow Headphones",
    description: "Immerse yourself in high-fidelity sound with industry-leading noise cancellation and a battery life that spans days.",
    tags: ["Audio", "Lifestyle"],
    votes: 189,
    isFeatured: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1585333120167-05033499d3fe?w=1000&auto=format&fit=crop&q=60",
    name: "Nova Mechanical Keyboard",
    description: "A compact 65% wireless mechanical keyboard featuring hot-swappable switches and custom RGB lighting for enthusiasts.",
    tags: ["Setup", "Hardware"],
    votes: 342,
    isFeatured: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000&auto=format&fit=crop&q=60",
    name: "Pixel-Tab Ultra",
    description: "The thinnest tablet ever made, featuring an OLED Pro Display and the latest silicon for demanding creative workflows.",
    tags: ["Design", "Mobile"],
    votes: 567,
    isFeatured: true,
  },
  
];

export default function RecentlyLaunchedProducts({}: Props) {
  return (
    <section className='py-10 ' >
        <div className="wrapper">
            <SectionHeader title='Recently Launched Products' Icon={Rocket} description='The most recently launched products on the platform '/>
              {
                RecentlyLaunched.length > 0 ? (<div className="grid-wrapper">
                      {
                        RecentlyLaunched.map((product)=>(
                          <ProductCard key={product.id} product={product}
                        />
                        ))
                         
                      }
                        
                    </div>):(<EmptyState message='No product launched in the past 24 hours, check back later.' icon={Calendar}/>)
              }
             
        </div>

    </section>
  )
}