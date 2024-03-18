// Dogs.js
import React from 'react';
import './Dogs.css'; // Import CSS file for Dogs component

const Dogs = () => {
  // Sample data for dogs
  const dogs = [
    {
      id: 1,
      name: 'Buddy',
      age: 3,
      breed: 'Labrador Retriever',
      availableForAdoption: true,
      image: 'buddy.jpeg', // Placeholder image filename
    },
    {
      id: 2,
      name: 'Bailey',
      age: 2,
      breed: 'Golden Retriever',
      availableForAdoption: false,
      image: 'bailey.jpeg', // Placeholder image filename
    },
    // Add more dogs as needed
  ];

  return (
    <div className="dogs-container">
      <h2>Dogs</h2>
      <div className="dog-list">
        {dogs.map((dog) => (
          <div key={dog.id} className="dog-profile">
            <img src={`${process.env.PUBLIC_URL}/images/${dog.image}`} alt={dog.name} />
            <div className="dog-info">
              <h3>{dog.name}</h3>
              <p>Age: {dog.age}</p>
              <p>Breed: {dog.breed}</p>
              <p>{dog.availableForAdoption ? 'Available for adoption' : 'Not available for adoption'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
