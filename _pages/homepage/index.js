import { Wrapper, Background, Introduction } from "./Home.styled";
import Container from "../../components/container";
import Subscribe from "../../components/subscribe";

const Index = () => {
  return (
    <Wrapper>
      {/** Landing UI */}
      <Introduction>
        <Background>
          <Container>
            <div className="flex">
              <div className="flex-1 flex flex-col">
                <h1 className="text-5xl leading-tight py-2  font-secondary">
                  Find the Best Platform to Learn Online
                </h1>

                <p className="text-2xl py-2  text-gray-700 font-normal  tracking-tight leading-relaxed">
                  A wrong purchase from an e-commerce site could disappoint you
                  for a day, but
                  <span className="p-1 bg-purple-300 ml-1  rounded">
                    a wrong e-learning platform could potentially affect your
                    future.
                  </span>
                </p>

                <Subscribe />
              </div>

              <div className="flex-1  pl-12  flex items-center  justify-center">
                <img src="/img.png" alt="guideonlinecourse" />
              </div>
            </div>
          </Container>
        </Background>
      </Introduction>

      <div>Other Data</div>
    </Wrapper>
  );
};

export default Index;
