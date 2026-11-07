import SpotlightCard from "./SpotlightCard";
import articleSums from '/Article-Sums.png'
import python from '/python.svg'
import email from '/email.svg'
import github from '/github.svg'
import Ollama from '/Ollama.svg'
import SQLite from '/SQLite.svg'

export function Projects(){
    const projects=[
    {
        title:"Article Sums",
        text:"Articles Sums is a project",
        imgsrc:articleSums,
        link:"https://github.com/RobbieFanz/Article-Sums",
        technologies: [
            { svg: python, label: "Python" },
            { svg: Ollama, label: "Ollama" },
            { svg: SQLite, label: "SQLite" },
            { svg: github, label: "GitHub" },
        ]
    },
]

    return(<>
        <div className="pt-39">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center mb-10">Projects</h1>
            {projects.map((item, index) => (
                <SpotlightCard key={index} className="group grid grid-cols-1 text-center xl:grid-cols-2 xl:text-left m-3 xs:m-4 md:m-10 gap-2 sm:gap-4 justify-self-center justify-items-center" spotlightColor="rgba(255, 255, 255, 0.11)">
                    <div className={"relative col-span-1 min-w-0 max-w-full self-center "+ (index%2===1 ? "xl:order-last":"")}>
                        <img src={item.imgsrc} className="block rounded-md"/>
                        {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 rounded-full bg-[#242424e6] px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-[#4954bd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                View project <span aria-hidden="true">↗</span>
                                <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                        )}
                    </div>
                    <div className="flex w-full min-w-0 flex-col self-stretch">
                        <h1 className="text-4xl xs:text-5xl font-semibold text-center mb-1 xs:mb-2">{item.title}</h1>
                        <p className="col-span-1 self-center xl:text-lg">
                            {item.text}
                        </p>
                        {item.technologies?.length > 0 && (
                            <ul aria-label="Technologies used" className="mt-auto flex flex-wrap justify-center gap-y-10 pt-12 xl:justify-start">
                                {item.technologies.map((technology) => (
                                    <li key={technology.label} className="flex w-9 xs:w-12 justify-center">
                                        <span
                                            role="img"
                                            aria-label={technology.label}
                                            tabIndex={0}
                                            className="group/technology relative flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                            <img src={technology.svg} alt="" className="h-8 w-7 xs:w-8 object-contain" />
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-20 -translate-x-1/2 rounded bg-[#242424] px-1 py-1 text-center text-xs text-white opacity-0 transition-opacity [overflow-wrap:anywhere] group-hover/technology:opacity-100 group-focus/technology:opacity-100">
                                                {technology.label}
                                            </span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </SpotlightCard>
            ))}
        </div>
   
    </>)
    
}