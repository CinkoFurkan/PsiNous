import React from 'react';
import useFetch from '../../hooks/get';

const About = () => {
  // Fetch data from the `/about` API endpoint
  const { data: aboutData } = useFetch('about');
  

  // Ensure the API has data before rendering
  const aboutSections = aboutData?.about || [];

  const otherAboutSections = aboutData?.about?.slice(2, 4) || []

  console.log(otherAboutSections);
  

  return (
    <div>
      <section>
        <div className='py-8 text-black'>
          <div className='container items-start mx-auto my-12 md:flex-row'>
            <div className='flex justify-center w-full'>
              <p className='mb-3 text-lg font-bold md:text-2xl text-primary'>
             { aboutSections[1]?.title}
              </p>
            </div>
            <div>
              <p className='mb-3 text-sm text-center text-black'>
                {aboutSections[1]?.text || "Default text if no data"}
              </p>
              {aboutSections[1]?.image && (
                <img
                  src={aboutSections[0]?.image}
                  alt='About'
                  className='w-[6/12] h-[200px] mx-auto'
                />
              )}
            </div>
            <div className='ml-0'>
              <div className='container w-full h-full mx-auto'>
                <div className='relative h-full p-10 overflow-hidden wrap'>
                  <div
                    className='absolute h-full border-2'
                    style={{
                      right: '50%',
                      border: '2px solid #FFC100',
                      borderRadius: '1%',
                    }}
                  ></div>
                  <div
                    className='absolute h-full border-2'
                    style={{
                      left: '50%',
                      border: '2px solid #FFC100',
                      borderRadius: '1%',
                    }}
                  ></div>

                  {otherAboutSections.map((section, index) => (
                    <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center justify-between w-full mb-8`}>
                      <div className='order-1 w-5/12'>
                        {section.image && (
                          <img
                            src={section.image}
                            alt={section.title}
                            className='w-full h-auto'
                          />
                        )}
                      </div>
                      <div className='order-1 w-5/12 px-1 py-4'>
                        <h4 className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                          {section.title}
                        </h4>
                        <p className='text-sm leading-snug text-black md:text-base'>
                          {section.text}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
            <div className='flex justify-center w-full mt-12'>
              <div className='text-center'>
                <h4 className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                {aboutSections[4]?.title}
                </h4>
                <p className='text-sm leading-snug text-black md:text-base italic'>
                {aboutSections[4]?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
