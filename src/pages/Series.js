import React from "react";


import BigTrendingSeries from "../containers/BigTrendingSeries/BigTrendingSeries";
import TopRatedSeries from "../containers/topRatedSeries/TopRatedSeries";
import UpComingSeries from "../containers/upComingSeries/UpComingSeries";

const Series = () => {
	return (
		<div>
			<BigTrendingSeries />
			<TopRatedSeries />
			<UpComingSeries/>
		</div>
	);
};

export default Series;
