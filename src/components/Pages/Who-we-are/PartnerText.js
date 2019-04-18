import React from "react";
import styled from "styled-components";

const StyledPartnerText = styled.div`
  background: #0021b8;
  width: 50%;
  height: 100vh;
  > * {
    padding-left: 82px;
  }
  h3 {
    margin-top: 40vh;
    font-weight: 300;
    font-size: 4vh;
    color: #ffffff;
  }
  p {
    max-width: 474px;
    font-weight: 300;
    font-size: 4vh;
    color: rgba(255, 255, 255, 0.72);
  }
`;

const PartnerText = props => {
  return (
    <StyledPartnerText>
      <h3>{props.content ? props.content.title : "Partners"}</h3>
      <p>
        {props.content ? props.content.description : "Partnerstext in here"}
      </p>
    </StyledPartnerText>
  );
};

export default PartnerText;
