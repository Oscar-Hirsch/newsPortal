import SearchBar from "../components/SearchBar.tsx";
import Header from "../components/Header.tsx";
type HomePageProps = {
    update:()=>void
}

export default function HomePage( {update}:HomePageProps) {

    return (
        <>
            <Header></Header>
            <div className={"main-content"}>
                <div className={"headline-section"}>
                    <h1 className={"main-logo"}>MediaSource</h1>
                    <p className={"tagline"}>Suche Nachrichten gezielt aus</p>
                </div>
                <SearchBar updateCallBack={update}/>
            </div>
        </>
    )
}