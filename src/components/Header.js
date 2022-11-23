import React from 'react'
import AnimatedText from 'react-animated-text-content';

const Header = ({ title }) => {
  return (
    <header className='Header'>
      <div className='Animation'>
        <AnimatedText
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
  { title }
</AnimatedText>
</div>
    </header>
  )
}

export default Header