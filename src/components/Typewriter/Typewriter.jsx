import React, { useEffect, useState } from 'react';

const Typewriter = ({ data }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isForward) {
        if (charIndex < data[textIndex].length) {
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else {
          setIsForward(false);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prevCharIndex) => prevCharIndex - 1);
        } else {
          setIsForward(true);
          setTextIndex((prevTextIndex) =>
            prevTextIndex === data.length - 1 ? 0 : prevTextIndex + 1
          );
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, isForward, data, textIndex]);

  return (
    <span>{data[textIndex].substr(0, charIndex)}</span>
  );
};

export default Typewriter;
