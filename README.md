# node-control-projects
 Creating an application from scratch using Express.  This application will be used to store projects and their tasks

Routes
POST / projects: The route should be given id and title within the body of registering a new project within an array in the following format: {id: "1", title: "New Project", tasks: []};.

GET / projects: Route that lists all projects and their tasks;

PUT / projects /: id: The route should only change the project title with the id present in the route parameters;

DELETE / projects /: id: The route must delete the project with the id present in the route parameters;

POST / projects /: id / tasks: The route must be given a title field and store a new task in the task array of a specific project chosen through the id present in the route parameters;


Middlewares
Middleware 1 : will be used on all routes that receive the project ID in the URL parameters that check if the project with that ID exists. If none exists return an error, otherwise allow the request to continue normally;

Global Middleware called on all requests that prints (console.log) a count of how many requests have been made in the application so far;
