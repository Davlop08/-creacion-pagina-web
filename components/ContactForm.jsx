import styles from '../styles/Form.module.css'


export default function ContactForm() {
    return (
        <section className={styles.form_container}>
            <form className={styles.form_contact}>
            

            <label htmlFor="nombre" className={styles.labels}>Nombre*</label>
            <div>
                <input type="text" className={styles.form_name} name="nombre" maxLength={40}/>
            </div>

                <label htmlFor="correo" className={styles.labels}>Email*</label>
            <div>
                <input type="email" className={styles.form_mail} name="correo"/>
            </div>

                <label htmlFor="numero" className={styles.labels}>Teléfono (opcional)</label>
            <div>
                <input type="tel" className={styles.form_number} name="numero" placeholder="entre 6 y 15 números"/>
            </div>

            <div>
                <button type="submit" className={styles.form_submit}>ENVIAR</button>
            </div>


            </form>

        </section>
    )
}
