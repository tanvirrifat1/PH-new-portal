import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsesQuery } from "@/redux/api/api";
import dynamic from "next/dynamic";
import { Button } from "antd";
import Link from "next/link";

const HomePage = ({ allNews }) => {
  const { data } = useGetNewsesQuery();

  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <p>Loading...</p>,
  });

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <AllNews allNews={data} />
      <Link href="/create">
        <Button type="dashed">Create News</Button>
      </Link>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000/api/news");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       allNews: data.data,
//     },
//     // revalidate: 10,
//   };
// };
