import { React, useState } from 'react';
import Categories from '../img/categories.png'
import Project1 from '../img/project 1 pic.png'
import Notes from '../img/note-taker.png'
import Tracker from '../img/employee-tracker.png'
import Work from "../img/work-day.png"
import Weather from '../img/weather-app.png'



const Portfolio = () => {
  const [isHovering, setIsHovering] = useState([false,false,false,false,false,false]);

  const handleMouseOver = (num) => {
    const flags = [...isHovering];
    flags[num] = true;
    setIsHovering(flags);
  };

  const handleMouseOut = (num) => {
    const flags = [...isHovering];
    flags[num] = false;
    setIsHovering(flags);
  };

  return (
    <div className='Portfolio'>
    <div className='gallery'>
      <figure onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut(0)}>
      <a href="https://github.com/keysbhag/Food-City-Grocery"><img src={Categories} alt="Sample" /></a>
      {isHovering[0] && (
        <center><figcaption>Food City Grocery -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)}>
      <a href="https://github.com/hmhtom/Your-Movie-Databse"><img src={Project1} alt="Sample" /></a>
      {isHovering[1] && (
        <center><figcaption>Your Movie Database -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)}>
      <a href="https://github.com/AbdiDaqane/1Note-taker"><img src={Notes} alt="Sample" /></a>
      {isHovering[2] && (
        <center><figcaption>Note Taker -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(3)} onMouseOut={() => handleMouseOut(3)}>
      <a href="https://github.com/AbdiDaqane/Tracker-Employee-"><img src={Tracker} alt="Sample" /></a>
      {isHovering[3] && (
        <center><figcaption>Employee Tracker -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(4)} onMouseOut={() => handleMouseOut(4)}>
      <a href="https://github.com/AbdiDaqane/calandar-project"><img src={Work} alt="Sample" /></a>
      {isHovering[4] && (
        <center><figcaption>Work Day Scheduler -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(5)} onMouseOut={() => handleMouseOut(5)}>
      <a href="https://github.com/AbdiDaqane/weather-app"><img src={Weather} alt="Sample" /></a>
      {isHovering[5] && (
        <center><figcaption>Weather Tracker -- Click to view!</figcaption></center>
      )}
      </figure>
    </div>
    </div>
  )
}

export default Portfolio