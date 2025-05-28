type SummaryPillProps = {
    number:number,
    description:string
}

export default function SummaryPill({number, description}:SummaryPillProps) {

    return (
        <div className={"summary-pill"}>
            <p className={"stat-number"}>{number}</p>
            <p className={"stat"} >{description}</p>
        </div>
    )

}