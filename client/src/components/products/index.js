import React from "react";
import { useProducts } from "./products.hooks";
import Form from "./form";
import Confirmation from "../confirmationModal/confirmationModal";

const Products = () => {
  const {
    state,
    handleAddProductButton,
    habdleAddProduct,
    handleEditButton,
    habdleEditProduct,
    habdleDeleteProduct,
    closeModal,
    openModalHandler,
  } = useProducts();

  return (
    <div className="font-inter">
      {state.showAllProducts && (
        <div>
          <div className="flex items-center border-b mt-6 px-8 py-5">
            <div className="w-3/5">
              <h5 className="font-semibold text-base leading-6 text-gray-975">
                All Produts
              </h5>
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <button
                className="bg-green-800 rounded-lg pl-4 pr-4 pb-2 pt-2 font-semibold text-sm leading-5 text-white border border-green-800 hover:bg-green-825 focus:outline-none focus:border-green-825"
                onClick={handleAddProductButton}
              >
                + Add Product
              </button>
            </div>
          </div>
          <div className="ml-8 mt-6 font-medium text-xs leading-4 text-gray-525 mr-8 border-b pb-2">
            <div className="ml-4 mr-4 flex justify-between tracking-px_64">
              <div className="w-1/5">Name</div>
              <div className="w-1/5">Price</div>
              <div className="w-3/5">Description</div>
              <div className="w-1/5 text-right">Action</div>
            </div>
          </div>

          {state.products.map((product, index) => (
            <div className="mt-4 px-8" key={index}>
              <div className="flex items-center px-4 pt-4 pb-4 hover:bg-gray-100 hover-container">
                <div className="w-1/5 font-medium text-sm leading-5 tesxt-gray-825">
                  {product.name}
                </div>
                <div className="w-1/5 font-medium text-sm leading-5 text-gray-625">
                  {product.price}$
                </div>
                <div className="w-3/5 font-medium text-sm leading-5 text-gray-625">
                  {product.description}
                </div>
                <div className="w-1/5">
                  <div className="flex float-right display-flex">
                    <div
                      className="mr-6"
                      onClick={() => handleEditButton(product)}
                    >
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                      >
                        <path
                          d="M8.54963 2.78125H2.6777C2.23274 2.78125 1.80601 2.95801 1.49139 3.27264C1.17676 3.58726 1 4.01399 1 4.45895V16.2028C1 16.6478 1.17676 17.0745 1.49139 17.3891C1.80601 17.7038 2.23274 17.8805 2.6777 17.8805H14.4216C14.8665 17.8805 15.2932 17.7038 15.6079 17.3891C15.9225 17.0745 16.0993 16.6478 16.0993 16.2028V10.3309"
                          stroke="#2F80ED"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.8414 1.52119C15.1751 1.18748 15.6277 1 16.0996 1C16.5716 1 17.0242 1.18748 17.3579 1.52119C17.6916 1.85491 17.8791 2.30752 17.8791 2.77947C17.8791 3.25141 17.6916 3.70402 17.3579 4.03774L9.38884 12.0068L6.03345 12.8456L6.8723 9.49025L14.8414 1.52119Z"
                          stroke="#2F80ED"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div onClick={() => openModalHandler(product)}>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                      >
                        <path
                          d="M0.899902 4.60156H2.6999H17.0999"
                          stroke="#EB5757"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.39995 4.6V2.8C5.39995 2.32261 5.58959 1.86477 5.92716 1.52721C6.26472 1.18964 6.72256 1 7.19995 1H10.8C11.2773 1 11.7352 1.18964 12.0727 1.52721C12.4103 1.86477 12.6 2.32261 12.6 2.8V4.6M15.3 4.6V17.2C15.3 17.6774 15.1103 18.1352 14.7727 18.4728C14.4352 18.8104 13.9773 19 13.5 19H4.49995C4.02256 19 3.56472 18.8104 3.22716 18.4728C2.88959 18.1352 2.69995 17.6774 2.69995 17.2V4.6H15.3Z"
                          stroke="#EB5757"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.19995 9.10156V14.5016"
                          stroke="#EB5757"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.7998 9.10156V14.5016"
                          stroke="#EB5757"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {state.addNewProduct && (
        <Form
          id=""
          isAdd={true}
          name=""
          price={1}
          description=""
          imageUrl=""
          habdleAddProduct={habdleAddProduct}
          habdleEditProduct={habdleEditProduct}
        />
      )}

      {state.editProducts && (
        <Form
          isAdd={false}
          id={state.product._id}
          name={state.product.name}
          price={state.product.price}
          imageUrl={state.product.imageUrl}
          description={state.product.description}
          habdleAddProduct={habdleAddProduct}
          habdleEditProduct={habdleEditProduct}
        />
      )}

      <Confirmation
        isOpen={state.openModal}
        onRequestClose={closeModal}
        confirmation={habdleDeleteProduct}
        deleteIcon={true}
        confirmationTitle="You want to delete this Product"
        confirmationDescription="If you delete this product it will delete permanently"
        cancelText="Cancel"
        confirmText="Delete"
      />
    </div>
  );
};

export default Products;
