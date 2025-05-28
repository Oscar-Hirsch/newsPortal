import SearchBar from "./SearchBar.tsx";

type HeaderProps = {
    update:()=>void
}
export default function Header({update}:HeaderProps) {
    return (
        <div className={"header-wrapper"}>
            <div className={"header"}>
                <div className="logo">MediaSource</div>
                { window.location.pathname !== "/home"
                    ? <SearchBar updateCallBack={update}/>
                    : null

                }
            </div>
        </div>
    )
}