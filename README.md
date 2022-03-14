Setup folder
Setup environment
npm i --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0

npm i express mongoose

create file .babelrc in root folder

{ "presets": ["env","stage-0"] }

package.json

"script": "nodemon ./src/app.js --exec babel-node -e js"

alt text
run command line line : npm i -g babel-cli

Setup mongodb & Robo3T for Windows
Download MongoDB Community

Download GUI Robo3T not Studio Robo3T

Setup mongodb for Macos
Run command line
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
Download GUI Robo3T not Studio Robo3T