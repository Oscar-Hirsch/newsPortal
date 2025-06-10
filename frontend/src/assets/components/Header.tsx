import {useNavigate} from "react-router";

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className={"bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex justify-center"}>
            <div className={"header"}>
                <div className="logo" onClick={()=>navigate("/home")}>FakeNews</div>
                <div className="flex gap-8">
                    <div className="cursor-pointer font-bold text-l" onClick={()=>navigate("/home")}>Home</div>
                    <div className="cursor-pointer font-bold text-l" onClick={()=>navigate("/collection")}>Collection</div>
                </div>

            </div>
        </div>
    )
}