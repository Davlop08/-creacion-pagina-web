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

            <HeadMeta title="Diseño Tienda Online Recomendada | Lorem Soluciones Web" metaDescription="Conocé el precio de la tienda
            online recomendada, con carrito, control de stock y alta de clientes, ideal si manejás una amplia variedad de productos"/>

            <Layout>
                <section className={styles.entry_container}>
                    <div className={styles.entry_content_container}>
                        <h1 className={styles.entry_content_title}>Tienda Online Recomendada</h1>
                        <p className={styles.entry_content_description}>
                            La tienda recomendada es sin duda la mejor opción que podés elegir, ya que además de tener
                            un carrito de compras podrás tener un control total del stock de tus productos a través de
                            un panel de administración propio, al cual podés acceder ilimitadamente para hacer los cambios
                            que necesites, y eso no es todo, sino que también tus clientes podrán registrarse en tu sitio, 
                            lo que permite agilizar los procesos de compra para ellos, validar compras, tener comunicación más cercana
                            con tus clientes, etc...

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
