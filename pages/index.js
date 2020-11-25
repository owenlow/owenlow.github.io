import ReactMarkdown from "react-markdown";

import styles from './index.module.css';

import paths from "../constants/paths";
import Layout from "../components/Layout";

function Home({ landingContent }) {
    return (
        <Layout currentPage={paths.landing.id}>
            <ReactMarkdown className={styles.contentContainer} source={landingContent}/>
        </Layout>
    );
}

Home.getInitialProps = async () => {
    const fileContents = await import(`../content/landing.md`);
    return { landingContent: fileContents.default };
};

export default Home;
