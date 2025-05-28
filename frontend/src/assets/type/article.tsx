type source = {
    name:string
}
export type article = {
    _id:string,
    source:source,
    author:string,
    title:string,
    description:string,
    url:string
    urlToImage:string
    publishedAt:string
}