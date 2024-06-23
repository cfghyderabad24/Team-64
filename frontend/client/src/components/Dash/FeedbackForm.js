import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the feedback submission logic here
    alert(`Feedback submitted: "${feedback}"`);
    setFeedback("");
  };

  return (
    <div className="feedback-form">
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Feedback: </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
