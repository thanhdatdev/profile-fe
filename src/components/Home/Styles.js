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
    ${Typography.bold.x70}
  }
`;

const TextIcon = styled.span`
  ${Typography.regular.x30};
  margin-right: 0.625rem;
  @media ${Sizing.device.tablet} {
    ${Typography.regular.x60}
  }
`;

const Text = styled.span`
  ${Typography.regular.x30};
  @media ${Sizing.device.tablet} {
    ${Typography.regular.x60}
  }
`;

const WrapperTextIcon = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChildrenText = styled.div`
  color: inherit;
  text-decoration: none;
  border-bottom: 0.0625rem dashed #aaa;
  ${Typography.regular.x30};
  @media ${Sizing.device.tablet} {
    ${Typography.regular.x60}
  }
`;

const Li = styled.li `
  list-style-type: none;
  display: flex;
`;

const CallApiText = styled.div`
  color: #8d8d8d;
  ${Typography.regular.x10}
  @media ${Sizing.device.tablet} {
    ${Typography.regular.x30}
  }
`;
export default function Styles() {
  return <div></div>
}

Styles.Wrapper = Wrapper;
Styles.WrapperContentBlock = WrapperContentBlock;
Styles.Title = Title;
Styles.TextIcon = TextIcon;
Styles.Text = Text;
Styles.WrapperTextIcon = WrapperTextIcon;
Styles.ChildrenText = ChildrenText;
Styles.Li = Li;
Styles.CallApiText = CallApiText;
