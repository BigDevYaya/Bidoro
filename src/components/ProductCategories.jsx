import React from 'react'
import phone from '/images/Smartphone-Mobile-PNG-Image-Background 1.png'
import house from '/images/pngtree-real-estate-png-image_16490379 1.png'
import lgtv1 from '/images/PngItem_350575 1.png'
import furniture from '/images/pngtree-teal-velvet-accent-chair-with-curved-backrest-png-image_16211012 1.png'
import laptops from '/images/laptop.png'
import car from '/images/automobiles.png'
import clothes from '/images/clothings.png'
import cream from '/images/beautystore.png'

const categories = [
  { img: phone, label: 'Phones & tablets' },
  { img: house, label: 'Properties' },
  { img: lgtv1, label: 'Electronics' },
  { img: furniture, label: 'Furniture & appliances' },
  { img: laptops, label: 'Laptops' },
  { img: car, label: 'Automobiles' },
  { img: clothes, label: 'Fashion' },
  { img: cream, label: 'Beauty & care' },
]

const ProductCategories = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {categories.map((cat, i) => (
        <div key={i} className="flex items-center flex-col">
          <figure className="bg-light rounded-lg w-28 h-28 flex items-center justify-center overflow-hidden">
            <img src={cat.img} alt={cat.label} className="max-h-full max-w-full object-contain" />
          </figure>
          <p className="max-w-28 text-[0.7rem] text-center">{cat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductCategories
