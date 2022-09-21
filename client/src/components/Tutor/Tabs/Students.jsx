import React from "react";

function Students() {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user.result._id);
  return <div>Students</div>;
}

export default Students;
