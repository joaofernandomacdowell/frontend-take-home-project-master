# REST API Countries

This project was developed from version 14. \* of Node.js

Check the Makefile!

## Available scripts

### Install dependencies and run the application in development mode

```
$ make setup-run
```

### Only install the application dependencies

```
$ make setup
```

### Run the application in development mode

This will open the application in [http://localhost:3000](http://localhost:3000)

```
$ make  run
```

### Run unit tests

```
$ make test
```

### Run eslint

```
$ make lint
```

### Build the application for production in the `build` directory

```
$ make build
```

## Run static server in production mode and check the performance

1- Runs the application in [http://localhost:5000](http://localhost:5000) **with the optimized build** for performance

```
$ npx serve -s build
```

2- Run lighthouse

```
$ npx lighthouse --view http://localhost:5000
```

## Extras

### LocalStorage Pull Request

This [Pull Request](https://github.com/joaofernandomacdowell/frontend-take-home-project-master/pull/1) applies localStorage on redux store startup, saving the countries array in memory cache to prevent unnecessary requests.

It was not done in the final project solution as this solution removes the need to make a request for the endpoint `https://restcountries.eu/rest/v2/name/{name}`

### Next Steps

- Add CI/CD pipeline
- Write more component tests
- Full layout and pagination functionality
- Query string pattern in Home: `http://localhost:3000/search?q=america&page=2`
- Offline functionality
