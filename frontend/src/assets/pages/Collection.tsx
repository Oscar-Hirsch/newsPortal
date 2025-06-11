import axios from "axios";
import {useEffect, useState} from "react";
import ArticleCard from "../components/ArticleCard.tsx";
import Header from "../components/Header.tsx";
import type {article} from "../type/article.tsx";


export default function Collection() {
    const [articles, setArticles] = useState<article[]>([])

    useEffect(() => {
        axios.get("/api/news").then(response => setArticles(response.data))
    }, [articles])

    return (
        <>
            <Header></Header>
            <div className="w-[1200px] justify-self-center">
                <div className="p-6 bg-white rounded-xl shadow my-4 w-[1200px] max-w-[1200px] justify-self-center">
                    <h1 className={"font-bold text-2xl "}>Meine Sammlung</h1>
                </div>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
                {
                    articles.map(article => <ArticleCard article={article} setArticles={setArticles} key={article.id}></ArticleCard>)
                }
                </div>
            </div>
        </>



    )
}