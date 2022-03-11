import React  from "react";
import Intro from "../../components/Home/Intro";
import styled from "styled-components";
import Styles from "../../components/Home/Styles";
import About from "../../components/Home/About"
import MyProducts from '../../components/Home/MyProducts';
import SocialMedia from "../../components/Home/SocialMedia";
import Writings from "../../components/Home/Writings";
import Code from '../../components/Home/Code';
import OtherPlaces from "../../components/Home/OtherPlaces";
import MusicCard from "../../components/Home/MusicCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <Intro />
      <Styles.Wrapper>
        <About />
        <MyProducts />
        <SocialMedia />
        <OtherPlaces />
        <Writings />
        <Code />
      </Styles.Wrapper>
    </Wrapper>
  );
}
