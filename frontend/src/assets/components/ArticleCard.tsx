import type {article} from "../type/article.tsx";

type ArticleCardProps = {
    article:article
}
export default function ArticleCard({article}:ArticleCardProps) {
    const published_date = new Date(article.publishedAt)
    const published_date_milliseconds = new Date(article.publishedAt).getTime();
    const today = Date.now();
    const difference = Math.round((((today - published_date_milliseconds)/60000)/60)/24)


    const germanTimeString = published_date.toLocaleString("de-DE", {
        timeZone: "Europe/Berlin",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    return (
        <div className="article-card">
            <div className="source-header">
                <div className="source-name">{article.source.name}</div>
            </div>
            <div className="article-topic">{article.description}</div>
            <div className="article-date">
                {
                    difference === 1 ?
                    <span>Gestern, {published_date.getHours().toString().padStart(2, '0')}:{published_date.getSeconds().toString().padStart(2, '0')}</span>
                : (difference === 0) ?
                    <span>Heute, {published_date.getHours().toString().padStart(2, '0')}:{published_date.getSeconds().toString().padStart(2, '0')}</span>
               :
                    <span>{germanTimeString}</span>
                }

            </div>
        </div>
    )

}