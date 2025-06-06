import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import type {article} from "../type/article.tsx";
import Header from "../components/Header.tsx";

export default function DetailPage() {
    const {id} = useParams();
    const [currentArticle, setCurrentArticle] = useState<article>({
        id: "",
        source: {
            name: ""
        },
        author: "",
        title: "",
        description: "",
        summary:"",
        content:"",
        publishedAt:"",
        url: "",
        urlToImage: ""
    })

    useEffect(() => {
        axios.get(`api/news/${id}`).then(response => setCurrentArticle(response.data))
    }, [id]);

    return (
        <>
            <Header/>
            <div className="flex flex-col gap-4 bg-white p-6 mt-3 rounded-xl max-w-[1200px] mx-auto shadow-[0_2px_5px_1px_rgba(64,60,67,0.16)]">
                <div className="border-b border-slate-200 pb-6">
                    <h1 className={"text-[2.5rem] font-bold mb-4 text-slate-800 leading-[1.2]"}>{currentArticle.title}</h1>
                    <div className="flex gap-4 items-center">
                        <p className={"font-[600] text-xl text-[#1e293b]"}>{currentArticle.source.name}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className={"text-sm text-[#6b7280]"}>By {currentArticle.author}</p>
                        <p className={"text-sm text-[#6b7280]"}>{currentArticle.publishedAt}</p>
                    </div>
                    <img className={"mt-6 object-cover object-center w-9/12 rounded-xl"} src={currentArticle.urlToImage} alt={currentArticle.title}/>
                </div>
                <div className="flex flex-col w-[1000px] items-start justify-center">
                    <p className={"text-lg text-gray-600 leading-[1.7] mb-8 p-6 bg-slate-50 rounded-lg border-l-4 border-l-blue-500 w-full"}>{currentArticle.summary}</p>
                    <p>{currentArticle.content}</p>
                </div>
            </div>



        </>
    )
}