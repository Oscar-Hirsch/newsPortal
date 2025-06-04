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
        <div className={`${window.location.pathname === "/home" ? "w-full flex max-w-[600px] px-4 md:px-0": "px-4 md:px-0"}`}>
            <div className={`${window.location.pathname === "/home" ? "flex flex-col md:flex-row bg-white rounded-lg md:rounded-[2rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] overflow-hidden transition-shadow duration-300 ease w-full": "flex flex-col md:flex-row gap-2 flex-1 max-w-[400px] mx-8 rounded-lg md:rounded-none"}`}>
                <input
                    type="text"
                    className={`${window.location.pathname === "/home" ? "flex-1 py-5 px-6 border-none text-[1.1rem] bg-transparent outline-none placeholder-[#94a3b8]": "flex-1 p-3 border border-gray-300 rounded-lg text-base outline-none placeholder-[#94a3b8]"}`}
                    placeholder="Nachricht eingeben..."
                    value={searchString}
                    onChange={handleOnChange}
                    onKeyDown={(e) => e.key === "Enter" && handleOnClick()}
                />
                <button className={`${window.location.pathname === "/home" ? "py-5 px-8 bg-blue-500 text-white border-none cursor-pointer font-semibold text-base transition-colors duration-200 hover:bg-blue-600 w-full md:w-auto rounded-none": "py-3 px-6 bg-blue-500 text-white border-none font-semibold transition-colors duration-200 hover:bg-blue-600 w-full md:w-auto rounded-none md:rounded-lg"}`} onClick={handleOnClick}>
                    Suchen
                </button>
            </div>
        </div>
    );
}
