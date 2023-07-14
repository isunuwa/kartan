import { Helmet } from "react-helmet";

const TITLE = "Trending";

const Trending = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div>Trending</div>
    </>
  );
};

export default Trending;
