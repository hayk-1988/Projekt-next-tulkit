import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getReq} from "../../utils/request";

const initialState = {
    categories: [],
    filterData: {},
    value: 0,
    status: 'idle',
    error: {
        value: '',
    },
};
export const getFilterCategories = createAsyncThunk(
    'counter/getFilterCategories',
    async function (_, {rejectWithValue}) {

        return await getReq('https://420.canamaster.net/api/v1/products/shop/categories/0/23');
    }
);

export const getFilterProducts = createAsyncThunk(
    'counter/getFilterProducts',
    async function ({categoryId = 0, minMax= [], limit= 10, page= 1}, {rejectWithValue}){

        return await getReq(`https://420.canamaster.net/api/v1/products/category/new/${categoryId}/${page}/${limit}?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[${minMax}]&&brandIds=[]`);

        // return await getReq(`https://420.canamaster.net/api/v1/products/category/new/[250]/1/10?filterIds=[]&&attributeIds=[]&&productIds=[]&&parentCategoryId=23&&priceMinMax=[1,24]&&brandIds=[]`);
    }
);
export const filterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setCategories: (state, action) => {

            state.categories = action.payload
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFilterCategories.pending, (state) => {
            console.log('pending');
            state.status = 'loading';
        });
        builder.addCase(getFilterCategories.fulfilled, (state, action) => {
            console.log('fulfilled');
            state.status = 'idle';
            state.categories = action.payload.categories;
        });
        builder.addCase(getFilterCategories.rejected, (state, action) => {
            console.log('rejected');
            state.status = 'idle';
            state.error.value = action.payload;
        });
        builder.addCase(getFilterProducts.pending, (state) => {
            console.log('pending');
            state.status = 'loading';
        });
        builder.addCase(getFilterProducts.fulfilled, (state, action) => {
            console.log('fulfilled');
            state.status = 'idle';
            state.filterData = action.payload;
        });
        builder.addCase(getFilterProducts.rejected, (state, action) => {
            console.log('rejected');
            state.status = 'idle';
            state.error.value = action.payload;
        });
    },
});
export const {increment, decrement, incrementByAmount, setCategories} = filterSlice.actions;

export const selectCount = (state) => state.counter.value;


export const incrementIfOdd = (amount) => {
    return function (dispatch, getState) {
        const currentValue = selectCount(getState());
        if (currentValue % 2 === 1) {
            dispatch(incrementByAmount(amount));
        }
    };
};
export default filterSlice.reducer;