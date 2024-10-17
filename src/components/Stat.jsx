const Stat = ({ number, label, minus }) => {
	return (
		<section className="stat">
			<span
				className={`stat__number  ${
					number - minus < 0 ? "stat__number--limit" : ""
				}`}
			>
				{minus ? number - minus : number}
			</span>
			<h2 className="second-heading">{label}</h2>
		</section>
	);
};

export default Stat;
