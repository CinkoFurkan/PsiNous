import {configureStore} from "@reduxjs/toolkit";
import blog from "./blog/slice/slice"
import loading from "./loading/slice/slice";

const store = configureStore({
    reducer : {
        blog,
        loading
    }
})

export default store