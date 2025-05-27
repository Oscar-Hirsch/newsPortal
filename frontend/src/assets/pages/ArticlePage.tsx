import Header from "../components/Header.tsx";
import {useContext} from "react";
import {SearchContext} from "../contexts/contexts.ts";
import MainArticle from "../components/MainArticle.tsx";
import type {article} from "../type/article.tsx";

type ArticlePageProps = {
    allArticles:article[]
}
export default function ArticlePage({allArticles}:ArticlePageProps) {
    const {searchString} = useContext(SearchContext)
    const filteredArticles:article[] = allArticles.filter(article => article.title.toLowerCase().includes(searchString.toLowerCase()))

    return (
        <>
            <Header></Header>
            <MainArticle articles={filteredArticles}></MainArticle>

        </>
    )
}