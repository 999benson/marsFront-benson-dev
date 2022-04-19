import React from "react";
import "../style/RoverInfo.css";

function Curiosity() {
  return (
    <div>
      <div className="container">
        <div className="Opportunity">
          <iframe
            className="vid1"
            width="900"
            height="550"
            src="https://www.youtube.com/embed/qaUhLXolGaI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="content">
            Part of NASA&apos;s Mars Science Laboratory mission, Curiosity is
            the largest and most capable rover ever sent to Mars. It launched
            Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012
            (1:32 a.m. EDT on Aug. 6, 2012). Curiosity set out to answer the
            question: Did Mars ever have the right environmental conditions to
            support small life forms called microbes? Early in its mission,
            Curiosity&apos;s scientific tools found chemical and mineral
            evidence of past habitable environments on Mars. It continues to
            explore the rock record from a time when Mars could have been home
            to microbial life. Curiosity carries the biggest, most advanced
            instruments for scientific studies ever sent to the Martian surface.
            The history of Martian climate and geology is written in the
            chemistry and structure of the rocks and soil. Curiosity reads this
            record by analyzing powdered samples drilled from rocks. It also
            measures the chemical fingerprints present in different rocks and
            soils to determine their composition and history, especially their
            past interactions with water.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curiosity;
