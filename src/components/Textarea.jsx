import { useState } from "react";
import Warning from "./Warning";

const Textarea = ({ text, setText }) => {
	const [warningSymbol, setWarningSymbol] = useState("");
	const ban = ["<script>", "@", "&&"];

	const handleChange = (e) => {
		let newText = e.target.value;
    let found = "";

    ban.forEach((symbol) => {
      if (newText.includes(symbol)) {
        found = symbol;
      }
    })

		if (found) {
      setWarningSymbol(found);
			newText = newText.replace(found, "");
			found = "";
		} else {
			setWarningSymbol("");
		}

		setText(newText);
	};

	return (
		<div className="textarea">
			<textarea
				value={text}
				onChange={handleChange}
				placeholder="Enter your text"
				spellCheck="false"
			/>
			{warningSymbol && <Warning warningSymbol={warningSymbol} />}
		</div>
	);
};

export default Textarea;
