import { useOutletContext } from "react-router-dom";
import "./technology.css";
import { Technology } from "../../types/types";
import { useState } from "react";
import { uuid } from "uuidv4";
import { nanoid } from "nanoid";

const TechnologyPage = () => {
  const { technology } = useOutletContext<{
    technology: Technology[];
  }>();

  const [isActive, setIsActive] = useState(0);
  console.log(isActive);

  return (
    <main
      id="main"
      className="grid-container grid-container--technology flow technology"
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>

      {/*Pictures*/}

      {technology.map((item, index) => {
        isActive === index && (
          <picture id="vehicle-image" key={nanoid()}>
            <source
              media="(min-width: 45em)"
              srcSet={item?.images.portrait}
              type="image/webp"
            />
            <img src={item?.images.landscape} alt={item.name} />
          </picture>
        );
      })}

      {/* Numbers */}
      <div className="number-indicators flex">
        {technology.map((item, index) => (
          <button
            key={nanoid()}
            aria-selected={isActive === index ? "true" : "false"}
            onClick={() => setIsActive(index)}
          >
            {index + 1}
          </button>
          //   <button aria-selected="false">2</button>
          //   <button aria-selected="false">3</button>
        ))}
      </div>

      {technology.map(
        (item, index) =>
          isActive === index && (
            <article
              key={nanoid()}
              className="technology-details flow container"
              // id="moon-tab"
              // tabIndex={0}
              // role="tabpanel"
            >
              <header className="flow--space-small">
                <p className="fs-600 uppercase ff-sans-cond text-accent letter-spacing-2">
                  The terminology...
                </p>
                <h2 className="fs-700 ff-serif text-white d-block uppercase">
                  {item.name}
                </h2>
              </header>
              <p className="text-accent">{item.description}</p>
            </article>
          )
      )}

      {/* <article
        hidden=""
        className="technology-details flow"
        id="mars-tab"
        tabIndex={0}
        role="tabpanel"
      >
        <header className="flow--space-small">
          <p className="fs-700 uppercase ff-serif">The terminology...</p>
          <h2 className="fs-800 ff-serif text-white d-block uppercase">
            Spaceport
          </h2>
        </header>
        <p className="text-accent">
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </article>
     
      <article
        hidden={true}
        className="technology-details flow"
        id="europa-tab"
        tabIndex={0}
        role="tabpanel"
      >
        <header className="flow--space-small">
          <p className="fs-700 uppercase ff-serif">The terminology...</p>
          <h2 className="fs-800 ff-serif text-white d-block uppercase">
            Space Capsule
          </h2>
        </header>
        <p className="text-accent">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </article> */}
    </main>
  );
};
export default TechnologyPage;
