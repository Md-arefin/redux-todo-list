import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Arefin',
    email: "arefin@gmail.com",
    userTasks: [],
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export default userSlice.reducer;