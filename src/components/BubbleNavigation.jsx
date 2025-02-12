const BubbleNavigation = ({ pages }) => {
    return (
        <div className='bubble-nav'>
            {pages.map((page) => (
                <a href={`#${page.anchor}`} key={page.anchor}>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                </a> 
            ))}
        </div>
    )
};

export default BubbleNavigation;