# Song Rater

## What it is
Song Rater is a web app that allows users to give songs of their choice a rating and save them to a database. It allows users to search for a song using the song name and artist and uses the LastFM API to fetch data about that song. Users can then give that song a rating out of 10 and save their score to a Firebase database by clicking that 'Save Rating' button.

## How to test & run this app locally
1. Download this repository using `git clone`
2. When it is cloned `cd` into the directory and run `yarn install`.
3. To run the test suites using React Testing Library run the command `yarn test`
4. To use the app, run the command `yarn start`. This will start a development server at `localhost:3000`
5. Search for songs and give them a rating!

## Approach & key design decisions
The front end for this app is built using React. I implemented TDD whilst building this application and used the React Testing Library to test features and help shape development. 

This front end integrates with a 3rd party API from LastFM which it uses to fetch song data based on the user's search. The LastFM API uses RESTful architecture. I originally intended to use GraphQL to interact with the 3rd party API but I was unable to find an API that supported GraphQL which suited my needs. The advantage of the LastFM API is that it was very easy to build queries using the artist and song name parameters supplied by the user. This API does require a free authentication key to work, which I received by making a free account on the LastFM website. In this case I have written the authentication key directly into the code, which is not something I would do in a production environment (I would use environment variables instead) but I felt it was appropriate for the purposes of this exercise.

Once a user has retrieved a song and given it a rating, they can save that song and its rating to a NoSQL Firebase database. I didn't have any previous experience with Firebase, but I found it fairly simple to use and relatively straightforward to integrate into my React app. The database did require a config object that I put into a `config.js` file have included in my commits. Again this is not something I would do in a production environment but I felt it was appropriate for the purposes of this exercise. As of yet there is no way of retrieving the saved data from the database via the app.

## Future Plans
Given more time, the first feature I would add to this app is the ability to retrieve songs from the Firebase database and display the songs and ratings in the app. They are currently being saved but a way to retrieve them has not been implemented. I would also look into designing a GraphQL layer and schema for the LastFM API so that queries could be made using GraphQL in future. In addition, I would have liked to done a bit more work on the styling and appearance of the app, but given the time constraints of this exercise I felt it was more important to focus of implementing functionality.