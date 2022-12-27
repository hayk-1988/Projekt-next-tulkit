import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName(state, action) {
            state.firstName = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setLastName(state, action) {
            state.lasName = action.payload
        }
    }

})

export const {setFirstName, setLastName, setEmail} = userSlice.actions

export default userSlice.reducer