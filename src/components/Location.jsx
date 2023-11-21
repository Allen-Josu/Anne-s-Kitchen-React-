import React from "react";
import { Link } from "react-router-dom";

function Location() {
    return (
        <>
            <div className="d-flex justify-content-around  ">
                <div>
                    <h3 className="heading">LOCATION</h3>
                    <p className="text-center" style={{ fontSize: "18px" }}>
                        112 West Inies <br />
                        Alcabenna, VS 19520
                    </p>
                </div>

                <div>
                    <h3 className="heading">hours</h3>
                    <p className="text-center" style={{ fontSize: "18px" }}>
                        Brunch: Thursday - Monday, 9am to 2:30pm <br />
                        Dinner: Thursday - Sunday, 5pm to 9pm <br />
                        Closed: Tuesdays & Wednesdays <br />
                    </p>
                </div>

                <div>
                    <h3 className="heading">Contact</h3>
                    <p className="text-center" style={{ fontSize: "18px" }}>
                        +91 85*** ***93 <br />
                        anneskitchen@gmail.com
                    </p>
                </div>
            </div>
            <div className="d-flex justify-content-evenly mt-5">
                <div>
                    <h3 className="heading">LOCATION</h3>
                    <p className="text-center" style={{ fontSize: "18px" }}>
                        112 West Inies <br />
                        Alcabenna, VS 19520
                    </p>
                </div>
                <div>
                    <p>
                        Here are directions to our location. <br />
                        We hope to see you soon <br />
                        <br />
                        <Link
                            to="https://www.google.co.in/maps/place/Anni's+Kitchen/@12.9773,80.26357,18z/data=!4m6!3m5!1s0x3a525d7a0cad6bf9:0xfe132374f8bf8809!8m2!3d12.977498!4d80.2651833!16s%2Fg%2F11q2t2nsgn?entry=ttu"
                            style={{
                                textDecoration: "underline",
                                color: "black",
                            }}
                        >
                            Get Direction
                        </Link>
                    </p>
                </div>
            </div>

            <iframe
                style={{
                    border: "none",
                    filter: "grayscale(100%)",
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1325.6020129209312!2d80.2635700034208!3d12.977299954024513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d7a0cad6bf9%3A0xfe132374f8bf8809!2sAnni&#39;s%20Kitchen!5e0!3m2!1sen!2sin!4v1691220647452!5m2!1sen!2sin"
                width="1400"
                height="500"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    );
}

export default Location;
