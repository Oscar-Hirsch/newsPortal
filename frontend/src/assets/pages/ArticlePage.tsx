import Header from "../components/Header.tsx";
import StatsSummaryCard from "../components/StatsSummaryCard.tsx";
import type {article} from "../type/article.tsx";
import {useSearchParams} from "react-router";
import ArticleCard from "../components/ArticleCard.tsx";

type ArticlePageProps = {
    allArticles:article[]
}
export default function ArticlePage({allArticles}:ArticlePageProps) {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const filteredArticles:article[] = allArticles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
            <Header></Header>
            <StatsSummaryCard articles={filteredArticles}></StatsSummaryCard>
            <div className={"article-cards-container"}>
            {
                filteredArticles.map(article => <ArticleCard article={article}></ArticleCard>)
            }
            </div>
        </>
    )
}