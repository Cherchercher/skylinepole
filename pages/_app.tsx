import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
    theme?: string
}

export default function MyApp(props: AppProps) {
    const {
        Component,
        pageProps,
    }: { Component: NextApplicationPage; pageProps: any } = props;

    return (
        <>
            <Component {...pageProps} />
        </>
    )
}