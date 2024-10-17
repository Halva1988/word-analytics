import { FACEBOOK_MAX_SYMBOLS, INSTAGRAM_MAX_SYMBOLS } from "../lib/constant";
import Stat from "./Stat";

const Stats = ({ lengthText, numberOfWord }) => {

	return (
		<section className="stats">
			<Stat number={numberOfWord} label={"Words"} />
      <Stat number={lengthText} label={"Symbols"} />
      <Stat number={INSTAGRAM_MAX_SYMBOLS} label={"Instagram"} minus={lengthText} />
      <Stat number={FACEBOOK_MAX_SYMBOLS} label={"Facebook"} minus={lengthText} />
		</section>
	);
};

export default Stats;
