import {Fragment} from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import HeadMeta from "../../components/HeadMeta"
import styles from "../../styles/Individual_Pages.module.css"
import Pages_Includes from "../../components/Pages_Includes"
import ContactForm from "../../components/ContactForm"
import globals from "../../globals"


export default function tiendaRecomendada() {
    return (
        <Fragment>

            <HeadMeta title="Tienda Online Recomendada | Lorem Soluciones Web" metaDescription="agregar descripcion"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Tienda Online Recomendada</h1>
                        <p className={styles.entry_content_description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint maxime 
                            delectus esse sequi necessitatibus ad error possimus dicta rem!
                        </p>
                    </div>
                </section>

                <Pages_Includes 
                price={'AR' + globals.pagesPrices.tiendaRecomendada}
                pages="5" 
                imgs="30" 
                cart="Tus clientes podrán agregar sus productos al carrito" 
                stock="Tenés control del stock de tus productos" 
                mail="cuenta de email basada en tu dominio" 
                mp="Cobrás tus productos con MercadoPago" 
                clients="Tus clientes podrán registrarse en tu sitio"/>

                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <p className={styles.entry_content_description}>Para contratar este servicio escribinos por 
                            <Link  
                            href="https://api.whatsapp.com/send?phone=5491162039196&text=Hola%2C%20estoy%20interesado%20en%20la%20tienda%20recomendada">
                                <a className={styles.contact_wa_link}> WhatsApp </a>
                            </Link>
                            o dejanos tus datos y nos comunicaremos con vos.
                        </p>
                    </div>
                </section>

                <ContactForm/>
            </Layout>
        </Fragment>
    )
}
