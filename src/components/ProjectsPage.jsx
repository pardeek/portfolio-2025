import ProjectCarousel from "./PortfolioCarousel";

const ProjectsPage = () => {
    return (
        <div className='content-width'>
            <div className="col">
                <h2 className='title-font'><span className='text-gradient'>Projects</span> Portfolio</h2>
                <h3 className='page-subtitle subtitle'>React | Astro | Wordpress</h3>
                <p className='page-description'>Check out some of my projects utilizing a wide variety of tools and skills.</p>                
            </div>
            <ProjectCarousel client:load />
        </div>
    )
}

export default ProjectsPage;