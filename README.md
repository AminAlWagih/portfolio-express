# Personal Portfolio (Express + EJS) - INFR3120 Assignment 2

**Author:** Amin Al-Wagih
**Live site (Render):** https://portfolio-express-jzpl.onrender.com
**Repository:** https://github.com/AminAlWagih/portfolio-express

A four page personal portfolio (Home, About Me, Projects, Contact Me) built with **Node.js, Express and the EJS templating engine**. It follows the project layout created by the Express Generator (`express --view=ejs`).

## Project structure

```
bin/www                   Starts the HTTP server (uses process.env.PORT on the cloud host)
app.js                    Creates the Express app, sets EJS as the view engine, serves /public
routes/index.js           All page routes: /, /about, /projects, /contact
views/index.ejs           Home page view
views/about.ejs           About Me view (photo and HTML5 video)
views/projects.ejs        Projects view (five project cards)
views/contact.ejs         Contact Me view (form)
views/error.ejs           Error / 404 view
views/partials/head.ejs   Shared <head>: Bootstrap, Font Awesome, my stylesheet
views/partials/header.ejs Shared header and navigation bar
views/partials/footer.ejs Shared footer with GitHub and LinkedIn links
public/stylesheets/       My own CSS (colour scheme and gradients)
public/javascripts/       contact.js - form validation
public/images/            Profile photo and video poster
public/media/             Introduction video (intro.mp4)
```

## Routes

| Path | View rendered | Controller code |
|------|---------------|-----------------|
| `/` | `views/index.ejs` | `router.get('/', ...)` in `routes/index.js` |
| `/about` | `views/about.ejs` | `router.get('/about', ...)` |
| `/projects` | `views/projects.ejs` | `router.get('/projects', ...)` |
| `/contact` | `views/contact.ejs` | `router.get('/contact', ...)` |

Each route calls `res.render(view, locals)`. The `active` local tells the navigation bar which link to highlight.

## Layout, header and footer

Every view includes the same three partials: `partials/head`, `partials/header` and `partials/footer`, using `<%- include('partials/...') %>`. The footer holds links to my GitHub and LinkedIn pages.

## Colour scheme and gradients

Palette (Adobe Color, "Navy and Teal Portfolio"): Deep Navy `#0B132B`, Midnight `#1C2541`, Steel Blue `#3A506B`, Teal `#5BC0BE`, Mist `#F4F7FA`. The colours are CSS variables at the top of `public/stylesheets/style.css`.

- Header: linear gradient, `to right`
- Home hero banner: angled gradient, `135deg`
- Footer: angled gradient, `45deg`

## Run it locally

```
npm install
npm start
```

Then open http://localhost:3000.

## Deployment

Hosted on Render as a free Web Service, deployed from the `main` branch of this GitHub repository.
- Build command: `npm install`
- Start command: `npm start`

## Sources and citations

- **Express Generator** (`express-generator`, MIT license, https://expressjs.com/en/starter/generator.html): the project structure and the base of `bin/www` and `app.js`.
- **Bootstrap 5.3.3** (MIT license, https://getbootstrap.com), loaded from the jsDelivr CDN in `views/partials/head.ejs` and `views/partials/footer.ejs`.
- **Font Awesome Free 6.5.2** (https://fontawesome.com), loaded from the cdnjs CDN in `views/partials/head.ejs`.
- Everything else (views, routes, `style.css`, `contact.js`, text and media) was made for this assignment.
