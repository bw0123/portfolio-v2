import React from "react"
import { Layout } from 'antd'

const { Content } = Layout;

function Skills() {
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
                <div style={divStyles}>
                    <h1 className="text-lg">Technologies/Tools</h1>
                </div>
            </Content>
        </Layout>
    )
}

export default Skills