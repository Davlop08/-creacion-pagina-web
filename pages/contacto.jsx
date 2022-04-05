import Head from "next/head";
import { Fragment } from "react";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/Layout";

export default function contacto() {
    return (
        <Fragment>
            
            <HeadMeta title="Contacto | Soluciones Web" 
            metaDescription="Contactenos para obtener asesoramiento gratuito sobre la creación y manejo de sitios web"/>

            <Layout>
                <p>Por supuesto que sí</p>
            </Layout>
        </Fragment>
    )
}
