import React from 'react'
import { Layout } from 'antd'

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
            < Content style={contentStyles}>
                <div style={divStyles}>
                    <h1>Software Developer</h1>
                        <h3>Place Name</h3>
                        <div>June 2021 ~ August 2021</div>
                            <ul>
                                <li>Created</li>
                                <li>Implemented</li>
                                <li>Formed</li>
                            </ul>
                </div>
            </Content>
        </Layout>
    )
}

export default WorkExperience