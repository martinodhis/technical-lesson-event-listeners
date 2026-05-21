import React from 'react';
import Question from './Question';

/**
 * App Component
 * Serves as the root component for the quiz feature.
 * Component Tree: App -> Question
 */
function App() {
  return (
    <main className="quiz-container">
      <h1>University Online Exam</h1>
      {/* Renders the Question component which contains the event listeners */}
      <Question />
    </main>
  );
}

export default App;