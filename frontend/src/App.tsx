import './assets/css/App.css'
import './assets/css/HomePage.css'
import "./assets/css/MainArticle.css";
import HomePage from "./assets/pages/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import ArticlePage from "./assets/pages/ArticlePage.tsx";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import type {article} from "./assets/type/article.tsx";

function App() {
    const [articles, setArticles] = useState<article[]>([])

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
        <Route path={"/home"} element={<HomePage update={getAllArticles}/>}/>
        <Route path={"/search"} element={<ArticlePage allArticles={articles}/>}/>
    </Routes>
  )
}

export default App
