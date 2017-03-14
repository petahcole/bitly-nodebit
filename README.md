#This is a wonderful race minute calculator written in JavaScript using Node.js

*Note: this only works for Node*

**If you don't have Node installed on your machine**
  ```
  $brew install node
  ```
**Clone this repo into your codebase**
**Require the calculate-minutes.js file into your code**

```
let calculate = require('./nodebit/calculate-minutes')
```

**Call the totalMinutes function and pass in your array of times**

*See index.js for an example implementation*

#You can also access the nodebit library here!

Fork and clone the repo

```
$npm install
```
This will install all the dependencies (request-promise, mocha, chai)

**Require the nodebit.js file into your code**
```
let nodebit = require('./nodebit/nodebit')
```

This will give you access to the methods on nodebit

To run the tests

```
$npm run test
```
In your index.js, if you passed in the correct parameters, all of the tests should pass
