import React from 'react'
import { Layout } from 'antd'
import { Card, Col, Row } from 'antd';

const { Content } = Layout;

function WorkExperience() {
    const contentStyles = {
        padding: '0 50px',
        marginTop: 64,
    }

    const divStyles = {
        padding: 50,
        height: 1000,
    }

    return(
        <Layout>
            <Content style={contentStyles}>
                <div style={divStyles} className='site-card-wrapper'>
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card className='text-lg' title='Software Developer' bordered={false}>
                            <ul>
                                <li>bullet 1</li>
                                <li>bullet 2</li>
                                <li>bullet 3</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className='text-lg' title='Cohort Member' bordered={false}>
                            <ul>
                                <li>bullet 1</li>
                                <li>bullet 2</li>
                                <li>bullet 3</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className='text-lg' title='Tutor' bordered={false}>
                            <ul>
                                <li>bullet 1</li>
                                <li>bullet 2</li>
                                <li>bullet 3</li>
                            </ul>                        
                        </Card>
                    </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    )
}

export default WorkExperience

 {/*
                    <h1 className='text-2xl font-bold text-left'>Software Developer</h1>
                        <h3 className='text-xl font-medium'>Place Name</h3>
                        <div>June 2021 ~ August 2021</div>
                            <ul>
                                <li>Created</li>
                                <li>Implemented</li>
                                <li>Formed</li>
                            </ul>
 */}