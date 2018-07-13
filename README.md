# Tic-Tac-Toe game client written with React + Redux

![TIC TAC TOE Game](https://github.com/vygandas/tic-tac-toe-react-redux-nodejs-client/blob/master/screenshot.png)

Game server can be found at https://github.com/vygandas/tic-tac-toe-react-redux-nodejs-server
 
## Task

Basic requirements:

* Two users play a game of tick-tack-toe on the same computer 
* No real-time functionality is required 
* Single session 
* All actions are reported to the API, which saves them 
* Action log is displayed underneath the game area, read from the API 
* The game must resume completely if the browser is refreshed

What you should use:

* React + Redux
* Node.js
* Anything else you want.

Notes: 

- No need for any fancy styles. Plain and simple with the least amount of effort.
- Layout must be done using flex box. 
- Result of task must be a link to two Github repos, containing both frontend and API project sources and readme 
- At least one meaningful automated test present per project with framework of your choice
 
### Start

````bash
yarn
````

````bash
yarn build:dev
````

````bash
yarn serve:dev
````

````bash
http://localhost:9000/
````

#### License

Copyright 2018 Vygandas Pliasas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
