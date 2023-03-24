import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        password: ""
    },
    reducers: {
        login:(state, action)=>{
            //payload:{username: "bhawna", password: "1234"}
            state.username=action.payload.username
            state.password=action.payload.password
        },
        logout:(state, action) => {
            state.username=""
            state.password=""
        },
    }
})
//action creators are created for each reducer func
export const {login, logout } = userSlice.actions
export default userSlice.reducer
