import { CalendarOutlined } from '@ant-design/icons';
import { Calendar, Card, Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react'

function AllNews({ allNews }) {
    const { Meta } = Card;
    return (
        <>
            <h1 style={{
                textAlign: "center",
                fontSize: "50px",
                margin: "30px 0px"
            }}>#TODAY HIGHLIGHT</h1>

            {/* Card */}

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {allNews.map((news) => (
                    <Col key={news.id} className="" span={6}>
                        <Card hoverable cover={
                            <Image
                                src={news?.image_url}
                                width={500}
                                height={200}
                                responsive
                                alt='news image'
                            />
                        }>
                            <Meta title={news?.title} />
                            <div className='line' style={{ height: "5px", margin: "20px 0", background: "#000", width: "100%" }}>
                            </div>
                            <p style={{ display: "flex", justifyContent: "space-between", width: "100%", color: "gray", margin: "10px 0px", fontSize: "12px" }}>
                                <span>
                                    <CalendarOutlined />{news?.release_date}
                                </span>
                            </p>
                        </Card>
                    </Col>
                ))
                }
            </Row>

        </>
    )
}

export default AllNews;