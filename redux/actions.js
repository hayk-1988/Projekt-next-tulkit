

export function fetchProducts() {
    return async (dispatch,getState) => {
        const page = getState().counter.value
        console.log('esi pagna actioni mej',page)
        dispatch(todosLoading());
        const response = await fetch(
            `https://420.canamaster.net/api/v1/products/popular/${page}/10`
        );
        const products = await response.json();
        dispatch(productsLoaded(products.products));
    }
}

export function fetchTodos() {
  return async (dispatch,getState) => {
      const id = getState().counter.value
      dispatch(todosLoading());
      const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const todo = await response.json();
      dispatch(todosLoaded(todo));
  }
}


export const todosLoading = () => ({ type: "todos/todosLoading" });
export const todosLoaded = (todos) => ({
    type: "todos/todosLoaded",
    payload: todos,
});


export const productsLoaded = (products) => ({
    type: "products/productsLoaded",
    payload: products,
});

export const cartProductsLoaded = (cartProducts) => ({
    type: "cartProducts/cartProductsLoaded",
    payload: cartProducts,
});

export const tokenAction = (token) => ({
    type: "token/addToken",
    payload: token,
});




// export function loadUser() {
//     return (dispatch, getState) => {
//         return loadCurrentUser().then((loadedUser) => {
//             dispatch(editName(loadedUser.name))
//         })
//     };
// }