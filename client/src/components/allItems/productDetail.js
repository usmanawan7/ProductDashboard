import  React, { useState } from "react"

const ProductDetails = () => {
  return (
    <div>
      <div className="flex items-center border-t border-b mt-6 px-8 py-5">
        <div className="w-3/5">
          <h5 className="font-semibold text-base leading-6 text-gray-975">Detail Page</h5>
        </div>
      </div>
      <section className="text-gray-700 body-font overflow-hidden bg-white mt-4">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2  object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" width="200" height="200"/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 pl-4">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div className="flex flex-wrap items-center mt-4">
                <p className="title-font font-medium text-2xl text-gray-900 mr-8 ">$58.00</p>
                <button className="bg-green-800 rounded-lg pl-4 pr-4 pb-2 pt-2 font-semibold text-sm leading-5 text-white border border-green-800 hover:bg-green-825 focus:outline-none focus:border-green-825">+ Add Product</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="px-5 mt-4">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">All Commnents</h1>
      </div>
    </div>
  )
}

export default ProductDetails
