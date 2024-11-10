import axios from "axios";
import {setLikes} from "../actions/actions";


const increaceLikesAPI = async (id, newLike, newViews) => {
    try {
        const {data} = await axios.put("/psinous_app/api/like_view/", {id, new_like: newLike, new_view: newViews})
        setLikes(id)
    } catch (error) {
        console.log(error.message)
    }
}

export {increaceLikesAPI}