import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.footer.attrs({
  className: "bg-primary py-4 h-16 flex items-center",
})``;

const InnerContainer = styled.div.attrs({
  className: "flex justify-between",
})``;

const Text = styled.div.attrs({
  className: "text-white font-semibold",
})``;

const NavContainer = styled.ul.attrs({ className: "flex" })`
  & {
    li {
      &:not(:last-child) {
        ${tw`mr-6`}
      }
      a {
        ${tw`text-white font-semibold`}
      }
    }
  }
`;
export { Wrapper, InnerContainer, Text, NavContainer };
