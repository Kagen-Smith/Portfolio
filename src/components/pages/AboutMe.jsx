
import avatar from '/./src/assets/5696412C-4071-4876-97D1-C7FD705F084A_1_201_a.jpeg';
import '/./src/components/styles/aboutMe.css';



export default function AboutMe() {
    return (
        <section className='about'>
    
            <img src={avatar} alt="avatar" className='image'/>
            <h1>About Me</h1>
            <p>Hello, my name is Kagen. I am a full stack developer and this is my porfolio. </p>
            <p>I am proficient in multiple coding languages, and I do some acting on the side.</p>
            <p>I am a very creative person and I like to learn new things. I am a hard worker and i am dedicated to my work. </p>
            <p>I am a friendly person and I am easy to get along with, I am a team player and I am always willing to help out, or learn new things.</p>
            <p> I am a good listener and I am always willing to help out. </p>
            <p> In my free time I like to watch movies, read books, create stories, game master/play table top games, and hang out with my friends who are very important to me.</p>

        
        </section>
    )
}