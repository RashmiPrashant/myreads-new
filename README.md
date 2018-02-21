# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. 
This app organises and search the books. There are shelves for 'reading', 'want to read' and 'read' and user can organise the books accordingly. 


Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/RashmiPrashant/myreads-new/blob/master/README.md).

## To start the project 


* install all project dependencies with `npm install`
* Run the app in the development mode with `npm start`
* Open http://localhost:3000 to view it in the browser.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  SEARCH_TERMS.md
  node_modules/
  package.json
  package-lock.json
  public/
    index.html
    manifest.json
  src/
  icons/
       add.svg
    │  arrow-back.svg
    │  arrow-drop-down.svg
    App.css
    index.css
    App.js
    App.test.js
    Book.js
    BooksAPI.js
    BookShelf.js
    ErrorBoundry.js
    SearchBook.js
    Shelf.js
    index.js
```
For the project to build, these files must exist with exact filenames:

## Backend Server

To simplify the development process, there is backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.public/index.html is the page template;

