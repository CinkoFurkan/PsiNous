import {AiFillLike} from "react-icons/ai";
import {FaEye} from "react-icons/fa";
import {useEffect} from "react";
import {setBlogs, setLikes} from "../../../../../../store/blog/actions/actions";
import {useBlogs} from "../../../../../../store/hooks/hooks";

export default function LikesViews({data, incremenetLikes, blogID}) {

    const currentLikes = data.blogs?.likes_count || 0;

    const handleLike = () => {
        incremenetLikes(blogID, currentLikes + 1, currentViews);
    };


    return (
        <div className="flex space-x-6">
            <span onClick={handleLike} className="flex items-center cursor-pointer transition-colors duration-300">
                <AiFillLike className="text-gray-600 hover:text-blue-700 text-lg mr-1"/>
                <span className="font-semibold">{currentLikes}</span>
            </span>
            <span onClick={handleView} className="flex items-center text-gray-600">
                <FaEye className="w-5 h-5 mr-1"/>
                <span className="font-semibold">Views</span>
            </span>
        </div>
    );
}
