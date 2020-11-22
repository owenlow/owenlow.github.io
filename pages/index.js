import styles from './index.module.css';
import marked from 'marked';
import paths from "../constants/paths";
import Layout from "../components/Layout";

const landingContent = marked(`
## My name is Owen, I make websites!

I also have hobby projects in game development/device programming/VR that I'll post about here as
I can get them in a shareable state :)

Github: https://github.com/owenlow
`);

export default function Home() {
    return (
        <Layout currentPage={paths.landing.id}>
            <div className={styles.contentContainer} dangerouslySetInnerHTML={{__html: landingContent}}/>
        </Layout>
    );
};
