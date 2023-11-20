import React from "react";
import Header from "../components/Header";

function Home() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
                    <img
                        style={{ width: "80%" }}
                        src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566868990918-JPJBFE44OW13OFILDIOM/yangskitchen_home.jpg?format=2500"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
