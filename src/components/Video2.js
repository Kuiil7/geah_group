import React, { Component } from "react";
import ReactPlayer from 'react-player'

class Video2 extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
             url={[
                {src: 'videos/geah_video_reg2.mp4',
                 type: 'video/mp4'},
              ]}
            width='100%'
            height='100%'
            controls = {true}

            />
        </div>
        )
    }
}

export default Video2;