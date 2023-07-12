import { useState, useEffect } from "react";
import { deleteProductApi, getProducts } from "../services/api";
import { toast } from "react-toastify";

export const useProducts = () => {
  function getInitialState() {
    return {
      products: [],
      product: "",
      showAllProducts: true,
      addNewProduct: false,
      editProducts: false,
      openModal: false,
    };
  }

  const [state, setState] = useState(getInitialState());

  useEffect(() => {
    const loadData = async () => {
      const response = await getProducts(localStorage.getItem("token"));
      const data = await response.json();
      setState((prevState) => ({
        ...prevState,
        products: data ? data : [],
      }));
    };
    loadData();
  }, []);

  function handleAddProductButton() {
    setState((prevState) => ({
      ...prevState,
      showAllProducts: false,
      addNewProduct: true,
    }));
  }

  function handleEditButton(product) {
    setState((prevState) => ({
      ...prevState,
      showAllProducts: false,
      editProducts: true,
      product: product,
    }));
  }

  function habdleAddProduct(product) {
    let arr = state.products;
    arr.push(product);
    setState((prevState) => ({
      ...prevState,
      products: arr,
      showAllProducts: true,
      addNewProduct: false,
    }));
  }

  function habdleEditProduct(product) {
    const products = state.products;
    const index = products.map((product) => product._id).indexOf(product._id);
    products.splice(index, 1, product);
    setState((prevState) => ({
      ...prevState,
      products: products,
      showAllProducts: true,
      editProducts: false,
      product: "",
    }));
  }

  async function habdleDeleteProduct() {
    const response = await deleteProductApi(
      state.product._id,
      localStorage.getItem("token")
    );
    const data = await response.json();

    if (response.status !== 200) {
      setState((prevState) => ({
        ...prevState,
        showAllProducts: true,
        addNewProduct: false,
        openModal: false,
        product: "",
      }));
      toast.error(data.msg);
    } else {
      const arr = state.products;
      arr.splice(state.product.product, 1);
      setState((prevState) => ({
        ...prevState,
        products: arr,
        showAllProducts: true,
        addNewProduct: false,
        openModal: false,
        product: "",
      }));
      toast.success(data.msg);
    }
  }

  function closeModal() {
    setState((prevState) => ({ ...prevState, openModal: false, product: "" }));
  }

  function openModalHandler(product) {
    setState((prevState) => ({
      ...prevState,
      openModal: true,
      product: product,
    }));
  }

  return {
    state,
    handleAddProductButton,
    habdleAddProduct,
    handleEditButton,
    habdleEditProduct,
    habdleDeleteProduct,
    closeModal,
    openModalHandler,
  };
};
