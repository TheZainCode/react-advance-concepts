function Card({title, children, footer}){
    return(
        <div className="rounded-lg border p-5 shadow-sm space-y-4">
            <header>
                <h2 className="font-bold text-xl">{title}</h2>
            </header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
    )
}
export default Card;