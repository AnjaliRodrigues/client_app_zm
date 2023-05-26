import React, { useState } from "react";

import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const options = {
  disableDefaultUI: true
};

function DirectionsButton() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const selectLocation = () => {
    const googleMapsUrl = "https://www.google.com/maps/search/";
    const params = "parameters for location selection";

    window.open(`${googleMapsUrl}?${params}`, "_blank");
  };

  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <button type="button" class="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white border-2 rounded-lg border-orange-600 hover:bg-orange-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={selectLocation}
         >

        <svg
          class="h-4 w-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8
8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Directions
      </button>
    </div>
  );
}

export default DirectionsButton;
