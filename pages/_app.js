import { wrapper } from "../store";
import Layout from "../components/layout";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default wrapper.withRedux(MyApp);
