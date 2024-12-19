# Basic Node and Express

This is the boilerplate code for the Basic Node and Express Challenges. Instructions for working on these challenges start at https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/

## Env File
-  a hidden file that is used to pass environment variables to your application.
- The environment variables are accessible from the app as process.env.VAR_NAME

## Middleware functions
- What is that?
- request handler that allows intercepts and manipulates incoming requests

- functions that take 3 arguments: 
  - request object (req)
  - response object (res)
  - next function in the application’s request-response cycle (routing)
- this function can cause side effect to the application
  - usually add information to the request or object response

So what is the function of the middleware?
- make changes to the request and the response objects
- end the request-response cycle
- call the next middleware function in the stack if there is one