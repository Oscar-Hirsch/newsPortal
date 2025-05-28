import type {article} from "../type/article.tsx";

type ArticleCardProps = {
    article:article
}
export default function ArticleCard({article}:ArticleCardProps) {

    return (
        <div className="article-card">
            <div className="source-header">
                <div className="source-name">{article.source.name}</div>
            </div>
            <div className="article-topic">{article.description}</div>
            <div className="article-date">
                <span>Gestern, 20:00</span>
            </div>
        </div>
    )

}