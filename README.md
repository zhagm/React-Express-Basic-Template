## React Express Fullstack Template

Click [here](https://react-express-basic.herokuapp.com/) for a live demo.

Created using React.js, Node.js, Express, and Webpack.

A very basic ERN (Express, React, Node) template using Webpack (3.0.0), Node.js (8.0.0), Express, and React.js. It also has Hot Module Reloading enabled.

### SETUP:
  - `git clone https://github.com/zhagm/React-Express-Template.git` to clone repo
  - `npm i` to install dependencies
  - `nodemon` to start running
  - To use environment variables, `touch .env`, and list your variables in there. The variables can be accessed through process.env[variable name], thanks to the dotenv package.
  - if you'll be committing to GitHub, inside the project directory, `touch .gitignore` and paste the following lines into it:
```
.gitignore
node_modules/
bundle.js
.env
.DS_Store
```
