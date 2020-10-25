import { Wrapper, InnerContainer, Text, NavContainer } from "./Footer.styled";
import Container from "../container";
import Link from "next/link";
import PropTypes from "prop-types";
import map from "lodash/map";

const Index = ({ links, webiste }) => {
  return (
    <Wrapper>
      <Container>
        <InnerContainer>
          <Text>&copy; {`${new Date().getFullYear()} - ${webiste}`}</Text>
          <NavContainer>
            {map(links, (data, i) => (
              <li key={i}>
                <Link href={data.href}>
                  <a>{data.title}</a>
                </Link>
              </li>
            ))}
          </NavContainer>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

Index.prototype = {
  webiste: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Index.defaultProps = {
  webiste: "guideonlinecourse",
  links: [
    { href: "/about", title: "About Us" },
    { href: "/contact", title: "Contact Us" },
    { href: "/privacy-policy ", title: "Privacy Policy" },
  ],
};

export default Index;
