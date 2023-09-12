import React, { useEffect, useState } from 'react'
import { Col, Row, Grid } from 'antd'
import dashboardicon from '../../assets/dashboard.svg'
import cashback from '../../assets/cashback.svg'
import catalog from '../../assets/catalog.svg'
import enquery from '../../assets/enquery.svg'
import faq from '../../assets/faq.svg'
import history from '../../assets/history.svg'
import kit from '../../assets/kit.svg'
import kyc from '../../assets/kyc.svg'
import refund from '../../assets/refund.svg'
import report from '../../assets/report.svg'
import summry from '../../assets/summry.svg'
import { RightOutlined } from '@ant-design/icons'

function MySideBar({ active, setactive, listItem, activeTab, setactiveTab }) {
  const sidebarIcon = [
    dashboardicon,
    kyc,
    kit,
    catalog,
    history,
    report,
    refund,
    cashback,
    enquery,
    summry,
    faq,
  ]

  return (
    <div>
      <Row style={{ overflow: 'auto' }}>
        {listItem.map((v, i) => {
          return (
            <Col
              span={24}
              key={i}
              className="sidebarOptions"
              onClick={() => setactiveTab(i)}
            >
              <div
                className={` sidebarItem
                 ${
                   activeTab === i
                     ? 'sidebarItem-active'
                     : activeTab === i - 1
                     ? 'sidebarItem-notActive-last'
                     : activeTab === i + 1
                     ? 'sidebarItem-notActive-before'
                     : 'sidebarItem-notActive'
                 } ${active ? 'border-0' : ''}`}
              >
                <div className="just-start">
                  <img
                    className="sidebar-iconColor"
                    src={sidebarIcon[i]}
                    alt=""
                    style={{ padding: '2px', margin: '4px', height: '25px' }}
                    icon={v.icon}
                  />
                  <span className={`${active ? 'hide' : ''}`}>
                    {v}
                    &nbsp; &nbsp;
                    {activeTab === i && (
                      <span>
                        <RightOutlined />
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </Col>
          )
        })}
        <Col className="sidebarOptions">
          <div className="sidebarItem" style={{ height: '100%' }}></div>
        </Col>
      </Row>
      <div style={{ minHeight: '10vh', background: '#ffff' }}></div>
    </div>
  )
}

export default MySideBar
