import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useGetSingleNewsQuery } from "@/redux/api/api";
import { useRouter } from "next/router";

const NewsDetailPage = () => {
  const router = useRouter();
  const { newsId } = router.query;
  const { data, error, isLoading } = useGetSingleNewsQuery(newsId);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div>
            <Image
              src={data?.image_url}
              width={800}
              height={400}
              responsive
              alt="news image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>title={data?.title}</h1>
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                width: "100%",
              }}
            ></div>

            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0px",
                fontSize: "12px",
              }}
            >
              <span>
                <CalendarOutlined /> {data?.release_date}
              </span>
              <span>
                <CommentOutlined /> {data?.comment_count} COMMENTS
              </span>
              <span>
                <ProfileOutlined /> {data?.category}
              </span>
            </p>

            <p style={{ fontSize: "20px" }}>{data?.description}</p>
          </div>
          <h1>Author: {data?.author}</h1>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailPage;

NewsDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const newses = await res.json();

//   const paths = newses.map((news) => ({
//     params: { newsId: news.id.toString() },
//   }));

//   return { paths, fallback: true };
// };

// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
//   const data = await res.json();

//   return {
//     props: {
//       news: data,
//     },
//   };
// };
