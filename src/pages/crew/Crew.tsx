import "./crew.css";
import { useOutletContext } from "react-router-dom";
import { CrewMember } from "../../types/types";
import { useState } from "react";
import Picture from "../../components/Picture";
import { nanoid } from "nanoid";

const Crew = () => {
  const { crew } = useOutletContext<{
    crew: CrewMember[];
  }>();

  const [isActive, setIsActive] = useState(0);

  return (
    <main id="main" className="grid-container grid-container--crew flow crew">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div
        className="dot-indicators flex"
        role="tablist"
        aria-label="crew member list"
      >
        {crew.map((member, index) => (

          <button
            key={nanoid()}
            aria-selected={isActive === index ? "true" : "false"}
            onClick={() => setIsActive(index)}
          >
            <span className="sr-only">{member.role}</span>
          </button>
        ))}
      </div>

      {/* !Articles */}
      {crew.map(
        (member, index) =>
          isActive === index && (
            <>
              <article className="crew-details flow" key={nanoid()}>
                <header className="flow--space-small">
                  <h2 className="fs-600 ff-serif uppercase">{member.role}</h2>
                  <p className="fs-700 uppercase ff-serif">{member.name}</p>
                </header>
                <p>{member.bio}</p>
              </article>
              {/* !Pictures */}
              <Picture key={nanoid()} item={member} />
            </>
          )
      )}
    </main>
  );
};
export default Crew;
