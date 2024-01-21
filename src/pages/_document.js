import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/mggg-favicon.svg" />
                <title>GPTs Workflow Gallery - Explore the World of AI Art</title>
                <meta name="description" content="GPTs Workflow Gallery: Discover the unique and innovative artworks created by Mggg GPTs at our Gallery. Explore a wide range of AI-generated art pieces." />
                <meta name="keywords" content="Mggg, GPTs, Gallery, AI Art, AI Gallery, Art Gallery, Artificial Intelligence, Digital Art" />
                <meta property="og:title" content="Mggg GPTs Gallery - Explore the World of AI Art" />
                <meta property="og:description" content="Discover the unique and innovative artworks created by Mggg GPTs at our Gallery. Explore a wide range of AI-generated art pieces." />
                <meta property="og:image" content="/mggg.svg" />
                <meta property="og:url" content="http://gpts.mggg.cloud" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mggg GPTs Gallery - Explore the World of AI Art" />
                <meta name="twitter:description" content="Discover the unique and innovative artworks created by Mggg GPTs at our Gallery. Explore a wide range of AI-generated art pieces." />
                <meta name="twitter:image" content="/mggg.svg" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
