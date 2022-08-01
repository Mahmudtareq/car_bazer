import React from 'react'
import { Container, Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  return (
      <header className="header">
          {/*============== header top =============  */}
          <div className="header__top">
              <Container>
              <Row>
                  <Col lg="6" md="6" sm="6">
                          <div className="header__top__left">
                              <span>Need Help?</span>
                              <span className="header__top__help">
                                 <i class="ri-phone-fill"></i>+88-01759539770
                              </span>
                         </div>
                  </Col>
                  <Col lg="6" md="6" sm="6">
                          <div className="header__top__right">
                              <Link to="#" className='align-items-center d-flex gap-1'>
                                  <i class="ri-login-circle-line"></i> Login 
                              </Link>
                              <Link to="#" className='align-items-center d-flex gap-1'>
                                  <i class="ri-user-line"></i> Register
                              </Link>
                              
                         </div>
                  </Col>
              </Row>
             </Container>
          </div>
          {/* =====header top end ==== */}
          {/* ===header middle start===== */}
          <div className="header__middle">
              <Container>
                  <Row>
                      <Col lg='4' md='3' sm='4'>
                          <div className="logo">
                              <h1><Link to='/home'>
                                  <i class="ri-car-line"></i>
                                  <span>Rent car <br /> Service</span>
                              </Link></h1>
                          </div>
                      </Col>
                      <Col lg='3' md='3' sm='4'>
                          <div className="header__location">
                              <span><i class="ri-earth-line"></i></span>
                              <div className="header__location-content">
                                  <h4>Bangladesh</h4>
                                  <h6>Sylhet City ,Bangladesh</h6>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>   
    </header>
  )
}
export default Header;