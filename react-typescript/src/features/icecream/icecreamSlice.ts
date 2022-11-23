import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
	numberOfIcecreams: number	
}

const initialState:InitialState = {
	numberOfIcecreams: 20,
};

const icecreamSlice = createSlice({
	name: "icecream",
	initialState,
	reducers: {
		ordered: (state, action: PayloadAction<number>) => {
			state.numberOfIcecreams -= action.payload;
		},
		restocked: (state, action) => {
			state.numberOfIcecreams += action.payload;
		},
	},
	extraReducers: {
		["cake/ordered"]: (state, action) => {
			state.numberOfIcecreams -= action.payload;
		},
	},
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
