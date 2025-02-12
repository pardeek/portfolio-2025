import { DirectionalButtonFill } from "./AnimatedButtons";

const ProjectCarousel = () => {
    const projects = [
        {
            head: 'Half Moon Designs Website', 
            subhead: 'Astro | Tailwind | Netlify', 
            text: 'Personal freelance brochure site built with Astro and Tailwind and deployed via Netlify.', 
            src: '/images/halfmoon.webp',
            caseStudy: 'https://blog.katiepardee.com',
            visit: 'https://halfmoondesigns.co'
        }, {
            head: 'Corvallis Celtic Festival Website', 
            subhead: 'Astro | Contentful | Netlify', 
            text: 'Client site for annual music and culture festival built with Astro and Contentful headless CMS and deployed via Netlify.', 
            src: '/images/celtic.webp',
            caseStudy: 'https://blog.katiepardee.com',
            visit: 'https://corvalliscelticfestival.org'
        }, {
            head: 'Corvallis Celtic Festival Website', 
            subhead: 'Astro | Contentful | Netlify', 
            text: 'Client site for annual music and culture festival built with Astro and Contentful headless CMS and deployed via Netlify.', 
            src: '/images/celtic.webp',
            caseStudy: 'https://blog.katiepardee.com',
            visit: 'https://corvalliscelticfestival.org'
        }
    ]
    return (
        <div className='carousel-container'>
            {projects.map((project) => (
                <div className='carousel-item' key={project.head}>
                    <a href={project.visit} target='_blank' className='carousel-item-image'>
                        <img src={project.src} alt={`${project.head} site screenshot`} />
                    </a>
                    <div className='carousel-item-content'>
                        <h4>{project.head}</h4>
                        <h5>{project.subhead}</h5>
                        <p>{project.text}</p>
                        <div className='button-cont'>
                            <DirectionalButtonFill
                                isSmall={true} 
                                isFilled={true}
                                client:load
                                text='Case Study'
                                link={project.caseStudy}
                            />
                            {project.visit && (
                                <a href={project.visit} className='hmd-button-1 outline small'>Visit</a>
                            )}
                            
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
};

export default ProjectCarousel;