import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../Data/Categories";


const initialState = {
    value: {
        categories: CATEGORIES,
        categorySelected: "",
    }
}
export const categoriesSlice = createSlice({
    name: "categories",
    initialStat: initialState,
    reducers: {

    }
})

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export default categoriesSlice.reducer


