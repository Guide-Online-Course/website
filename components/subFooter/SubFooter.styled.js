import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.footer.attrs({
  className: "bg-primary py-12 flex items-center",
})`
  border-bottom: 1px solid rgba(238, 238, 238, 0.41);
`;

const InnerContainer = styled.div.attrs({
  className: "flex justify-between",
})``;

const AboutContainer = styled.div.attrs({
  className: "w-6/12",
})`
  & {
    span {
      ${tw`text-white text-xl py-2 font-semibold tracking-wide  border-b-2  border-purple-400`}
    }
    h2 {
      ${tw`text-white py-4 text-base w-10/12`}
    }
  }
`;

export { Wrapper, InnerContainer, AboutContainer };
