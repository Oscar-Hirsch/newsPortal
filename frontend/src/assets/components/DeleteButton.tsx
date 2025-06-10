
type DeleteButtonProps = {
    handleOnClick:()=>void

}

export default function DeleteButton({handleOnClick}:DeleteButtonProps) {
    return (
        <button onClick={handleOnClick} className={" z-50 cursor-pointer flex items-center justify-center text-white absolute right-0 top-0 bg-red-600 p-3 rounded-full w-6 h-6 -translate-y-1/2 translate-x-1/2 shadow-lg"}>×</button>
    )
}