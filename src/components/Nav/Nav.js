import React from "react";
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";
import Breadcrumbs from "../Breadcrums";
import TopSpace from "../TopSpace";

const Nav = () => {
  return (
    <Wrapper>
      <TopSpace />
      <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>


      {/* <Breadcrumbs>
        <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
      </Breadcrumbs> */}
      <Ol>
        <Li>Lifestyle</Li>
        <Li>jordan</Li>
        <Li className="active">running</Li>
        <Li>basketball</Li>
        <Li>training & gym</Li>
        <Li>football</Li>
        <Li>american football</Li>
        <Li>baseball</Li>
        <Li>golf</Li>
        <Li>tennis</Li>
        <Li>athletics</Li>
        <Li>walking</Li>
      </Ol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 1 250px;
  padding-left: 32px;
  width: 248px;
  colors: ${COLORS.gray900};
`;


const Ol = styled.ol`
  margin-top: 32px;
`;

const Li = styled.li`
  text-transform: capitalize;
  font-size: 16px;
  line-height: 32px;
  font-weight: ${WEIGHTS.medium};
  &.active {
    color: ${COLORS.primary};
  }
`;

export default Nav;
