import {useSelector} from "react-redux";

export const useBlogs = () => useSelector((state) => state.blog.blogs)
