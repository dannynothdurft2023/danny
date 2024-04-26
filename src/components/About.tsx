import "@/styles/about.scss";

import Github from "@/svg/github";
import Linkedin from "@/svg/linkedin";

import DATA from "@/data/portfolio.json";

const About = () => {
  const { name, role, company, description, resume, social, greetingEmoji } =
    DATA.about;
  const firstName = name ? name.split(" ")[0] : null;
  const fadeInAnimationClassName =
    "animate__animated animate__fadeIn animate__delay-5s";

  return (
    <div className="about">
      <div className="about__pseudo-padding about__pseudo-padding-top" />

      {(firstName || role) && (
        <div>
          {firstName && (
            <h1 className="about__greeting animate__animated animate__fadeInUp animate__delay-1s">
              Hey, ich bin <span className="text--strong">{firstName}</span>.
              {greetingEmoji && <span> {greetingEmoji}</span>}
            </h1>
          )}

          {role && (
            <h1 className="about__role animate__animated animate__fadeInUp animate__delay-3s">
              Ein {role}
              {company && (
                <span>
                  {" "}
                  von <span className="text--strong">{company}</span>
                </span>
              )}
              .
            </h1>
          )}
        </div>
      )}

      {description && (
        <div className={fadeInAnimationClassName}>
          {description && (
            <div className="about__desc paragraph__list">
              {description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              {/* fragments added to prevent react-hyphen error when description length < 2 */}
              <></>
              <></>
            </div>
          )}
        </div>
      )}

      {(resume || social) && (
        <div className={`about__contact center ${fadeInAnimationClassName}`}>
          {resume && (
            <a href={resume} target="_blank" rel="noreferrer">
              <button type="button" className="btn btn--outline">
                Resume
              </button>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                  className="link link--icon"
                >
                  <Github />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                  className="link link--icon"
                >
                  <Linkedin />
                </a>
              )}
            </>
          )}
        </div>
      )}

      <div className="about__pseudo-padding" />
    </div>
  );
};

export default About;
