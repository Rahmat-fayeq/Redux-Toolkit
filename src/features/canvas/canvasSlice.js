import { fetchRandomColor } from "./canvasAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initalState = {
    color:{
        code: '#000000',
        status: null,
    },
    font:{
        size: 16,
    }
}

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState: initalState,
    reducers:{
        changeColor:(state,action)=>{
            state.color.code = action.payload;
        },
        changeFont:(state,action)=>{
            state.font.size = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(paintColorAsync.pending, (state)=>{
            state.color.status = true;
        })
        builder.addCase(paintColorAsync.fulfilled, (state, action)=>{
            state.color.status = false;
            state.color.code = action.payload;
        })
        builder.addCase(paintColorAsync.rejected, (state)=>{
            state.color.status = 'rejected';
        })
    }
});

export const paintColorAsync = createAsyncThunk('canvas/fetchRandomColor', async ()=>{
    const response = await fetchRandomColor();
    return response.data;
});

export const selectColor = state => state.canvas.color.code;
export const selectFont = state => state.canvas.font.size;
export const selectColorLoading = state => state.canvas.color.status;

export const {changeColor, changeFont} = canvasSlice.actions;
export default canvasSlice.reducer;