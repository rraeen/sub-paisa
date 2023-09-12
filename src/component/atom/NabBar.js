import React from 'react'
import { Button, Col, Row, Grid } from 'antd'
import subpaisa_logo from '../../assets/subpaisa_logo.svg'
import bell from '../../assets/bell.svg'
import user from '../../assets/user.svg'
const { useBreakpoint } = Grid
function NavBar() {
  const { md } = useBreakpoint()
  return (
    <nav>
      <Row>
        <Col className="just-start" style={{ paddingLeft: '15px' }}>
          <img src={subpaisa_logo} alt="" />
        </Col>
        <Col className="just-start" style={{ paddingLeft: '10%' }}>
          Welcom back
        </Col>
        <Col className="mobile-hide">
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <div style={{ paddingLeft: '35vw' }}>Merchant ID: 14662</div>
            <div style={{ marginLeft: '2vw' }} className="just-center">
              <img
                src={bell}
                alt=""
                style={{
                  border: '1px solid gray',
                  borderRadius: '50%',
                  padding: '5px',
                  width: '30px',
                }}
              />
            </div>
            <div style={{ paddingLeft: '2vw' }} className="just-center">
              <Button>
                <div className="just-center">
                  <img src={user} alt="" style={{ width: '20px' }} /> &nbsp;
                  Hello, Raunak
                </div>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </nav>
  )
}

export default NavBar
