import React from 'react';
import Styles from './Styles';

export default function Code() {
  return (
    <>
      <Styles.WrapperContentBlock>
        <Styles.Title>About Me</Styles.Title>
        <Styles.WrapperTextIcon>
          <li style={{ listStyleType: 'none' }}>
            <Styles.TextIcon>🧑</Styles.TextIcon>
            <Styles.Text>22 years old</Styles.Text>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Styles.TextIcon>🇻🇳</Styles.TextIcon>
            <Styles.Text>From Vietnam</Styles.Text>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Styles.TextIcon>👨‍💻</Styles.TextIcon>
            <Styles.Text>Software Developer</Styles.Text>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Styles.TextIcon>🔨</Styles.TextIcon>
            <Styles.Text>Full-time at Zenapp</Styles.Text>
          </li>
          <li style={{ listStyleType: 'none' }}>
            <Styles.TextIcon>😻</Styles.TextIcon>
            <Styles.Text>Cats {`>`} Dogs</Styles.Text>
          </li>
        </Styles.WrapperTextIcon>
      </Styles.WrapperContentBlock>
    </>
  );
}
