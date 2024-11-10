import {setLikes} from "../actions/actions";
import axios from "axios";

export const increaseLike = async(id) => {
    try {
        const { data } = await axios.put("")
        setLikes(data.blogs.id)
    }catch (error) {
        console.error(error.message);
    }
}