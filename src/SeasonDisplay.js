import React from 'react';

const SeasonDisplay = (props) => {
    if (props.lat) {
        // Determine which hemisphere and which season the user is in.
        let season = "Summer";
        if (((props.month < 4 || props.month > 9) && props.lat > 0) ||
            ((props.month >= 4 && props.month <= 9) && props.lat <= 0)) {
                season = "Winter";
        }
        return <div>It is {season}!</div>;
        
    }
    return <div>Loading...</div>;
}

export default SeasonDisplay;