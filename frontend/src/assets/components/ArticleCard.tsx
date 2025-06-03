import type {article} from "../type/article.tsx";
import {useNavigate} from "react-router";

type ArticleCardProps = {
    article:article
}
export default function ArticleCard({article}:ArticleCardProps) {
    const navigate = useNavigate()

    return (
        <div className="article-card" onClick={()=>navigate(`/${article.id}`)}>
            <div className="source-header">
                <div className="source-name">{article.source.name}</div>
            </div>
            <div className="article-topic">{article.description}</div>
            <div className="article-date">
                <span>{article.publishedAt}</span>
            </div>
        </div>
    )

}