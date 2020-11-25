import styles from './Layout.module.css';
import Head from "next/head";
import { Container } from 'react-bootstrap';
import classnames from 'classnames';

import Header from './Header';
import Footer from "./Footer";

export default function Layout({children, currentPage}) {
    return (
        <div className={classnames(styles.appContainer, 'd-flex', 'flex-column', 'h-100', 'mx-auto')}>
            <Head>
                <title>owen's site</title>
                <link rel="icon" href={"/favicon.ico"}/>
                <link rel='stylesheet' href={'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/simplex/bootstrap.min.css'}/>
            </Head>
            <Header currentPage={currentPage}/>
            <Container className={classnames(styles.contentContainer, 'd-flex', 'flex-column')}>
                {children}
            </Container>
            <Footer/>
        </div>
    );
}
