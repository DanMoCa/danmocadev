export default  function SmallProjectLoader({}){
    return (
        <div className="flex space-x-4 animate-pulse" >
            <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-gray-300"/>
            </div>
            <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                    <div className="bg-gray-300 w-80 h-4 rounded-md"></div>
                    <div className="bg-gray-300 w-40 h-4 rounded-md"></div>
                </div>
                <div className="bg-gray-300 w-80 h-4 rounded-md"></div>
            </div>
        </div>
    )
}