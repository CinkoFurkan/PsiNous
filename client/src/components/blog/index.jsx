import React from 'react';
import useFetch from '../../hooks/get';

const Blog = () => {
  const { data } = useFetch('psinous_app/api/blog');

  console.log(data);

  return data && data.blogs ? (
    <div className='flex flex-col items-center w-full p-8 mt-10'>
      <h1 className='mb-8 text-4xl font-bold text-gray-900'>Blog Posts</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {data.blogs.map((blog, index) => (
          <div key={index} className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flex flex-col items-center justify-between p-4 bg-white border rounded-lg shadow-md flip-card-front'>
                {/* Blog Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='object-cover w-full h-48 rounded-md'
                />
                {/* Blog Title */}
                <h2 className='mt-4 text-xl font-semibold text-gray-800'>
                  {blog.title}
                </h2>
                {/* Author Info */}
                <div className='flex items-center mt-4'>
                  <img
                    src={blog.writer_image}
                    alt={`${blog.writer_f} ${blog.writer_l}`}
                    className='w-10 h-10 mr-3 rounded-full'
                  />
                  <div>
                    <p className='text-sm font-medium text-gray-800'>
                      {blog.writer_f} {blog.writer_l}
                    </p>
                    <p className='text-xs text-gray-500'>{blog.writer_title}</p>
                  </div>
                </div>
              </div>

              {/* Back Side of the Card */}
              <div className='flex flex-col items-center justify-center p-4 flip-card-back'>
                <p className='text-sm'>{blog.short_text}</p>
                <button className='px-4 py-2 mt-4 text-white rounded-md bg-primary hover:bg-blue-700'>
                  Daha Fazla
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Blog;
