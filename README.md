Thinking in React (and ES6)
===========================

This is the _Thinking in React_ tutorial written in ES6, using [`browserify`][4],
[`es6ify`][5] and [`reactify`][6].

## Installation

    npm install
    npm run build

## See it
Just point a static browser to the app directory. I am using [`node-static`][2].

To install `node-static`: 

    npm install -g node-static

Now you can start it with:
   
    static app/

This starts a server on http://127.0.0.1:8080.

## Develop
If you want to play with the code, you can run 

    npm run dev

This script needs [`nodemon`][3] installed globally (`npm install -g nodemon`) 
and has only been tested on OSX.


[1]: http://facebook.github.io/react/docs/thinking-in-react.html
[2]: https://www.npmjs.org/package/node-static
[3]: https://www.npmjs.org/package/nodemon
[4]: http://browserify.org/
[5]: https://github.com/thlorenz/es6ify
[6]: https://github.com/andreypopp/reactify
