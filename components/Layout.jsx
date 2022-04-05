import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"

export default function Layout({children}) {
    return (   

        <Fragment>

            <Header/>

            <Main>
                {children}
            </Main>

            <Footer/>

        </Fragment>
    )
}

Layout.defaultProps = {
    title: "insertar titulo",
    metaDescription: "insertar descripcion"
}