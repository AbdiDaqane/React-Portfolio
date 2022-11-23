import React from "react";
//import myPhoto from "../img/default.jpeg";
import Personal from "../img/personal.PNG";
import AnimatedText from 'react-animated-text-content';


const About = () => {
  return (
    <div className="About">
      <img className="ProfilePic" src={Personal} alt="Abdi Deqane" />
      <h2 className="AboutMeTitle">  <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  A little bit more about myself!
</AnimatedText> </h2>
      <p>
        Abdirahman Daqane currently a student at University of Toronto Canada,
        working on getting my foot in the door, as a software developer . Worked
        as an industrial tradesmen at Canadian Natural Resources Limited in
        Alberta. Gained invaluable knowledge on how to work hard and also live
        on my own. Earned many certificates such as fall protection, first
        aid and confined space entry and a few more.The way technology is headed
        I decided to switch career paths and become a security administrator or
        software developer.My top 3 strengths are versatility, dedication and
        willingness to learn. First I chose versatility because I feel I could
        adapt to any situation thrown at me. Second, I chose dedication because
        if you do not have it, the quality of work will suffer. Lastly I chose
        willingness to learn because I do not want to stay in one place. I want
        to keep learning and growing.
        <br />
        <br />
      </p>
    </div>
  );
};

export default About;
