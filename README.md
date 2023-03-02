## vue-ims-app

This is a "Online Bank" application that uses Vue.js 3, Vue Router for client routing and Vuex for client-side state management. It also utilizes Axios to communicate with a Firebase REST service that provides JSON database storage. Firebase also provides JWT authorization.

## Firebase JSON Database

The application uses Firebase to provide a JSON database for storing records. The structure of the database is as follows:

| Request ID | Amount | Name | Phone | Status |
|------------|--------|------|-------|--------|
| 1          | $100   | John Doe | 555-555-5555 | Canceled |
| 2          | $50    | Jane Smith | 555-123-4567 | Active |
| 3          | $200    | Ralf Lauren | 555-423-4517 | Done |
| 4          | $540    | Thomas Dones | 555-323-1567 | Pending |


request
  - {id}
    - amount
    - name
    - phone
    - status
    
### JWT Authorization

Firebase provides JWT authorization with refresh token functionality for the application. 
This allows users to log in and authenticate their requests to the Firebase REST service.

## Project setup

To install the required dependencies, run the following command:

```
npm install
```

This will compile the application and start a development server with hot-reloading enabled. The application will be available at [http://localhost:8080/](http://localhost:8080/).

### Compiles and minifies for production

To compile the application for production, run the following command:

```
npm run build
```

### Live demo

[Link to demo](https://don1k1337.github.io/vue-ims) - Check out the live demo to see this app in action!

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


