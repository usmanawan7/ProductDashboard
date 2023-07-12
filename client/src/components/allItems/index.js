import  React, { useState } from "react"
import ProductDetails from "./productDetail"

const allItems = ({products}) => {
  const [state, setState] = useState(products ? products : [])
  return (
    // <div>
    //   <div className="flex items-center border-t border-b mt-6 px-8 py-5">
    //     <div className="w-3/5">
    //       <h5 className="font-semibold text-base leading-6 text-gray-975">All Produts</h5>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-4 gap-4 mt-4 px-4">
    //     {
    //       state.map((product, index) => (
    //       <div key={index}>
    //         <img src="https://images.macrumors.com/t/tYxK72oWhth11xn1KF8SRwYIVmo=/1600x0/article-new/2022/03/apple-studio-display.jpg" alt="Nature" width="400" height="400"/>
    //         <p className="mt-2">{product.name}</p>
    //         <p className="mt-2 break-all">{product.description}</p>
    //         <p className="mt-2">Price {product.price}$</p>
    //         <p className="mt-2"> View details</p>
    //       </div>

    //     ))
    //   }
    //   </div>
    // </div>
    <ProductDetails/>
  )
}

export default allItems
