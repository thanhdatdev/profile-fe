import React from 'react';
import Styles from './Styles';

export default function SocialMedia() {
  return (
    <Styles.WrapperContentBlock>
      <Styles.Title>Social Media</Styles.Title>
      <Styles.WrapperTextIcon>
        <Styles.Li>
          <Styles.TextIcon>🐦</Styles.TextIcon>
          <Styles.ChildrenText>Facebook</Styles.ChildrenText>
        </Styles.Li>
        <Styles.CallApiText>1 post last 48 hours</Styles.CallApiText>

        <Styles.Li>
          <Styles.TextIcon>🎥</Styles.TextIcon>
          <Styles.ChildrenText>Instagrams</Styles.ChildrenText>
        </Styles.Li>
        <Styles.CallApiText>Last post: 5 months ago</Styles.CallApiText>

        <Styles.Li>
          <Styles.TextIcon>💼</Styles.TextIcon>
          <Styles.ChildrenText>LinkedIn</Styles.ChildrenText>
        </Styles.Li>
        <Styles.CallApiText>I post once a week</Styles.CallApiText>
      </Styles.WrapperTextIcon>
    </Styles.WrapperContentBlock>
  );
}
