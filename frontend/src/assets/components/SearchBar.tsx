import {type ChangeEvent, useContext} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import {SearchContext} from "../contexts/contexts.ts";

type SearchBarProps = {
    updateCallBack: ()=>void
}

export default function SearchBar({updateCallBack}:SearchBarProps) {
    const { searchString, setSearchString } = useContext(SearchContext);

    const navigate = useNavigate()

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchString(e.target.value);
    }

    function handleOnClick() {
        axios.get("/api/news/search", {
            params: { query: searchString }
        }).then(updateCallBack)
            .then(() => navigate(`/${searchString}`))
            .catch(error => {
            console.error("Fehler beim Abrufen der Nachrichten:", error);
        });
    }

    return (
        <div className="search-container">
            <div className="search-box">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Nachricht eingeben..."
                    value={searchString}
                    onChange={handleOnChange}
                    onKeyDown={(e) => e.key === "Enter" && handleOnClick()}
                />
                <button className="search-btn" onClick={handleOnClick}>
                    Suchen
                </button>
            </div>
        </div>
    );
}
