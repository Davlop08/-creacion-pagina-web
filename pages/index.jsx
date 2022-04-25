import Layout from "../components/Layout"
import styles from "../styles/Index.module.css"
import Link from "next/link"
import { Fragment } from "react"
import HeadMeta from "../components/HeadMeta"
import Image from "next/image"
import ContactForm from "../components/ContactForm"
import globals from "../globals"
import Services_Cards from "../components/Services_Cards"

export default function Home() {
  return (

    <Fragment>

      <HeadMeta title="Diseño Web | Lorem Soluciones Web"/>

      <Layout>
        <div className={styles.container_presentation}>
          <div className={styles.content_container}>
            <p className={styles.inicial_text}>
              <strong>¿Querés hacer crecer tu negocio?</strong>
            </p>
            <h1 className={styles.main_primary_title}>
              <strong>
                Diseño Web y marketing digital
              </strong>
            </h1>

            <h2 className={styles.main_secondary_title}>
              ¡Generá clientes y vendé más!
            </h2>

            <Link href={`${globals.direction}/paginas`}>
              <a className={styles.button_contact}>
                asesorate gratis
              </a>
            </Link>

          </div>
        </div>

        <Services_Cards/>

      <section className={styles.container_title_contact}>
        <div className={styles.title_contact}>
          <h4>Recibí asesoramiento gratuito a través de WhatsApp o dejanos tus datos en el siguiente formulario y nos comunicaremos con vos</h4>
        </div>
      </section>

      <ContactForm/>

      <section className={styles.container_secondary}>
        <div className={styles.container_secondary_info}>
          <h3>¿Por qué tener un <strong>Sitio Web?</strong></h3>
          <p>
            Hoy en día una página no es solamente un adorno, sino una herramienta que te ayuda a potenciar tu negocio,
            ya que cuando una persona está interesada en comprar algo o contratar algún servicio, lo primero que hace es buscarlo
            en internet. También extendés las posibilidades de tu negocio, ya que los potenciales clientes podrán ver tus 
            productos o servicios las 24 horas los 365 días del año, y en un rango mucho más amplio del que lo haría el negocio físico.
            También te ayuda a generar confianza en el cliente, ya que el podrá ver información sobre tu negocio y tendrá una amplia
            variedad de canales de contacto en los que podrá sacar sus dudas y generar una posible venta.
            </p>
            <br/>
            <p>Es por esto que te ofrecemos páginas atractivas y optimizadas para todos los dispositivos, 
              para que tus clientes tengan una buena experiencia de uso y se animen a adquirir tus productos o servicios
            </p>
        </div>
      </section>

      </Layout>
    </Fragment>

  )
}
