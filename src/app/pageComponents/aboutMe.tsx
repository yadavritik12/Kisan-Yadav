import Image from "next/image";
import ProfilePic2 from "../../../public/Images/profilePic.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileCode, faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function AboutMe(){
    return(
        <>
            <div id={"about-me"} className={"h-[38rem] md:px-12 flex flex-col items-center"}>
                <h1 className={"text-4xl font-semibold"}>About Me</h1>
                <h1 className={"text-gray-500"}>My Introduction</h1>
                <div className={"mt-16 w-full flex justify-between"}>
                    <div className={"md:w-4/12 w-0"}>
                        <Image src={ProfilePic2} alt={"Profile Pic"} className={"w-80 h-80 rounded-3xl object-cover filter shadow-2xl"}/>
                    </div>
                    <div className={"md:w-8/12 w-full flex flex-col justify-center"}>
                        <div className={"flex justify-between md:px-20 px-3"}>
                            <Link href={'#skills'}>
                                <div className={"rounded-3xl shadow-xl md:w-72 w-40 h-36 flex flex-col items-center justify-center border-gray-400 cursor-pointer hover:bg-gray-100"}>
                                    <FontAwesomeIcon icon={faFileCode} className={"w-5"}/>
                                    <h1 className={"gilroy-bold text-lg"}>Skills</h1>
                                    <div className={"text-sm flex flex-col items-center text-gray-500"}>
                                        <h1>Autocad</h1>
                                        <h1>3D Rendering</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link href={'#educations'}>
                                <div className={"rounded-3xl shadow-xl md:w-72 w-40 h-36 flex flex-col items-center justify-center border-gray-400 cursor-pointer hover:bg-gray-100"}>
                                    <FontAwesomeIcon icon={faUserGraduate} className={"w-5"}/>
                                    <h1 className={"gilroy-bold text-lg"}>Education</h1>
                                    <div className={"text-sm flex flex-col items-center text-gray-500"}>
                                        <h1>B.Architecture </h1>
                                        <h1>+2 In Science</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={"md:px-20 px-4 py-4 mt-2 text-gray-600 md:text-left text-center"}>
                        As an aspiring architectural engineer, I am focused on designing efficient, sustainable, and innovative building solutions. I am passionate about applying my skills to solve complex design challenges and continuously learning to create structures that meet the evolving needs of modern architecture.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}