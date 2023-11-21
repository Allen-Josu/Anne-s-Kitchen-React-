import React from "react";
import { Link } from "react-router-dom";
import Information from "../components/Information";
import ZeroFootprint from "../components/ZeroFootprint";
import "../styles/style.css";
import Location from "../components/Location";

function Home() {
    return (
        <>
            <div className="container d-flex justify-content-center flex-column">
                <div className="d-flex align-items-center justify-content-center mt-5 ">
                    <img
                        style={{ width: "80%" }}
                        src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566868990918-JPJBFE44OW13OFILDIOM/yangskitchen_home.jpg?format=2500"
                        alt=""
                    />
                </div>
                <hr
                    className="mt-5"
                    style={{ height: "3rem", width: "90%", color: "black" }}
                />

                <Information />
                <hr
                    className="mt-4"
                    style={{ height: "3rem", width: "90%", color: "black" }}
                />

                <ZeroFootprint />
                <hr
                    className="mt-4"
                    style={{ height: "3rem", width: "90%", color: "black" }}
                />
                <Location />
            </div>
        </>
    );
}

export default Home;
