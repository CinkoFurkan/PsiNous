import {configureStore} from "@reduxjs/toolkit";
import blog from "./blog/slice/slice"

const store = configureStore({
    reducer : {
        blog
    }
})

export default store