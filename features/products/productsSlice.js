import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {myAxios} from "../../utils/request";
import {productAdapter} from "../../utils/adaptors";
import {getProductsReq} from "./api";


const initialState = {
    products: [],
    count: 1,
    pages: 1,
    status: 'idle',
    token: null
}

export const getProducts = createAsyncThunk('products/getProducts',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            return await getProductsReq()
        } catch (err) {
            console.log(err)
        }
    })


export const productSliceReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts(state, action) {
            state.products = action.payload
        },
        setPages(state, action) {
            state.pages = action.payload
        },
        setPage(state, action) {
            state.count = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        incCount(state) {
            ++state.count
        },
        decCount(state) {
            --state.count
        }
    },

    extraReducers: (builder) => {

        builder.addCase(getProducts.pending, (state) => {
            console.log('pending');
            state.status = 'loading';
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            console.log('fulfilled');
            state.status = 'idle';
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            console.log('rejected');
            state.status = 'idle';
        });
    }
})

export const {addProducts, setPages, incCount, decCount, setPage, setToken} = productSliceReducer.actions

export default productSliceReducer.reducer