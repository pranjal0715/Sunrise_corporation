import React from "react";
import { default as Dyes01 } from "./Dyes/Dyes01.jpg";
import { default as Dyes02 } from "./Dyes/Dyes02.jpg";
import { default as Dyes03 } from "./Dyes/Dyes03.jpg";
import { default as Dyes04 } from "./Dyes/Dyes04.jpg";
import { default as Dyes05 } from "./Dyes/Dyes05.jpg";
import { default as Dyes06 } from "./Dyes/Dyes06.jpg";
import { default as Dyes07 } from "./Dyes/Dyes07.jpg";
import { default as Dyes08 } from "./Dyes/Dyes08.jpg";
import { default as Dyes09 } from "./Dyes/Dyes09.jpg";
import { default as Dyes10 } from "./Dyes/Dyes10.jpg";
import { default as Dyes11 } from "./Dyes/Dyes11.jpg";
import { default as Dyes12 } from "./Dyes/Dyes12.jpg";
import { default as Dyes13 } from "./Dyes/Dyes13.jpg";

function Dyes() {
  return (
    <div className="md:mx-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-20 p-4">
      <h1 className="text-4xl font-bold text-blue-600 p-2 text-center underline">
          DESCRIPTION:
        </h1>
      <img src={Dyes01} />
      <img src={Dyes02} />
      <img src={Dyes03} /><br/>
      <img src={Dyes04} />
      <img src={Dyes05} />
      <img src={Dyes06} />
      <img src={Dyes07} />
      <img src={Dyes08} />
      <img src={Dyes09} />
      <img src={Dyes10} />
      <img src={Dyes11} />
      <img src={Dyes12} />
      <img src={Dyes13} />
    </div>
  );
}

export default Dyes;
