import React from "react";

function Gallery() {
    return (
        <>
            <div className="d-flex justify-content-evenly align-item-center flex-column m-5">
                <div className="d-flex justify-content-evenly align-items-center">
                    <img
                        style={{
                            height: "500px",
                            width: "700px",
                            padding: "2%",
                        }}
                        src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566963493871-ETXLCH49FLZUB3A0Y1QT/yangskitchen_01.png?format=2500w"
                        alt=""
                    />
                    <img
                        style={{
                            height: "700px",
                            width: "500px",
                            padding: "2%",
                        }}
                        src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1566964014153-2JAH31CL236V51TSY4SW/yangskitchen_02.png?format=2500w"
                        alt=""
                    />
                </div>
                <div className="d-flex justify-content-evenly align-items-center">
                    <img
                        style={{ padding: "2%" }}
                        src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1567211236536-2J8GFZCSFGORYJYOKK60/emblem-green-02-02.png?format=2500w"
                        alt=""
                    />

                    <p
                        style={{
                            textAlign:"justify",
                            width: "35%",
                        }}
                    >
                        Anne's Kitchen strives to source local, sustainable and
                        organic when possible. We work hard to source premium
                        ingredients and we cook everything from scratch with
                        love. We also do our best to pay our employees living
                        wages (tips are shared with all employees, including
                        kitchen staff) and to reduce our environmental footprint
                        wherever we can. Overall, these factors translate to
                        higher menu prices, but we hope that you find value and
                        feel a sense of comfort in knowing that we aim to get
                        better everyday at doing what is important to us....
                    </p>
                </div>
                <img className="mt-3" src="https://images.squarespace-cdn.com/content/v1/5c42b91c697a9873ebf844b8/1619135748199-I56FXBEVWXC1QXGK17BZ/Apr+11+2021DSC07442.jpg?format=2500w" alt="" />
            </div>
        </>
    );
}

export default Gallery;
