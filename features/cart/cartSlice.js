import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {deleteCartProductsReq, getCartProductReq} from "./api";


const initialState = {
    cartProducts: [],
    count: 0,
    status: 'idle',
}

export const getCartProducts = createAsyncThunk('cartProducts/getCartProducts',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const res = await getCartProductReq()

            dispatch(setCount(res.data.count))
            dispatch(addCartProducts(res.data.data))
        } catch (err) {
            console.log(err)
        }
    })

export const deleteCartProductsFetch = createAsyncThunk('cartProducts/deleteCartProductsFetch',
    async (cartIds, {rejectWithValue, dispatch}) => {
        try {
            await deleteCartProductsReq(cartIds)
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
            state.cartProducts = state.cartProducts?.filter(cProd => cProd.productId !== acton.payload)
        },
        clearCart(state, action){
            state.cartProducts = []
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

export const {addCartProducts, setCount, deleteCartProduct, clearCart} = cartProductSliceReducer.actions

export default cartProductSliceReducer.reducer