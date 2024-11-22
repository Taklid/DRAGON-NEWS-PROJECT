import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const CategoryNews = () => {
    const {data: news} = useLoaderData();
    return (
        <div>
            <div>
                <h2 className="ml-5">Dragon News Home</h2>
                <p className="text-gray-400 ml-5 text-[15px]">{news.length} News Found On</p>
            </div>
            <div>
                    {
                        news.map((singleNews) => (<NewsCard key={singleNews.id} news={singleNews}></NewsCard>))
                    }
            </div>
        </div>
    );
};

export default CategoryNews;