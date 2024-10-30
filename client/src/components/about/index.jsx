import React from 'react';
import useFetch from '../../hooks/get';

const About = () => {
    const { data } = useFetch('psinous_app/api/about/');

    return (
      data && data.about ? (
        <div className="w-full flex justify-center items-center p-8 mt-20"> {/* Updated background color */}
          {data.about[0] && ( 
            <div key={0} className="w-5/6 flex justify-center items-center bg-[#e8e4d8] rounded-lg shadow-md p-12 transition-transform duration-300 transform"> 
              
            
             <div className="w-1/2 flex justify-center">
                <img
                  src={data.about[0].image} 
                  alt="About Us"
                  className="rounded-lg shadow-lg object-cover w-full h-96" 
                />
              </div>

              <div className='flex flex-col md:w-1/2 space-y-4 p-4'>
                <h3 className='text-center font-bold text-2xl'>{data.about[0].title}</h3>
                <div className="w-full text-black"> 
                  <p className="leading-relaxed text-md text-center">
                    {data.about[0].text}
                  </p>
                </div>
                <div>
                  <div className='flex items-center justify-center'>
                    <button className="mt-4 px-6 py-2 bg-[#b60707] text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-200 transform hover:scale-105">
                      Daha Fazla
                    </button> 
                  </div>
                </div>
              </div>
             </div>
          )}
        </div>
      ) : null
    );
};

export default About;
