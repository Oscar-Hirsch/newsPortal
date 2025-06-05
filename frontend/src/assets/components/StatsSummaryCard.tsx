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
        <div className={"p-8 bg-white rounded-xl shadow my-8 w-[1200px] max-w-[1200px] justify-self-center"}>
            <h1 className={"text-[1.75rem] font-semibold mb-4 text-slate-800"}>{query}</h1>
            <div className={"flex gap-8"}>
                <SummaryPill number={numberOfSources} description={"Quellen"}/>
                <SummaryPill number={numberOfArticles} description={"Articles"}/>
            </div>
        </div>
    )
}