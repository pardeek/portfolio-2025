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
                <p>Utilizing HTML, CSS, JS(ES6), and React to build intuitive and fast UIs. <br/> View this project on <a href='https://github.com/pardeek/portfolio-2025'>my GitHub profile.</a></p>
                
            </div>
            <div className='button-cont'>
                <DirectionalButtonFill 
                    isSmall={false}
                    isFilled={true}
                    client:load
                    text='Get in Touch'
                    link='#contact'
                />
                <a className='hmd-button-1 outline' href='https://blog.katiepardee.com'>Read my blog</a>
            </div>
            <TechStack client:load />
        </div>
    )
}

export default HomePage;