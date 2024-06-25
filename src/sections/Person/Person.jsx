import styles from './PersonStyles.module.css'
import personalImage from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Person() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

    return (
        <section id='person' className={styles.container}>

            <div className={styles.colorModeContainer}>
                <img
                    className={styles.person}
                    src={personalImage}
                    alt="Website personal profile picture of Luiz Eduardo Garzon."
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon."
                    onClick={toggleTheme}
                />
            </div>

            <div className={styles.info}>
                <h1>
                    Luiz
                    <br />
                    Eduardo
                </h1>

                <h2>Developer</h2>

                <span>
                    <a href="https://github.com/EduardoGarzon" target='_blank'>
                        <img src={githubIcon} alt="Github Icon." />
                    </a>
                    <a href="https://www.linkedin.com/in/eduardo-garzon/" target='_blank'>
                        <img src={linkedinIcon} alt="Linkdlin Icon." />
                    </a>
                </span>

                <p>
                    Committed to continuous learning and
                    motivated by the dream of developing professionally as a
                    fullstack developer.
                </p>

                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>

        </section>
    )
}

export default Person