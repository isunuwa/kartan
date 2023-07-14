import { Helmet } from "react-helmet";

const TITLE = "Home";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="container">
        <div>Home</div>
      </div>
    </>
  );
};

export default Home;
