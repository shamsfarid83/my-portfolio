function Contact() {
    return (<>
        <div className="container mt-5 pt-5 d-flex flex-row justify-content-between page-section page-section" id="contact">
            <section className="sectable">
                <span className="special text-uppercase  ">Get in touch</span>
                <p className="partOne fw-bold text-light display-3 mb-4">Let's build <br /> something.</p>

                <table className="text-white-50 w-50 table">
                    <tr><td>Email </td> <td className="px-4">
                        <a className="my-link text-white-50 text-decoration-none" href="shamsfarid83@gmail.com">shamsfarid83@gmail.com</a></td></tr>
                    <tr><td >LinkedIn</td><td className="px-4"><a
                        className="my-link text-white-50 text-decoration-none"
                        href="https://www.linkedin.com/in/shams-farid-68b4b5345"
                    >
                        Shams Farid
                    </a></td></tr>
                    <tr><td >GitHub</td><td className="px-4"><a className="my-link text-white-50 text-decoration-none" href="https://github.com/shamsfarid83">shamsfarid83</a></td></tr>
                </table>
            </section>
            <section className="w-50">
                <form action="" className="d-flex flex-column gap-4 mt-5 w-100 align-items-start">
                <input className="p-2  w-100" type="text" pattern="[A-Za-z]+( [A-Za-z]+)*" name="name" placeholder="Name" />
                <input className="p-2 w-100" type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder="Email" />
                <textarea name="msg" id="EmailMsg" className="pb-5 w-100 text-white-50">tell me about your project</textarea>
                 <button className="bg-warning btn text-black flex-fill">send message</button>
                </form> 
            </section>
        </div>
    </>
    )
}
export default Contact;