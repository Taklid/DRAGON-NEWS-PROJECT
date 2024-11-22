
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavber = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then((data) => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2>All Category{categories.length}</h2>
            <div className="flex flex-col gap-3 font-semibold mt-3 ml-4">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} className="btn btn-warning w-[100px]  lg:w-[150px]" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavber;