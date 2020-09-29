import React, { useRef } from 'react';
import { Container, Eyes, Face, Eye } from './components';

export const App = () => {
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();

  const rotateEyes = ({ pageX, pageY }) =>
    [leftEyeRef, rightEyeRef].forEach(({ current }) => {
      const x = current.getBoundingClientRect().left + current.clientWidth / 2;
      const y = current.getBoundingClientRect().top + current.clientHeight / 2;
      const radian = Math.atan2(pageX - x, pageY - y);
      const rot = radian * (180 / Math.PI) * -1 + 270;
      current.style.transform = `rotate(${rot}deg)`;
    });

  return (
    <Container onMouseMove={rotateEyes}>
      <Face>
        <Eyes>
          <Eye ref={leftEyeRef} />
          <Eye ref={rightEyeRef} />
        </Eyes>
      </Face>
    </Container>
  );
};
