import RootLayout from "@/components/Layouts/RootLayout";

function NewsDetailPage() {
    return (
        <div>
            <h1>This is news detail page</h1>
        </div>
    )
}

export default NewsDetailPage;



NewsDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};



export const getStaticProps = async () => {

    const res = await fetch("http://localhost:3000/news/1");
    const data  = await res.json();

    return {
        props: {
            news : data
        },
    }
}