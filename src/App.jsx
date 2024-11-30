import { useState } from 'react';
import SearchBar from './components/SearchBar';
import BrandCard from './components/BrandCard';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <SearchBar searchTerm={searchTerm} onInputChange={handleInputChange} />
            <BrandCard searchTerm={searchTerm} />
        </div>
    );
};

export default App;
