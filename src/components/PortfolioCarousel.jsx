import { useState } from 'react';
import { DirectionalButtonFill } from "./AnimatedButtons";


const ProjectCarousel = () => {
    const projects = [ //I have css classes for up to 10 projects. If you add more than that, update the css.
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
            head: 'Figma UI Portfolio', 
            subhead: 'Astro | Contentful | Netlify', 
            text: 'Client site for annual music and culture festival built with Astro and Contentful headless CMS and deployed via Netlify.', 
            src: '/images/Figma.Portfolio.webp',
            caseStudy: 'https://blog.katiepardee.com',
            visit: 'https://corvalliscelticfestival.org'
        }, {
            head: "Katie's Web Dev Blog", 
            subhead: 'Astro | Contentful | Netlify', 
            text: 'Client site for annual music and culture festival built with Astro and Contentful headless CMS and deployed via Netlify.', 
            src: '/images/celtic.webp',
            caseStudy: 'https://blog.katiepardee.com',
            visit: 'https://corvalliscelticfestival.org'
        }, {
            head: 'Another Project', 
            subhead: 'Astro | Contentful | Netlify', 
            text: 'Client site for annual music and culture festival built with Astro and Contentful headless CMS and deployed via Netlify.', 
            src: '/images/celtic.webp',
            caseStudy: 'https://blog.katiepardee.com',
            visit: 'https://corvalliscelticfestival.org'
        }
    ]

    const [ shift, setShift ] = useState(0);

    const handleLeftClick = () => {
        if (shift >= 1) {
            setShift(shift - 1);
        } else return;
    }

    const handleRightClick = () => {
        if (shift < (projects.length - 1)) {
            setShift(shift + 1);
        } else return;
    }

    return (
        <div className='carousel-parent'>
            <div
                onClick={handleLeftClick}
            >
                <svg className={`carousel-button ${shift <= (0) ? 'inactive' : ''}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" />
                </svg>
            </div>
            <div className='carousel-wrapper'>
                <div className='carousel-shifter' data-shift={shift}>
                    {projects.map((project) => (
                        <div className='carousel-item-wrapper' key={project.head}>
                            <a href={project.visit} target='_blank' className='carousel-item-image'>
                                <img src={project.src} alt={`${project.head} site screenshot`} />
                            </a>
                            <div className='carousel-item'>
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
                        </div>

                    ))}
                </div>
            </div>
            
            <div 
                onClick={handleRightClick}
            >
                <svg className={`carousel-button ${shift > (projects.length - 2) ? 'inactive' : ''}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" />
                </svg>
            </div>
        </div>
        
    )
};

export default ProjectCarousel;

//Parent is a content width that scales 
//Overlay psuedoattribute of 100% width of the parent that has a linear gradient
//
//
//
//