import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    //Layout ist durch seine children eine composition
    <Layout headline="Test">
      {/* zentral konfigurierbar und maintainable  */}
      <Component {...pageProps} />
    </Layout>
  );
}
