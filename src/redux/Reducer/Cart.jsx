import {createSlice} from '@reduxjs/toolkit'


const cartslice = createSlice({
    name:'cart',
    initialState:{
        list:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.list=[...state.list, action.payload]
        },
    

    }
});

export const {additem} = cartslice.actions

export default cartslice.reducer;