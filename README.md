# toDo App - Node.Js | Express

This project is made for learning purposes only.

### Start Server

To install all dependencies run:
```
npm install
```
To start server run:
```
npm start
```

When the server is running, in any browser go to http://localhost/tasks

For add a task, get, update or delete, go to Insomnia or Postman, set Header "Content-Type" and the value like "application/json" and send a request with a json with this two fields:
```
{
	"title": "Your new task",
	"description": "Your new description"
}
```

