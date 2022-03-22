import React from "react"
import { Layout, Button } from "antd"
import { LinkedinFilled, GithubFilled } from '@ant-design/icons'

const { Content } = Layout;

function About() {  
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
                <div style={divStyles} >
                    <h1 className="text-lg font-bold underline">
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas hendrerit metus sit amet dolor malesuada sollicitudin. Vivamus dictum eu mauris vitae molestie. Suspendisse ac justo ut justo porttitor tempor. Mauris non tellus ac ligula vestibulum egestas. Mauris consectetur eu diam at vestibulum. Donec ut laoreet velit. Nam accumsan, ante id iaculis finibus, lorem ipsum scelerisque risus, non tempor dui metus sed sapien. Aliquam tempor nisl sit amet feugiat ornare. Fusce eleifend nisi id egestas bibendum. Proin tristique aliquet metus. Pellentesque porttitor, libero et vulputate pellentesque, justo nisi facilisis massa, tincidunt sodales velit sapien vitae urna. Fusce id dictum erat, sed maximus turpis.
                    </h1>
                        <div>
                            <Button type="primary" shape="circle">
                                <LinkedinFilled />
                            </Button>
                            <Button type="primary" shape="circle">
                                <GithubFilled />
                            </Button>
                        </div>
                </div>
            </Content>
        </Layout>
    )
}

export default About