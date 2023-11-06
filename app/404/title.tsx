"use client";

import { useEffect, useState } from "react";

export default function NotFoundTitle() {
  const [counter, setCounter] = useState(0);

  function handleNameClick() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    if (counter !== 10) {
      return;
    }

    const quiet = new Audio(
      "https://s3-us-west-1.amazonaws.com/sallai/quiet.mp3"
    );
    quiet.loop = true;
    quiet.play();
  }, [counter]);

  return (
    <section className="name" onClick={handleNameClick}>
      error 404
    </section>
  );
}
