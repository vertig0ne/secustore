# Encrypted Uploader

Uploads a file with an encryption key, that key is then needed to pull the data back from the store.


# Considerations

 - Utilised CommonJS rather then ES6+, due to support node12 rather then node14
 - Used MongoDB, supports quick prototyping, which is good as this project should never see a production environment
 - Jest was utilised for unit testing, kept it to basic unit tests rather than trying integration/e2e
 
# Installation

Installation is simple and doesnt require too much effort. MongoDB will likely be the hardest part.

A basic installation of MongoDB is all that is needed. Install and Start it (if it didn't auto start).

To install the javascript dependancies:

```
npm install
``` 

Should you need to change the DB URI (as it is default to localhost) you can find it in `api/index.js` on Line 11.


# Running

Starting is simple, either `npm start` or `node .` inside the directory will spring it to life.
By default it runs on port 3000, this is configurable by the environment variable `PORT`


