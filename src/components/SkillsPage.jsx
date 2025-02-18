import SkillsCards from './SkillsCards';

const SkillsPage = () => {
    return (
        <div className='content-width'>
            <div className='col'>
                <h2 className='title-font'>Let's talk <span className='text-gradient'>skills</span>.</h2>
                <h3 className='subtitle'>4+ years in Web Development</h3>
                <p>Proficient in HTML, CSS, JavaScript (ES6), and React.</p>                
            </div>
            <SkillsCards client:load />
        </div>
    ) 
}

export default SkillsPage;