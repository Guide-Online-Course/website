import { Wrapper, InnerContainer, AboutContainer } from "./SubFooter.styled";
import Container from "../container";
import PropTypes from "prop-types";

const Index = ({ title, description }) => {
  return (
    <Wrapper>
      <Container>
        <InnerContainer>
          <AboutContainer>
            <span>{title}</span>
            <h2>{description}</h2>
          </AboutContainer>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

Index.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Index.defaultProps = {
  title: "About us",
  description:
    "Guide online course is a directory for the online learning platforms, making it easier & faster for learners to choose thebest platform for their online learning needs.",
};

export default Index;
