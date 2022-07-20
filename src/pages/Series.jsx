import React from 'react';

import UpComingMovie from '../containers/UpComingMovie/UpComingMovie'
import BigTrendingSeries from '../containers/BigTrendingSeries/BigTrendingSeries';
import TopRatedSeries from '../containers/topRatedSeries/TopRatedSeries';


const Series = () => {
  
  return (
    <div>
        <BigTrendingSeries/>
        <TopRatedSeries/>
        <UpComingMovie/>
    </div>

  )
}

export default Series;



