import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        username:"Hariom"
    },
    reducers:{
        changeName:(state, actions)=>{
            // console.log("Hello")

            state.username = actions.payload;
        }
    }
})
export const {changeName} = userSlice.actions;
export default userSlice.reducer;