import './assets/css/App.css'
import './assets/css/HomePage.css'
import "./assets/css/MainArticle.css";
import HomePage from "./assets/pages/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import ArticlePage from "./assets/pages/ArticlePage.tsx";
import {useCallback, useState} from "react";
import axios from "axios";
import type {article} from "./assets/type/article.tsx";
import {SearchContext} from "./assets/contexts/contexts.ts";


function App() {
    const [articles, setArticles] = useState<article[]>([])
    const [searchString, setSearchString] = useState<string>("")

    const getAllArticles = useCallback(() => {
        axios
            .get<article[]>("/api/news")
            .then((response) => setArticles(response.data))
            .catch((e) => console.error(e));
    }, []);

  return (
        <SearchContext.Provider value ={{ searchString, setSearchString }}>
        <Routes>
            <Route path={"/home"} element={<HomePage update={getAllArticles}/>}/>
            <Route path={"/:searchTerm"} element={<ArticlePage allArticles={articles}/>}/>
        </Routes>
        </SearchContext.Provider>
  )
}

export default App
