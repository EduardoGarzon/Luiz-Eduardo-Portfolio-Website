import style from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
    return (
        <section id='skills' className={style.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={style.skillList}>
                <SkillList src={checkMarkIcon} p="C"></SkillList>
                <SkillList src={checkMarkIcon} p="C++"></SkillList>
                <SkillList src={checkMarkIcon} p="Java"></SkillList>
                <SkillList src={checkMarkIcon} p="Golang"></SkillList>
            </div>
            <hr />
            <div className={style.skillList}>
                <SkillList src={checkMarkIcon} p="HTML"></SkillList>
                <SkillList src={checkMarkIcon} p="CSS"></SkillList>
                <SkillList src={checkMarkIcon} p="Javascript"></SkillList>
                <SkillList src={checkMarkIcon} p="Typescript"></SkillList>
            </div>
            <hr />
            <div className={style.skillList}>
                <SkillList src={checkMarkIcon} p="Bootstrap"></SkillList>
                <SkillList src={checkMarkIcon} p="React"></SkillList>
                <SkillList src={checkMarkIcon} p="Vue"></SkillList>
                <SkillList src={checkMarkIcon} p="Tailwind CSS"></SkillList>
            </div>
        </section>
    )
}

export default Skills