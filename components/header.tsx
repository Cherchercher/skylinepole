import Head from "next/head";

export default function Header() {
    const title = process.env.NEXT_PUBLIC_TITLE;
    const description = process.env.NEXT_PUBLIC_DESCRIPTION;
    const favicon = process.env.NEXT_PUBLIC_FAVICON;

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href={favicon} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
        </>
    )
}
