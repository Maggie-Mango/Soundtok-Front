import React from 'react';
// import { useAuth } from '../../contexts/AuthContext.jsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { usePlayer } from '../../contexts/player/playerContext';
import { usePosts } from '../../contexts/PostsContext.jsx';

const SingleSong = styled.div`
  width: 30%;
  height: 220px;
  padding: 16px;
  margin: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid var(--font-line-color-yellow-transparent);
`;

const LogoButton = styled.button`
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 2px solid var(--font-line-color-yellow);
`;

const SongHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const PostRemixButton = styled.button`
  color: var(--font-line-color-yellow-transparent);
  font-size: 16px;

  &:hover {
    color: var(--font-line-color-yellow);
  }
`;

const CornerWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const SongText = styled.p``;

const Song = (props) => {
  // const { user } = useAuth();
  const { SetCurrent, currentSong, songs } = usePlayer();
  const { setSelectedProjectId } = usePosts();

  const deleteSong = () => {
    props.removeSong(props.postId, 'Posts');
  };

  const playSong = () => {
    songs.push({
      projectTitle: props.projectTitle,
      projectAudioLink: props.projectAudioLink
    });

    SetCurrent(songs.length - 1);
  };

  const convertSongLength = (seconds) => {
    let length;
    if (seconds < 60) {
      length = seconds + 's';
    } else {
      let min = Math.floor(seconds / 60);
      let sec = Math.floor(seconds % 60);
      if (sec < 10) {
        sec = '0' + sec;
      }
      length = min + ':' + sec;
    }

    return length;
  };

  //possibly make song image the background
  return (
    <SingleSong>
      <SongHeader>
        {/* <LogoButton>
          <Logo src={props.songImage}></Logo>
        </LogoButton> */}
        <div>{convertSongLength(props.projectLength)}</div>
        <CornerWrapper>
          <button></button>
          <Link to={'/studio/'}>
            <PostRemixButton onClick={() => setSelectedProjectId(props.postId)}>
              <i className='ri-sound-module-line'></i>
            </PostRemixButton>
          </Link>
          {props.isCurrentUser && <button onClick={() => deleteSong()}>XX</button>}
        </CornerWrapper>
      </SongHeader>
      <button onClick={() => playSong()}>Play Song</button>
      <div>{props.songDescription}</div>
      <SongText>{props.projectTitle}</SongText>
    </SingleSong>
  );
};

export default Song;