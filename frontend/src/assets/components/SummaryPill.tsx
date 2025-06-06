type SummaryPillProps = {
    number:number,
    description:string
}

export default function SummaryPill({number, description}:SummaryPillProps) {

    return (
        <div className={"flex items-center gap-2 py-2 px-4 bg-slate-100 rounded-lg"}>
            <p className={"font-bold text-blue-500"}>{number}</p>
            <p className={"flex items-center gap-2 py-2 px-4 bg-slate-100 rounded-lg"} >{description}</p>
        </div>
    )

}