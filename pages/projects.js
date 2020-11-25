import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import paths from "../constants/paths";
import Layout from "../components/Layout";

const postNames = [
    'firstPost'
];

function Projects({ allPosts }) {
    return (
        <Layout currentPage={paths.projects.id}>
            {allPosts.map(({ content, data }) =>
                <>
                    <h2>{data.title}</h2>
                    <ReactMarkdown source={content}/>
                </>
            )}
        </Layout>
    )
}

Projects.getInitialProps = async () => {
    const allPosts = [];
    for await (const fileName of postNames) {
        const fileContents = await import(`../content/${fileName}.md`);
        const data = matter(fileContents.default);
        allPosts.push(data);
    }
    return { allPosts };
}

export default Projects;
