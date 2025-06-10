import './assets/css/App.css'
import './assets/css/index.css'
import HomePage from "./assets/pages/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import ArticlePage from "./assets/pages/ArticlePage.tsx";
import DetailPage from "./assets/pages/DetailPage.tsx";
import Collection from "./assets/pages/Collection.tsx";

function App() {
    const items:string[] = ["de", "us", "fr"]

  return (
    <Routes>
        <Route path={"/home"} element={<HomePage items={items}/>}/>
        <Route path={"/search"} element={<ArticlePage/>}/>
        <Route path={"/:id"} element={<DetailPage/>}/>
        <Route path={"/collection"} element={<Collection/>}/>
    </Routes>
  )
}

export default App
