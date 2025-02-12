const SkillsCards = () => {
    const skills = [
        {name: 'Languages', text: 'Proficient in HTML, CSS, Javascript (ES6), JSX and familiar with TypeScript, PHP, SQL, Python'},
        {name: 'Libraries/Frameworks', text: 'Proficient in Astro, React.js, node.js, and Tailwind'},
        {name: 'Project Management', text: 'GitHub, DNS and hosting management, troubleshooting, site backups, SSL certificates, email routing, analytics, uptime monitoring'},
        {name: 'Optimization', text: 'Performance, SEO, security, asset compression, accessibility, legal requirements, asset licensing'},
        {name: 'UI/UX Design', text: 'Mobile-responsive design, content strategy, Figma'},
        {name: 'Wordpress', text: 'File structure, troubleshooting, navigating dashboard and files, various plugins and themes, Gutenberg Custom Blocks, Avada'},
    ]

    return (
        <div className='skills-cards-container'>
            {skills.map((skill) => (
                <div key={skill.name} className='skills-card'>
                    <div className='skills-card-slider'>
                        <h4>{skill.name}</h4>
                        <p>{skill.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default SkillsCards;