export const size = {
  mobileS: "320px",
  mobileM: "375px", // === material xs
  mobileL: "600px", // === material sm
  tablet: "960px", // === material md
  laptop: "1280px", // === materialUI lg
  laptopL: "1440px",
  desktop: "1920px", // === materialUI xl
};

export const device = {
  mobileS: `only screen and (min-width: ${size.mobileS})`,
  mobileM: `only screen and (min-width: ${size.mobileM})`,
  mobileL: `only screen and (min-width: ${size.mobileL})`,
  tablet: `only screen and (min-width: ${size.tablet})`,
  laptop: `only screen and (min-width: ${size.laptop})`,
  laptopL: `only screen and (min-width: ${size.laptopL})`,
  desktop: `only screen and (min-width: ${size.desktop})`,
  desktopL: `only screen and (min-width: ${size.desktop})`,
};

export const borderWidth = {
  thin: "0.2px",
  medium: "0.3px",
  large: "0.5px",
};

/** How to use

import styled from 'styled-components';
import { Sizing } from './style.js';

const Page = styled.div`
  // mobile css
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  // overwrite css for laptop
  @media ${device.laptop} {
    max-width: 800px;
  }

  // overwrite css for destop
  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
 */
