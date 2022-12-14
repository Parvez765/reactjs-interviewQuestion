What is React?
Answer- React is a JavaScript Library for building userInterface

What is the difference between virtual dom and real dom?
Answer- DOM is an interface that allows the script to update the content, style, and structure of the document. Virtual DOM is just like a blueprint of a machine,
 can do the changes in the blueprint but those changes will not directly apply to the machine. 

What is JSX?
Answer- JSX Stands for JavaScript XML which allows to write HTML in React. JSX makes it easier to write and add HTML in React


What is the difference between state and props?
Answer- Props are used to pass data from one component to another. The state is a local data storage that is local to the component only 
and cannot be passed to other components.


What is the difference between class component and functional component?
Answer-A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). 
A class component requires you to extend from React. Component and create a render function which returns a React element.


What are react lifecycle methods?
Answer- Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. 
The three phases are: Mounting, Updating, and Unmounting.


What are hooks? Tell us the role of useEffect and useState.
Answer- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. 

useState is a Hook (function) that allows you to have state variables in functional components. 
You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and
another function to update this value.

 By using UseEffect, you tell React that your component needs to do something after render. 
 React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM update


 What is diff algorithm?
 Answer- Diffing is a heuristic algorithm based on two assumptions: Two elements of different types will produce different trees.
 The developer can hint at what elements will remain stable across renders with a key prop. (This is why React is always warning us to include keys in our props).



 What is the difference between attribute and property?
 Answer- Attributes are defined by HTML. Properties are defined by the DOM. The value of an attribute is constant. The value of a property is variable.

 
 Note---
 
 ***Elements are the smallest building blocks of React apps
 ***Props are Read-Only we can not change it's value to it's Children
 
 
JSX has the following advantages:

JSX helps us in keeping our code simpler and elegant when writing large pieces of code.
According to the React docs, most people find it helpful as a visual aid when working with UI inside the JavaScript code.
JSX also allows React to show more useful error and warning messages.
If one is familiar with HTML, it is quite easy to use JSX when building React application
Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.


Difference Between Real Dom And Virtual Dom

Real DOM

DOM manipulation is very expensive
There is too much memory wastage
It updates Slow	
It can directly update HTML
Creates a new DOM if the element updates.
It allows us to directly target any specific node (HTML element)
It represents the Ul of your application	


Virtual DOM

DOM manipulation is very easy 
No memory wastage 
It updates fast
It can’t update HTML directly 
Update the JSX if the element update 
It can produce about 200,000 Virtual DOM Nodes / Second.
It is only a virtual representation of the DOM
