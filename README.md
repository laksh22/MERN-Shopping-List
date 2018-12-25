# MERN-Shopping-List
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