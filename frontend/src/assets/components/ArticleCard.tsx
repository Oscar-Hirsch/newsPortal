import type {article} from "../type/article.tsx";
import {useNavigate} from "react-router";
import axios from "axios";
import {type CSSProperties, useState} from "react";
import {HashLoader} from "react-spinners";
import OverlayButton from "./OverlayButton.tsx";
import DeleteButton from "./DeleteButton.tsx";
import TimeStamp from "./TimeStamp.tsx";

type ArticleCardProps = {
    article:article
    setArticles?:((articles:article[]) => void)
}
export default function ArticleCard({article, setArticles}:ArticleCardProps) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    async function handleDelete() {
        await axios.delete(`/api/news/delete`,
            {
                params: { id: article.id}})
            .catch(error => console.log(error))
        if(setArticles){
            axios.get("/api/news").then(response => setArticles(response.data))
        }
    }

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

    return (loading ?
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
                    src={(article.urlToImage) ? article.urlToImage : "src/assets/images/placeholder.png"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                <TimeStamp article={article}></TimeStamp>
            </div>
            {
                window.location.pathname.includes("/collection") ?
                    <>
                    <OverlayButton onClick={()=>navigate(`/${article.id}`)} name={"Artikel ansehen"}></OverlayButton>
                    <DeleteButton handleOnClick={handleDelete}></DeleteButton>
                    </>
                    :
                    <OverlayButton onClick={handleOnClick} name={"FakeNews erstellen"}></OverlayButton>
            }


        </div>
    )

}