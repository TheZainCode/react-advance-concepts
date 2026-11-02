function Card({title, children}){
    return(
        <div className="rounded-lg border p-5 shadow-sm space-y-3">
            <h2 className="text-xl font-bold">{title}</h2>

            {children}
        </div>
    )
}
export default Card;