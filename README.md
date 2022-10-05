# FeedBackForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# FeedBacKForm

# Versions
Angular: 14.2.4
dotnet 6.0

# Backend Configurations
Configured the port number in https-provider-service.ts
Added Db coloum entities  in preview.components.ts
Enabled Cros origin in dotnet code 

# Angular Materials
Using a common style.css file by adding configurations gobally 
Used angular material , steppers material , mat-dialog box


# Angular  Code 
Created sepaerate modules for feedback , mat and dialog .
Created multiple components for each questions in feedback page to capture the responses 
Created Service layer https-provider  for the invoking backend API's & shared -services for the dynamic values for topics choses such as software ennginnering and reasearch management .
Used Stepper materials for capturing questions stepwise  in the UI
Used mat-dialog box  for adding the pop-up screen in the last submit screen . 

# Extra info 
Added the initial screen to capture the personal details of the candidate 
Validations for the username , email and phone-no has been handled
In each screen its mandatory to choose a option 
Back and next buttons for each Screen are activated so you can navigate to the previous screen if any feedback has to be changed 
Summary screen is been created to display the summary of responses captured by the candidate 
Dialog is added before saving the data .
Making a POST call to backend API while sending the json body in request 
Created a table "feedback "in Postgres DB to save all the details 
Sequential ID genertaion has been taken care  at the backend
Made swagger comfigurations to test the API's
