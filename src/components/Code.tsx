'use client';

import { FC, useEffect, useState } from 'react';
import { type Language } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import darkTheme from 'prism-react-renderer';

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animationDelay?: number;
  animated?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  language,
  show,
  animated,
  animationDelay,
}) => {
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState(animated ? '' : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 15);

        return () => clearInterval(intervalId);
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay]);

  // number of lines
  const lines = text.split(/\r\n|\r|\n/);

  // const theme = applicationTheme === 'light' ? lightTheme : darkTheme;

  return <div>Code</div>;
};

export default Code;
