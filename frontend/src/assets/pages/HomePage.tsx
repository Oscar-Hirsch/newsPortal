import Header from "../components/Header.tsx";
import Dropdown from "../components/Dropdown.tsx";
import {useState} from "react";
import SearchCard from "../components/SearchCard.tsx";
type HomePageProps = {
    items:string[]
}

export default function HomePage( {items}:HomePageProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [country, setCountry] = useState("");
    const categories:string[] = ["business", "entertainment", "general", "health", "science", "sports"]


    return (
        <>
            <Header></Header>
            <div className={"flex h-full justify-center items-center flex-col gap-7"}>
                <div className={"max-w-[600px] justify-items-center"}>
                    <h1 className={"text-[4rem] font-bold text-blue-500 mb-4"}>GoodNews</h1>
                    <p className={"text-xl text-slate-500 mb-8"}>Finde nur gute Nachrichten</p>
                </div>
                <div className={""}>
                    <Dropdown items={items} isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} setCountry={setCountry}></Dropdown>
                </div>
                <div className={"grid grid-cols-3 gap-4"}>
                {
                    categories.map(category => SearchCard({category, country}))
                }
                </div>

            </div>
        </>
    )
}