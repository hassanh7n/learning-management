import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    isLoading : false,
    isSidebarOpen : false,
    user : null,
    token : [],
    Loading : false,
}



const userSlice = createSlice({
    name : 'user',
    initialState,
});





export default userSlice.reducer;