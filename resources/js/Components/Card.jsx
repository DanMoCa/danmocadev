export default function Card({children, className = ""}){
        return (
            <div className={"bg-white px-4 py-8 rounded-md shadow-lg border "+className}>
                {children}
            </div>
        )
}