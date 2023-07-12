function addProductApi(body, token) {
  return fetch("http://localhost:5000/api/products", {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(body),
  });
}

function editProductApi(id, body, token) {
  return fetch(`http://localhost:5000/api/products/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(body),
  });
}

function deleteProductApi(id, token) {
  return fetch(`http://localhost:5000/api/products/${id}`, {
    method: "Delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });
}

function getProducts(token) {
  return fetch("http://localhost:5000/api/products", {
    method: "Get",
    headers: {
      Accept: "application/json",
      "x-auth-token": token,
    },
  });
}

function loginApi(body) {
  return fetch("http://localhost:5000/api/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

function loadUser(token) {
  return fetch("http://localhost:5000/api/auth", {
    method: "GET",
    headers: {
      "x-auth-token": token,
    }
  });
}

export {
  addProductApi,
  editProductApi,
  deleteProductApi,
  getProducts,
  loginApi,
  loadUser,
};
