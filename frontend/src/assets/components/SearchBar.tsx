import {type ChangeEvent} from "react";
import axios from "axios";
import {useNavigate, useSearchParams} from "react-router";

type SearchBarProps = {
    updateCallBack: ()=>void
}

export default function SearchBar({updateCallBack}:SearchBarProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const navigate = useNavigate()

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchParams({ q: e.target.value });
    }

    function handleOnClick() {
        axios.get("/api/news/search", {
            params: { q: query }}
        ).then(updateCallBack)
            .then(() => navigate(`/search?q=${query}`))
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
                    value={query}
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
