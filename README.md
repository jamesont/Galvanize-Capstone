###Bandwagon++

A simple full stack web app that allows a user to search for songs through Spotify's API.
When the user searches for a song a list of cards are returned containing
information about the artist.

Using HTMl 5 canvas and audio tags, the song is transformed into an array of
8 bit integers that are fed into a canvas that renders a visual representation
of the data.

#Technologies used:

- HTML5/CSS (Google's Materialize Framework)
  - HTML5 Canvas/Audio tags to render audio visualizations
- Javascript and Facebook's React (or is it a framework??);
- Facebook/React boilerplate used (apparently makes deployment to Heroku easier)
- Node/Express.js
- Postgresql

#Technical Difficulties

1) Understanding React!
  - understand what things components should control and/or render
  - props vs state, and how data flow should be directed
  - understanding React styling/syntax
2) Usual CSS difficulties
3) Trying to understand exactly what the classes and methods associated with the audio visualizer are doing
4) Deployment to Heroku
  - thankfully made easier with Facebook's React boilerplate
  - main issue was the renaming of a file that was not tracked by git for some reason
5) CORS access restriction while trying to feed music data through audio tag
  - solved by adding the line `audio.crossOrigin = "anonymous"`
6) Trying to use various NPM packages to create an audio visualizer
  - ended up using a simple example from the internet

#Things to add/work on/update (Somewhat in order of importance)

1) Issue with state not being updated when a new artist is searched for
  - artist must be searched for twice in order to return correct artist
2) Fix card rendering issues
  - styling on page is not consistent, some issues with text affecting card sizes; cards sometimes render in-line and sometimes they render in a whacky format
3) Did not even get to storing artist information in data base and create relational tables to return previous searches by user
4) User authentication/b-crypt
5) Make audio visualizer look way cooler
6) Add cookies
