import "./crew.css";
import { useOutletContext } from "react-router-dom";
import { CrewMember } from "../../types/types";
import { Fragment, useState } from "react";
import Picture from "../../components/Picture";

const Crew = () => {
  const { crew } = useOutletContext<{
    crew: CrewMember[];
  }>();

  const [isActive, setIsActive] = useState(0);

  return (
    <main id="main" className="grid-container grid-container--crew flow crew">
      <h1 className="numbered-title fade-in">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div
        className="dot-indicators flex"
        role="tablist"
        aria-label="crew member list"
      >
        {crew.map((member, index) => (
          <button
            key={member.name}
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
            <Fragment key={member.name}>
              <article className="crew-details flow fade-in">
                <header className="flow--space-small">
                  <h2 className="fs-600 ff-serif uppercase">{member.role}</h2>
                  <p className="fs-700 uppercase ff-serif">{member.name}</p>
                </header>
                <p>{member.bio}</p>
              </article>
              {/* !Pictures */}
              <Picture item={member} />
            </Fragment>
          )
      )}
    </main>
  );
};
export default Crew;
