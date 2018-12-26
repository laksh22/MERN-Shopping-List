# MERN-Shopping-List

## To setup the backend
A shopping list app created using the MERN Stack

1. Use `npm init` to set up a new NPM package

2. `npm install express body-parser mongoose concurrently`

`express` is for the backend and creating routes

`body-parser` reads the body of an incoming request

`mongoose` interacts with the MongoDB database

`concurrently` allows you to run multiple npm scripts at a time

3. `npm install -D nodemon`
With `nodemon` you don't have to restart the server every time you make a chage
`-D` is used since nodemon is a dev dependency and is not needed in any public releases

4. Create a MongoDB database at mlab.com and add a new database user. Create a config folder with a keys.js file and export your
database URI as a Javascript object.

5. Start the server using `npm run server`

## To add React
1. `cd` into the `client` folder.

2. `npm install -g create-react-app`

3. `create-react-app .`

## To add Bootstrap
1. `cd` into the `client` folder.

2. `npm install bootstrap reactstrap uuid react-transition-group`