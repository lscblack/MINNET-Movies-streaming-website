import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { Link } from 'react-router-dom';

const Player = ({ data }) => {
  const videoNode = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vjs.zencdn.net/8.6.1/video.min.js'; // Replace with your Video.js CDN link
    script.onload = () => {
      const videoOptions = {
        autoplay: false,
          controls: true,
          poster: data,
          loop: true,
          fluid: false, // For responsive design
          preload: 'auto',
          playbackRates: [0.5, 1, 1.5, 2], // Playback rate options
          responsive: true,
          html5: {
            vhs: {
              enableLowInitialPlaylist: true,
              smoothQualityChange: true,
              overrideNative: true,
            },
          },
          controlBar: {
            volumePanel: {
              inline: false,
              vertical: false,
            },
            playToggle: true,
            progressControl: true,
            remainingTimeDisplay: true,
            fullscreenToggle: true,
          },
          userActions: {
            hotkeys: true,
          }
      };
      const player = videojs(videoNode.current, videoOptions);
      return () => {
        if (player) {
          player.dispose();
        }
      };
    };
    document.body.appendChild(script);
  }, [data]);
  

  // for menu
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default right-click behavior
  };

  return (
    <div   className="movie_play" onContextMenu={handleContextMenu} >
    <div className="Navigation_mov"id="movie_play">
      <Link to="/" title="Go Back" className="fa fa-arrow-left arow"></Link>
      <div>
        <h3 className="bg-none text-white bg-trans">The Next Dark Pups</h3>
        <span className="bg-none text-white">Action, Adeventure by Marvels <small className="btn btn-danger btn-sm p-1 f-12">12 <i className="fa fa-plus "></i></small></span>
      </div>
    </div>
        <video onContextMenu={handleContextMenu} ref={videoNode} className="video-js video_my"  poster={data}>
          <source src="./videos/movi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default Player;
