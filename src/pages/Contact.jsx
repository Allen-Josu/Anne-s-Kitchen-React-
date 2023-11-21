import React from "react";

function Contact() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column mt-5">
                <h3 className="heading mt-3 mb-3">Contact US</h3>
                <p className="mt-3" style={{ fontSize: "19px" }}>
                    Please complete the form below.
                </p>
                <form
                    className="mt-5 d-flex justify-content-center align-items-center"
                    action=""
                >
                    <div className="align-items-start">
                        <label> Name</label>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;
