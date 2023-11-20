import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="container d-flex justify-content-around align-items center mt-5">
                <div></div>
                <div>
                    <Link
                        to={"/"}
                        style={{
                            textDecoration: "none",
                            fontSize: "45px",
                            fontFamily: "Dancing Script, cursive",
                            color: "black",
                        }}
                    >
                        <h1>Anne's Kitchen</h1>
                    </Link>
                </div>
                <div
                    className="d-flex"
                    style={{ maxWidth: "300px", color: "black" }}
                >
                    {/* Links */}
                </div>
            </div>
        </>
    );
}

export default Header;
