import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutNandan extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about nandan" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nandan' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nandan' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nandan' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="nandan's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutNandan;

export const displayAboutNandan = () => {
    return <AboutNandan />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/nandan.png" alt="Nandan Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Nandan Thakur</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Software Engineer!</span></div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm 2+ years of <span className=" font-medium"> experienced software development professional skilled in development of commercially successful products from scratch.</span></li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, playing cricket or reading <a href="https://thenextweb.com/" target="_blank" rel="noreferrer"> Tech Blogs.</a></li>
                
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
        <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Experience
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Mphasis Limited
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Jan 2019 - Present</div>
                    <div className=" text-sm md:text-base">Associate Software Developer</div>
                    <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                    <li className=" list-disc mt-1 text-gray-100">Working on development of Conversational AI Models like Chat-bots and Virtual assistants with the help of Microsoft LUIS and Microsoft Azure Bot framework</li>
                    <li className=" list-disc mt-1 text-gray-100">Developed cloud deployed Virtual Assistant integrated with ITSM tools like Service Now/ Cherwell</li>
                    <li className=" list-disc mt-1 text-gray-100">Created bots for multiple channels like Facebook, Telegram, WhatsApp, Alexa</li>
                    <li className=" list-disc mt-1 text-gray-100">Worked on the multiple software projects and participated in the whole software development process from design to implementation and delivery</li>
                    <li className=" list-disc mt-1 text-gray-100">Built multiple proof of concepts in short notice for quick demo with clients</li>
                    <li className=" list-disc mt-1 text-gray-100">Provided assistance to team for building Mphasis employees assistant bot “Dexter”</li>
                    <li className=" list-disc mt-1 text-gray-100">Integrated solutions with outside systems like Airways, SAP, Service Now, PeopleSoft, etc. using REST services</li>
                    <li className=" list-disc mt-1 text-gray-100">Successfully managed migration of solutions to EC2 instances</li>       
                    </ul>                   
                </li>
               
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Conversational AI, Java, C# & Nodejs!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Datebases</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?&style=flat&logo=java&logoColor=white" className="m-1"/>
                        <img alt="C#" src="https://img.shields.io/badge/c%23%20-%23239120.svg?&style=flat&logo=c-sharp&logoColor=white" className="m-1"/>
                        <img alt="MicrosoftLuis" src="https://img.shields.io/badge/Microsoft Luis%20-%230072C6.svg?&style=flat&logo=azure-devops&logoColor=white" className="m-1"/>
                        <img alt="QnAMaker" src="https://img.shields.io/badge/QnA Maker%20-%230072C6.svg?&style=flat&logo=azure-devops&logoColor=white" className="m-1"/>
                        <img alt="Azure" src="https://img.shields.io/badge/Azure Bot Service%20-%230072C6.svg?&style=flat&logo=azure-devops&logoColor=white" className="m-1"/>
                        <img alr="AzureBotService" src="https://img.shields.io/badge/Microsoft Power Virtual Agent-0078D4?style=flat&logo=microsoft&logoColor=white" className="m-1"/>
                        <img alt="MicrosoftPower" src="https://img.shields.io/badge/Microsoft Power Automate-B7472A?style=flat&logo=microsoft-powerpoint&logoColor=white" className="m-1"/>
                        <img alt="AzureDevOps" src="https://img.shields.io/badge/Azure DevOps%20-%230072C6.svg?&style=flat&logo=azure-devops&logoColor=white" className="m-1"/>
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img alt="MicrosoftBotFramework" src="https://img.shields.io/badge/Microsoft Bot Framework-2B579A?style=flat&logo=discord&logoColor=white" className="m-1"/>
                        <img alt="Spring" src="https://img.shields.io/badge/springboot%20-%236DB33F.svg?&style=flat&logo=spring&logoColor=white" className="m-1"/>
                        <img alt="WinForms" className="m-1" src="https://img.shields.io/badge/WinForms-02569B?style=flat&logo=WinForms&logoColor=white" className="m-1" />
                        <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" className="m-1"/>
                        <img alt="postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?&style=flat&logo=postgresql&logoColor=white" className="m-1"/>
                        <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=flat&logo=mongodb&logoColor=white" className="m-1"/>
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And ofcourse,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="nandanlinux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "An Intelligent chatbot development platform",
            date: "Jan 2019 - Present",
            link: "https://www.mphasis.com/home/services/cognitive/cognitive-guru-solution.html",
            description: [
                "Collaborated with cross-functional teams to design and build chatbots.",
                "Developed 50+ chatbot use cases for domains like Service Desk, Human Resource, Insurance, Social, Airlines, Government, Banking",
                "Responsible for the version upgrade of Microsoft Luis from V2 to V3",
                "Developed REST Services using Spring Boot and NodeJS, written unit test cases for the same"
            ],
            domains: ["Java", "Spring Boot", "NodeJS", "Bootstrap", "Microsoft Bot Framework", "Microsoft Luis", "Azure Bot Service", "Grafana", "Microsoft QNA Maker", "AWS EC2", "Adaptive Card"]
        },
        {
            name: "Windows application for allocation and tracking of field support engineers",
            date: "Dec 2020 - Present",
            link: "",
            description: [
                "Responsible for building complete front-end application from scratch, based on latest C# WinForms",
                "Ensuring high performance on desktop, with usage of latest & relevant performance tools",
                "Worked with designers, product managers to collaboratively own the front-end layer to deliver stellar end-user experiences",
                "Collaborated with cross functional teams to define, design & ship new features",
            ],
            domains: ["Java", "C#", "Spring Boot", "Windows Form"]
        }

    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name}</div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Nandan-Thakur-Resume.pdf" title="nandan thakur resume" frameBorder="0"></iframe>
    )
}