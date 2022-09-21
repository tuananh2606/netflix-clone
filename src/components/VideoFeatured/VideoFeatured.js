import { useState } from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames/bind';
import { VscMute, VscUnmute } from 'react-icons/vsc';

import styles from './VideoFeatured.module.scss';

const cx = classNames.bind(styles);

function VideoFeatured() {
    const [isMuted, setIsMuted] = useState(true);

    const handleMute = () => {
        setIsMuted((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <ReactPlayer
                width="100%"
                height="100%"
                playing
                loop
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/322858764"
                className={cx('video')}
            />
            <div className={cx('info-video')}>
                <h1 className={cx('title')}>Netflix Title</h1>
                <p className={cx('desc')}>Description</p>
            </div>
            {isMuted ? (
                <VscMute className={cx('mute-btn')} onClick={handleMute} />
            ) : (
                <VscUnmute className={cx('mute-btn')} onClick={handleMute} />
            )}
        </div>
    );
}

export default VideoFeatured;
