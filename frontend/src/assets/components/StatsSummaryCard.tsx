import SummaryPill from "./SummaryPill.tsx";
import type {article} from "../type/article.tsx";

import {useSearchParams} from "react-router";

type MainArticleProps = {
    articles:article[]
}
export default function StatsSummaryCard({articles}:MainArticleProps) {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const sources: string[] = articles.map(article => article.source.name)

    const uniqueSources = [...new Set(sources)]
    const numberOfSources = uniqueSources.length
    const numberOfArticles = articles.length


    return (
        <div className={"main-article"}>
            <h1 className={"main-article-title"}>{query}</h1>
            <div className={"summary-pill-container"}>
                <SummaryPill number={numberOfSources} description={"Quellen"}/>
                <SummaryPill number={numberOfArticles} description={"Articles"}/>
            </div>
        </div>
    )
}