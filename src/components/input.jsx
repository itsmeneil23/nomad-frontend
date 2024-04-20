"use client";

import axios from "axios";
import { useState } from "react";


function UserInput() {
  const [textQuery, setTextQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, SetLoading] = useState(false);

  const handleInputChange = (event) => {
    setTextQuery(event.target.value);
  };

  const handleSubmit = async (e) => {
    setError(null); // Clear any previous errors
    SetLoading(true);
    e.preventDefault();

    try {
      const headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyC2wtxTzDWI4rXklb0I8zkrk8oj8j-XuOo", // Replace with your actual API key
        "X-Goog-FieldMask":
          "places.photos,places.displayName.text,places.formattedAddress,places.rating,places.editorialSummary.text,places.googleMapsUri",
      };

      const response = await axios.post(
        "https://maps.googleapis.com/maps/api/place/findplacetext",
        { textQuery },
        { headers }
      );

      console.log(places)
      setPlaces(response.data.candidates); // Assuming the data is in candidates
      SetLoading(false)
    } catch (error) {
      console.error(error);
      setError("Failed to fetch place data");
    }
  };

  return (

    <form className="flex items-center justify-center pt-24">
      <input
        type="text"
        onChange={handleInputChange}
        value={textQuery}
        placeholder="Type here"
        className="p-4 bl w-full max-w-xs"
      />
      <button onClick={handleSubmit} className="p-4 br bg-slate-800">Send</button>
    </form>
  );
}

export default UserInput;
