import React from 'react';

const Artist = ({ artist }) => {
    if(!artist) return null;

    const {images, name , followers, genres} = artist;

    return (
        <div className="artist-details">
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            {/* the above line is used to combine the array items into single string */}
            <img 
                src={images[0] && images[0].url} 
                alt="artist-profile"
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 100,
                    ObjectFit: 'cover'
                }}
             />
        </div>
    )
}

export default Artist;