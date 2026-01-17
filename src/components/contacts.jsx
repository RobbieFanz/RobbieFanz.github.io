import github from '/github.svg'
import linkedin from '/linkedin.svg'
import emailsvg from '/email.svg'

export function Contacts(){
    return(
        <div className="relative z-10 flex h-screen w-full">
                <div className="flex flex-col items-center justify-center md:gap-3 lg:gap-6 px-4 text-center">
                    <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter">
                        Welcome
                    </h1>
                    <p className="text-lg md:text-4xl lg:text-6xl font-semibold tracking-tighter">

                            My name is Robert Fanzutti<br/>
                            Please take a look around my portfolio

                    </p>
                    <div className="text-lg md:text-2xl lg:text-3xl mt-5 flex space-x-10 md:space-x-20 tracking-tighter">
                        <a href="https://github.com/RobbieFanz" target="_blank" className="flex items-center gap-2"><img src={github} alt='github' className="w-8"/>GitHub</a>
                        <a href="https://www.linkedin.com/in/robert-fanzutti-2b04752a4/" target="_blank" className="flex items-center gap-2"><img src={linkedin} alt='linkedin' className="w-8"/>LinkedIn</a>
                        <a href="mailto:fanzuttir@gmail.com" className="flex items-center gap-2"><img src={emailsvg} alt="mail" className='w-8'/>Email</a>
                    </div>
                </div>
            </div>
    )

}