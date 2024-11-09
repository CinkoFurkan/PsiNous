import store from "../../store";
import {_setLike, _setViews} from "../slice/slice";


export const setViews = views => store.dispatch(_setViews(views))
export const setLikes = like => store.dispatch(_setLike(like))