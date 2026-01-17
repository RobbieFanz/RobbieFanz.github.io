export function Skill({items, name, cols}){
    
    return<>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-center mt-5 mb-3">{name}</h1>
        <div className={"grid gap-2 justify-items-center "+cols}>
            {items.map((item, index) => (
                <div key={index} className="text-lg md:text-xl lg:text-2xl tracking-tighter text-right flex col-span-1 items-center">
                {item.label}<img src={item.svg} className="w-7 xs:w-10 ml-1"/>
                </div>
            ))}
            
        </div>
    </>
}