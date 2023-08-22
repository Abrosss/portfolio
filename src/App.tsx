
import './css/styles.css'

import ProjectImage1 from './assets/spanish.png'
import ProjectVideo from './assets/videos/spanish.mp4'
import ProjectImage2 from './assets/galleria.png'
import ProjectVideo2 from './assets/videos/galleria.mp4'
import ProjectImage3 from './assets/scoot.png'
import ProjectVideo3 from './assets/videos/scoot.mp4'
import ProjectImage4 from './assets/quiz.png'
import ProjectImage5 from './assets/coffee.jpg'
import GithubIcon from './assets/github.svg'
import Flower from './assets/flower.svg'
import LinkedIn from './assets/linkedin.svg'
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react'

type SectionRefs = {
  [key: string]: React.MutableRefObject<HTMLElement | null>;
};
function App() {

  const user = {
      email: "dev.nessi@gmail.com",
      linkedin: "https://www.linkedin.com/in/nataliakn/",
      github: "https://github.com/Abrosss",
      work: [
        {
          type: "fullstack",
          projects: [
            {
              title: "Verb Conjugator",
              img: ProjectImage1,
              description: "A full-stack web application for searching, translating and conjugating spanish verbs. API can be used by anyone for searching verbs. An instruction can be found on the website's main page.",
              type: "fullstack",
              live: "https://spanish-verbs.netlify.app/",
              stacks: ["React", "Node.js", "Scss", "API"],
              github: "https://github.com/Abrosss/spanish_verbs",
              demo: ProjectVideo
            },
      
            {
              title: "Slideshow Maker",
              img: ProjectImage2,
              description: "A full-stack app which allows users to create art collections and play slideshows. Full functionality is presented in the demo below.",
              type: "fullstack",
              live: "https://slidery.netlify.app/profile",
              stacks: ["React", "Node.js", "Scss"],
              github: "https://github.com/Abrosss/galleria-expanded",
              demo: ProjectVideo2
            },
            {
              title: "Quiz Builder",
              img: ProjectImage4,
              description: "A full-stack web application for making quizzes",
              live: "https://prepped.dev",
              stacks: ["React", "Node.js", "Scss"],
              github: "https://github.com/Abrosss/devquiz-quiz-app",
              demo: ""
            },
            {
              title: "Scoot",
              img: ProjectImage3,
              description: "A multi-page full-stack web application for renting and managing scoot rides. Create an account. Use the app to find the nearest scooter to you. Rent a ride and review your previous rides in the profile. Change the profile settings.",
              type: "fullstack",
              live: "https://getscootin.netlify.app/",
              stacks: ["React", "Node.js", "Scss"],
              github: "https://github.com/Abrosss/scootin-renting-app",
              demo: ProjectVideo3
            }
          ]
        },
        {
          type: "frontend",
          projects: [
            {
              title: "Coffeeroasters",
              img: ProjectImage5,
              description: "A multi-page fully responsive website for building a subscription plan for coffee delivery services. Customize your order frequency, quantity, even your roast style and grind type.",
              type: "frontend",
              live: "https://coffee-sub.vercel.app/",
              stacks: ["Javascript", "SCSS"],
              github: "https://github.com/Abrosss/coffee-shop",
              demo: ""
            },
            
          ]
        }
      ]
    
    }
      
    
  

  
  const [block, setBlock] = useState(false)
  const [showVideo, setShowVideo] = useState("")
  const sectionRefs: SectionRefs = {
    fullstack: useRef<HTMLInputElement | null>(null),
    frontend: useRef<HTMLInputElement | null>(null),
    contact: useRef<HTMLInputElement | null>(null),
    // Add more refs for each section
  };
  const [activeSection, setActiveSection] = useState('#fullstack');
  function getThreshold() {
     
    let windowWidth = window.innerWidth;
  
    if (windowWidth < 1000) {
      return 0.5;
    } else if (windowWidth > 1000) {
      return 0.8;
    } 
  }
  useEffect(() => {
  console.log(getThreshold())
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        let ratio = entry.intersectionRatio;

        
        if (ratio > 0.5) {
          setActiveSection(`#${entry.target.id}`)
        }
       
      })
    }, {
      threshold: getThreshold(),
      root: null,
    
    })
    
    const longobserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        let ratio = entry.intersectionRatio;
       if(ratio > 0.1) setActiveSection(`#${entry.target.id}`)
      })
    }, {
      threshold: 0.1,
      root: null,
    
    })
    if(!block) {
      longobserver.observe(sectionRefs['fullstack'].current as HTMLElement)
      Object.values(sectionRefs).forEach((sectionRef) => 
  
      {
        
       observer.observe(sectionRef.current as HTMLElement)
      
      })
    }
   

    
    return () => {
      observer.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, [sectionRefs, setActiveSection, block, getThreshold])


  const smoothScroll = (targetId: string) => {

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(targetId)
    setBlock(true)
    setTimeout(() => {
      setBlock(false)
    }, 1000)
  };
 
  



  return (
    <section className='page'>
      {showVideo !== "" &&
      <section className='video' onClick={() => setShowVideo('')}>
      <video src={showVideo} controls>
									
								  </video>
      </section>
      }
      
      {window.innerWidth > 1000 &&
        <aside className='sidebar'>
          <div className='flower' >
          <img src={Flower}></img>
          </div>
          
        <nav>
          <div className={activeSection === "#fullstack" ? "active" : ""} onClick={() => smoothScroll('#fullstack')}>
            <span className={activeSection === "#fullstack" ? "active" : ""}>FULL-STACK APPLICATIONS</span>
          </div>
          <div className={activeSection === "#frontend" ? "active" : ""} onClick={() => smoothScroll('#frontend')}>
            <span className={activeSection === "#frontend" ? "active" : ""}>FRONTEND APPLICATIONS</span>
          </div>
          <div className={activeSection === "#contact" ? "active" : ""} onClick={() => smoothScroll('#contact')}>
            <span className={activeSection === "#contact" ? "active" : ""}>CONTACT</span>
          </div>

        </nav>
      </aside>
      }
    
      <section className='main'>
        <header>
          <h1>NATALIA KONDRATYUK</h1>
          <h2>portfolio</h2>
        </header>
        <aside className='sidebar horizontal'>
        <nav>
          <div  onClick={() => smoothScroll('#fullstack')}>
            <span className={activeSection === "#fullstack" ? "active" : ""}>FULL-STACK APPLICATIONS</span>
          </div>
          <div  onClick={() => smoothScroll('#frontend')}>
            <span className={activeSection === "#frontend" ? "active" : ""}>FRONTEND APPLICATIONS</span>
          </div>
          <div  onClick={() => smoothScroll('#contact')}>
            <span className={activeSection === "#contact" ? "active" : ""}>CONTACT</span>
          </div>

        </nav>
      </aside>
        <section ref={sectionRefs['parent']} className='portfolio'>
          {user.work.map(block => (
            <section className='portfolio-block' >
              <h3>{block.type.toUpperCase()}</h3>
              <section className='portfolio-grid' id={block.type} ref={sectionRefs[block.type]} >
                {block.projects.map(project => (
                  <div className='box'>
                    <div className='img-container'>
                      <div className='links'>
                        <a target='blank' href={project.live}>LIVE </a>
                        <a target='blank' href={project.github}>GITHUB    <span className='icon github'></span></a>
                        {project.demo !== "" &&
                         <a className='demo' onClick={() => setShowVideo(project.demo)}>WATCH DEMO</a>
                        }
                       
                      </div>

                      <img className="project-image" src={project.img} alt='project image'></img>



                    </div>
                    <div className='tech'>
                      {project.stacks.map((skill, index) => (
                        <>
                          <span>{skill.toUpperCase()}

                          </span>
                          {index === project.stacks.length - 1 ?
                            <span> </span> :
                            <span>|</span>}
                        </>



                      ))}
                    </div>

                    <a href={project.live} target='blank' className='project-title'>{project.title}</a>





                    <p>{project.description}</p>
                  </div>
                ))}

              </section>

            </section>
          ))}


          <section ref={sectionRefs['contact']}   id='contact' className='portfolio-block contact'>
            <h5>Get in touch</h5>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <section className='contact-links'>
              <a href={user.github} target='blank'><img className='icon' src={GithubIcon} alt='github icon'></img></a>
              <a href={user.linkedin} target='blank'><img className='icon' src={LinkedIn} alt='linkedin icon'></img></a>
              
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default App
