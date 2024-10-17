import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

const Container = () => {
  const [text, setText] = useState('');
  
  const numberOfWords = text.split(" ").filter(word => word !== "").length;
  const numberOfSymbols = text.length;

	return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats numberOfWord={numberOfWords} lengthText={numberOfSymbols}/>
		</main>
	);
};

export default Container;
