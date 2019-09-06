import React from "react";
import logo from "../../assets/imFaceBook.png";
import profile from "../../assets/me.jpg";

function Top() {
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <div>
          <span>Felipe Peira </span>
          <img className="avatar" src={profile} />
        </div>
      </nav>
    </header>
  );
}
export default Top;
