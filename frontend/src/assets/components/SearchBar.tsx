import { type ChangeEvent, useState } from "react";
import axios from "axios";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState<string>("");

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    function handleOnClick() {
        axios.get("/api/news/search", {
            params: { query: searchTerm }
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
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
                    value={searchTerm}
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
