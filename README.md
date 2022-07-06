# Tamanna code challenge - Rui Pedro Dias

## Main objective of the challenge

Using the OpenWeatherMap free API we want you to create a page where the current weather will be displayed as well as the forecast for the next 7 days.

For the current weather, we want you to get the users location and get the weather from that location (in case you can’t fetch the location of the user, then use these coordinates from Lisbon (latitude: 38.7259284, longitude: -9.137382,17). The same is valid for the forecast data.

We would like you to also add the ability for the user to add different cities (with respective country) to get the current weather and the
forecast from. The user must be able to add and delete cities and check the weather on each city individually. The cities that are added by the
user must be persisted in order to continue where he left of when he comes back to the app. The user should get feedback for all the
operations that he executes and that are worth getting feedback from.

## Using Docker to run our application

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure of the project

### containers
This folder contains all the main components of our app. 
- An input component, used to input the user city in order to add it to a list and view the details later
- A list component, used to show the list of added cities by the user input
- A card component, used to show the user input and the detail of the choosen city. This is uses a reusable component called `CardLayout`, used to show the data.

### interfaces
This folder was used by experiencing a little bit with Typescript interfaces for type checking

### pages
#### api
This folder contains the file that contains the method used to fetch the information from the open weather api

#### locations
Page used to fetch info about a location via it's id. This is a `NextJS` feature, and uses SSR. Once again, just trying it out for the first time to see its potential.

### utils
Here we can find our context. Locations context, that makes use of useContext api from react, and gives access to the locations array to all the app.
