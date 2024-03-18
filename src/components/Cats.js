import React, { useState } from 'react';

const Cats = () => {
  const [image, setImage] = useState(null);

  // Function to handle file input change
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // Function to handle form submission (uploading)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Upload logic goes here
    if (image) {
      // Perform upload operation with the selected image
      console.log('Uploading cat image:', image);
    } else {
      console.log('No cat image selected');
    }
  };

  return (
    <div>
      <h2>Cats Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInputChange} />
        <button type="submit">Upload Cat Image</button>
      </form>
      {image && (
        <div>
          <h3>Selected Cat Image:</h3>
          <img src={URL.createObjectURL(image)} alt="Uploaded Cat" />
        </div>
      )}
    </div>
  );
};

export default Cats;
