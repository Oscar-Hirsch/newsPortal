import type {article} from "../type/article.tsx";
import {useNavigate} from "react-router";
import axios from "axios";
import {type CSSProperties, useState} from "react";
import {HashLoader} from "react-spinners";

type ArticleCardProps = {
    article:article
}
export default function ArticleCard({article}:ArticleCardProps) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    function handleOnClick() {
        setLoading(true)
        axios.post("/api/news/createFakeNews", {title: article.title}).then(
            response =>
            {
                const fakeArticle = {...article,
                    summary: response.data.summary,
                    content: response.data.content
                }
                return axios.post("/api/news/save", {...fakeArticle})
            }).then(saveResponse => {
                navigate(`/${saveResponse.data.id}`)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "#3b82f6",
    };

    return ( loading ?
            <>
                <div className="fixed inset-0 bg-black opacity-75 z-40"></div>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <HashLoader
                    color={"#3b82f6"}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                </div>
            </>
            :
        <div className="relative group bg-white flex flex-col rounded-xl p-10 shadow transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1">
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
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200 ease-in-out pointer-events-none"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <button
                    onClick={handleOnClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transform scale-95 group-hover:scale-100 transition-transform duration-200 ease-in-out shadow-lg cursor-pointer"
                >
                    FakeNews erstellen
                </button>
            </div>

        </div>
    )

}