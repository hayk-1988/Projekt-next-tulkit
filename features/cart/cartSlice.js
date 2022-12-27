import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {myAxios} from "../../utils/request";
import axios from "axios";
import {getFilterCategories} from "../filter/filterSlice";


const initialState = {
    cartProducts: [],
    count: 0,
    status: 'idle',
}


export const getCartProducts = createAsyncThunk('cartProducts/getCartProducts',
    async (_, {rejectWithValue, dispatch}) => {
        const token = localStorage.getItem('token')
        try {
            const config1 = {
                method: 'get',
                url: "https://420.canamaster.net/cart/rest/1/1",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const res = await myAxios(config1)
            const config2 = {
                method: 'get',
                url: `https://420.canamaster.net/cart/rest/1/${res.data.count}`,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const data = await myAxios(config2)

            dispatch(setCount(res.data.count))
            dispatch(addCartProducts(data.data.data))
        } catch (err) {
            console.log(err)
        }
    })

export const deleteCartProductsFetch = createAsyncThunk('cartProducts/deleteCartProductsFetch',
    async (cartIds, {rejectWithValue, dispatch}) => {
        try {
            cartIds.map(async (elem) => {
                await axios.delete(`https://420.canamaster.net/cart/rest/${elem}`)
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
    extraReducers: (builder) => {
        builder.addCase(getCartProducts.pending, (state) => {
            console.log('pending');
            state.status = 'loading';
        });
        builder.addCase(getCartProducts.fulfilled, (state, action) => {
            console.log('fulfilled');
            state.status = 'idle';
        });
        builder.addCase(getCartProducts.rejected, (state, action) => {
            console.log('rejected');
            state.status = 'idle';
        })
    }
})

export const {addCartProducts, setCount, deleteCartProduct} = cartProductSliceReducer.actions

export default cartProductSliceReducer.reducer