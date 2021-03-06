# SoundTok, a place to share your sound

[https://soundtok.live](https://soundtok.live/#/)

Anyone, from the casual listener and discoverer of new music to the veteran producer, will find a community on SoundTok. Put together a new track by uploading audio files from your computer or loading from saved drafts and layering different sounds and effects. Once you're satisfied, post the song with a description, image, and hashtags so others can discover your music through the feed or search bar. Keep your profile up to date, so others know who you are as an artist.

# Table of Contents

- [Nav Bar](#navigation-bar)
- [Studio](#studio)
- [Feed](#feed)
- [Hashtag Page](#hashtag-page)
- [Profile](#profile)
- [Schema](#schema-design)
- [Authentication](#authentication)
- [Tech Stack](#tech-stack--libraries)
- [Contributors](#contributors)

## Navigation Bar

Users can search for other users (i.e. @maggie) or hashtags (i.e. @cats). This allows members of SoundTok to view other projects and posts on the user's profile page or on the separate hashtag page.

## Studio

The studio allows Soundtok users to remix their creations and download them into an MP3 which can later be posted on the feed. Music effects include layering, reverbe, fade in/out and trim

![Screen Shot 2022-03-07 at 10 40 37 AM](https://user-images.githubusercontent.com/13864148/157066678-667ab554-def2-4aa0-bb2e-cd6a63fbd053.png)

## Feed

_Main Features_
* Post music by uploading an audio file, loading from drafts, or putting together a track in the studio
* Posts include can include a title, description (limited to 140 char), and image
* Explore others' musical projects, which are sorted with most recently posted on top
* Discover relevant music and artists when clicking on a hashtag
* Remix songs that pique your interest directly in the studio
* Save unfinished posts to drafts to revisit later
* Delete posts after publishing


![Screen Recording 2022-03-04 at 7 23 01 PM](https://user-images.githubusercontent.com/69382434/156866618-144e0a94-b6d1-4b46-bd25-63d14ce318de.gif)

## Hashtag Page

_Main Features_

- When a user clicks on or search for a hashtag, renders a list consisting of every post which contains the same hashtag
- Posts include project title, audio length, profile picture, username, and an expandable description
- Re-render the posts content when a user searches other hashtags from the page
- Add animated wave effect

![Screen Shot 2022-03-07 at 10 36 35 AM](https://user-images.githubusercontent.com/13864148/157065812-6c52c88d-5472-4ad4-b28a-8182804a9f53.png)

## Profile
_Main Features_
* View user's profile picture and biography
* Edit own profile picture and biography
* View list of user's posts with relevant details
* View list of own drafts with relevant details
* Delete own songs and drafts
* Remix selected song directly in the studio

![2022-03-07 09 50 32](https://user-images.githubusercontent.com/13864148/157065692-791abc7a-06de-4e16-8034-2a9392dcda0b.gif)


## Schema Design


The server utilizes a Postgres database on the backend with minimal JavaScript transformation. Developers can test API endpoint responses and expected data shapes directly in Postman using our  [Soundtok API documentation](https://documenter.getpostman.com/view/14811382/UVkvJsHr).

<img width="879" alt="Screen Shot 2022-03-05 at 12 14 01 PM" src="https://user-images.githubusercontent.com/13864148/156893333-b053f28a-325c-475e-9faa-701246130abc.png">



## Authentication

Soundtok utilizes Auth0 for user account creation. Users can choose to login with social media or with their email. 
Account data is safely secured in the database and sensitive data (such as passwords) are securely encrypted in Auth0.

## Tech Stack & Libraries

_Deployment/Utility_

- Circle CI
- AWS EC2
- [Jest](https://jestjs.io/)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Eslint](https://eslint.org/)

_Core Tech_

- [Node v16](https://nodejs.org/dist/latest-v16.x/docs/api/)
- [Express v4](https://expressjs.com/)
- [React v17](https://reactjs.org/docs/getting-started.html)
- [Postgres v16](https://www.postgresql.org/docs/)

_Libraries_

- [Styled-components](https://styled-components.com/)
- [Luxon](https://moment.github.io/luxon/api-docs/index.html#duration)
- [Axios](https://www.npmjs.com/package/axios)
- [Auth0](https://auth0.com/docs/)
- [Cloudinary](https://cloudinary.com/documentation)
- [Linkify.js](https://linkify.js.org/docs/)

## Contributors

[@xoxohorses](https://github.com/xoxohorses) - **Product Manager/Software Engineer** (Feed, Design, Project Management)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Julie%20Yu-blue)](https://www.linkedin.com/in/juliemyu/)

[@roastnewt](https://github.com/roastnewt) - **Architecture Owner/Software Engineer** (Deployment, CI/CD, Studio drafts)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Clayton%20Watterson-blue)]()

[@imperium11](https://github.com/imperium11) - **UI Owner/Software Engineer** (Studio, Design)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Poyraz%20Akay-blue)](https://www.linkedin.com/in/poyraz-akay/)

[@Maggie-Mango](https://github.com/Maggie-Mango) - **Software Engineer** (Database design, Deployment, API tests)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Maggie%20Saldivia-blue)](https://www.linkedin.com/in/maggiesaldivia)

[@rita0927](https://github.com/rita0927) - **Software Engineer** (Soundbar, Hashtag page, tests)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yu%20Zhang-blue)](https://www.linkedin.com/in/yuzhang734680/)

[@yuanqiwang](https://github.com/yuanqiwang) - **Software Engineer** (Authentication, Navigation bar/search)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yuanqi%20Wang-blue)](https://www.linkedin.com/in/yuanqiw/)

[@rickkunz](https://github.com/rickkunz) - **Software Engineer** (Profile page)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rick%20Kunz-blue)](https://www.linkedin.com/in/rickckunz/)
