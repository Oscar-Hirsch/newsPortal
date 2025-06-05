import Header from "../components/Header.tsx";
import StatsSummaryCard from "../components/StatsSummaryCard.tsx";
import type {article} from "../type/article.tsx";
import ArticleCard from "../components/ArticleCard.tsx";
import {useEffect, useState} from "react";


export default function ArticlePage() {
    const [articles, setArticles] = useState<article[]>([])

    useEffect(() => {
        const search_results:string|null = sessionStorage.getItem("searchResults")
        if (search_results !== null) {
            const parsed_articles = JSON.parse(search_results);
            setArticles(parsed_articles)
        }
    }, []);

    return (
        <>
            <Header></Header>
            <StatsSummaryCard articles={articles}></StatsSummaryCard>
            <div className={"article-cards-container"}>
            {
                articles.map(article => <ArticleCard article={article} key={article.id}></ArticleCard>)
            }
            </div>
        </>
    )
}