import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {deleteReq, getByTokenReq} from "../../utils/request";


const initialState = {
    cartProducts: [],
    count: 0,
    status: 'idle',
}


export const getCartProducts = createAsyncThunk('cartProducts/getCartProducts',
    async (_, {rejectWithValue, dispatch}) =>  {
        console.log('voooooooooooooooovvvvv======')
        const token = localStorage.getItem('token')
        let firstDataForCount = await getByTokenReq("https://420.canamaster.net/cart/rest/1/1", token);
        let res = await getByTokenReq(`https://420.canamaster.net/cart/rest/1/${firstDataForCount.count}`, token);

        dispatch(setCount(res.count))
        dispatch(addCartProducts(res.data))
    })

export const deleteCartProductsFetch = createAsyncThunk('cartProducts/deleteCartProductsFetch',
    async (cartIds, {rejectWithValue, dispatch}) => {
        try {
            cartIds.map(async (elem) => {
                await deleteReq(`https://420.canamaster.net/cart/rest/${elem}`)
            })
        } catch (err) {
            console.log(err)
        }
    })


export const cartProductSliceReducer = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addCartProducts(state, action) {
            state.cartProducts = action.payload
        },
        setCount(state, action) {
            state.count = action.payload
        },
        deleteCartProduct(state, acton) {
            --state.count
            state.cartProducts = state.cartProducts.filter(cProd => cProd.productId !== acton.payload)
        }

    },
    extraReducers: {
        [getCartProducts.fulfilled]() {
            console.log('getCartProducts: fulfilled')
        },
        [getCartProducts.pending](state) {
            state.status = 'loading';
        },
        [getCartProducts.rejected]() {
            console.log('getCartProducts: rejected')
        }
    }
})

export const {addCartProducts, setCount, deleteCartProduct} = cartProductSliceReducer.actions

export default cartProductSliceReducer.reducer