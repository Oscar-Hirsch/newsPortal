type source = {
    name:string
}
export type article = {
    id:string,
    source:source,
    author:string,
    title:string,
    description:string,
    url:string,
    publishedAt:string,
    urlToImage:string
}