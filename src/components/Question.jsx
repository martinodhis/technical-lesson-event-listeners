import React from "react";

/**
 * Question Component
 * Renders a multiple-choice question with 4 answer buttons.
 * Each button uses an onClick event listener to capture user selection.
 */
function Question() {
  /**
   * handleClick - Event handler function for button clicks.
   * @param {number} number - The identifier for the selected answer.
   * Logs the selected answer to the browser console for verification.
   */
  function handleClick(number) {
    // Fixed: Uses backticks for proper string interpolation
    console.log(`User selected Answer ${number}!`);
  }

  return (
    <>
      <h1>QUESTION HERE</h1>
      
      {/* 
        Each button passes its unique identifier to handleClick via an arrow function.
        Arrow functions are required here because we are invoking handleClick 
        with a specific argument on click, rather than passing the function reference directly.
      */}
      <button onClick={() => handleClick(1)}>Answer 1</button>
      <button onClick={() => handleClick(2)}>Answer 2</button>
      <button onClick={() => handleClick(3)}>Answer 3</button>
      <button onClick={() => handleClick(4)}>Answer 4</button>
    </>
  );
}

export default Question;