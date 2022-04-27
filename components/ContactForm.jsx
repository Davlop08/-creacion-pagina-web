import styles from '../styles/Form.module.css'
import {useForm} from 'react-hook-form'

export default function ContactForm() {

    const {register, formState:{errors}, handleSubmit, reset}= useForm();

    const onSubmit = async (data, e)=>{
        e.preventDefault()

        try {

            const res = await fetch("/api/contact",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            }
            )

            reset(e.target.value)


        } catch (error) {
            console.log(err)
        }

    }


    return (
        <section className={styles.form_container}>
            <form className={styles.form_contact} onSubmit={handleSubmit(onSubmit)}>
            

            <label htmlFor="nombre" className={styles.labels}>Nombre*</label>
            <div className={styles.form_name_container}>
                <input type="text" className={styles.form_name} name="nombre" maxLength={40}
                {...register('nombre', {required:{value: true, message: "Nombre requerido"}})}/>
                <span className={styles.error_span}>
                    {errors?.nombre?.message}
                </span>
            </div>

                <label htmlFor="correo" className={styles.labels}>Email*</label>
            <div className={styles.form_name_container}>
                <input type="email" className={styles.form_mail} name="correo" 
                {...register('email', {pattern:{
                    value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "ingrese un mail válido"
                }, required: {value: true, message: "Email requerido"} })}/>
                <span className={styles.error_span}>
                    {errors?.email?.message}
                </span>
            </div>

                <label htmlFor="numero" className={styles.labels}>Teléfono*</label>
            <div className={styles.form_name_container}>
                <input type="tel" className={styles.form_number} name="numero" placeholder="entre 6 y 15 números" maxLength={15}
                {...register('numero', {pattern: {value: /^[0-9]{6,15}$/
                    , message: "Entre 6 y 15 dígitos sin letras ni caracteres especiales"}, required: {value: true, message: "numero requerido"}})}/>
                <span className={styles.error_span}>
                    {errors?.numero?.message}
                </span>
            </div>

                <label htmlFor="mensaje" className={styles.labels}>Mensaje</label>
            <div className={styles.form_name_container} >
                
                <textarea className={styles.form_message} 
                name="mensaje" 
                cols="30" 
                rows="10"
                {...register('mensaje', 
                {required:{value: false}})}>
                </textarea>

            </div>

            <div>
                <button type="submit" className={styles.form_submit}>ENVIAR</button>
            </div>
            
            <label className={styles.labels}>Los campos con * son obligatorios</label>

            </form>

        </section>
    )
}
