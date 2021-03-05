import React, { Component } from "react";
import ReactPlayer from 'react-player'

class Video1 extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url={[
                {src: process.env.PUBLIC_URL + 'videos/geah_video_vitC.mp4', type: 'video/mp4'},
              ]}
            width='100%'
            height='100%'
            controls = {true}

            />
        </div>
        )
    }
}

export default Video1;