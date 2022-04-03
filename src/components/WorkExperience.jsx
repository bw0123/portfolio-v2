import React from 'react'
import { Col, Row } from 'antd';


function WorkExperience() {
    return(
        <div className='p-10'>
            <Row gutter={16}>
                <Col span={8}>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Software Engineer Intern</h2>
                                <p>bullet point</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default WorkExperience
