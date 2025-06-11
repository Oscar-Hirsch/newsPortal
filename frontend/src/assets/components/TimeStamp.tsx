import type {article} from "../type/article.tsx";

type TimeStampProps = {
    article:article
    className?:string
}
export default function TimeStamp({article, className}:TimeStampProps) {
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

    if (difference === 1) {
        return <span className={className}>Gestern, {published_date.getHours().toString().padStart(2, '0')}:{published_date.getSeconds().toString().padStart(2, '0') + " Uhr"}</span>
    } else if (difference === 0) {
        return <span className={className}>Heute, {published_date.getHours().toString().padStart(2, '0')}:{published_date.getSeconds().toString().padStart(2, '0') + " Uhr"}</span>
    } else {
        return <span className={className}>{germanTimeString}</span>
    }
}