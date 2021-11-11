import React, { useState, useEffect } from "react";

const Geolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);
    return(
        <div>
                                 {/* {location.loaded
                                    ? JSON.stringify(location)
                                    : "Location data not available yet."} */}
                                <iframe src={`https://maps.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`} title="mycurrentlocation" width="100%" height="650px"/>
                            </div>)
};

export default Geolocation;