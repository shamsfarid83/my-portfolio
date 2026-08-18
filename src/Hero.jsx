function Hero() {
    return (
        <>
            <section className="hero position-relative vh-100 d-flex align-items-center page-section">
                <div className="waterMark position-absolute  top-50 start-50 translate-middle">SH</div>
                <div className="container">
                    <div className="content position-relative d-flex flex-column d-flex flex-column align-items-start gap-4">
                        <span className="Ava p-1 pe-3 ps-3 mb-4 ">Available for work · Aug 2026</span>
                        <h1 className="partOne display-1 fw-bold text-light mb-4">Frontend that <br /> <span className="special">ships</span> fast.</h1>
                        <p className="partTwo text-white-50 mb-4">shams farid — frontend engineer who obsesses over <br /> performance, accessibility, and the fine line between a good <br />interface and a great one. 8 years shipping to production.</p>
                        <a href="#projects" className="btn btn-dark border rounded-0">
                            VIEW WORK
                        </a> </div>
                </div>
            </section>
        </>
    )
}
export default Hero;