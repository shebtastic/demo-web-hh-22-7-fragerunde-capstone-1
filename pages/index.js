import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        // triggered zu jedem value change
        onChange={(event) =>
          setInput(
            event.target.value
              .toUpperCase()
              .split("")
              .filter((character) => character !== "E")
              .join("")
          )
        }
        // in kombination mit value (idealerweise aus einem state), macht den input zum controlled input
        value={input}
      />
    </>
  );
}
