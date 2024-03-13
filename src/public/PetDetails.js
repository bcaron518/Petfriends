import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    // Fetch pet details using the petId from the URL
    fetch(`/api/pets/${petId}`)
      .then(response => response.json())
      .then(data => setPet(data))
      .catch(error => console.error('Error fetching pet details:', error));
  }, [petId]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pet.name}</h2>
      <img src={pet.photo} alt={pet.name} />
      <p>Description: {pet.description}</p>
      <p>Adoption Status: {pet.adoptionStatus}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PetDetails;
