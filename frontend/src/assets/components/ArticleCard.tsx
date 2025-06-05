import type {article} from "../type/article.tsx";
import {useNavigate} from "react-router";

type ArticleCardProps = {
    article:article
}
export default function ArticleCard({article}:ArticleCardProps) {
    const navigate = useNavigate()

    return (
        <div className="bg-white flex flex-col rounded-xl p-6 shadow transition-shadow duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1" onClick={()=>navigate(`/${article.id}`)}>
            <div className="flex justify-between items-center mb-4">
                <div className="font-semibold text-[1.1rem]">{article.source.name}</div>
            </div>
            <div className="line-clamp-2 text-[1rem] font-semibold mb-4 text-slate-800">{article.title}</div>
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                <span>{article.publishedAt}</span>
            </div>
        </div>
    )

}