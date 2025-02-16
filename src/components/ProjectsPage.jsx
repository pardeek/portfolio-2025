import ProjectCarousel from "./PortfolioCarousel";

const ProjectsPage = () => {
    return (
        <div className='content-width'>
            <div className="col">
                <h2 className='title-font'><span className='text-gradient'>Projects</span> Portfolio</h2>
                <h2 className='page-subtitle'>React | Astro | Wordpress</h2>
                <p className='page-description'>Proficient in HTML, CSS, JavaScript (ES6), and React.</p>                
            </div>
            <ProjectCarousel client:load />
        </div>
    )
}

export default ProjectsPage;