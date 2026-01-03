import React from 'react'
import SectionHeader from '../common/section-header'
import { Calendar, Rocket } from 'lucide-react'
import ProductCard from '../products/product-card';
import EmptyState from '../common/empty-state';

type Props = {}

const RecentlyLaunched = [
  {
    id: 1,
    name: "Innovative Gadget",
    description:
      "Experience the absolute future with our latest innovative gadget that combines cutting-edge technology with sleek design.",
    tags: ["Tech", "Gadget"],
    votes: 250,
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