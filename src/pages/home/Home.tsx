import "./home.css";
import { Link } from "react-router-dom";

// https://gist.github.com/Pigamo/6ad9d769a23bbdc07a9ef6f7226cbb55
// const gallery = Object.values(
//   import.meta.glob("/src/assets/destination/*.{png,jpg,jpeg,webp,PNG,JPEG}", {
//     eager: true,
//     as: "url",
//   })
// );

const Home = () => {
  // console.log(gallery);

  return (
    <>
      {/* <!-- Container --> */}
      {/* <!-- (--home, BEM Convention, wenn man eine klasse bearbeitet) --> */}
      <main className="grid-container grid-container--home home">
        <div>
          <h1 className="text-accent letter-spacing-1 fs-500 ff-sans-cond uppercase fade-in">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white d-block">Space</span>
          </h1>
          <p className="fade-in">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link
            to="destination"
            className="large-button uppercase ff-serif text-dark bg-white fade-in"
          >
            Explore
          </Link>
        </div>
      </main>
    </>
  );
};
export default Home;
