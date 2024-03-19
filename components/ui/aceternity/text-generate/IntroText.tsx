"use client";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `You can choose many incredible games to play and earn rewards
`;

export function IntroText() {
  return <TextGenerateEffect words={words} />;
}
