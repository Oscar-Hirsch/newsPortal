type OverlayButtonProps = {
    onClick: () => void;
    name: string;
}

export default function OverlayButton({onClick, name}: OverlayButtonProps) {
    return (
        <>
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200 ease-in-out pointer-events-none"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <button
                    onClick={onClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transform scale-95 group-hover:scale-100 transition-transform duration-200 ease-in-out shadow-lg cursor-pointer"
                >
                    {name}
                </button>
            </div>
        </>
    )
}