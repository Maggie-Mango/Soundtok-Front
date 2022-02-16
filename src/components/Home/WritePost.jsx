import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ProfilePicture from '../ProfilePicture.jsx';
import helpers from './helperFunctions.js';

const WritePost = (props) => {
  const [textCharacterCount, setTextCharacterCount] = React.useState(0);
  const [uploadedAudio, setUploadedAudio] = React.useState('');
  const [audioDuration, setAudioDuration] = React.useState('');
  const [uploadedImage, setUploadedImage] = React.useState('');

  const projectTitle = React.useRef(null);
  const projectText = React.useRef(null);

  const handleTitleCharacterCount = (event) => {
    event.preventDefault();
    const count = event.target.value.length;
    if (count > 45) {
      event.target.value = event.target.value.slice(0, 45);
    }
  };

  const handleTextCharacterCount = (event) => {
    const maxCharacters = 140;
    event.preventDefault();
    const count = event.target.value.length;
    setTextCharacterCount(count);

    if (count >= maxCharacters) {
      event.target.value = event.target.value.slice(0, maxCharacters - 1);
    }
  };

  const handleAudio = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'dllt65qw');

    axios.post('https://api.cloudinary.com/v1_1/xoxohorses/video/upload', formData)
      .then((response) => {
        setUploadedAudio(response.data.url);
        setAudioDuration(response.data.duration);
      });
  };

  const handlePost = (event) => {
    event.preventDefault();
    const title = projectTitle.current.value;
    const text = projectText.current.value;
    const tags = helpers.parseTags(text);
  };

  return (
    <WritePostWrapper>
      {/* TODO: replace atrophos with username */}
      <ProfilePicture username={props.username} profilePicture={props.profilePicture}/>
      <Form onSubmit={handlePost}>
        <FlexColumn>
          <Inputs>
            <FlexColumn>
              <PostHeader>
                <label htmlFor='project-title'>
                  <ProjectTitle
                    ref={projectTitle}
                    type='text'
                    id='project-title'
                    name='projectTitle'
                    maxlength='45'
                    rows='1'
                    cols='45'
                    placeholder='Project Title'
                    onChange={handleTitleCharacterCount}
                  ></ProjectTitle>
                </label>
                <AudioIcons>
                  <PostAudioIcon>
                    <label htmlFor='post-audio'>
                      <div className='ri-upload-2-line'/>
                    </label>
                    <UploadFile
                      type='file'
                      id='post-audio'
                      name='projectAudioLink'
                      accept='audio/*'
                      onChange={handleAudio}
                    ></UploadFile>
                  </PostAudioIcon>
                  <PostAudioIcon>
                    <label htmlFor='post-audio'>
                      <button>
                        <div className='ri-folder-upload-line'/>
                      </button>
                    </label>
                  </PostAudioIcon>
                  <PostAudioIcon>
                    <label htmlFor='post-audio'>
                      <Link to='/studio'>
                        <div className='ri-mic-line'/>
                      </Link>
                    </label>
                  </PostAudioIcon>
                  <PostAudioIcon>
                    <label htmlFor='post-image'>
                      <div className='ri-image-2-line'/>
                    </label>
                    <UploadFile
                      type='file'
                      id='post-image'
                      name='projectImageLink'
                      accept='image/*'
                    ></UploadFile>
                  </PostAudioIcon>
                </AudioIcons>
              </PostHeader>
              <label htmlFor='post-text'>
                <TextInput
                  ref={projectText}
                  id='post-text'
                  name='postText'
                  maxlength='140'
                  rows='2'
                  cols='70'
                  placeholder='Share your sound'
                  onChange={handleTextCharacterCount}
                ></TextInput>
              </label>
              <CharacterCount>
                <span>{textCharacterCount}</span>/140
              </CharacterCount>
            </FlexColumn>
            <FlexColumn>
              <UploadedAudio></UploadedAudio>
              <Submit type='submit'>Post</Submit>
            </FlexColumn>
          </Inputs>
        </FlexColumn>
      </Form>
    </WritePostWrapper>
  );
};

export default WritePost;

/* STYLED COMPONENTS */
const WritePostWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
  border: 1px solid var(--font-line-color-yellow-transparent);
  border-bottom: none;
`;

const Form = styled.form`
  width: 100%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.input`
  width: 300px;
  line-height: 24px;
  margin-bottom: 4px;
  cursor: text;
`;

const AudioIcons = styled.div`
  width: 84px;
  display: inherit;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PostAudioIcon = styled.div`
  color: var(--font-line-color-yellow-transparent);
  &:hover {
    color: var(--font-line-color-yellow);
  }
`;

const UploadFile = styled.input`
  display: none;
`;

const TextInput = styled.textarea`
  width: 400px;
  min-height: 20px;
  max-height: 96px;
  background: none;
  box-sizing: border-box;
  border-top: 1px solid var(--font-line-color-yellow-transparent);
  border-bottom: 1px solid var(--font-line-color-yellow);
  padding: 4px 0px 12px 0px;
  font-family: inherit;
  font-size: 20px;
  color: var(--font-line-color-yellow);
  overflow-wrap: break-word;
  overflow: hidden;
  cursor: text;
`;

const CharacterCount = styled.span`
  font-size: 12px;
  color: var(--font-line-color-yellow-transparent);
`;

const UploadedAudio = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 12px;
  box-sizing: border-box;
  background: var(--main-color-blue-light);
  margin-left: 12px;
  margin-bottom: 6px;
`;

const Submit = styled.button`
  width: 96px;
  height: 24px;
  align-self: flex-end;
  text-align: center;
  background: var(--sound-bar-green);
  border-radius: 8px;

  &:hover {
    background: var(--sound-bar-green-light);
  }
`;
