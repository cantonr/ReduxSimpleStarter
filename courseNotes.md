### Contact Info
Email: **ste.grider@gmail.com**  
Twitter: **@sg_in_sf**  
Github: **https://www.github.com/stephengrider**  
Udemy Course: **https://www.udemy.com/react-redux/learn/v4/overview**  

### Github links
All the code for this course here: **https://github.com/StephenGrider/ReduxCasts**

### Tooling (Transpile)
![Tooling example](/img/modernJSTooling.PNG)  

Webpack + babel --> transpiles code into `application.js` file that the browser can read

## Getting Started
start npm in terminal `npm start`
- this bundles files and creates a localhost
### Components/Views
- Snippets of code that produces HTML
- Collection of js code that creates HTML code  

```js
// Create a new component. This component should produce some HTML
const App = function() {
	return <div>Hi!</div>;
}
```

### JSX
- Subset of js which allows us to write what looks like HTML but behind the scenes is just js  
Ex. `<div>Hi!</div>` this gets transpiled into vanilla javascript.  

```js
// React/Redux code
const App = function()
	return <div>Hi!</div>;
}

// What js transpiles above code into
"use strict";

var App = function App() {
	return React.createElement(
		"div",
		null,
		"Hi!"
	);
};
```
- `App` is the component of react  
- `<App />` using **JSX** tags we can call just an instance of the `App` component

### ES6
- js modules  
	- code is siloed or separated from other files we write and must be explicitly defined in side of the file we require.  
- `import React from 'react';` this import looks for the `'react'` directory in the `node_modules` directory and assigns it to the var `React`   

```js
// using `=>` is another way in ES6 to define a function
// although the `this` keyword behaves slightly different
const App = () => {
	return <div>What this is doing now is displaying text.</div>;
}
```

### React vs. ReactDOM  
- React is used to create and manage our Components  
- ReactDOM is used to interact with the actual DOM

### Render Targets
- Component is a function/object that returns some amount of HTML  

 ![Sample Site](img\sampleComponents.PNG)

##### List of components we will need
- Search bar will be one component
- Left video and title/desc bar will be one component  
- Single right video title will be one component  
- List of all right video titles will be a component  
	- **Components can be nested**
- Component of everything, `index.js` that encapsulates all components

### Export Statements
- the component you are looking to export must have an export statement at the end defining which component you want to export  
Ex.  

```js
import React from 'react';

const SearchBar = () => {
  return <input />;
};

export default SearchBar;  //<-- must be included to export to another file
```
- when importing into another file, we must specify the actual file reference
	- Ex. `import SearchBar from './components/search_bar'`;  
	- `.js` doesn't need to be included since it normally takes those file types  
- `SearchBar` is called a functional component, one function some info goes in some `JSX` is returned  
- `'class component'`, when we want a component to have an internal record keeping  
- every class based component we create must have a defined render method  
	- the render function must return some `JSX` or you will get an error
Ex. of a class component:

```js
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}

export default SearchBar;
```
##### When trying to decide between a functional component and a class component  
- In general, start off with a functional component and then if you decide you need more functionality/methods, use a class that extends the functionality you need.  

## Handling User Events  
1) declare an event handler, a function that should be ran any time an event occurs
2) pass the event handler to the element we want to monitor  
Ex.

```js
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  // event handler
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
```  
Ex. Using ES6 arrow function
```js
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
```   
## Intro to State  
One of the most difficult things about React to understand
- `State` - a plain js object that is used to record and react to user Events  
	- each class based component has its own state object, as soon as the state is changed the component and all its children are re-rendered
-
