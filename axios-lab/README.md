### Create React project

```
npx create-react-app <project name>
cd <project name>
```

### install axios

```bash
npm install axios
```

### Setup a temporary database

- Install the json-server package to hold a json file as the temp db.
- Install it locally and globally both
    ```bash
    npm install -g json-server
    npm install json-server
    ```

- Create a db.json file in the root location of the project and add sample data in it
    ```json
    {
    "persons": [
        { "id": 1, "name": "Alice", "age": 25 },
        { "id": 2, "name": "Bob", "age": 30 }
    ]
    }
    ```

- Run the db
    ```bash
    json-server --watch db.json --port 3001
    ```
### Run the application

- Run the db in one tab first and then the application in another tab
- make the server and db public so that they can access each other
![alt text](image-2.png)

### The output looks something like this

- **Entry page**
![alt text](image.png)

- **Edit page**
![alt text](image-1.png)
