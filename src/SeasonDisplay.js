import React from 'react';

// Determine which hemisphere and which season the user is in.
const getSeason = (lat, month) => {
    if (((month < 4 || month > 9) && lat > 0) ||
        ((month >= 4 && month <= 9) && lat <= 0)) {
            return 'Winter';
    }
    return 'Summer'
}

const SeasonDisplay = (props) => {
    if (props.lat) {
        if (props.lat === 'none') {
            return <div>Location data not found.</div>;
        }
        let season = getSeason(props.lat, props.month);
        return <div>It is {season}!</div>;
        
    }
    return <div>Loading...</div>;
}

export default SeasonDisplay;