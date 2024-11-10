import {createSlice} from "@reduxjs/toolkit";


const blog = createSlice({
    name: "blog",
    initialState: {
        blogs : []
    },
    reducers: {
        _setBlogs: (state, action) => {
            state.blogs = action.payload
        },
        _setViews: (state, action) => {
            const blogViews = state.blogs.find((blog) => blog.id === action.payload);
            if (blogViews) {
                blogViews.views += 1
            }
        },
        _setLike: (state, action) => {
            const blogLikes = state.blogs.find((blog) => blog.id === action.payload);
            if (blogLikes) {
                blogLikes.likes += 1
            }
        }
    }
})


export const {_setViews, _setLike , _setBlogs} = blog.actions
export default blog.reducer