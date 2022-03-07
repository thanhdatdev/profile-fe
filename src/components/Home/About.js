import React from 'react';
import styled from 'styled-components';
import { Sizing, Typography } from '../../styles/style'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.875rem;
`;

const WrapperContentBlock = styled.div`
  margin: 1.25rem;
  min-width: 12.5rem;
`;

const Title = styled.div`
  ${Typography.bold.x60}
  @media ${Sizing.device.tablet} {
    ${Typography.bold.x80}
  }
`;

const TextIcon = styled.span`
  ${Typography.regular.x30};
  margin-right: 0.625rem;
  @media ${Sizing.device.tablet} {
    ${Typography.regular.x70}
  }
`;

const Text = styled.span`
  ${Typography.regular.x30};
  @media ${Sizing.device.tablet} {
    ${Typography.regular.x70}
  }
`;

const WrapperTextIcon = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function About() {
  return (
    <Wrapper>
      <WrapperContentBlock>
        <Title>About Me</Title>
        <WrapperTextIcon>
          <li style={{ listStyleType: 'none' }}>
            <TextIcon>🧑</TextIcon>
            <Text>22 years old</Text>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <TextIcon>🇻🇳</TextIcon>
            <Text>From Vietnam</Text>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <TextIcon>👨‍💻</TextIcon>
            <Text>Software Developer</Text>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <TextIcon>🔨</TextIcon>
            <Text>Full-time at Zenapp</Text>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <TextIcon>😻</TextIcon>
            <Text>Cats {`>`} Dogs</Text>
          </li>
        </WrapperTextIcon>
      </WrapperContentBlock>
      <WrapperContentBlock>
        <Title>My Products</Title>
      </WrapperContentBlock>
      <WrapperContentBlock>
        <Title>Social Media</Title>
      </WrapperContentBlock>
      <WrapperContentBlock>
        <Title>Writings</Title>
      </WrapperContentBlock>
      <WrapperContentBlock>
        <Title>Code</Title>
      </WrapperContentBlock>
      <WrapperContentBlock>
        <Title>Other Places</Title>
      </WrapperContentBlock>
    </Wrapper>
  );
}
