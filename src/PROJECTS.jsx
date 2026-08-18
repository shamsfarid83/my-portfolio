import Cards from "./cards";
function Projects() {
    let myProjects = [
        {
            year: 2025,
            title: "Meridian",
            discription: "Real-time analytics dashboard for urban planners. Built complex data visualizations with D3, virtualized 100k-row tables, and cut initial load time by 65% via code splitting.",
            tools: `ReactTypeScript D3.js`
        },
        {
            year: 2024,
            title: "Folkway",
            discription: "Music discovery web app with waveform visualizers and audio processing built on the Web Audio API. 40k active users within the first month of launch.",
            tools: `Next.js Tailwind Web Audio API`
        },
        {
            year: 2023,
            title: "Silt",
            discription: "Marketing site for a Copenhagen architecture studio. Scroll-driven animations, WebGL hero, and a Lighthouse score of 98 across all categories.",
            tools: "React Framer Motion GSAP"

        },
        {
            year: 2023,
            title: "Ledger OS",
            discription: "Component library and token framework for a fintech platform. 120+ accessible components. Reduced cross-team integration time by 50% through thorough documentation.",
            tools: "Design System Storybook Radix UI"



        }
    ]
    return (
        <>
            <div className="container mt-5 pt-5 " id="projects">
                <span className="special text-uppercase  ">Selected work</span>
                <p className="partOne fw-bold text-light fs-1 mb-4">Projects</p>
                <div className="row g-4">

                    {
                        myProjects.map((project, index) =>
                        (<div className="col-12 col-lg-6">
                            <Cards key={index}
                                project={project}
                                index={index} />
                        </div>
                        )
                        )
                    }

                </div>

            </div>

        </>
    )
}
export default Projects;