import style from './ContactStyles.module.css'

function Contact() {
    return (
        <section id="contact" className={style.container}>
            <h1 className="sectionTitle">Contact</h1>
            <form action="">
                <div className='formGroup'>
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='name'
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder='Email'
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder='Message'
                        required
                    ></textarea>
                </div>
                <input className='hover btn' type="submit" value="submit" />
            </form>
        </section>
    )
}

export default Contact