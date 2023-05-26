import React, { useState } from 'react';

function SearchBar() {
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (e) => {
e.preventDefault();
console.log('Searching for:', searchTerm);
};

return (
<form className="flex items-center">
<input
type="text"
placeholder="Search nearby shops..."
className="py-2 px-4 border border-orange-300 rounded-l-md
focus:outline-none focus:ring-2 focus:ring-orange-500 flex-1"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
<button

type="submit"
className="bg-orange-500 border-orange-200
hover:bg-orange-300 text-white py-2 px-4 rounded-r-lg
focus:outline-none focus:ring-2 focus:ring-blue-500"
onClick={handleSearch}
>
<svg class="h-8 w-8 text-black " width="24" height="24"
viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
fill="none" stroke-linecap="round" stroke-linejoin="round"> <path
stroke="none" d="M0 0h24v24H0z"/> <circle cx="10" cy="10" r="7" />
<line x1="21" y1="21" x2="15" y2="15" /></svg>

</button>
</form>
);
}

export default SearchBar;