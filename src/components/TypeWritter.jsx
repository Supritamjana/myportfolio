import React from 'react'
import Typed from 'typed.js';

export default function TypeWritter() {
     // Create reference to store the DOM element containing the animation
  const element = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ['Software Developer^2000', 'MERN Stack Developer^2000'],
      typeSpeed: 150,
      backSpeed: 80,
      loop: true,
      // smartBackspace: true, 
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <p style={{fontSize: 35}}>I am a <span ref={element}/>.</p>
      <p style={{fontSize: 30}}>I am a dedicated FullStack developer.Reach out if you'd like to learn more!.</p>
    </div>
  )
}
