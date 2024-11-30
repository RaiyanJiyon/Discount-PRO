import { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const SearchIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 text-[#E1713B]"
        >
            <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
            />
        </svg>
    );

    return (
        <div className="pt-6">
            <h2 className="text-2xl text-[#E1713B] font-bold text-center">Explore All Brands</h2>
            <div className="w-64 md:w-96 mx-auto mt-4">
                <label className="input input-bordered flex items-center gap-2 rounded-full">
                    <input
                        type="text"
                        className="grow p-2"
                        placeholder="Search for a brand..."
                        aria-label="Search for a brand"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    {SearchIcon}
                </label>
            </div>
        </div>
    );
};

export default SearchBar;
