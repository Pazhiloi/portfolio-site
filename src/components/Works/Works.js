import React, { useEffect, useState } from "react";
import "./Works.css";
import { works } from "../../data/data";
import TextAnimation from "../animations/TextAnimation";
import { Fade } from "react-reveal";
const Works = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(works)
  }, [items]);
  
  return (
    <section className="works" id="works">
      <div className="container">
        <div className="works__inner">
          <Fade right>
            <h2 className="works__title title">
              <TextAnimation text={`Portfolio`} />
            </h2>
          </Fade>

          <div className="works__items">
            {items.map(({ id, title, image, link }) => (
              <Fade key={id} left cascade>
                <div className="works__item">
                  <div className="works__item-title">
                    <TextAnimation text={title} />
                  </div>
                  <div className="works__image-wrapper">
                    <img className="works__image" src={image} alt={title} />
                    <a
                      href={link}
                      className="works__link"
                      rel="noreferrer"
                      target={"_blank"}
                    ></a>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
