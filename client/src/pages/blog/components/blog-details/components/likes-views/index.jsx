import {AiFillLike} from "react-icons/ai";
import {FaEye} from "react-icons/fa";

export default function LikesViews({data}) {
    return (
        <div className="flex space-x-6">
              <span
                    className="flex items-center cursor-pointer transition-colors duration-300">
                <AiFillLike className="text-gray-600 hover:text-blue-700 text-lg mr-1"/>
                <span className="font-semibold">
                  {data.blogs?.likes || 0} Likes
                </span>
              </span>
            <span className="flex items-center text-gray-600">
                <FaEye className="w-5 h-5 mr-1"/>
                <span className="font-semibold">
                  {data.blogs?.views || 0} Views
                </span>
              </span>
        </div>
    )
}