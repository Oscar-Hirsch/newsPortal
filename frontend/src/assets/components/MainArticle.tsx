import SummaryPill from "./SummaryPill.tsx";
import type {article} from "../type/article.tsx";
import {useContext} from "react";
import {SearchContext} from "../contexts/contexts.ts";

type MainArticleProps = {
    articles:article[]
}
export default function MainArticle({articles}:MainArticleProps) {
    const {searchString} = useContext(SearchContext)
    const sources: string[] = articles.map(article => article.source.name)
    const uniqueSources = [...new Set(sources)]
    const numberOfSources = uniqueSources.length
    const numberOfArticles = articles.length


    return (
        <div className={"main-article"}>
            <h1 className={"main-article-title"}>{searchString}</h1>
            <div className={"summary-pill-container"}>
                <SummaryPill number={numberOfSources} description={"Quellen"}/>
                <SummaryPill number={numberOfArticles} description={"Articles"}/>
                <SummaryPill number={0} description={"Tage Berichterstattung"}/>
            </div>
        </div>
    )
}