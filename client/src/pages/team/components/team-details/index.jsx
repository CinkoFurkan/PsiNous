import React from 'react';
import useFetch from '../../../../hooks/get';  // Assuming your useFetch hook is in a separate file

// Card component to display individual team member's image and description
const Card = ({ image, description }) => {
    const cardStyle = {
        width: 'calc(49% - 10px)', 
        height: 'auto', 
        borderRadius: '8px',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'contain', 
        borderRadius: '8px',
        backgroundColor: '#0000',
    };

    const descriptionStyle = {
        fontSize: '1rem',
        color: '#555',
        marginTop: '10px',
    };

    if (!image || !description) {
        // If either image or description is missing, don't render this card
        return null;
    }

    return (
        <div style={cardStyle}>
            {image && (
                <img src={image} alt="Team member" style={imageStyle} />
            )}
            {description && <p style={descriptionStyle}>{description}</p>}
        </div>
    );
};

// Cards container component to render all team members
const Cards = () => {
    const { data: teamData } = useFetch('team');  // Fetch data from the `/team` API endpoint

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '15px',
        margin: '20px',
        alignItems: 'flex-start', 
        padding: '20px', 
    };

    return (
        <div style={containerStyle}>
            {teamData?.team_infos?.length > 0 ? (
                teamData.team_infos.map((teamMember, index) => (
                    // Only render the Card if both image and description are available
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
