# srvc

This application was generated using JHipster 3.12.2, you can find documentation and help at [https://jhipster.github.io/documentation-archive/v3.12.2](https://jhipster.github.io/documentation-archive/v3.12.2).
And UI part was added using React

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. Node.js: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.


    npm install


2. Build the maven project in IDEA and run 


    SrvcApp
    
    
   
configuration in debug mode

## Building for production

To optimize the srvc application for production, run:

    ./mvnw -Pprod clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test
