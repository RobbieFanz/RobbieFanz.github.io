import SpotlightCard from "./SpotlightCard";
import projectImg from '/project.png'

export function Projects(){
    const projects=[
    {
        title:"Project 1",
        text:"will be adding projects to this page shortly",
        imgsrc:projectImg
    },
    {
        title:"Title",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores dicta ipsa nihil dolores doloribus aliquid autem blanditiis enim eaque reprehenderit ullam, in architecto at doloremque ipsum, laudantium ad? Distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sapiente a nostrum accusamus accusantium modi iste architecto iusto est. Delectus eligendi temporibus officiis dignissimos praesentium, voluptatum recusandae eaque adipisci atque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo nam nihil ullam, maxime perferendis ut laboriosam atque aut consequuntur at quae eius, tempora odit ipsa? Assumenda, dolorem? Dolores",
        imgsrc:projectImg
    }
]

    return(<>
        <div className="pt-39">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center mb-10">Projects</h1>
            {projects.map((item, index) => (
                <SpotlightCard key={index} className="grid grid-cols-1 text-center xl:grid-cols-2 xl:text-left m-3 xs:m-4 md:m-15 gap-2 sm:gap-4 max-w-7xl justify-self-center justify-items-center" spotlightColor="rgba(255, 255, 255, 0.11)">
                    <img src={item.imgsrc} className={"col-span-1 rounded-md self-center "+ (index%2===1 ? "xl:order-last":"")}/>
                    <div>
                        <h1 className="text-4xl xs:text-5xl font-semibold text-center mb-1 xs:mb-2">{item.title}</h1>
                        <p className="col-span-1 self-center xl:text-lg">
                            {item.text}
                        </p>
                    </div>
                </SpotlightCard>
            ))}
        </div>
   
    </>)
    
}