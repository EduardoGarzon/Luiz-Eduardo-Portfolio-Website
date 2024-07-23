import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'

import sortingAlgorithm from '../../assets/BubbleSort-SelectionSort.jpg'
import fileSystem from '../../assets/FileSystem.jpg'
import replacementAlg from '../../assets/ReplacementAlgorithms.jpeg'
import planner from '../../assets/Planner.jpeg'
import todoList from '../../assets/todolist.png'
import vocacionalQuiz from '../../assets/VocacionalQuiz.png'
import bmi from '../../assets/BMI.png'

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTittle'>Projects</h1>
            <div className={styles.projectsContainer}>
                < ProjectCard
                    link="https://github.com/EduardoGarzon/BubbleSort-vs-SelectionSort"
                    src={sortingAlgorithm}
                    h3="BubbleSort <br> vs <br> SelectionSort"
                    p="A comparative study between the BubbleSort and SelectionSort sorting algorithms using C++ and Golang."
                />
                < ProjectCard
                    link="https://github.com/EduardoGarzon/File-System"
                    src={fileSystem}
                    h3="File System"
                    p="A file system based on contiguous allocation and management of free blocks with bitmap made in C."
                />
                < ProjectCard
                    link="https://github.com/EduardoGarzon/Page-Replacement-Algorithms"
                    src={replacementAlg}
                    h3="LRU <br> vs <br> OPT"
                    p="Algorithm for determining the number of page faults using the LRU and OPT replacement algorithms made in C++."
                />
                < ProjectCard
                    link="https://plann-er-olive.vercel.app/"
                    src={planner}
                    h3="Plann.er"
                    p="Front-end application about a travel planner made using ReactJS, Typescript and TailwindCSS for responsive interface. The project is still in the development phase. "
                />
                < ProjectCard
                    link="https://to-do-list-react-gray-nine.vercel.app/"
                    src={todoList}
                    h3="To-Do List"
                    p="A to-do list using vite to practice react."
                />
                < ProjectCard
                    link="https://vocational-quiz.vercel.app/"
                    src={vocacionalQuiz}
                    h3="Vocational Quiz"
                    p="Application of a vocational quiz for developers using Javascript."
                />
                < ProjectCard
                    link="https://bmi-calculator-nu-orpin.vercel.app/"
                    src={bmi}
                    h3="BMI Calculator"
                    p="A simple BMI calculator using HTML, CSS and Javascript."
                />
            </div>
        </section>
    )
}

export default Projects