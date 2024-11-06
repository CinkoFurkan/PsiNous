import React from 'react';
import useFetch from '../../../../hooks/get';

const Card = ({ image, description }) => {
    if (!image) return null;

    return (
        <div className="w-full md:w-[48%] p-5 flex flex-col items-center text-center">
            <img
                src={image}
                alt="Team member"
                className="w-full h-auto rounded-md mb-4"
            />
            {description && (
                <p className="text-gray-800 text-base leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

const Cards = () => {
    const { data: teamData } = useFetch('team');

    return (
        <div className="flex flex-wrap justify-between gap-5 p-5">
            {teamData?.team_infos?.length > 0 ? (
                teamData.team_infos.map((teamMember, index) => (
                    <Card
                        key={index}
                        image={teamMember.image}
                        description={teamMember.description}
                    />
                ))
            ) : (
                <div>Loading team members...</div>
            )}
        </div>
    );
};

export default Cards;
