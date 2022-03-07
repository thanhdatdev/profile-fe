import React  from "react";
import Intro from "../../components/Home/Intro";
import styled from "styled-components";

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
    </Wrapper>
  );
}
