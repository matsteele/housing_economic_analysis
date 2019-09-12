import React, { useContext, useState, useEffect } from "react";
import styled from "@emotion/styled";

import { ShiftOutHOC } from "../../elements/element_base";
import s from "../storyStarts";

import SingleFamilyIcon from "./housing_types_01";
import MultiFamilyIcon from "./housing_types_02";

export default function MajorProblems() {
  const screenWidths = window.scrollY / window.outerHeight;

  return (
    <>
      <ContainerDiv>
        <UpperDiv>two distinct housing markets</UpperDiv>
        <TextInFocus>
          <BaseDiv fontSize={screenWidths > s._6_strt + 3 ? "20px" : "45px"}>
            <ShiftOutHOC
              startingSlide={s._6_strt + 1}
              endingSlide={s._6_strt + 14}
              height="25%"
            >
              <BaseDiv>
                <SingleFamilyIcon
                  height={screenWidths > s._6_strt + 3 ? 50 : 150}
                />
                <strong>single-family </strong>
                <br />
                <br />
                <br />
              </BaseDiv>
            </ShiftOutHOC>
          </BaseDiv>

          <BaseDiv>
            <ShiftOutHOC
              startingSlide={s._6_strt + 4}
              endingSlide={s._6_strt + 14}
              height="25%"
            >
              <BaseDiv
                fontSize={screenWidths > s._6_strt + 5 ? "20px" : "45px"}
              >
                <br />
                <br />
                <br />
                <MultiFamilyIcon
                  height={screenWidths > s._6_strt + 5 ? 50 : 150}
                />
                <strong>multi-family</strong>
              </BaseDiv>
            </ShiftOutHOC>
          </BaseDiv>
        </TextInFocus>
        <ShiftOutHOC startingSlide={s._6_strt + 2} endingSlide={s._6_strt + 14}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide6/supply_demand_progression_01.svg"
              }
            />
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={s._6_strt + 3} endingSlide={s._6_strt + 14}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              opacity={screenWidths > s._6_strt + 5 ? 0.3 : 1}
              href={
                "./src/components/narrative/slide6/supply_demand_progression_02.svg"
              }
            />
            <text
              opacity={screenWidths > s._6_strt + 5.5 ? 0 : 1}
              fill="white"
              x="320"
              y="120"
            >
              is SUPPLY DRIVEN
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={s._6_strt + 5} endingSlide={s._6_strt + 14}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              opacity={screenWidths > s._6_strt + 7 ? 0.3 : 1}
              href={
                "./src/components/narrative/slide6/supply_demand_progression_03.svg"
              }
            />
            <text
              opacity={screenWidths > s._6_strt + 7 ? 0 : 1}
              fill="white"
              x="320"
              y="120"
            >
              is DEMAND DRIVEN
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={s._6_strt + 6} endingSlide={s._6_strt + 10}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide6/supply_demand_progression_04.svg"
              }
            />
            <text
              opacity={screenWidths > s._6_strt + 8 ? 0 : 1}
              fill="white"
              x="320"
              y="120"
            >
              IF SUPPLY SHIFTS RIGHT
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={s._6_strt + 8} endingSlide={s._6_strt + 10}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide6/supply_demand_progression_05.svg"
              }
            />
            <text fill="white" x="320" y="120">
              PRICE SHIFTS DOWN
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC
          startingSlide={s._6_strt + 10}
          endingSlide={s._6_strt + 14}
        >
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide6/supply_demand_progression_06.svg"
              }
            />
            <text
              opacity={screenWidths > s._6_strt + 12 ? 0 : 1}
              fill="white"
              x="320"
              y="120"
            >
              IF DEMAND SHIFTS RIGHT
            </text>
          </StyledSVG>
        </ShiftOutHOC>
        <ShiftOutHOC startingSlide={s._6_strt+12} endingSlide={s._6_strt + 14}>
          <StyledSVG>
            <image
              height="100%"
              width="100%"
              href={
                "./src/components/narrative/slide6/supply_demand_progression_07.svg"
              }
            />
            <text fill="white" x="320" y="120">
              PRICE SHIFTS UP
            </text>
          </StyledSVG>
        </ShiftOutHOC>
      </ContainerDiv>
    </>
  );
}

const BaseDiv: any = styled.div(props => ({
  color: "white",
  lineHeight: 1,
  height: "100%",
  flexDirection: "row",
  // transition: "all 1000ms linear",
  display: "flex",
  alignItems: "center",
  fontSize: props.fontSize
}));

const UpperDiv: any = styled(BaseDiv)({
  height: "70%",
  fontSize: "60px"
});

const TextInFocus: any = styled(BaseDiv)({
  marginLeft: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "normal",
  height: "100%"
});

const ContainerDiv: any = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "100%"
});

export const StyledSVG: any = styled.svg({
  overflow: "visible !important",
  height: "100%",
  width: "45%",
  marginTop: "300px"
});
