# Integrating Redux and Flux

Creating a redux-based application shell that can be integrated with pages using their own flux implementations (e.g. fluxible).

## Pages Rendered:

1. [http://localhost:3000/planets/earth](http://localhost:3000/planets/earth)
1. [http://localhost:3000/planets/mars](http://localhost:3000/planets/mars)

## Goals

1. Allow the Shell to be loaded as a React component from the application's server
1. Use redux within the Shell
1. Expose an external API from the Shell for pages to use (e.g. Layout settings)
1. Prevent redux from leaking through the Shell's external API
1. Allow the server to render pages using different flux implementations, with Fluxible as the target example
1. Allow the flux implementation used on the server to vary from page to page
1. Prevent a page's flux implementation choice from leaking out to the application server layer
1. Aim for the application server components to be as generic as possible
1. Aim for the Shell to integrate by way of Express Middleware
1. Support server-side rendering of both the Shell and the pages
1. Allow both the Shell and the pages to dehydrate themselves
1. Allow both the Shell and the pages to rehydrate themselves
1. Support client-side rendering of both the Shell and the pages
1. Flow the Shell's static resources through the application server
1. Design for the anticipation that static resources will get served from a CDN with a separate base address in production

## Application Server

### `/src/index.js`

1. Instantiates the express server
1. Plugs in the application server's array of middleware
1. Handles routes for pages
1. Loads the active page based on path
1. Renders the page to static markup
1. Renders the Shell to static markup, passing the page's markup as a prop
1. Emits the Shell/Page combined markup on the response

### `/src/express-middleware/index.js`

1. Exposes an array of middleware to be used for the express server
1. Includes the Shell's middleware module

## Rendering the Shell

### `/src/Shell/express-middleware.js`

1. Creates a Shell instance using `createShell()`
1. Adds the `shell` property to the current request

### `/src/Shell/createShell.js`

1. Exports a `createShell` function that will create a short-lived Shell object
1. Configures a Redux store using `configureStore()`
1. Binds the Layout action creators to the store's `dispatch` method, hiding the redux implementation detail for the methods to be exposed on a `layout` object
1. Creates an `Application` component that uses redux's `Provider` to provide the store to the component hierarchy
1. Returns a Shell object that contains:
    1. A `layout` property that has methods for manipulating the layout settings
    1. A `layoutActionPropTypes` property that defines the methods available on the `layout` object for easy including in React propTypes or contextTypes
    1. An `Application` that represents the React component to be used for rendering the Shell

### `/src/Shell/configureStore`

1. Initializes the redux store, using a root reducer for the Shell
1. Prepared to handle redux middleware required for the Shell to perform async data loading

### `/src/Shell/reducers/index.js`

1. Prepared to compose the `layout` reducers with other reducers needed by the Shell

### `/src/Shell/layout/reducers/index.js`

1. Composes together all of the reducers needed for managing the layout state
1. Uses reducer creators for `property` and `uniqueArray`

### `/src/Shell/layout/reducers/property.js`

1. A reusable scalar property reducer creator that generates a reducer for a specified action type

### `/src/Shell/layout/reducers/uniqueArray.js`

1. A reusable reducer for adding items to a unique array, generating a reducer for a specified action type

### `/src/Shell/layout/actionCreators/index.js`

1. Composes together all of the action creators for managing the layout state
1. Uses action creator creators for `property` and `uniqueArray`

### `/src/Shell/layout/actionCreators/property.js`

1. A reusable method for creating an action creator for setting a scalar property, with a specified action type

### `/src/Shell/layout/actionCreators/uniqueArray.js`

1. A reusable method for creating an action creator for managing a unique array within state, with a specified action type

### `/src/Shell/Application.jsx`

1. The React component that will render the `<html>` tag, the Shell (including things like the required CSS/JS files, the top nav, left nav, and footer)
1. Accepts the `layout` as a prop
1. Accepts the `pageHtml` as a prop for rendering the page content
1. Dehydrates the Shell's state and includes it in a `<script>` tag
1. Connects the Application component to the redux store using `react-redux`'s `connect`

## Rendering the Page

### `/src/pages/planets/earth/index.js`

1. Loads Earth's Page component
1. References `planetStore`
1. References Earth's actions
1. Exports a function for `loadPage` that will load the Earth page as a React component
1. Delegates the loading work to `loadFluxiblePage`, but specifies the stores and actions used for the page as well as the function used to map the store state to component props

### `/src/pages/planets/earth/components/Earth.jsx`

1. Renders an Earth-specific page
1. Uses the `layout` object ultimately provided by the Shell to manipulate the shell (without directly using redux)
1. Uses a shared `Moons` component to render Earth's moons (which were received as props)

### `/src/pages/planets/earth/actions/index.js`

1. Loads data using the Fluxible action model, dispatching Earth's moons through an event

### `/src/pages/planets/planetStore.js`

1. A generic store for planetary data (shared by Earth and Mars)
1. Handles the dispatched event for when moons are loaded
1. Exposes the moons for consumption
1. Dehydrates and rehydrates its moon data

### `/src/pages/loadFluxiblePage.js`

1. Reusable module for loading a fluxible-based page
1. Does the work of connecting to the stores
1. Delegates some work to `createFluxiblePage` for configuring the page to be loaded
1. Creates the fluxble context
1. Executes the page's `load` action
1. When the action is complete:
    1. Renders the page within a Container component
    1. Dehydrates the context into `pageState` to pass to the Container
    1. Invokes the callback that allows exection flow to resume in the Application server

### `/src/pages/createFluxiblePage.js`

1. Creates the Fluxible instance
1. Plugs into Fluxible's context to provide the `layout` on context

### `/src/pages/Container.jsx`

1. Renders the page component within an outer div
1. Includes a `<script>` tag that emits the dehydrated state for the page