import React from 'react';
import Player from './Player';
import { useLocation } from 'react-router-dom';

const OneMovie = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = searchParams.get('data');

  function renderPlayer() {
    return <Player data={data} />;
  }

  return <>{data && renderPlayer()}</>;
};

export default OneMovie;
