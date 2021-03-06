[GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# NPM Package Boilerplate Typescript

Want to create your own NPM packages? Here is a boilerplate setup with typescript and github actions to help you get started!

## Getting Started

1. Clone this project
2. yarn or npm install
3. update the name field in package.json with your desired package name
4. update the homepage field in package.json
5. Add your code
6. Follow below instructions to setup automated publish to NPM

## Publish with Git Workflow

The publish workflow yaml has already been setup for you. You will need to setup a few additional step to have it automatically publish to NPM as a package everytime you merge into master.

1. Get your secret key from NPM
2. Setup secrets on github using NPM_TOKEN as name

## Dependencies

### Development only

For development only dependencies, make sure you add them into the devDepdencies section of the package.json
```
yarn add --dev @types/mocha mocha

npm install --dev @types/mocha mocha
```

### Production

If you need your users to also download the package as a dependency, then remove it from the devDependencies and add it to the dependencies section