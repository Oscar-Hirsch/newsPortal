import Header from "../components/Header.tsx";
import StatsSummaryCard from "../components/StatsSummaryCard.tsx";
import type {article} from "../type/article.tsx";
import {useSearchParams} from "react-router";
import ArticleCard from "../components/ArticleCard.tsx";

type ArticlePageProps = {
    allArticles:article[]
    update: () => void
}
export default function ArticlePage({allArticles, update}:ArticlePageProps) {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const filteredArticles:article[] = allArticles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
            <Header update={update}></Header>
            <StatsSummaryCard articles={filteredArticles}></StatsSummaryCard>
            <div className={"article-cards-container"}>
            {
                filteredArticles.map(article => <ArticleCard article={article} key={article.id}></ArticleCard>)
            }
            </div>
        </>
    )
}