import React, {useEffect, useState} from 'react';
import Styles from './Styles';
import useAxios from '../../hooks/useAxios';


export default function About() {
  const { response, loading, error } = useAxios({
    method: 'post',
    url: '/api/v1/',
    headers: JSON.stringify({ accept: '*/*' }),
    body: JSON.stringify({
      admin: process.env.USER_NAME,
      password: process.env.PASS_WORD,
    }),
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  console.log(data);
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
