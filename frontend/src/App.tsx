import './assets/css/App.css'
import "./assets/css/ArticlePage.css";
import HomePage from "./assets/pages/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import ArticlePage from "./assets/pages/ArticlePage.tsx";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import type {article} from "./assets/type/article.tsx";
import DetailPage from "./assets/pages/DetailPage.tsx";

function App() {
    const [articles, setArticles] = useState<article[]>([])
    const items:string[] = ["Die Zeit", "DPA", "Die Bild"]

    const getAllArticles = useCallback(() => {
        axios
            .get<article[]>("/api/news")
            .then((response) => setArticles(response.data))
            .catch((e) => console.error(e));
    }, []);

    useEffect(() => {
        axios
            .get<article[]>("/api/news")
            .then((response) => setArticles(response.data))
            .catch((e) => console.error(e));
    }, []);

  return (
    <Routes>
        <Route path={"/home"} element={<HomePage update={getAllArticles} items={items}/>}/>
        <Route path={"/search"} element={<ArticlePage allArticles={articles} update={getAllArticles}/>}/>
        <Route path={"/:id"} element={<DetailPage update={getAllArticles}/>}/>
    </Routes>
  )
}

export default App
