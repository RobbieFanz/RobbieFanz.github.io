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
        text:"Articles Sums is a project that I created to automatically summarize articles using Python and Ollama. I developed this project as a way to stay up to date on news in software engineering. First the articles are fetched from Hacker News then they are checked against the SQLite database, any articles that have already been seen are filtered out. The remaining are added to the Database and sent to a local Ollama model for a relevance evaluation. The Ollama model then decides based on a relevance criteria text if the article should be in the final email. Then the article will get summarized by the model. Longer articles are divided into smaller chunks, each of which is summarized individually. These summaries are then combined to generate the final output for that article. Finally the model will create a rank out of 10 for how important the article is, then the articles get ordered based on rank and the email is sent via SMTP. Through this project, I gained experience working with local LLMs through Ollama, managing limited context windows, automating email delivery with SMTP, and integrating Python with SQLite for data persistence.",
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
                        <p className="col-span-1 self-center xl:text-md 2xl:text-lg">
                            {item.text}
                        </p>
                        {item.technologies?.length > 0 && (
                            <ul aria-label="Technologies used" className="flex flex-wrap justify-center gap-y-10 pt-4 xl:justify-start">
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