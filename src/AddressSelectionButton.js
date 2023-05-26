import React, { useState } from 'react';

function AddressSelectionButton() {
const [selectedLocation, setSelectedLocation] = useState('');

const selectLocation = () => {
const googleMapsUrl = 'https://www.google.com/maps/search/';
const params = 'parameters for location selection';

window.open(`${googleMapsUrl}?${params}`, '_blank');
};

const handleLocationSelection = (location) => {
setSelectedLocation(location);

};

return (
<button
onClick={selectLocation}
className="bg-orange-500 w-32 hover:bg-orange-200 text-white
font-bold py-2 px-4 rounded"
><svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
fill="none"
id="location"
>
<path
fill="#000"
fill-rule="evenodd"
d="M19 9a6.968 6.968 0 0 1-1.252 3.996h.002l-4.907 7.684a1 1 0 0
1-1.686 0l-4.883-7.653A7 7 0 1 1 19 9Zm-7 4a4 4 0 1 0 0-8 4 4 0 0 0 0
8Z"
clip-rule="evenodd"
></path>
</svg>
{selectedLocation ? selectedLocation : 'Location'}
</button>
);
}

export default AddressSelectionButton;