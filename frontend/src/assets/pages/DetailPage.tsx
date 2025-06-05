import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import type {article} from "../type/article.tsx";
import Header from "../components/Header.tsx";

export default function DetailPage() {
    const {id} = useParams();
    const [currentArticle, setCurrentArticle] = useState<article>({
        id: "",
        source: {
            name: ""
        },
        author: "",
        title: "",
        description: "",
        publishedAt:"",
        url: "",
        urlToImage: ""


    })
    console.log(currentArticle)

    useEffect(() => {
        axios.get(`api/news/${id}`).then(response => setCurrentArticle(response.data))
    }, [id]);

    return (
        <>
            <Header/>
            <div>
                <div>
                    <h1>{currentArticle.title}</h1>
                    <p>{currentArticle.publishedAt}</p>
                </div>
                <div>
                    <p>{currentArticle.author}</p>
                </div>
                <img src={currentArticle.urlToImage} alt={"hdlasdf"}/>
            </div>
            <div>
                <p>{currentArticle.description}</p>
            </div>



        </>
    )
}