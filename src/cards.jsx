function Cards({ project, index }) {
    return (
        <>

            
                <div className="card rounded-0 my-card">
                    <div className="card-body d-flex flex-column gap-2 p-3 ">
                        <div className="card-header d-flex flex-row justify-content-between">
                            <span className="text-white-50">{index + 1}</span>
                            <span>{project.year}</span>
                        </div>
                        <h5 className="card-title text-white">{project.title}</h5>
                        <p className="card-text text-white-50">{project.discription}</p>
                        <div className="tools text-white-50 border-top">{project.tools}</div>
                    </div>
                </div>
            


        </>
    )
}
export default Cards;