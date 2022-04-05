import Head from "next/head"

export default function HeadMeta({title, metaDescription}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={metaDescription}/>
        </Head>
    )
}
