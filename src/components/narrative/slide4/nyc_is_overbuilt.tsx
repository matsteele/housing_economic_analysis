import React, { useContext, useState, useEffect } from "react";

import { ShiftOutImageHOC } from "../../elements/element_base";
import s from "../storyStarts";

export default function CaseStudyDisplay() {
  return (
    <>
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide4/prewar_nyc_buildings.png"}
        startingSlide={s._4_strt}
        endingSlide={s._4_strt+5}
      />
      <ShiftOutImageHOC
        imgURL={"./src/components/narrative/slide4/nyc_is_overbuilt-02.svg"}
        startingSlide={s._4_strt + 2}
        endingSlide={s._4_strt + 5}
      />
    </>
  );
}
