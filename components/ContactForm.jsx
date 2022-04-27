import styles from '../styles/Form.module.css'
import {useForm} from 'react-hook-form'
import { useState } from 'react';
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import {FaThumbsUp, FaExclamationTriangle} from "react-icons/fa"

export default function ContactForm() {

    const [sendingLoader, setSendingLoader] = useState("ENVIAR")

    const [statusIcon, setStatusIcon] = useState("")

    const [statusMessage, setStatusMessage] = useState("")

    const [message, setMessage]= useState(undefined)

    const {register, formState:{errors}, handleSubmit, reset}= useForm();


    const onSubmit = async (data, e)=>{
        e.preventDefault()
        
        setSendingLoader(<AiOutlineLoading3Quarters className={styles.sending_loading}/>)

        try {

            const res = await fetch("/api/contact",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            }
            )

            if(res.status === 200){
                setStatusIcon(<FaThumbsUp className={styles.succeed_icon}/>)
                setStatusMessage("¡Listo!, te contactaremos a la brevedad")
                setMessage(styles.succeed_send_span)
                reset(e.target.value)
                setTimeout(()=>{
                    setMessage(styles.standby_send_span)
                    setStatusMessage("")
                }, 20000)
            }
            else{
                setStatusIcon(<FaExclamationTriangle className={styles.error_icon}/>)
                setStatusMessage("No se pudo enviar tu mensaje, por favor, intentá de nuevo o escribinos por WhatsApp")
                setMessage(styles.error_send_span)
                setTimeout(()=>{
                    setMessage(styles.standby_send_span)
                    setStatusMessage("")
                }, 20000)
            }


        } catch (err) {
            console.log(err)
        }

        finally{
            setSendingLoader("ENVIAR")
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

            <span className={message}>
                {statusIcon}
                {statusMessage}
            </span>

            <div>
                <button type="submit" className={styles.form_submit}>{sendingLoader}</button>
            </div>
            
            <label className={styles.labels}>Los campos con * son obligatorios</label>

            </form>

        </section>
    )
}
