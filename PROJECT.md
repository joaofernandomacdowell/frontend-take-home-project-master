# REST API Countries

This project was developed from version 14. \* of Node.js

## Available scripts

### Install dependencies and run the application in development mode

```
$ yarn
```

### Run the application in development mode

This will open the application in [http://localhost:3000](http://localhost:3000)

```
$ yarn start
```

### Run unit tests

```
$ yarn test
```

### Build the application for production in the `build` directory

```
$ yarn build
```

## Run static server in production mode and check performance

1- Runs the application in [http://localhost:5000](http://localhost:5000) with the optimized build for performance

```
$ npx serve -s build
```

2- Run lighthouse

```
$ npx lighthouse --view http://localhost:5000
```
