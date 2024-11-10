import store from "../../store";
import {_setBlogs, _setLike, _setViews} from "../slice/slice";


export const setViews = views => store.dispatch(_setViews(views))
export const setLikes = like => store.dispatch(_setLike(like))
export const setBlogs = blogs => store.dispatch(_setBlogs(blogs))