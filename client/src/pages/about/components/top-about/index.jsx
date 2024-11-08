import React from "react";

export default function TopAbout({aboutSections}) {
    return (
        <>
            <div className='flex justify-center w-full'>
                <p className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                    {aboutSections[1]?.title}
                </p>
            </div>
            <div>
                <p className='mb-3 text-mg text-center text-black'>
                    {aboutSections[1]?.text || "Default text if no data"}
                </p>
                {aboutSections[1]?.image && (
                    <img
                        src={aboutSections[0]?.image}
                        alt='About'
                        className='w-3/4 h-[410px] mx-auto mt-10'
                    />
                )}
            </div>
        </>

    )
}