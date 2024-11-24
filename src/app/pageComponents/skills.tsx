import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const frontSkillsData = [
    {name : "HTML", level : "Experienced"},
    {name : "React", level : "Intermediate"},
    {name : "Javascript", level : "Basic"},
    {name : "Typescript", level : "Basic"},
    {name : "CSS", level : "Intermediate"},
    {name : "Tailwind CSS", level : "Advanced"},
]

const backSkillsData = [
    {name : "Spring Boot", level : "Intermediate"},
    {name : "PostgreSQL", level : "Intermediate"},
    {name : "Express JS", level : "Basic"},
    {name : "Node Js", level : "Basic"},
    {name : "Git/Github", level : "Intermediate"},
]
export default function Skills(){
    return(
        <>
            <div id={"skills"} className={"md:h-[32rem] h-[52rem] md:px-16 px-4 flex flex-col items-center"}>
                <h1 className={"text-4xl font-semibold"}>Skills</h1>
                <h1 className={"gilroy-medium text-gray-500"}>My Technical Level</h1>
                <div className={"flex md:flex-row flex-col justify-between mt-10 w-full gap-8"}>
                    <div className={"md:w-6/12 h-72 shadow-xl rounded-3xl border-2 border-gray-400 flex flex-col items-center py-4"}>
                        <h1 className={"md:text-2xl text-xl font-bold text-gray-600"}>Frontend Development</h1>
                        <div className={"w-full md:pl-16 pl-5 mt-6 grid grid-cols-2 gap-y-5"}>
                        {
                            frontSkillsData.map((skill,index)=>(
                                <span key={index} className={"flex"}>
                                    <FontAwesomeIcon icon={faCircleCheck} className={"w-5"}/>
                                    <span className={"ml-3"}>
                                        <h1 className={"font-semibold -mb-1"}>{skill.name}</h1>
                                        <h1 className={"text-sm text-gray-600"}>{skill.level}</h1>
                                    </span>
                                </span>

                            ))}
                        </div>
                    </div>
                    <div className={"md:w-6/12 h-72 shadow-xl rounded-3xl border-2 border-gray-400 flex flex-col items-center py-4"}>
                        <h1 className={"md:text-2xl text-xl font-bold text-gray-600"}>Backend Development</h1>
                        <div className={"w-full md:pl-16 pl-5 mt-6 grid grid-cols-2 gap-y-5"}>
                            {
                                backSkillsData.map((skill,index)=>(
                                    <span key={index} className={"flex"}>
                                    <FontAwesomeIcon icon={faCircleCheck} className={"w-5"}/>
                                    <span className={"ml-3"}>
                                        <h1 className={"font-semibold -mb-1"}>{skill.name}</h1>
                                        <h1 className={"text-sm text-gray-600"}>{skill.level}</h1>
                                    </span>
                                </span>

                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}