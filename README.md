
# Task Visualizer - Sample Task Report by User

This application is deisgined allow you manage simple tasks. This report/chart will allow you click through to modify or delete tasks. Also also has a feature to delete all records and install sample data.

## :package: Installation

### Requirements Before Running Application
|          Name           |           Version                 |              Website                              |
|-------------------------|-----------------------------------|---------------------------------------------------|
| Node.js                 | v8.x.x or later                   | https://nodejs.org/en/download/                   |
| MongoDB                 | v4.x.x or later                   | https://www.mongodb.com/download-center/community |

## :wrench: Configure the Backend API

After Nodejs and Mongodb are installed and running on your local. We need to configure the backend api config to talk to mongodb. Here is the direct file location:
```
backend/app/code/etc/mogodb.js
```
Note: You should only need to change the ip depending if mongodb is running on your local or on a server. Also keep inmind the database name is tasks_visualizer where the data is going to be stored inside of mongodb.

## :rocket: Running the Backend API

- Change directories to backend - ```cd backend```
- Install npm packages - ```npm install```
- Now start the backend api - ```npm start```

Note: ```npm start``` is configured to run the package with nodemon. Nodemon will allow you run the application and watch it if any changes happen to the code.

## :wrench: Configure Vue.js the Backend API

Now if you have the backend api code running on another computer or server you need to modify the Vue.js service that allows to connect to the backend api.  Here is the direct file location:
```
client/src/services/Api.js
```
## :rocket: Running the Vue.js App 
- Change directories to client - ```cd client```
- Install npm packages - ```npm install```
- Now start the client app - ```npm run serve```

Note: By default the application is running in development mode and will tell you to open in the browser the following address.
```
http://localhost:8080/
```

## :spiral_notepad: Installing the Sample Data to work with

When you open Vue.js App in the browser you will see a blank graph and two buttons below it. Press the button "Install Sample Data" to work with the application.

## More Information

- The Chart is interactive and refresh every 10 seconds. 
- If you want to view the tasks just click the bar of the user on the chart
- Currently you have the ablity to Edit and Delete Task records.
- Hopefully later 12-02-2019 I will have the create form created and work. Currnetly the endpoint in the api is already built out.

Note: This application was built in less then 2 days from scratch. So just remeber, that rome wasn't built in a day and if you want something perfect. You need more time for this.

If you have any questions or feature request please send me an email to rkratt@gmail.com



## :spiral_notepad: Resources & Notes
- [Vue.js](https://vuejs.org/v2/guide/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/docs/)
- [Express.js](https://expressjs.com/)
