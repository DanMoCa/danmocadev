export default function Card({children, className = ""}){
        return (
            <div className={"bg-white text-black dark:bg-gray-800 dark:text-gray-100 px-4 py-8 rounded-md shadow-lg dark:shadow-none border "+className}>
                {children}
            </div>
        )
}