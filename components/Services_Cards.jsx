import { Fragment } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Services.module.css"
import globals from "../globals"

export default function Services_Cards() {
    return (

        <Fragment>

            <div className={styles.separator}>
                
            </div>

            <section className={styles.experiences}>
                <div className={styles.experiences_body}>
                <h2 className={styles.experiences_title}>¿Qué te ofrecemos?</h2>
                <div className={styles.experiences_grid}>

                    <div className={styles.experience + ' ' + styles.experience_1}>
                    <h4 className={styles.experience_title_1}>Sitios Web</h4>
                    <div className={styles.experience_description}>
                        <p>Sitios que se adaptan a tus necesidades, ya sea que necesites un Portfolio, una Landing Page, o 
                        sitios más complejos con varias secciones como un sitio institucional, Tienda Online o 
                        sitios completamente a medida, en Lorem Designs tenemos modelos únicos y completamente personalizables
                        de los que podes elegir!
                        </p>
                    </div>
                    </div>
                    
                    <Link href={`${globals.direction}/paginas`}>
                    <a className={styles.pages_radius}>
                        <div className={styles.empty + ' ' + styles.empty_1}>
                        <Image src="/imagenes/paginas.svg" height={250} width={250} alt="imagen"/>
                        <div className={styles.card_info}>
                            <h5>Desde {globals.pagesPrices.landing}</h5>
                            <p>Ver más</p>                  
                        </div>
                        </div>
                    </a>
                    </Link>


                    <div className={styles.experience + ' ' + styles.experience_2}>
                    <h4 className={styles.experience_title_2}><strong>Publicidad en Google</strong></h4>
                    <div className={styles.experience_description}>
                        <p>
                        Aunque todas nuestras páginas se encuentran optimizadas para un mejor posicionamiento orgánico, 
                        para nadie es un secreto que la publicidad pagada en Google permite llegar a un público mayor 
                        y más objetivo, ya que de esta manera se llegan a potenciales clientes
                        que realizan busquedas relacionadas con los servicios que USTED ofrece
                        </p>
                    </div>
                    </div>

                    <Link href={`${globals.direction}/publicidad`}>
                        <a className={styles.pages_radius}>
                        <div className={styles.empty + ' ' + styles.empty_2}>
                            <Image src="/imagenes/google-icon.svg" height={250} width={250} alt="imagen"/>
                            <div className={styles.card_info}>
                            <h5>Desde {globals.publicity} + inversión
                            </h5>
                            <p>Ver más</p>                  
                            </div>
                        </div>
                        </a>
                    </Link>

                    <div className={styles.experience + ' ' + styles.experience_3}>
                    <h4 className={styles.experience_title_3}>Mantenimiento Web</h4>
                    <div className={styles.experience_description}>
                        <p>
                        ¿Tenés una web y queres actualizarla, o no tenés tiempo para administrarla? 
                        Dejanos el trabajo a nosotros y obtené mejoras en el SEO de tu web, mejor rendimiento, actualización
                        de textos o imágenes y demás, ofreciendo una mejor experiencia de usuario a tus clientes 
                        </p>
                    </div>
                    </div>

                    <Link href={`${globals.direction}/mantenimiento`}>
                        <a className={styles.pages_radius}>
                        <div className={styles.empty + ' ' + styles.empty_3}>
                            <Image src="/imagenes/mantenimiento_web_2.svg" height={250} width={250} alt="imagen"/>
                            <div className={styles.card_info}>
                            <h5>Desde {globals.plans.basic}</h5>
                            <p>Ver más</p>                  
                            </div>
                        </div>
                        </a>
                    </Link>
                

                    <div className={styles.experience + ' ' + styles.experience_4}>
                    <h4 className={styles.experience_title_4}>Paquetes</h4>
                    <div className={styles.experience_description}>
                        <p>
                        Paquetes personalizados o estadar con sitio web incluido, para que empieces tu negocio online con todo lo necesario
                        sin que tengas que preocuparte por administrar la publicidad, el mantenimiento ni los cambios
                        que haya que hacer en tu sitio
                        </p>
                    </div>
                    </div>

                    <Link href={`${globals.direction}/paquetes`}>
                        <a className={styles.pages_radius}>
                        <div className={styles.empty + ' ' + styles.empty_4}>
                            <Image src="/imagenes/paquetes.svg" height={250} width={250} alt="imagen"/>
                            <div className={styles.card_info}>
                            <h5>Desde {globals.packs.starter}</h5>
                            <p>Ver más</p>                  
                            </div>
                        </div>
                        </a>
                    </Link>


                </div>
                </div>
            </section>

            <div className={styles.separator_bottom}></div>

        </Fragment>
    )


}
