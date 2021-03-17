# Nerd Squad Final Project

https://github.com/pteskey/cpnt262-final
- To be hosted on Heroku

## Tasks

### Initial Preparation

- Finalize idea for products / services.
- Discuss what roles we'd like to fulfill.
- Come up with an idea for the "fancy feature".
- Collect and optimize images for gallery.

### **HTML & CSS**

I've created several blank html files in the public folder so that we can design everything before we make our view pages and partials.
- `index`
- `404`
- `admin`
- `gallery`
- `subscribe`
- `team`

### **Node.js & MongoDB**

To prepare our database we must:
- Define our Schemas in the `/models` directory.
- Have connections authenticated using `.env` file.
- Compile our models into the app with `require()`.
- Remember that our singular named model will be pluralized in the database.

For node we must:
- Serve our static assets from the `/public` directory.
- Create routes for each of our pages.
- Create JSON endpoints for our data (i.e. `GET /api/v0/gallery`).

### **Front-End JavaScript**

There are a few things we can do with our front-end JS:
- Our fancy feature may be implemented with JS.
- We need to `fetch()` our data to build the gallery / team pages.
- Functionality for our pages (i.e. Hamburger menu for responsive Nav).