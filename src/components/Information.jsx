import React from "react";
import { Link } from "react-router-dom";

function Information() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column mb-3">
                <h4
                    style={{
                        fontWeight: "600",
                    }}
                >
                    NOW ACCEPTING INQUIRIES FOR PRIVATE EVENTS & HOLIDAY
                    PARTIES!{" "}
                </h4>
                <p
                    className="text-center mt-2"
                    style={{ maxWidth: "90%", fontSize: "19px" }}
                >
                    We are now accepting all inquiries for full buyouts for
                    private events and holiday parties, any day of the week, day
                    or night. Our restaurant can accommodate up to 45 guests and
                    potentially more. We can work with you on the menu, and
                    curate beverages, beer, wine, and sake as well. Please{" "}
                    <Link
                        to="/contact"
                        style={{
                            textDecoration: "underline",
                            color: "black",
                        }}
                    >
                        contact us here{" "}
                    </Link>{" "}
                    to inquire!
                </p>

                <h4
                    style={{
                        fontWeight: "600",
                    }}
                >
                    DINNER RESERVATIONS!
                </h4>
                <p
                    className="text-center"
                    style={{ maxWidth: "90%", fontSize: "19px" }}
                >
                    We are now open for dinner service Thursday through Sunday!
                    We’ll be accepting limited walk-ins and{" "}
                    <Link
                        to={"mailto:anneskitchen@gmail.com"}
                        style={{
                            textDecoration: "underline",
                            color: "black",
                        }}
                    >
                        reservations
                    </Link>{" "}
                    on Yelp.
                </p>

                <p
                    className="text-center mt-3"
                    style={{ maxWidth: "90%", fontSize: "19px" }}
                >
                    For brunch, we still do not take reservations as we seat
                    guests on a first come first serve basis. However, you can
                    join our{" "}
                    <Link
                        to=""
                        style={{
                            textDecoration: "underline",
                            color: "black",
                        }}
                    >
                        {" "}
                        Yelp! Waitlist
                    </Link>
                    to save your spot ahead of time (same day only)!
                </p>

                <h4
                    style={{
                        fontWeight: "600",
                        textTransform: "uppercase",
                    }}
                >
                    BUISSNESS HOURS{" "}
                </h4>

                <p
                    className="text-center mt-3"
                    style={{ maxWidth: "90%", fontSize: "19px" }}
                >
                    <span className="m-2">
                        BRUNCH: Thursday through Monday 9:00am - 2:30pm
                    </span>{" "}
                    <br /> <br />
                    <span className="m-2">
                        DINNER: Thursday through Sunday 5:00pm - 9:00pm{" "}
                    </span>
                    <br /> <br />
                    <span className="m-2">
                        CLOSED Tuesdays & Wednesdays{" "}
                    </span>{" "}
                    <br /> <br />
                    <span>
                        Dine-in, takeout, and delivery (via DoorDash) available
                    </span>
                </p>

                <Link className="d-flex justify-content-center align-items-center order m-3">
                    Order Now
                </Link>
                <Link className="d-flex justify-content-center align-items-center order">
                    CAREERS - SEND US A RESUME/SHORT MESSAGE!
                </Link>
            </div>
        </>
    );
}

export default Information;
