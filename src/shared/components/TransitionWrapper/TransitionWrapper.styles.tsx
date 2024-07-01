import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const animationStyles = css<{ $inProp: boolean }>`
  animation: ${({ $inProp }) => ($inProp ? fadeIn : fadeOut)} 0.5s forwards;
`;

export const AnimatedDiv = styled.div<{ $inProp: boolean }>`
  ${animationStyles}
`;