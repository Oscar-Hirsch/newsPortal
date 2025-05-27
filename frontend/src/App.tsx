import './assets/css/App.css'
import './assets/css/HomePage.css'
import HomePage from "./assets/pages/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import ArticlePage from "./assets/pages/ArticlePage.tsx";
import {useCallback, useState} from "react";
import axios from "axios";
import type {article} from "./assets/components/type/article.tsx";
import {SearchContext} from "./assets/contexts/contexts.ts";


function App() {
    const [articles, setArticles] = useState<article[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    const getAllArticles = useCallback(() => {
        axios
            .get<article[]>("/api/news")
            .then((response) => setArticles(response.data))
            .catch((e) => console.error(e));
    }, []);

  return (
    <>
        <SearchContext.Provider value ={[searchTerm, setSearchTerm]}>
        <Routes>
            <Route path={"/home"} element={<HomePage update={getAllArticles}/>}/>
            <Route path={"/:searchTerm"} element={<ArticlePage articles={articles}/>}/>
        </Routes>
        </SearchContext.Provider>
  )
}

export default App
