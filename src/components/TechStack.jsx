const TechStack = () => {
    const stack = [
        {name: 'HTML5', src: '/images/html.webp', yoe: '4+ YOE'},
        {name: 'CSS3', src: '/images/css.webp', yoe: '4+ YOE'},
        {name: 'JS(ES6)', src: '/images/js.webp', yoe: '4 YOE'},
        {name: 'React', src: '/images/react.webp', yoe: '1 YOE'},
        {name: 'Astro', src: '/images/astro.webp', yoe: '1 YOE'},
        {name: 'GitHub', src: '/images/github.webp', yoe: '1 YOE'},
        {name: 'Figma', src: '/images/figma.webp', yoe: '2 YOE'},
        {name: 'WP', src: '/images/wp.webp', yoe: '5 YOE'},
        {name: 'SASS', src: '/images/sass.webp', yoe: '2 YOE'},
    ]

    return (
        <div>
            <div className='tech-stack-desktop'>
                {stack.map((item) => (
                    <div key={item.name} className='tech-stack-desktop-item' data-yoe={item.yoe} data-tech={item.name}>
                        <img src={item.src} alt={`${item.name}  - ${item.yoe}`} />
                    </div>
                ))}
            </div>
            <div className='tech-stack-mobile'>
                {stack.map((item) => (
                    <div key={item.name} className='tech-stack-mobile-item' data-yoe={item.yoe} data-tech={item.name}>
                        <img src={item.src} alt={`${item.name}  - ${item.yoe}`} />
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default TechStack;