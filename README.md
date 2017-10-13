# reactjs-readable

## Get started

Clone this repository
`git clone git@github.com:fernmun/reactjs-readable.git`

## Folder Structure

After clone, your project should look like this:

```
reactjs-readable/
  api-server/
    README.md
  front-end/
    README.md
    node_modules/
    package.json
    public/
      index.html
      favicon.ico
    src/
      actions/
      components/
      const/
      reducers/
      store/
      utils/
      index.css
      index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Run App

This app needs a data source, so let's run the server first.

### Run Server
Go to `api-server` folder and then run `npm install` to install all dependencies.

After finish run `node server` to get this up.

### Run App

Go to `frontend` folder and then run `npm install` to install all dependencies.

After finish run `npm start` to get this up.

### Solving problems

- If reactjs-readable does not connect to data server, please check into `frontend/utils/ReadableAPI.js`
  file if the port number match where the server data is running, if not, change it and restart the app.

## License

MIT
