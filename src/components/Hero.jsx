import { useState } from "react";
import "./Hero.css";
import Tag from "./Tag";

function Hero() {
  const [tags, setTags] = useState([
    { id: 1, address: "#", content: "#desert_delivery" },
    { id: 2, address: "#", content: "#daily_desert" },
    { id: 3, address: "#", content: "#delicious_and_fresh_desserts" },
  ]);

  return (
    <section id="hero" className="hero container">
      <header className="hero__content">
        <div className="hero__tags">
          {tags.map((tag) => (
            <Tag tag={tag} key={tag.id} />
          ))}
        </div>

        <h1 className="hero__title">Daily delicious desserts</h1>
        <p className="hero__description">
          We make it happen to order and deliver daily delicious and fresh desserts right at your
          place, we are the best expect us!
        </p>

        <a href="#" className="btn hero__cta">
          Order now
        </a>
      </header>
    </section>
  );
}

export default Hero;
