import SearchBar from "../components/SearchBar.tsx";
import Header from "../components/Header.tsx";

export default function HomePage() {

    return (
        <>
            <div className={"content-wrapper"}>
                <Header></Header>
                <div className={"main-content"}>
                    <div className={"headline-section"}>
                        <h1 className={"main-logo"}>MediaSource</h1>
                        <p className={"tagline"}>Suche Nachrichten gezielt aus</p>
                    </div>
                    <SearchBar/>
                </div>
            </div>


        </>
    )
}