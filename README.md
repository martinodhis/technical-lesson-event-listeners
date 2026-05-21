# Technical Lesson: Event Listeners

## In this lesson, you will be practicing how to implement event handlers within a React component.

---

## The Scenario  
You are working on an online multiple-choice quiz feature for a university. They are looking to move more of their exams online and they want a simple proof of concept to be able to tell which answer the user selected. Your task is to implement a new feature that can tell which button the user selected.

---

## Tasks

### Task 1: Define the Problem
- Create an event listener for users clicking on buttons.

### Task 2: Determine the Design
- **Determine Component Tree**
- **Isolate/develop design per component**

### Task 3: Develop the Code  
- Add events to elements  
- Create event handler function  
- Call function  
- Build functionality  

### Task 4: Test and Refine  
- Debugging and testing during coding  

### Task 5: Document and Maintain  

---

## Tools and Resources  
- **GitHub**  
- **Event Handling Documentation:** [React Events](https://react.dev/learn/responding-to-events#adding-event-handlers)

---

## Instructions

### Task 1: Define the Problem
- Create an event listener for users clicking on buttons.

### Task 2: Determine the Design
#### Component Tree
```
└── App
    └── Question
```
Currently, our tree is not too complex because we are focusing on creating events within the `Question` component.

#### Isolate/Develop Design per Component
The design for this page is already developed! Open the page to see what it looks like and explore the files to understand the scope of the code.

---

### Task 3: Develop the Code

#### Step 1: Setup
To get started, fork and clone the repository.

Once the code is open in VSCode, run the following commands in the terminal:
```sh
npm install
npm run dev
```
This will install all required dependencies and will open up the webpage in your browser. Any saved changes will automatically update the page.

#### Step 2: Add Events to Elements
Modify `Question.jsx` so that it contains the following code:
```jsx
import React from "react";
function Question() {
  return (
    <>
      <h1> QUESTION HERE </h1>
      <button onClick={() => console.log("Click")}> Answer 1</button>
      <button onClick={() => console.log("Click")}> Answer 2</button>
      <button onClick={() => console.log("Click")}> Answer 3</button>
      <button onClick={() => console.log("Click")}> Answer 4</button>
    </>
  );
}
export default Question;
```
Since we need to determine which button was clicked, we use `onClick` to set up the event listener.

#### Step 3: Create Event Handler Function and Call Function
Modify `Question.jsx` to include a handler function:
```jsx
import React from "react";
function Question() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <h1> QUESTION HERE </h1>
      <button onClick={() => handleClick()}> Answer 1</button>
      <button onClick={handleClick}> Answer 2</button>
      <button onClick={handleClick}> Answer 3</button>
      <button onClick={handleClick}> Answer 4</button>
    </>
  );
}
export default Question;
```
This approach makes the function reusable and improves readability.

#### Step 4: Build Functionality
Modify `Question.jsx` to determine which button was clicked:
```jsx
import React from "react";
function Question() {
  function handleClick(number) {
    console.log(`User selected Answer ${number}!`);
  }
  return (
    <>
      <h1> QUESTION HERE </h1>
      <button onClick={() => handleClick(1)}> Answer 1</button>
      <button onClick={() => handleClick(2)}> Answer 2</button>
      <button onClick={() => handleClick(3)}> Answer 3</button>
      <button onClick={() => handleClick(4)}> Answer 4</button>
    </>
  );
}
export default Question;
```
Now, each button click will output the selected answer in the console.

---

### Task 4: Test and Refine
- Debugging and testing during coding.
- Check the console to verify the correct button number is displayed.

---

### Task 5: Document and Maintain
- Add descriptions to event functions to improve code readability.

---

## Considerations

### Invoking a Function
Invoking a function means calling it using parentheses `()`. In `onClick`, you must pass a function that is **not invoked** immediately.

### Event Handling
React events are similar to standard JavaScript events. Review the documentation to explore different event types.

Example:
```jsx
<p onClick={(e) => console.log(e)}> Clickable paragraph </p>
```
`e` (short for event) contains useful event-related information, which can be leveraged for more complex interactions.

---

This completes the lesson on event listeners in React! 🚀



# note
# University Online Exam - Event Listeners Proof of Concept

## 🌐 Live Preview
![Quiz UI Screenshot](./docs/screenshot.png) 
*(Replace with actual screenshot of your browser showing the 4 buttons and console output)*

## 🌳 Component Tree