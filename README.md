# Debuggging React - Discussion Question

## Setup

Clone the directory and run 
`npm install`

## Your Task

Here is what is supposed to be a fully functional React App but... We are presented with some errors. Before you go ahead and fix them, discuss in groups your assumptions of what caused the bug and then use debugging tools (see below) where appropriate to confirm your assumptions. Use this opportunity to practice driving/navigating. Take turns.  

This is what we are supposed to see when it is working properly (images and names may be different):

![Sample Photo](sample.png)

## Component Tree and Structure
Before you set off to work on any React App, draw the component tree: how many children does the App.js have? What are they? 
...
...
...

Now, that you've answered, here's what should be happening in the app:
In App.js, we have our information of mod4instructors. 
We want to pass this information down as props to the InstructorContainer component. 
Finally, within the InstructorContainer component, we want an IntructorCard component to be generated for each of the instructor.


### `Debugging Tools`

Please utilize the tools you were presented in Javascript to help debug the errors.
`console.log()`
`debugger`

When debugging in React, start from the topmost component and work your way down.
*hint* An appropriate placement of `console.log()` in a Class Component would be between the render block but outside of the return.

