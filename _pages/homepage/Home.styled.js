import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "w-full h-full",
})``;

const Introduction = styled.div.attrs({
  className: "bg-gray-200",
})``;

const Background = styled.div.attrs({
  className: "w-full h-full  py-20",
})`
  background: url("/background.png");
  box-shadow: inset 0px 2px 3px #d9d9d9;
`;

export { Wrapper, Background, Introduction };
