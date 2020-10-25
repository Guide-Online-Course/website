import Header from "../header";
import Footer from "../footer";
import SubFooter from "../subFooter";
import Container from "../container";

const Index = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      {/**  Default SEO */}
      <Header />
      {children}
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Index;
