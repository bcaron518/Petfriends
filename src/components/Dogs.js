// Dogs.js
import React from 'react';
import './Dogs.css'; 

const Dogs = () => {
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
      image: 'bailey.jpeg',
    },
    {
        id: 3,
        name: 'Max',
        age: 4,
        breed: 'German Shepherd',
        availableForAdoption: true,
        image: 'max.jpeg',
    },
    {
        id: 4,
        name: 'Charlie',
        age: 5,
        breed: 'Poodle',
        availableForAdoption: false,
        image: 'charlie.jpeg',
    },
    {
        id: 5,
        name: 'Lucy',
        age: 2,
        breed: 'Beagle',
        availableForAdoption: true,
        image: 'lucy.jpeg',
    },
    
    
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
