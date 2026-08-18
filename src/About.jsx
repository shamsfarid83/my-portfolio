function About() {
    return (<>
        <div className="container d-flex flex-row justify-content-between page-section" id="about">
            <section className="sec1 d-flex flex-column gap-2 flex-grow-1">
                <span className="special text-uppercase fs-4 ">about</span>
                <p className="partOne fw-bold text-light fs-1 mb-4">I make things fast</p>
                <img src="shams.jpeg" alt="" className="w-50" />
            </section>
            <section className="sectable w-50 d-flex flex-column gap-2 flex-grow-1 ">
                <p className="text-white-50 pt-5 mt-5 ">Based in Berlin. I build fast, accessible, and polished web interfaces — the kind  where the interaction feels obvious in hindsight. Before going independent, I was a senior frontend engineer at two YC-backed startups and spent three years at a  product agency in London.
                    <br /><br />

                    I care about render performance, component architecture, and accessibility —  not as boxes to check but because they're what separates software people enjoy using from software they merely tolerate.
                    </p>

                <table className="text-white-50  table">
                    <tr><td  >Core</td> <td className="px-4">React · TypeScript · Next.js · Vite · JavaScript (ES2024)</td></tr>
                    <tr><td >Styling</td><td className="px-4">Tailwind CSS · CSS Modules · Framer Motion · GSAP · Figma</td></tr>
                    <tr><td >Tooling</td><td className="px-4">
                        Node.js · GraphQL · REST · Vitest · Playwright · CI/CD</td></tr>
                </table>
            </section>
        </div>
    </>)
}
export default About