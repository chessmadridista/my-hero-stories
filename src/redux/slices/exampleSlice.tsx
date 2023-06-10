import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
    exampleData: string | null;
}

const initialState: ExampleState = {
    exampleData: null,
};
const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setExampleData: (state, action: PayloadAction<string>) => {
            state.exampleData = action.payload;
        },
    }
});

export const {setExampleData} = exampleSlice.actions;
export default exampleSlice.reducer;