import {FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {MdMail} from "react-icons/md";

export default function ContactMe(){
    return(
        <>
            <div id={"contacts"} className={"md:h-[25rem] h-[20rem] md:px-16 px-6 md:pt-16 flex flex-col items-center relative"}>
                <h1 className={"text-4xl font-semibold"}>Contact Me</h1>
                <h1 className={"text-gray-500"}>Get In Touch</h1>
                <div className={"mt-10"}>
                    <ul className={"flex gap-6 text-4xl"}>
                        <a href={"https://www.facebook.com/ritikyadav048"} target={"_blank"} rel={"noreferrer"}><li><FaFacebookF className={"text-3xl mt-1"}/></li></a>
                        <a href={"https://www.instagram.com/yadavritik1032021/"} target={"_blank"} rel={"noreferrer"}><li><RiInstagramFill /></li></a>
                        <a href={"mailto:yadavritik103@gmail.com"} target={"_blank"} rel={"noreferrer"}><li><MdMail /></li></a>
                        <a href={"https://www.linkedin.com/in/ritik-yadav-380668180/"} target={"_blank"} rel={"noreferrer"}><li><FaLinkedinIn /></li></a>
                        <a href={"https://github.com/yadavritik12"} target={"_blank"} rel={"noreferrer"}><li><FaGithub /></li></a>
                    </ul>
                </div>
                <h1 className={"md:text-sm text-xs text-gray-500 absolute md:bottom-10 bottom-0 font-medium"}>© Copyright. All Rights Reserved</h1>
            </div>
        </>
    )
}