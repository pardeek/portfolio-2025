import { DirectionalButtonFill } from "./AnimatedButtons";
import TechStack from "./TechStack";
import Typewriter from "./Typewriter";

const HomePage = () => {
    return (
        <div className='content-width'>
            <div className='half-col'>
                <h1>Hi. I'm <span className='text-gradient'>Katie</span>.</h1>
                <Typewriter 
                    client:load 
                    text='Front-end Web Developer'
                />
                <p>Proficient in HTML, CSS, JavaScript (ES6), and React.</p>
                
            </div>
            <div className='button-cont'>
                <DirectionalButtonFill 
                    isSmall={false}
                    isFilled={true}
                    client:load
                    text='Get in Touch'
                    link='#contact'
                />
                <DirectionalButtonFill 
                    isSmall={false}
                    isFilled={false}
                    client:load
                    text='Read my blog'
                    link='https://blog.katiepardee.com'
                />
            </div>
            <TechStack client:load />
        </div>
    )
}

export default HomePage;