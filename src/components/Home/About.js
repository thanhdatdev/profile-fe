import React, {useEffect, useState} from 'react';
import Styles from './Styles';
import axios from 'axios';

export default function About() {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://thanhdatdev-profile-be.herokuapp.com/api/v1/abouts`
      ).then(res => res.data[0])
      .catch(err => console.log(err));

      setAbout(data);
    }
    fetchData();
  }, []);

  return (
    <Styles.WrapperContentBlock>
      <Styles.Title>About Me</Styles.Title>
      <Styles.WrapperTextIcon>
        <li style={{ listStyleType: 'none' }}>
          <Styles.TextIcon>🧑</Styles.TextIcon>
          <Styles.Text>{about?.dob} years old</Styles.Text>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Styles.TextIcon>🇻🇳</Styles.TextIcon>
          <Styles.Text>From {about?.from}</Styles.Text>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Styles.TextIcon>👨‍💻</Styles.TextIcon>
          <Styles.Text>{about?.career}</Styles.Text>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Styles.TextIcon>🔨</Styles.TextIcon>
          <Styles.Text>{about?.current_job}</Styles.Text>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Styles.TextIcon>😻</Styles.TextIcon>
          <Styles.Text>{about?.funny}</Styles.Text>
        </li>
      </Styles.WrapperTextIcon>
    </Styles.WrapperContentBlock>
  );
}
