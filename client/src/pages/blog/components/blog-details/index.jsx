import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/get";
import { AiFillLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  const { data } = useFetch(`/blog/${id}`);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${data.blogs?.image})`,
        }}
        title={data.blogs?.title}
      ></div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg -mt-60">
        <div className="p-5 sm:p-10">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {data.blogs?.title}
            </h1>
          </header>
          <main className="mt-8">
            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none whitespace-pre-line">
              <div>{data.blogs?.text}</div>
              <p className="text-gray-500 text-right px-3 py-3">
                {new Date(data.blogs?.created_at).toLocaleDateString()}
              </p>
            </div>
          </main>
          <footer className="mt-10 flex justify-between items-center text-gray-700 text-sm border-t pt-4">
            <div className="flex flex-col items-center text-gray-600">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={data.blogs?.writer_image}
                  alt={`${data.blogs?.writer_f} ${data.blogs?.writer_l}`}
                  className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-700">
                    {data.blogs?.writer_f} {data.blogs?.writer_l}
                  </p>
                  <p className="text-sm text-gray-500">
                    {data.blogs?.writer_title}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-6">
              <span className="flex items-center cursor-pointer transition-colors duration-300">
                <AiFillLike className="text-gray-600 hover:text-blue-700 text-lg mr-1" />
                <span className="font-semibold">
                  {data.blogs?.likes || 0} Likes
                </span>
              </span>
              <span className="flex items-center text-gray-600">
                <FaEye className="w-5 h-5 mr-1" />
                <span className="font-semibold">
                  {data.blogs?.views || 0} Views
                </span>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
