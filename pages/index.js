import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

//named exports brauchen named imports, der name _muss_ gleich sein
// "as" bennent die importierte variable um
// braucht named export
import { quickSort as sort } from "@/helpers/searchFunctions";

// * import holt alle named exports, aber _nicht den default_
// braucht named export
import * as searchFunctions from "@/helpers/searchFunctions";
//searchFunctions.bubbleSort()

//default importe haben keinen namen, können benannt wie man will
//default import braucht default export
import Currywurst from "@/components/Layout";

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
