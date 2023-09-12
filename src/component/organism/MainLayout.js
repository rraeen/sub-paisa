import React, { useState } from 'react'
import NavBar from '../atom/NabBar'
import { Col, Layout, Menu } from 'antd'
import MySideBar from '../atom/MySideBar'
import Dashboard from '../../pages/Dashboard'
const { Header, Sider, Content } = Layout

function MainLayout() {
    const [activeTab, setactiveTab] = useState(0)
    const sidebarItem=["Dashboard","Complete KYC","Integration Kit","Product Catalog","Transaction History","Settlement Report","Refund Txn History","Chargeback Txn History","Transaction Enquiry","Transaction Summary","FAQs/Help"]
    const ContentPage=[<Dashboard/>,"Complete KYC","Integration Kit","Product Catalog","Transaction History","Settlement Report","Refund Txn History","Chargeback Txn History","Transaction Enquiry","Transaction Summary","FAQs/Help"]
  return (
    <Layout style={{ height: '100vh', margin: '0px', padding: '0px' }}>
      <Header className="neumorphic-nav-bar">
        <NavBar />
      </Header>
      <Layout hasSider style={{ marginTop: '4rem' }}>
        <Sider className="neumorphic-side-bar" width={250}>
            <MySideBar active={false} listItem={sidebarItem} activeTab={activeTab} setactiveTab={setactiveTab}/>
        </Sider>
        <Content className="conatent-body" style={{height:"90vh", overflow:"auto"}} >
           {ContentPage[activeTab]}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
