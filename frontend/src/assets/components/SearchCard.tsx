import {useNavigate} from "react-router";
import axios from "axios";

type SearchCardProps = {
    category:string
    country:string
}

export default function SearchCard({category, country}:SearchCardProps) {
    const navigate = useNavigate()

    function handleOnClick() {
        sessionStorage.removeItem("searchResults")
        axios.get("/api/news/search", {
            params: { country: country, category: category}}
        ).then(response => sessionStorage.setItem("searchResults", JSON.stringify(response.data)))
            .then(() => navigate(`/search?country=${country}&category=${category}`))
    }


    return (
        <div onClick={handleOnClick} className={"flex items-center justify-center bg-white border-none rounded-[16px] p-[20px] cursor-pointer transition-all duration-300 ease-in-out shadow-[0_2px_5px_1px_rgba(64,60,67,0.16)] min-w-[140px] min-h-[140px] hover:-translate-y-[3px] hover:shadow-[0_4px_12px_2px_rgba(64,60,67,0.2)] hover:border-[#4285f4]"}>
            <p>{category}</p>
        </div>
    )
}