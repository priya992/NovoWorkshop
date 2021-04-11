# NovoWorkshop

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This web application captures users basic information to onboard them on our platform. The process is a multi step form which captures the user's personal, business & debit card delivery info

### Installing

A step by step series to get a development env running

```
1. git clone {{repo name}} / Download code
2. cd NovoWorkshop
3. npm install
4. npm run build (to create a build folder)
5. npm run start (to run application on local)
5. run application on url: http://localhost:8080/

```

## Deployment

Application is deployed using netlify(https://app.netlify.com/)

```
https://novo-onboard.netlify.app/

```

## Running the tests

The test cases in the application uses the snapshot testing of Jest.

Currently facing test config issues. So created a seperate PR for that https://github.com/priya992/NovoWorkshop/pull/2

To run test cases from this above branch, we can use command on terminal

```
1. npm run test

```

## Added Features

1. Added a home page that has onBoarding button.
On click of button a different modal chunk is loaded that has multi-step form kind structure.
2. Added all the fields in the form as a constant. So that if there is any new field required very minimal changes required for that.
3. Added all the required and other validation. We can check validation in the constants folder that has field configurations. So for validation using regex.
4. Saving data in localStorage after user clicked on next on form.
5. On click of back button from Preview state, getting data from localStorage for step 2 and 1.
6. Third step is the Preview state. On click of submit from this step, clearing the localStorage and application state as well.
7. Added module import resolver for components only. We can do it for other folders as well.
8. Using scss for now but we can use react-emotion as well.
9. Added UT for some components only for now using jest.
10. Added different chunk for footer, modal components.
11. Maintaining application state using redux.
12. Using hooks in the components.
13. I am using antd external library for UI. Using this because in our current company for many projects we are using this library. And it has some really great features for Forms.


### What can be improved

1. UT for container/actions and reducers.
2. We can configure Eslint correctly.
3. We can use Prop validation and can provide default props in components
4. We can use Dark mode and lite mode themes for the app. We can follow this blog (https://javascript.plainenglish.io/implementing-dark-mode-reactjs-2fba91cda7f2).
5. We can use TypeScript to get the compile time errors.
