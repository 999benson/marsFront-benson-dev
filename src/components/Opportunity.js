import React from "react";
import "../style/RoverInfo.css";

function Opportunity() {
  return (
    <div>
      <div className="container">
        <div className="Opportunity">
          <iframe
            className="vid1"
            width="900"
            height="550"
            src="https://www.youtube.com/embed/W3OXnUnxUsM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            // eslint-disable-next-line react/jsx-no-comment-textnodes
          ></iframe>
          <div className="content">
            Opportunity was the second of the two rovers launched in 2003 to
            land on Mars and begin traversing the Red Planet in search of signs
            of ancient water. The rover explored the Martian terrain for almost
            15 years, far outlasting her planned 90-day mission. After landing
            on Mars in 2004, Opportunity made a number of discoveries about the
            Red Planet including dramatic evidence that long ago at least one
            area of Mars stayed wet for an extended period and that conditions
            could have been suitable for sustaining microbial life. The
            Opportunity rover stopped communicating with Earth when a severe
            Mars-wide dust storm blanketed its location in June 2018. After more
            than a thousand commands to restore contact, engineers in the
            Mission Control at NASA&apos;s Jet Propulsion Laboratory (JPL) made
            their last attempt to revive Opportunity Tuesday, February 13, 2019,
            to no avail. The solar-powered rover&apos;s final communication was
            received June 10.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opportunity;
