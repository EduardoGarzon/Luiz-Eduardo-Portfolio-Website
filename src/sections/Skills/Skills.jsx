import style from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
    return (
        <section id='skills' className={style.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={style.skillList}>
                <SkillList src={checkMarkIcon} p="HTML"></SkillList>
                <SkillList src={checkMarkIcon} p="CSS"></SkillList>
                <SkillList src={checkMarkIcon} p="Javascript"></SkillList>
                <SkillList src={checkMarkIcon} p="Typescript"></SkillList>
                <SkillList src={checkMarkIcon} p="Node"></SkillList>
            </div>
            <hr />
            <div className={style.skillList}>
                <SkillList src={checkMarkIcon} p="React"></SkillList>
                <SkillList src={checkMarkIcon} p="Vue"></SkillList>
                <SkillList src={checkMarkIcon} p="Angular"></SkillList>
                <SkillList src={checkMarkIcon} p="Tailwind CSS"></SkillList>
            </div>
            <hr />
            <div className={style.skillList}>
                <SkillList src={checkMarkIcon} p="Redux"></SkillList>
                <SkillList src={checkMarkIcon} p="Webpack"></SkillList>
                <SkillList src={checkMarkIcon} p="Git"></SkillList>
                <SkillList src={checkMarkIcon} p="Jest"></SkillList>
                <SkillList src={checkMarkIcon} p="Bootstrap"></SkillList>
            </div>
        </section>
    )
}

export default Skills