import Header from "../components/Header.tsx";
import Dropdown from "../components/Dropdown.tsx";
import {useState} from "react";
type HomePageProps = {
    update:()=>void
    items:string[]
}

export default function HomePage( {update, items}:HomePageProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    return (
        <>
            <Header update={update}></Header>
            <div className={"flex justify-center items-center flex-col mt-36"}>
                <div className={"max-w-[600px] mb-16 justify-items-center"}>
                    <h1 className={"text-[4rem] font-bold text-blue-500 mb-4"}>GoodNews</h1>
                    <p className={"text-xl text-slate-500 mb-8"}>Finde nur gute Nachrichten</p>
                </div>
                <div className={"pt-20"}>
                    <Dropdown items={items} isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}></Dropdown>
                </div>

            </div>
        </>
    )
}