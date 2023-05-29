import "./destination.css";
import { useState } from "react";
import Picture from "../../components/Picture";
import { useOutletContext } from "react-router-dom";
import { Destination } from "../../types/types";

const DestinationPage = () => {
  const { destinations } = useOutletContext<{ destinations: Destination[] }>();
  const [isActive, setIsActive] = useState(0);

  // console.log(destinations)
  return (
    <>
      <main
        id="main"
        className="grid-container grid-container--destination flow destination"
      >
        <h1 className="numbered-title fade-in">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        {destinations.map(
          (item, index) =>
            isActive === index && <Picture key={item.name} item={item} />
        )}

        <div className="tab-list underline-indicators flex">
          {destinations.map((item, index) => (
            <button
              key={index}
              aria-selected={isActive === index ? "true" : "false"}
              className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
              onClick={() => setIsActive(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <article className="destination-info">
          {destinations.map(
            (item, index) =>
              isActive === index && (
                <div key={item.travel}>
                  <h2 className="fs-800 ff-serif text-white d-block uppercase">
                    {item.name}
                  </h2>

                  <p className="text-accent">{item.description}</p>

                  <div className="destination-meta flex uppercase">
                    <div>
                      <h3 className="text-accent fs-200">Avg. distance</h3>
                      <p className="text-white ff-serif fs-700">
                        {item.distance}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-accent fs-200">Est. travel time</h3>
                      <p className="text-white fs-700">{item.travel}</p>
                    </div>
                  </div>
                </div>
              )
          )}
        </article>
      </main>
    </>
  );
};
export default DestinationPage;
