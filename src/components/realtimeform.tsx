// pages/index.tsx or components/RealTimeForm.tsx
"use client";

import React, { useState } from "react";

const RealTimeForm = () => {
  // State to hold the title value
  const [title, setTitle] = useState("");

  // Function to update the title based on input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
        placeholder="Type to change the title..."
      />
    </div>
  );
};

export default RealTimeForm;
