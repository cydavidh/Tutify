import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();
  const handleSubmit = (val) => {
    if (val === "tutorbtn") {
      navigate("/");
    } else if (val === "tuteebtn") {
      navigate("/tuteelogin");
    } else {
      alert("route is wrong");
    }
  };
  return (
    <div className="button">
      <Button
        variant="contained"
        className="tutorbtn"
        style={{ backgroundColor: "red" }}
        onClick={() => handleSubmit("tutorbtn")}
      >
        Tutor
      </Button>
      &nbsp;
      <Button
        variant="contained"
        className="tuteebtn"
        style={{ backgroundColor: "red" }}
        onClick={() => handleSubmit("tuteebtn")}
      >
        Tutee
      </Button>
    </div>
  );
}

export default Buttons;
