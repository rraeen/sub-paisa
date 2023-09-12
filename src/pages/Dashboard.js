import { Button, Col, Row, Steps } from 'antd'
import React from 'react'
import Card from '../component/atom/Card'
import ChartCard from '../component/atom/ChartCard'
import DonutChart from '../component/atom/DonutChart'
import BarChart from '../component/atom/BarChart'

function Dashboard() {
  const steperItem = [
    {
      title: 'Pending',
    },
    {
      title: 'In Process',
    },
    {
      title: 'Verified',
    },
    {
      title: 'Approved',
    },
  ]
  return (
    <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
      <div className="just-center">
        <h3> KYC Status</h3>
      </div>
      <div className="just-center">
        <Steps
          style={{ width: '80%', marginTop: '20px' }}
          current={0}
          progressDot={'dot'}
          items={steperItem}
        />
      </div>
      <div>
        <Row>
          <Col span={12}>
            <div className="just-start">
              <h2>All Transactions</h2>
            </div>
          </Col>
          <Col span={12}>
            <div className="just-end">
              <Button
                style={{ margin: '2%', background: '#377CCF', color: '#ffff' }}
              >
                Select Period
              </Button>
              <Button style={{ margin: '2%' }}>Filter</Button>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={10}>
          <Col lg={6} md={12} sm={24}>
            <Card className={'cardStyle-blue'}>
              <div>
                <b>Total Income</b>
                <br />
                <span style={{ fontWeight: '100', fontSize: '0.6rem' }}>
                  Rs. 250,000.00
                </span>
              </div>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <Card className={'cardStyle-orange'}>
              <div>
                <b>Success Rate</b>
                <br />
                <span style={{ fontWeight: '100', fontSize: '0.6rem' }}>
                  93.2%
                </span>
              </div>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <Card className={'cardStyle-darkBlue'}>
              <div>
                <b> New Transactions today </b>
                <br />
                <span style={{ fontWeight: '100', fontSize: '0.6rem' }}>
                  54 Transactions
                </span>
              </div>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={24}>
            <Card className={'cardStyle-darkOrange'}>
              <div>
                <b> Completed transactions </b>
                <br />
                <span style={{ fontWeight: '100', fontSize: '0.6rem' }}>
                  54 Transactions
                </span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Row gutter={[20, 20]}>
        <Col lg={15} md={24} sm={24} sx={24}>
          <ChartCard>
            <Col span={24}>
              <span style={{ fontWeight: '700' }}>Amount per Month</span>
            </Col>
            <BarChart />
          </ChartCard>
        </Col>
        <Col lg={9} md={24} sm={24} sx={24}>
          <Row>
            <ChartCard>
              <Col span={24}>
                <span style={{ fontWeight: '700' }}>Mode of transaction</span>
              </Col>
              <Col span={24} className="just-center">
                <DonutChart />
              </Col>
              <Col>
                <Row justify={'space-between'}>
                  <Col span={8} className="just-center">
                    <Button>Net Banking</Button>
                  </Col>
                  <Col span={8} className="just-center">
                    <Button>UPI</Button>
                  </Col>
                </Row>
              </Col>
            </ChartCard>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
