import Layout from "../components/Layout"
import styles from "../styles/Index.module.css"
import Link from "next/link"
import { Fragment } from "react"
import HeadMeta from "../components/HeadMeta"
import Image from "next/image"
import classNames from 'classnames'
export default function Home() {
  return (

    <Fragment>

      <HeadMeta title="Diseño Web | Lorem Soluciones Web"/>

      <Layout>
        <div className={styles.container_presentation}>
          <div className={styles.content_container}>
            <p className={styles.inicial_text}>
              <strong>Impulsá tu negocio con presencia online</strong>
            </p>
            <h1 className={styles.main_primary_title}>
              <strong>
                Diseño de paginas Web
              </strong>
            </h1>

            <h5 className={styles.main_secondary_title}>
              Desarrollo Web Profesional y accequible 
            </h5>

            <Link href="/">
              <a className={styles.button_contact}>
                Más información
              </a>
            </Link>

          </div>
        </div>

        <section className={styles.experiences}>
          <div className={styles.experiences_body}>
            <h2 className={styles.experiences_title}>Modificar titulo 1</h2>
            <div className={styles.experiences_grid}>

              <div className={styles.experience + ' ' + styles.experience_1}>
                <div className={styles.experience_description}>
                  texto 1
                </div>
              </div>

              <div className={styles.empty + ' ' + styles.empty_1}>
                <Image src="/imagenes/238.jpg" height={300} width={300} alt="imagen"/>
              </div>
              {/* <div className={styles.line}></div> */}


              <div className={styles.experience + ' ' + styles.experience_2}>
                <div className={styles.experience_description}>
                texto 2
                </div>
              </div>

              <div className={styles.empty + ' ' + styles.empty_2}>
                <Image src="/imagenes/238.jpg" height={300} width={300} alt="imagen"/>
              </div>
              {/* <div className={styles.line}></div> */}

              <div className={styles.experience + ' ' + styles.experience_3}>
                <div className={styles.experience_description}>
                texto 3
                </div>
              </div>

              <div className={styles.empty + ' ' + styles.empty_3}>
                <Image src="/imagenes/238.jpg" height={300} width={300} alt="imagen"/>
              </div>
              {/* <div className={styles.line}></div> */}

            

              <div className={styles.experience + ' ' + styles.experience_4}>
                <div className={styles.experience_description}>
                texto 4
                </div>
              </div>

              {/* <div className={styles.line}></div> */}
              <div className={styles.empty + ' ' + styles.empty_4}>
                <Image src="/imagenes/238.jpg" height={300} width={300} alt="imagen"/>
              </div>
            </div>
          </div>
        </section>

        {/* <div className={styles.description_container}>
          <p className={styles.description_text}>
          En una era digital, tener presencia online ha pasado de ser un lujo a ser una necesidad, ya que podemos mostrar nuestros productos o servicios a clientes potenciales, ofreciéndoles la posibilidad de acceder a la información de nuestro negocio las 24 horas y en un rango más amplio al que tenemos en el espacio físico.
          </p>
        </div> */}
      </Layout>
    </Fragment>

  )
}
