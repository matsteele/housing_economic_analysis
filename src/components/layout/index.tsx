import React, { useState, useEffect, useContext } from "react";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = { scrollTop: 0 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const scrollTop = this.scroller.scrollTop;
    console.log(`myRef.scrollTop: ${scrollTop}`);
    this.setState({
      scrollTop: scrollTop
    });
  }

  render() {
    console.log(this.state);
    // const { scrollTop } = this.state;
    var N = 100;
    const longArray = Array.apply(null, { length: N }).map(Number.call, Number);
    return (
      <ScrollableContainer
        ref={scroller => {
          this.scroller = scroller;
        }}
        onScroll={this.handleScroll}
      >
        <fillerDiv />
        <mainDisplay />
        <ul>
          <li>testing</li>
          {longArray.map(valu => {
            return (
              <li key={valu}>
                "test"{valu} {this.state.scrollTop}
              </li>
            );
          })}
        </ul>
      </ScrollableContainer>
    );
  }
}

export default Layout;

//styles
import styled from "@emotion/styled";
import styleUtils from "utils/styles";

const ScrollableContainer: any = styled.div({
  backgroundColor: styleUtils.brightTeal,
  color: 'white',
  width: "100%",
  height: "100%",
  overflow: "scroll",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});


const fillerDiv: any = styled.div({
  backgroundColor: styleUtils.basicGray,
  width: "100px",
  height: "200px",
  overflow: "scroll",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});

const mainDisplay: any = styled(fillerDiv)({
  width: "100px",
  height: "200px",
  overflow: "scroll",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});
