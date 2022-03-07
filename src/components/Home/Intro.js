import React from 'react';
import styled from 'styled-components';
import avatar from  '../../assets/images/avatar/thanh-dat-nguyen.png'
import { Typography } from '../../styles/style';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 100%;
  width: 6.25rem;
  height: 6.25rem;
  margin-bottom: 0.625rem;
`;

const Name = styled.div`
  line-height: 1.15;
  ${Typography.bold.x80};
`;

const Text = styled.div`
  ${Typography.regular.x70}
`;

export default function Intro() {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Name>Thanh Dat Nguyen</Name>
      <Text>Welcome to my corner of the internet!</Text>
    </Wrapper>
  );
}
