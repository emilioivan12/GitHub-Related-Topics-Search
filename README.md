## Features
- Search for any GitHub Topic using Search input and get their realated topics.
- Click on any related topics to get also their own related topics.
- Dark and Light Mode!

![](https://github.com/emilioivan12/GitHub-Related-Topics-Search/blob/First_Iteration/overview.gif)

## Setting up development environment
- Clone the repo `git clone repo`
- Create an empty `.env` file in the root directory and fill it with your access token (Please take a look at .env.example for references)
- `npm install` or `pnpm install`
- `npm run dev`
- App should be running on `http://localhost:5173/`

## Dev Notes
I chose to use two libraries:
1. **@apollo/client**: I have worked before with Apollo in must of my graphql projects and from my point of view is easier to work with it in comparison of, for example, relay.
2. **Material-UI**: To be honest I usually prefer to write my own css (via modules or styledComponents) instead of getting a library like MUI or Bootstrap, however since I did not have too much time,  I chose to work with this because it has many out-of-the-box react components that helps you to start a project really quickly.
3. **Why not use Redux, Mobx, XState**: I have worked with all of them and specially I really like XState but for this simple project I would say that it was not needed at all.

## Future Improvements
#### Code Structuring
- **Clean architecture**: With more time i would like to move all the business logic into "use cases" to follow the clean architecture approach and make it easier to change the UI or Business Logic separately
---
#### Additional Features - User
- **NON-JS Environment** : I would like to move this to NextJS, with this I can make the app available even on non-JS environments.
- **Internationalization**: There are not too many quotes on the app, with more time it could be easy to add I18n in order to handle different languages.
- **Accessibility**: I haven't take too much attention into a11n since MUI handle most of them really well. However, I would like to pay more attention in this to confirm that all the scenarios are handled.
- **More Scenarios**: Most of the componets are decoupled of "Topic" itself, so it would be easier to expand the app functionality to also handle any other GitHub property or from any other source too.
---
#### Additional Features - Developer
- **End-2-End Testing**: I would like to add End to End testing using Cypress, to also test the full user experience instead of just having unit tests.
- **Component Documentation**: If the app is going to handle more scenarios, I would like to add Storybook, to document all the components created, to improve the development experience.

