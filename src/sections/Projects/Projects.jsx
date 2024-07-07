import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTittle'>Projects</h1>
            <div className={styles.projectsContainer}>
                < ProjectCard
                    link=""
                    src={viberr}
                    h3="Titulo de Projeto"
                    p="Description"
                />
                < ProjectCard
                    link=""
                    src={viberr}
                    h3="Titulo de Projeto"
                    p="Description"
                />
                < ProjectCard
                    link=""
                    src={viberr}
                    h3="Titulo de Projeto"
                    p="Description"
                />
                < ProjectCard
                    link=""
                    src={viberr}
                    h3="Titulo de Projeto"
                    p="Description"
                />
            </div>
        </section>
    )
}

export default Projects