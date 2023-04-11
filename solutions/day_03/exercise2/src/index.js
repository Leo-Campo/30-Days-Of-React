import React from "react";
import ReactDOM from "react-dom";

const titleStyles = { textAlign: "center" };
const title = <h1 style={titleStyles}>SUBSCRIBE</h1>;

const subtitleStyles = {
  textAlign: "center",
};
const subtitle = (
  <p style={subtitleStyles}>
    Sign up with your email address to receive news and updates
  </p>
);

const inputStyle = {
  padding: "5px",
  marginLeft: "5px",
  flexBasis: "auto",
  borderRadius: "5px",
  border: "none",
};

const firstNameInput = (
  <input
    type="text"
    id="FirstName"
    placeholder="First Name"
    style={inputStyle}
  />
);
const lastNameInput = (
  <input type="text" id="LastName" placeholder="Last Name" style={inputStyle} />
);
const emailInput = (
  <input type="text" id="Email" placeholder="Email" style={inputStyle} />
);

const background = {
  backgroundColor: "rgb(192, 230, 255)",
  borderRadius: "5px",
  marginTop: "15px",
  marginLeft: "10px",
  marginRight: "10px",
};

const inputGridStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  marginTop: "30px",
};

const buttonStyles = {
  padding: "10px",
  marginTop: "20px",
  marginBottom: "20px",
  backgroundColor: "rgb(249, 116, 119)",
  color: "white",
  width: "15%",
  borderRadius: "12px",
  border: "none",
};
const subscribeButton = (
  <button title="Subscribe" style={buttonStyles}>
    Subscribe{" "}
  </button>
);

const app = (
  <div className="main" style={background}>
    {title}
    {subtitle}
    <div style={inputGridStyle}>
      {firstNameInput}
      {lastNameInput}
      {emailInput}
    </div>
    <div style={inputGridStyle}>{subscribeButton}</div>
  </div>
);
const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
