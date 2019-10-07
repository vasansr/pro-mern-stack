### Deprecation notice

This github repository, and also the book that it is meant to accompany, have now been superceded by the *second edition* of the book and a corresponding new repository: [pro-mern-stack-2](https://github.com/vasansr/pro-mern-stack-2). The repository is no longer being maintained, but remains in GitHub as an archive.

![Pro MERN Stack](https://images.springer.com/sgw/books/medium/9781484226520.jpg)

This is the complete source code compilation of all code listings in the book
Pro MERN Stack by Vasan Subramanian, published by Apress. The book can be purchased at any of these websites:

   * [Apress](http://www.apress.com/in/book/9781484226520)
   * [Springer](http://www.springer.com/gb/book/9781484226520)
   * [Amazon](https://www.amazon.com/Pro-MERN-Stack-Development-Express-ebook/dp/B06XDVC4SC)

Each section in the book ends with a working application, which corresponds to a branch in this
repository. For each section, you can browse the complete source, or look at the differences from
the previous section/step using the appropriate link against each section, in this page.

### Demo

There is no online demo, so if you want to take a peek into how the app will look like once it's
done till the end of the book, you will need to do the following:

   1. Install Node.js (with npm) and MongoDB
   2. Clone this repository
   3. Run `npm install` in the project directory
   4. Run `npm run compile`, followed by `npm run compile-server` to generate the bundles
   5. Run `npm start` to start the server on port 3000
   6. (Optionally) Run `mongo scripts/init.mongo.js` to seed the database with some initial data

The above requires that you know, or able to find out how to install Node.js and MongoDB.

### Chapter 1: Introduction

There are no code listings in this chapter.

[Errata / Issues relating to Chapter 2](../../milestone/1)

### Chapter 2: Hello World

   * Server-less Hello World: [Full source](../../tree/02-server-less-hello-world)
   * Express: [Full source](../../tree/02-express) | [Diffs from previous step](../../compare/02-server-less-hello-world...02-express)
   * Separate script file: [Full source](../../tree/02-separate-script-file) | [Diffs from previous step](../../compare/02-express...02-separate-script-file)
   * Transform: [Full source](../../tree/02-transform) | [Diffs from previous step](../../compare/02-separate-script-file...02-transform)
   * Automate: [Full source](../../tree/02-automate) | [Diffs from previous step](../../compare/02-transform...02-automate)
   * ES2015:  [Full source](../../tree/02-es2015) | [Diffs from previous step](../../compare/02-automate...02-es2015)

[Errata / Issues relating to Chapter 2](../../milestone/2)

### Chapter 3: React Components
   * React Classes:  [Full source](../../tree/03-react-classes) | [Diffs from previous step](../../compare/02-es2015...03-react-classes)
   * Composing Components:  [Full source](../../tree/03-composing-components) | [Diffs from previous step](../../compare/03-react-classes...03-composing-components)
   * Passing Data - Using Properties: [Full source](../../tree/03-passing-data--using-properties) | [Diffs from previous step](../../compare/03-composing-components...03-passing-data--using-properties)
   * Passing Data - Using Children: [Full source](../../tree/03-passing-data--using-children) | [Diffs from previous step](../../compare/03-passing-data--using-properties...03-passing-data--using-children)
   * Dynamic Composition: [Full source](../../tree/03-dynamic-composition) | [Diffs from previous step](../../compare/03-passing-data--using-children...03-dynamic-composition)

[Errata / Issues relating to Chapter 3](../../milestone/3)

### Chapter 4: React State
   * Setting State: [Full source](../../tree/04-setting-state) | [Diffs from previous step](../../compare/03-dynamic-composition...04-setting-state)
   * Async State Initialization: [Full source](../../tree/04-async-state-initialization) | [Diffs from previous step](../../compare/04-setting-state...04-async-state-initialization)
   * Event Handling: [Full source](../../tree/04-event-handling) | [Diffs from previous step](../../compare/04-async-state-initialization...04-event-handling)
   * Communicate Child to Parent: [Full source](../../tree/04-communicate-child-to-parent) | [Diffs from previous step](../../compare/04-event-handling...04-communicate-child-to-parent)
   * Stateless Components: [Full source](../../tree/04-stateless-components) | [Diffs from previous step](../../compare/04-communicate-child-to-parent...04-stateless-components)

[Errata / Issues relating to Chapter 4](../../milestone/4)

### Chapter 5: Express REST APIs
   * List API: [Full source](../../tree/05-list-api) | [Diffs from previous step](../../compare/04-stateless-components...05-list-api)
   * Create API: [Full source](../../tree/05-create-api) | [Diffs from previous step](../../compare/05-list-api...05-create-api)
   * Using List API: [Full source](../../tree/05-using-list-api) | [Diffs from previous step](../../compare/05-create-api...05-using-list-api)
   * Using Create API: [Full source](../../tree/05-using-create-api) | [Diffs from previous step](../../compare/05-using-list-api...05-using-create-api)
   * Error Handling: [Full source](../../tree/05-error-handling) | [Diffs from previous step](../../compare/05-using-create-api...05-error-handling)

[Errata / Issues relating to Chapter 5](../../milestone/5)

### Chapter 6: Using MongoDB
   * Schema Initialization: [Full source](../../tree/06-schema-initialization) | [Diffs from previous step](../../compare/05-error-handling...06-schema-initialization)
   * MongoDB Node.js Driver: [Full source](../../tree/06-mongodb-nodejs-driver) | [Diffs from previous step](../../compare/06-schema-initialization...06-mongodb-nodejs-driver)
   * Read From MongoDB: [Full source](../../tree/06-read-from-mongodb) | [Diffs from previous step](../../compare/06-mongodb-nodejs-driver...06-read-from-mongodb)
   * Write to MongoDB: [Full source](../../tree/06-write-to-mongodb) | [Diffs from previous step](../../compare/06-read-from-mongodb...06-write-to-mongodb)

[Errata / Issues relating to Chapter 6](../../milestone/6)

### Chapter 7: Modularization and Webpack
   * Server-Side Modules: [Full source](../../tree/07-server-side-modules) | [Diffs from previous step](../../compare/06-write-to-mongodb...07-server-side-modules)
   * Using Webpack Manually: [Full source](../../tree/07-using-webpack-manually) | [Diffs from previous step](../../compare/07-server-side-modules...07-using-webpack-manually)
   * Transform and Bundle: [Full source](../../tree/07-transform-and-bundle) | [Diffs from previous step](../../compare/07-using-webpack-manually...07-transform-and-bundle)
   * Libraries Bundle: [Full source](../../tree/07-libraries-bundle) | [Diffs from previous step](../../compare/07-transform-and-bundle...07-libraries-bundle)
   * Hot Module Replacement: [Full source](../../tree/07-hot-module-replacement) | [Diffs from previous step](../../compare/07-libraries-bundle...07-hot-module-replacement)
      * HMR Using Middleware: [Full source](../../tree/07-hmr-using-middleware) | [Diffs from previous step](../../compare/07-libraries-bundle...07-hmr-using-middleware)
   * Debugging: [Full source](../../tree/07-debugging) | [Diffs from previous step](../../compare/07-hot-module-replacement...07-debugging)
   * Server-Side ES2015: [Full source](../../tree/07-server-side-es2015) | [Diffs from previous step](../../compare/07-debugging...07-server-side-es2015)
   * ESLint: [Full source](../../tree/07-eslint) | [Diffs from previous step](../../compare/07-server-side-es2015...07-eslint)

[Errata / Issues relating to Chapter 7](../../milestone/7)

### Chapter 8: React Router
   * Simple Routing: [Full source](../../tree/08-simple-routing) | [Diffs from previous step](../../compare/07-eslint...08-simple-routing)
   * Route Parameters: [Full source](../../tree/08-route-parameters) | [Diffs from previous step](../../compare/08-simple-routing...08-route-parameters)
   * Route Query String: [Full source](../../tree/08-route-query-string) | [Diffs from previous step](../../compare/08-route-parameters...08-route-query-string)
   * Programmatic Navigation: [Full source](../../tree/08-programmatic-navigation) | [Diffs from previous step](../../compare/08-route-query-string...08-programmatic-navigation)
   * Nested Routes: [Full source](../../tree/08-nested-routes) | [Diffs from previous step](../../compare/08-programmatic-navigation...08-nested-routes)
   * Browser History: [Full source](../../tree/08-browser-history) | [Diffs from previous step](../../compare/08-nested-routes...08-browser-history)

[Errata / Issues relating to Chapter 8](../../milestone/8)

### Chapter 9: Forms
   * More Filters in List API: [Full source](../../tree/09-more-filters-in-list-api) | [Diffs from previous step](../../compare/08-browser-history...09-more-filters-in-list-api)
   * Filter Form:  [Full source](../../tree/09-filter-form) | [Diffs from previous step](../../compare/09-more-filters-in-list-api...09-filter-form)
   * Get API: [Full source](../../tree/09-get-api) | [Diffs from previous step](../../compare/09-filter-form...09-get-api)
   * Edit Page: [Full source](../../tree/09-edit-page) | [Diffs from previous step](../../compare/09-get-api...09-edit-page)
   * UI Components - Number Input: [Full source](../../tree/09-ui-components--number-input) | [Diffs from previous step](../../compare/09-edit-page...09-ui-components--number-input)
   * UI Components - Date Input: [Full source](../../tree/09-ui-components--date-input) | [Diffs from previous step](../../compare/09-ui-components--number-input...09-ui-components--date-input)
   * Update API: [Full source](../../tree/09-update-api) | [Diffs from previous step](../../compare/09-ui-components--date-input...09-update-api)
   * Using Update API: [Full source](../../tree/09-using-update-api) | [Diffs from previous step](../../compare/09-update-api...09-using-update-api)
   * Delete API: [Full source](../../tree/09-delete-api) | [Diffs from previous step](../../compare/09-using-update-api...09-delete-api)
   * Using Delete API: [Full source](../../tree/09-using-delete-api) | [Diffs from previous step](../../compare/09-delete-api...09-using-delete-api)

[Errata / Issues relating to Chapter 9](../../milestone/9)

### Chapter 10: Bootstrap
   * Bootstrap Installation: [Full source](../../tree/10-bootstrap-installation) | [Diffs from previous step](../../compare/09-using-delete-api...10-bootstrap-installation)
   * Navigation: [Full source](../../tree/10-navigation) | [Diffs from previous step](../../compare/10-bootstrap-installation...10-navigation)
   * Table and Panel: [Full source](../../tree/10-table-and-panel) | [Diffs from previous step](../../compare/10-navigation...10-table-and-panel)
   * Forms - Grid Based Forms: [Full source](../../tree/10-forms--grid-based-forms) | [Diffs from previous step](../../compare/10-table-and-panel...10-forms--grid-based-forms)
   * Forms - Inline Forms: [Full source](../../tree/10-forms--inline-forms) | [Diffs from previous step](../../compare/10-forms--grid-based-forms...10-forms--inline-forms)
   * Forms - Horizontal Forms: [Full source](../../tree/10-forms--horizontal-forms) | [Diffs from previous step](../../compare/10-forms--inline-forms...10-forms--horizontal-forms)
   * Alerts - Validations: [Full source](../../tree/10-alerts--validations) | [Diffs from previous step](../../compare/10-forms--horizontal-forms...10-alerts--validations)
   * Alerts - Results: [Full source](../../tree/10-alerts--results) | [Diffs from previous step](../../compare/10-alerts--validations...10-alerts--results)
   * Modals: [Full source](../../tree/10-modals) | [Diffs from previous step](../../compare/10-alerts--results...10-modals)

[Errata / Issues relating to Chapter 10](../../milestone/10)

### Chapter 11: Server Rendering
   * Basic Server Rendering: [Full source](../../tree/11-basic-server-rendering) | [Diffs from previous step](../../compare/10-modals...11-basic-server-rendering)
   * Handling State: [Full source](../../tree/11-handling-state) | [Diffs from previous step](../../compare/11-basic-server-rendering...11-handling-state)
   * Initial State: [Full source](../../tree/11-initial-state) | [Diffs from previous step](../../compare/11-handling-state...11-initial-state)
   * Server Side Bundle: [Full source](../../tree/11-server-side-bundle) | [Diffs from previous step](../../compare/11-initial-state...11-server-side-bundle)
   * Backend HMR: [Full source](../../tree/11-backend-hmr) | [Diffs from previous step](../../compare/11-server-side-bundle...11-backend-hmr)
   * Routed Server Rendering: [Full source](../../tree/11-routed-server-rendering) | [Diffs from previous step](../../compare/11-backend-hmr...11-routed-server-rendering)
   * Encapsulated Fetch: [Full source](../../tree/11-encapsulated-fetch) | [Diffs from previous step](../../compare/11-routed-server-rendering...11-encapsulated-fetch)

[Errata / Issues relating to Chapter 11](../../milestone/11)

### Chapter 12: Advanced Features
   * MongoDB Aggregate: [Full source](../../tree/12-mongodb-aggregate) | [Diffs from previous step](../../compare/11-encapsulated-fetch...12-mongodb-aggregate)
   * Pagination: [Full source](../../tree/12-pagination) | [Diffs from previous step](../../compare/12-mongodb-aggregate...12-pagination)
   * Higher Order Components: [Full source](../../tree/12-higher-order-components) | [Diffs from previous step](../../compare/12-pagination...12-higher-order-components)
   * Search Bar: [Full source](../../tree/12-search-bar) | [Diffs from previous step](../../compare/12-higher-order-components...12-search-bar)
   * Google Sign-In: [Full source](../../tree/12-google-sign-in) | [Diffs from previous step](../../compare/12-search-bar...12-google-sign-in)
   * Session Handling: [Full source](../../tree/12-session-handling) | [Diffs from previous step](../../compare/12-google-sign-in...12-session-handling)

[Errata / Issues relating to Chapter 12](../../milestone/12)

### Chapter 13: Looking Ahead

There are no code listings in this chapter.

[Errata / Issues relating to Chapter 13](../../milestone/13)
