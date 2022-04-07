import Layout from "../components/Layout"
import styles from "../styles/Index.module.css"
import Link from "next/link"
import { Fragment } from "react"
import HeadMeta from "../components/HeadMeta"
import Image from "next/image"
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

          <div className={styles.separator}>
            
          </div>

        <section className={styles.experiences}>
          <div className={styles.experiences_body}>
            <h2 className={styles.experiences_title}>¿Qué te ofrecemos?</h2>
            <div className={styles.experiences_grid}>

              <div className={styles.experience + ' ' + styles.experience_1}>
                <h4 className={styles.experience_title_1}>Pagina web simple</h4>
                <div className={styles.experience_description}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla repudiandae debitis ipsa eligendi autem tempora recusandae inventore suscipit molestias tenetur.
                </div>
              </div>
              
              <Link href="/">
                <a className={styles.pages_radius}>
                  <div className={styles.empty + ' ' + styles.empty_1}>
                    <Image src="/imagenes/single_page.png" height={250} width={250} alt="imagen"/>
                  </div>
                </a>
              </Link>


              <div className={styles.experience + ' ' + styles.experience_2}>
                <h4 className={styles.experience_title_2}>Sitio web básico</h4>
                <div className={styles.experience_description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum asperiores doloremque ad placeat ex odit quod eos, autem vitae ut ipsam aliquid ab quae.
                </div>
              </div>

              <Link href="/">
                  <a className={styles.pages_radius}>
                    <div className={styles.empty + ' ' + styles.empty_2}>
                      <Image src="/imagenes/basic_site.png" height={250} width={250} alt="imagen"/>
                    </div>
                  </a>
              </Link>

              <div className={styles.experience + ' ' + styles.experience_3}>
                <h4 className={styles.experience_title_3}>Tienda en línea</h4>
                <div className={styles.experience_description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum perferendis odit, et illo architecto.
                </div>
              </div>

              <Link href="/">
                  <a className={styles.pages_radius}>
                    <div className={styles.empty + ' ' + styles.empty_3}>
                      <Image src="/imagenes/comerce_site.png" height={250} width={250} alt="imagen"/>
                    </div>
                  </a>
              </Link>
            

              <div className={styles.experience + ' ' + styles.experience_4}>
                <h4 className={styles.experience_title_4}>Sitio autoadministrable</h4>
                <div className={styles.experience_description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda tenetur aliquam esse incidunt. Eaque reiciendis vitae doloremque tenetur et! Eveniet unde ex soluta accusantium aut dolore culpa eius optio assumenda.
                </div>
              </div>

              <Link href="/">
                  <a className={styles.pages_radius}>
                    <div className={styles.empty + ' ' + styles.empty_4}>
                      <Image src="/imagenes/self_admin.png" height={250} width={250} alt="imagen"/>
                    </div>
                  </a>
              </Link>


            </div>
          </div>
        </section>

      <div className={styles.separator_bottom}></div>
      </Layout>
    </Fragment>

  )
}
