import { useOutletContext } from "react-router-dom";
import "./technology.css";
import { Technology } from "../../types/types";
import { useState } from "react";
import { nanoid } from "nanoid";

const TechnologyPage = () => {
  const { technology } = useOutletContext<{
    technology: Technology[];
  }>();

  const [isActive, setIsActive] = useState(0);

  return (
    <main
      id="main"
      className="grid-container grid-container--technology flow technology"
    >
      <h1 className="numbered-title fade-in">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>

      {/* Pictures */}
      {technology.map((item, index) => {
        return (
          isActive === index && (
            <picture id="vehicle-image" className="fade-in" key={nanoid()}>
              <source
                media="(min-width: 45em)"
                srcSet={item?.images.portrait}
                type="image/webp"
              />
              <img src={item?.images.landscape} alt={item?.name} />
            </picture>
          )
        );
      })}

      {/* Numbers */}
      <div className="number-indicators flex fade-in">
        {technology.map((_item, index) => (
          <button
            key={nanoid()}
            aria-selected={isActive === index ? "true" : "false"}
            onClick={() => setIsActive(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Content */}
      {technology.map(
        (item, index) =>
          isActive === index && (
            <article
              key={nanoid()}
              className="technology-details flow container"
            >
              <header className="flow--space-small">
                <p className="fs-600 uppercase ff-sans-cond text-accent letter-spacing-2">
                  The terminology...
                </p>
                <h2 className="fs-700 ff-serif text-white d-block uppercase">
                  {item?.name}
                </h2>
              </header>
              <p className="text-accent">{item?.description}</p>
            </article>
          )
      )}
    </main>
  );
};
export default TechnologyPage;
