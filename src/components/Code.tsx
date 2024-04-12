"use client";

import { useTheme } from "next-themes";

import { FC, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDarkReasonable,
  atomOneLight,
  solarizedLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeProps {
  code: string;
  show: boolean;
  language: string;
  animationDelay?: number;
  animated?: boolean;
}

const Code = ({
  code,
  show,
  animated,
  animationDelay,
  language,
}: CodeProps) => {
  const { theme: applicationTheme } = useTheme();
  console.log("current theme", applicationTheme);

  return (
    <SyntaxHighlighter
      language={language}
      style={applicationTheme == "light" ? atomOneLight : atomOneDarkReasonable}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
