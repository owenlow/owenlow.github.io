import paths from "../constants/paths";
import Layout from "../components/Layout";

export default function Projects() {
    return (
        <Layout currentPage={paths.projects.id}>
            <p>
                Project 1 here
            </p>
        </Layout>
    )
};
