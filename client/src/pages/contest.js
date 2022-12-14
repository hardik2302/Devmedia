import React, { useState, useEffect } from "react";

const Contest = () => {
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
            <div className="page">
                <div className="row">
                <div className="col-md-10">
                        <h1 className="space">Search Hiring Challenges</h1>
                        <div class="box">
                            <div className="row">
                                <div className="col1">
                                    <img src="flipkart.png"></img>
                                </div>
                                <div className="col2">
                                    <div className="heading"><strong>Flipkart Gird 2.0</strong></div>
                                    <div className="subheading">Flipkart</div>
                                    <div className="subheading">17,836 Registered</div>
                                    <div className="subheading">10 days left</div>
                                    <button>Register</button>
                                </div>
                            </div>
                        </div>  
                        <div class="box">
                            <div className="row">
                                <div className="col1">
                                    <img src="amazon.png"></img>
                                </div>
                                <div className="col2">
                                    <div className="heading"><strong>Amazon Wow</strong></div>
                                    <div className="subheading">Amazon</div>
                                    <div className="subheading">2,068 Registered</div>
                                    <div className="subheading">8 days left</div>
                                    <button>Register</button>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div className="row">
                                <div className="col1">
                                    <img src="google.png"></img>
                                </div>
                                <div className="col2">
                                    <div className="heading"><strong>Google Kickstart</strong></div>
                                    <div className="subheading">Google</div>
                                    <div className="subheading">175 Registered</div>
                                    <div className="subheading">21 hours left</div>
                                    <button>Register</button>
                                </div>
                            </div>
                        </div>   
                        <div class="box">
                            <div className="row">
                                <div className="col1">
                                    <img src="zs.jfif"></img>
                                </div>
                                <div className="col2">
                                    <div className="heading"><strong>ZS Case Challenges</strong></div>
                                    <div className="subheading">ZS Association</div>
                                    <div className="subheading">1.3L Views</div>
                                    <div className="subheading">29 days left</div>
                                    <button>Register</button>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-2">
                    <div className="filter">
                        <div className="filterhead">Filters<span className="filtersub">Reset Filters</span></div>
                        <hr></hr>
                        <div className="size">Team Size : <span><input type="range" min="1" max="5" ></input></span></div>
                        <hr></hr>
                        <div className="size">Payment <span>
                            <input type="radio" name="pay" value="all" className="rad"></input> <label for="all">All</label>
                            <input type="radio" name="pay" value="free" className="rad"></input> <label for="free">Free</label>
                            <input type="radio" name="pay" value="paid" className="rad"></input> <label for="paid">Paid</label>
                            </span>
                        </div>
                        <hr></hr>
                        <div>
                        <div className="size">Eligibility</div>
                        <div>
                                <input type="radio" name="pay" value="all" className="rady"></input> <label for="all">All</label>
                        </div>
                        <div>
                                <input type="radio" name="pay" value="prof" className="rady"></input> <label for="prof">Professional</label>
                        </div>
                        <div>
                                <input type="radio" name="pay" value="start" className="rady"></input> <label for="start">Startups</label>
                        </div>
                        <div>
                                <input type="radio" name="pay" value="school" className="rady"></input> <label for="school">School Students</label>
                        </div>
                        <div>
                                <input type="radio" name="pay" value="college" className="rady"></input> <label for="college">College Students</label>
                        </div>
                        </div>
                    </div>
                </div>
                </div> 
            </div>               
        </div>)
};

export default Contest;