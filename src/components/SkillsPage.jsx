import SkillsCards from './SkillsCards';

const SkillsPage = () => {
    return (
        <div className='content-width'>
            <div className='col'>
                <h2 className='title-font'>Let's talk <span className='text-gradient'>skills</span>.</h2>
                <h3 className='subtitle'>4+ years in Web Development</h3>
                <p>Experience in a wide variety of tools and skills with a solid command over whole project management.</p>                
            </div>
            <SkillsCards client:load />
        </div>
    ) 
}

export default SkillsPage;