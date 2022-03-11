import React from 'react';
import Styles from './Styles';

export default function Code() {
  return (
    <Styles.WrapperContentBlock>
      <Styles.Title>Code</Styles.Title>
      <Styles.WrapperTextIcon>
        <Styles.Li>
          <Styles.TextIcon>🧰</Styles.TextIcon>
          <Styles.ChildrenText>DevUtils.app</Styles.ChildrenText>
        </Styles.Li>
        <Styles.CallApiText>Last version: last month</Styles.CallApiText>

        <Styles.Li>
          <Styles.TextIcon>🎩</Styles.TextIcon>
          <Styles.ChildrenText>BackMagic.so</Styles.ChildrenText>
        </Styles.Li>
        <Styles.CallApiText>Last update: 2 weeks ago</Styles.CallApiText>
      </Styles.WrapperTextIcon>
    </Styles.WrapperContentBlock>
  );
}
