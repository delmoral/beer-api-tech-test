# BeerApiTechTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Recommended version of **Node.js -> 18.16.1.**
Run `npx npm install` to install dependencies. 
Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---------------------------------------------------------------

# DOCUMENTATION
https://punkapi.com/documentation/v2

### Authentication
NONE

### Parameters: 
All parameters are optional as a query string and can be chained together. 
Without a value it will return a 400 error.

### Pagination
Multiple items results will be limited to 25 by default.
?page paramater to access the rest of pages.
?per_page changes limit

### Get Beers endpoint
URL: https://api.punkapi.com/v2/beers

Just using string params. Not counting Ids filtering.

|PARAM|TYPE|DETAILS|
|:---:|:--:|:-----:|
|beer_name|string|All beers by name|
|yeast|string|All beers by yeast|
|hops|string|All beers by hops|
|malt|string|All beers by malt|
|food|string|All beers by food|
