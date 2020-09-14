import React from 'react';
import { VectorMap } from "react-jvectormap";

const mapData = {
    CN: 100000,
    IN: 9900,
    SA: 86,
    EG: 70,
    SE: 0,
    FI: 0,
    FR: 0,
    US: 20
}

const handleClick = (e, countryCode) => {
    console.log(countryCode);
}


const BusinessMap = () => {
    return (
        <div>
            <VectorMap
                map={"world_mill"}
                backgroundColor="#F7F7F7" //change it to ocean blue: #0077be
                zoomOnScroll={false}
                containerStyle={{
                    width: "70rem",
                    height: "43rem",
                    padding: "2rem"
                }}
                onRegionClick={handleClick} //gets the country code
                containerClassName="map"
                regionStyle={{
                    initial: {
                        fill: "#G6G6G6",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        cursor: "pointer"
                    },
                    selected: {
                        fill: "#2938bc" //color for the clicked country
                    },
                    selectedHover: {}
                }}
                regionsSelectable={true}
                series={{
                    regions: [
                        {
                            values: mapData, //this is your data
                            scale: ["#146804", "#ff0000"], //your color game's here
                            normalizeFunction: "polynomial"
                        }
                    ]
                }}
            />
        </div>
    );
};

export default BusinessMap;
