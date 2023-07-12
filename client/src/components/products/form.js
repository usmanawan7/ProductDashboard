import React, { useState } from "react";
import { addProductApi, editProductApi } from "../services/api";
import { toast } from "react-toastify";

import { FireBasestorage } from "../services/FireBaseImageUploader";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const Form = ({
  isAdd,
  id,
  name,
  price,
  description,
  imageUrl,
  habdleAddProduct,
  habdleEditProduct,
}) => {
  function getInitialState() {
    return {
      product: {
        name,
        price,
        description,
        id,
        imageUrl,
      },
    };
  }

  const [state, setState] = useState(getInitialState());
  const [filename, setFilename] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageRef, setImageRef] = useState(null); // Store reference to the uploaded image

  function handleProductInputChange(e) {
    e.persist();
    setState((prevState) => ({
      product: {
        ...prevState.product,
        [e.target.name]:
          e.target.name === price ? Number(e.target.value) : e.target.value,
      },
    }));
  }

  async function addProduct() {
    const response = await addProductApi(
      state.product,
      localStorage.getItem("token")
    );
    const data = await response.json();
    if (response.status === 200) {
      habdleAddProduct(data);
      toast.success("Product Added");
    } else {
      toast.error(data.errors.map((error) => error.msg).join(","));
    }
  }

  async function editProduct() {
    const response = await editProductApi(
      state.product.id,
      state.product,
      localStorage.getItem("token")
    );
    const data = await response.json();
    if (response.status === 200) {
      habdleEditProduct(data);
      toast.success("Product updated");
    } else {
      toast.error(data.errors.map((error) => error.msg).join(","));
    }
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setFilename(file.name);
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };

      const storageRef = ref(FireBasestorage, "images/" + file.name);

      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      setImageRef(storageRef);
      setState((prevState) => ({
        product: {
          ...prevState.product,
          imageUrl: downloadURL,
        },
      }));
      reader.readAsDataURL(file);
      toast.success("Image Uploaded");
    } else {
      setFilename("");
      setImagePreview(null);
    }
  };

  const handleImageClick = () => {
    document.getElementById("upload").click();
  };

  const handleDeleteImage = async () => {
    if (imageRef) {
      try {
        await deleteObject(imageRef);
        setImagePreview(null);
        setFilename("");
        setImageRef(null);
        toast.success("Image deleted");
      } catch (error) {
        console.error("Delete failed:", error);
      }
    } else {
      alert("No image to delete");
    }
  };

  return (
    <div className="font-inter px-5">
      <div className="flex items-center border-b mt-6 px-8 py-5">
        <div className="w-3/5">
          <h5 className="font-semibold text-base leading-6 text-gray-975">
            Produt
          </h5>
        </div>
        {isAdd ? (
          <div className="w-1/2 flex items-center justify-end">
            <button
              className="bg-green-800 rounded-lg pl-4 pr-4 pb-2 pt-2 font-semibold text-sm leading-5 text-white border border-green-800 hover:bg-green-825 focus:outline-none focus:border-green-825"
              onClick={addProduct}
            >
              Add
            </button>
          </div>
        ) : (
          <div className="w-1/2 flex items-center justify-end">
            <button
              className="bg-green-800 rounded-lg pl-4 pr-4 pb-2 pt-2 font-semibold text-sm leading-5 text-white border border-green-800 hover:bg-green-825 focus:outline-none focus:border-green-825"
              onClick={editProduct}
            >
              Edit
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-centers">
        <div className="w-1/3">
          <p className="font-medium text-xs leading-4 text-gray-725 mb-1">
            Name
          </p>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="name"
            onChange={handleProductInputChange}
            value={state.product.name}
          />
        </div>
        <div className="w-1/3 ml-5">
          <p className="font-medium text-xs leading-4 text-gray-725 mb-1">
            Price
          </p>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            min="1"
            name="price"
            onChange={handleProductInputChange}
            value={state.product.price}
          />
        </div>
      </div>

      <div className="mt-4 flex items-centers">
        <div className="w-1/3">
          <label className="block font-medium text-xs leading-4 text-gray-725 mb-1 mt-4">
            Description
          </label>
          <textarea
            className="block w-full max-w-xs h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="description"
            onChange={handleProductInputChange}
            value={state.product.description}
          />
        </div>

        {!imageUrl ? (
          <section className="items-center">
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
              <div className="px-4 py-6">
                {!imagePreview && (
                  <div
                    id="image-preview"
                    className={`max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 rounded-lg items-center mx-auto text-center cursor-pointer ${
                      imagePreview ? "border-transparent" : "border-gray-400"
                    }`}
                    onClick={handleImageClick}
                  >
                    <input
                      id="upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="upload" className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-gray-700 mx-auto mb-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                        Upload picture
                      </h5>
                      <p className="font-normal text-sm text-gray-400 md:px-6">
                        Choose photo size should be less than{" "}
                        <b className="text-gray-600">2mb</b>
                      </p>
                      <p className="font-normal text-sm text-gray-400 md:px-6">
                        and should be in{" "}
                        <b className="text-gray-600">JPG, PNG, or GIF</b>{" "}
                        format.
                      </p>
                      <span
                        id="filename"
                        className="text-gray-500 bg-gray-200 z-50"
                      >
                        {filename}
                      </span>
                    </label>
                  </div>
                )}

                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      className="max-h-48 rounded-lg"
                      alt="Image preview"
                    />
                    <button
                      onClick={handleDeleteImage}
                      className="mt-2 w-full bg-red-900 text-white hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer"
                    >
                      <span className="text-center ml-2">Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : (
          <img
            class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src={imageUrl}
            alt="image description"
          ></img>
        )}
      </div>
    </div>
  );
};

export default Form;
