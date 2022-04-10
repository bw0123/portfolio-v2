import React from 'react'
import { Layout } from 'antd'
import { Carousel } from 'antd';

const { Content } = Layout;

function Projects() {
    const contentStyles = {
        padding: '0 50px',
        marginTop: 2,
    }

    function onChange(a, b, c) {
        console.log(a, b, c);
      }
      
      const contentStyle = {
        height: '200px',
        color: '#fff',
        lineHeight: '200px',
        textAlign: 'center',
        background: '#364d79',
      }

    return(
        <Layout>
            <Content style={contentStyles}>
                <Carousel className='mt-10' afterChange={onChange} autoplay='true' >
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </Content>
        </Layout>
    )
}

export default Projects