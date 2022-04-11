import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"
import Whatsapp_Link from "../components/Whatsapp_Link"

export default function Layout({children}) {
    return (   

        <Fragment>

            <Header/>

            <Main>
                {children}
                <Whatsapp_Link/>    
            </Main>


            <Footer/>

        </Fragment>
    )
}

Layout.defaultProps = {
    title: "insertar titulo",
    metaDescription: "insertar descripcion"
}