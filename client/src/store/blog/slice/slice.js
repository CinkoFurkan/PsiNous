import {createSlice} from "@reduxjs/toolkit";


const blogsData = [
    {
        id: 1,
        likes: 150,
        views: 1200,
        title: "Anksiyete ile Başa Çıkma Yolları",
    },
    {
        id: 2,
        likes: 240,
        views: 3000,
        title: "Stres Yönetimi İçin Etkili Teknikler",
    },
    {
        id: 3,
        likes: 512,
        views: 5200,
        title: "Özgüven Artırma Yöntemleri",
    },
    {
        id: 4,
        likes: 98,
        views: 1400,
        title: "Uyku Kalitesini Artırmak İçin Psikolojik Öneriler",
    },
    {
        id: 5,
        likes: 320,
        views: 4500,
        title: "Depresyon Belirtileri ve Destek Alma Yöntemleri",
    },
];


const blog = createSlice({
    name: "blog",
    initialState: {
       blogs : blogsData
    },
    reducers: {
        _setViews: (state, action) => {
            const blogViews = state.blogs.find((blog) => blog.id === action.payload);
            if(blogViews) {
                blogViews.views += 1
            }
        },
        _setLike: (state, action) => {
            const blogLikes = state.blogs.find((blog) => blog.id === action.payload);
            if(blogLikes) {
                blogLikes.likes += 1
            }
        }
    }
})


export const {_setViews, _setLike} = blog.actions
export default blog.reducer