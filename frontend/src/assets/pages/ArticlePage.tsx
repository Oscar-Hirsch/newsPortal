import Header from "../components/Header.tsx";
import MainArticle from "../components/MainArticle.tsx";
import type {article} from "../type/article.tsx";
import {useSearchParams} from "react-router";

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
            <MainArticle articles={filteredArticles}></MainArticle>
        </>
    )
}