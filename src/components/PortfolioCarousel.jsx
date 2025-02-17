import { useState } from 'react';
import { DirectionalButtonFill } from "./AnimatedButtons";


const ProjectCarousel = () => {
    const projects = [ //I have css classes for up to 10 projects. If you add more than that, update the css.
        {
            head: 'Half Moon Designs Website', 
            subhead: 'Astro | Tailwind | Netlify', 
            text: 'Personal freelance brochure site built with Astro and Tailwind and deployed via Netlify.', 
            src: '/images/halfmoon.webp',
            visit: 'https://halfmoondesigns.co'
        }, {
            head: 'Corvallis Celtic Festival Website', 
            subhead: 'Astro | Contentful | Netlify', 
            text: 'Client site for annual music and culture festival built with Astro and Contentful headless CMS and deployed via Netlify.', 
            src: '/images/celtic.webp',
            caseStudy: 'https://blog.katiepardee.com/case-study-corvallis-celtic-festival-website/',
            visit: 'https://corvalliscelticfestival.org'
        }, {
            head: "Katie's Web Dev Blog", 
            subhead: 'Wordpress | Custom Gutenberg', 
            text: 'My Web Dev Blog where I write about projects and other topics.', 
            src: '/images/blog.webp',
            caseStudy: 'https://blog.katiepardee.com/customizing-gutenbergs-rich-text-editor-toolbar-to-add-tooltip-formatting/',
            visit: 'https://blog.katiepardee.com'
        }, {
            head: 'DIY Plans and More', 
            subhead: 'Astro | Headless Wordpress | Netlify', 
            text: 'Work in progress client site.', 
            src: '/images/diyPlans.webp',
            visit: 'https://diyplans.netlify.app/'
        }, {
            head: 'Previous Portfolio', 
            subhead: 'Astro | Netlify', 
            text: 'My previous personal portfolio.', 
            src: '/images/previousPortfolio.webp',
            visit: 'https://katieastroportfolio.netlify.app/',
            caseStudy: 'https://blog.katiepardee.com/diving-deep-into-usestate-useeffect-and-useref-a-simple-mobile-menu-with-react/'
        }, {
            head: 'Home Taught Blog', 
            subhead: 'Wordpress | Avada', 
            text: 'Blog built with Wordpress and Avada page builder in 2023 for a homeschooling blog.', 
            src: '/images/hometaught.webp',
            visit: 'https://thehometaught.com/'
        }, {
            head: 'Figma UI Portfolio', 
            subhead: 'Showcasing Design Sensibilities', 
            text: 'A handful of my brochure website mockups for desktop.', 
            src: '/images/figmaPortfolio.webp',
            visit: 'https://www.figma.com/design/cuVDNwlA51Nt7R5Ee8RsdC/Pitch-Mockups-(Shared)?node-id=0-1&t=SChP4wqeha4F3YYe-1'
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
                <svg className={`carousel-button ${shift <= (0) ? 'inactive' : ''}`} width="29" height="69" viewBox="0 0 29 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 4L5 33.7078L25 65" stroke="white" strokeWidth="7" strokeLinecap="round"/>
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
                                        {project.visit && (
                                            <DirectionalButtonFill
                                                isSmall={true} 
                                                isFilled={true}
                                                client:load
                                                text='Visit'
                                                link={project.visit}
                                                rel='nofollow'
                                                target='_blank'
                                            />
                                        )}
                                        
                                        {project.caseStudy && (
                                            <a href={project.caseStudy} className='hmd-button-1 outline small'>Case Study</a>
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
                <svg className={`carousel-button ${shift > (projects.length - 2) ? 'inactive' : ''}`} width="29" height="69" viewBox="0 0 29 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4L24 33.7078L4 65" stroke="white" strokeWidth="7" strokeLinecap="round"/>
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