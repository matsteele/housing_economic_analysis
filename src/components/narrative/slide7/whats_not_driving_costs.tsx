import React, { useContext, useState, useEffect } from "react";

import { ShiftOutImageHOC } from "../../elements/element_base";

export default function Competition() {
  return (
    <>
      <ShiftOutImageHOC
        imgURL={
          "./src/components/narrative/slide6/housing_not_competitive-01.svg"
        }
        startingSlide={45}
        endingSlide={47}
      />
      <ShiftOutImageHOC
        imgURL={
          "./src/components/narrative/slide6/housing_not_competitive-02.svg"
        }
        startingSlide={47}
        endingSlide={49}
      />
      <ShiftOutImageHOC
        imgURL={
          "./src/components/narrative/slide6/housing_not_competitive-03.svg"
        }
        startingSlide={49}
        endingSlide={51}
      />
    </>
  );
}
