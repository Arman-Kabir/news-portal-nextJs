import RootLayout from "@/components/Layouts/RootLayout";

function NewsDetailPage({ news }) {
    return (
        <div>
            <h1>{news?.title}</h1>
            <p>id:{news?.id}</p>
        </div>
    )
}

export default NewsDetailPage;


NewsDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000");
    const data = await res.json();

    return {paths,fallback:false};
};

export const getStaticProps = async () => {

    const res = await fetch("http://localhost:5000/news/1");
    const data = await res.json();
    console.log(data);

    return {
        props: {
            news: data,
        },
    }
}