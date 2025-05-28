import {type ChangeEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

type SearchBarProps = {
    updateCallBack: ()=>void
}

export default function SearchBar({updateCallBack}:SearchBarProps) {
    const [searchString, setSearchString] = useState("");

    const navigate = useNavigate()

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchString(e.target.value);
    }

    function handleOnClick() {
        axios.get("/api/news/search", {
            params: { q: searchString }}
        ).then(updateCallBack)
            .then(() => navigate(`/search?q=${searchString}`))
            .catch(error => {
            console.error("Fehler beim Abrufen der News:", error);
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
