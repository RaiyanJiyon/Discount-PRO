import { useEffect, useState } from "react";

const FavoriteCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/data/FavoriteCategoryData.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="py-10">
            <div data-aos="zoom-in-down">
                <h2 className="text-3xl text-[#E1713B] font-bold text-center">Favorite Categories</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto mt-14">
                {
                    categories.map(category => (
                        <div key={category.id} className="card bg-base-100 transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <figure>
                                <img
                                    src={category.image}
                                    alt="Shoes"
                                    className="w-full h-32"
                                />
                            </figure>
                            <h2 className="bg-black text-white py-2 text-center w-full">
                                {category.category}
                            </h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FavoriteCategories;