import React from 'react';

const Card = ({ image, title }) => {
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
        backgroundColor: '#4dab99',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        objectFit: 'contain', 
        borderRadius: '8px',
        backgroundColor: '#0000',
    };

    const titleStyle = {
        fontSize: '1.5rem',
        color: '#333',
        marginTop: '10px',
    };

    return (
        <div style={cardStyle}>
            {image ? (
                <img src={image} alt={title} style={imageStyle} />
            ) : (
                <div style={{ ...imageStyle, backgroundColor: '#0000' }}>
                    Görsel Yüklenemedi
                </div>
            )}
            {title && <h3 style={titleStyle}>{title}</h3>}
        </div>
    );
};

const Cards = () => {
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
            <Card 
                image="https://i.hizliresim.com/t9s9kc8.jpg"
            />
            <Card 
                image="https://i.hizliresim.com/83tk9w8.jpg"
            />
            <Card 
                image="https://i.hizliresim.com/3ockcsm.jpg"
            />
            <Card 
                image="https://i.hizliresim.com/4luwzot.jpg"
            />
            <Card 
                image="https://i.hizliresim.com/8t81nmq.jpg"
            />
            <Card 
                image="https://i.hizliresim.com/f8g9lvy.jpg"
            />
        </div>
    );
};

export default Cards;
