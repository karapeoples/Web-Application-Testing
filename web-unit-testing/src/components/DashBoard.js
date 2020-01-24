import React from "react";

const Dashboard = ({ ball, reset, strike, foul }) => {
	return (
		<section>
			<button onClick={() => strike()}>Strike</button>
			<button onClick={() => ball()}>Ball</button>
			<button onClick={() => reset()}>Hit</button>
			<button onClick={() => foul()}>Foul</button>
		</section>
	);
};
export default Dashboard;
