"use client";

import { useState } from "react";

export default function Name() {
  const [showPronunciation, setShowPronunciation] = useState(false);

  function handleNameClick() {
    setShowPronunciation(true);
    setTimeout(() => {
      setShowPronunciation(false);
    }, 5000);
  }

  return (
    <span
      className="name-inner"
      title="Click here to find out how to pronounce my name!"
      onClick={handleNameClick}
    >
      {showPronunciation ? "jo:ʒɛf ʃɒllɒi" : "József Sallai"}
    </span>
  );
}
