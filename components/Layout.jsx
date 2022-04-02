import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { Fragment } from "react"
import Head from "next/head"

export default function Layout({title, metaDescription}) {
    return (
        <Fragment>

            <Head>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
            </Head>

            <Header>

            </Header>

            <Main>

            </Main>

            <Footer>

            </Footer>

        </Fragment>
    )
}

Layout.defaultProps = {
    title: "insertar titulo",
    metaDescription: "insertar descripcion"
}