import {useNavigate} from "react-router";

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className={"bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex justify-center"}>
            <div className={"header"}>
                <div className="logo" onClick={()=>navigate("/home")}>FakeNews</div>
                <div className="flex gap-8 text-slate-500">
                    <div className="cursor-pointer font-bold text-l duration-200 ease-in-out hover:-translate-y-1" onClick={()=>navigate("/home")}>FakeNews erstellen</div>
                    <div className="cursor-pointer font-bold text-l duration-200 ease-in-out hover:-translate-y-1" onClick={()=>navigate("/collection")}>Sammlung</div>
                </div>

            </div>
        </div>
    )
}