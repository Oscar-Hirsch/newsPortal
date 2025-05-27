import Header from "../components/Header.tsx";
import type {article} from "../components/type/article.tsx";
import {useContext} from "react";
import {SearchContext} from "../contexts/contexts.ts";

type ArticlePageProps = {
    articles:article[]
}
export default function ArticlePage({articles}:ArticlePageProps) {
    const [searchTerm, setSearchTerm] = useContext(SearchContext)

    return (
        <>
            <Header></Header>
            {
                articles.map(() => <p>{searchTerm}</p>)
            }

        </>
    )
}