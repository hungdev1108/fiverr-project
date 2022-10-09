import { Tabs } from "antd";
import { FloatingLabel, Form, ProgressBar } from "react-bootstrap";
import "./JobDetail.scss";

const { TabPane } = Tabs;

function JobDetail() {
  return (
    <section id="jobDetail" className="mt-4">
      <div className="container">
        <div className="jobDetail__breadcrumb">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item">
                <a href="#"> Programing & Tech</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Website Builders & CMS</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Full Website Creation
              </li>
            </ol>
          </nav>
        </div>
        <div className="jobDetail__content">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h2 className="mt-2">I will do custom css, html, javascript, PHP coding</h2>
              {/* Detail Job INFO USER CREATE */}
              <div className="jobDetail__info-userCreate d-flex align-items-center mt-4">
                <img
                  width={28}
                  height={28}
                  src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/297993792_2335625759933235_726241504302813939_n.jpg?stp=c0.42.148.148a_dst-jpg_p148x148&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=7om80uHN7Y4AX8nI3bV&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT91UvWBgQHYAkwCuqXeN6-3XAu-MOtG2Vgt00Evfix-5A&oe=6346A05C"
                  alt=""
                  className="rounded-circle"
                />
                <h6 className="m-0 ml-2 font-weight-bold">hungdev1108</h6>
                <span className="ml-2 text-warning">Top Rated Seller</span>
                <span className="ml-2 info__userCreate--star">
                  <i className="fa fa-star text-warning ml-2"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <span className="text-warning ml-1 mr-1">5</span>
                  <span className="text-secondary mr-2">(999)</span>
                </span>
                <p className="m-0 p-0 text-black-50 ml-2">10 Orders in Queue</p>
                <div className="">
                  <button className="ml-2 btn-fiverrChoice btn">
                    FIVERR'S
                    <span className="ml-1">CHOICE</span>
                  </button>
                </div>
              </div>
              <div className="dropdown-divider mt-4"></div>

              <div className="d-flex align-items-center mt-3">
                <img
                  width={28}
                  height={28}
                  src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/305285541_120761034077564_5858501294288302818_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_ohc=r8wdpV4xph4AX937lMa&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT92a2pL2_hm0O45WJQIoQ5UCb5xz8TrBHZq1EO27vib2A&oe=63450B99"
                  alt=""
                  className="rounded-circle"
                />
                <h6 className="text-secondary ml-2 mb-0">
                  <span className="text-dark mr-2 font-weight-bold">Buyers keep returning!</span>
                  hungdev1108 has an exceptional number of repeat buyers.
                </h6>
              </div>
              <div className="text-center mt-4">
                <img
                  width={"90%"}
                  src="https://images.unsplash.com/photo-1610360655260-decd32e267aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="1"
                />
              </div>

              {/* Detail Job DESC */}
              <div className="jobDetail__sellers-description">
                <h4 className="mt-5">About This Gig</h4>
                <div className="h6 title__ratedSeller">Top Rated Seller with all positive reviews</div>
                <p className="mt-3 text-secondary h6" style={{ lineHeight: 1.5 }}>
                  <span className="mb-3 d-block">Hello,</span>
                  Want a custom website build for your business? Or Having trouble In recognizing or fixing the
                  Issues/bugs in your existing website/blog. It is not a problem because I'm here to fix any Issues In
                  HTML, CSS, Bootstrap Jquery, Javascript, PHP or database(Mysql/Oracle)
                </p>
                <div className="mt-3">
                  <span className="mb-3 d-block font-weight-bold">Things I ofter:</span>
                  <ul className="ml-4">
                    <li className="text-muted h6">CRM development</li>
                    <li className="text-muted h6">E-commerce development</li>
                    <li className="text-muted h6">
                      Custom website development (both font-end and back-end) width Laravel, PHP and MySQL
                    </li>
                    <li className="text-muted h6">
                      Complete website creation from scratch using Laravel Rest Apl and vue.js
                    </li>
                    <li className="text-muted h6">Web Application with proper exception handling</li>
                    <li className="text-muted h6">Can work with APIs, Integrate API's In your applications</li>
                    <li className="text-muted h6">Responsive-Mobile Friendly sites</li>
                    <li className="text-muted h6">Great UI/UX for your site</li>
                    <li className="text-muted h6">
                      PSD to HTML, XD to HTML or any other design to HTML with best quality and pixel pefect design
                    </li>
                    <li className="text-muted h6">Fix Issues In front-end or add some changes to It</li>
                    <li className="text-muted h6">Bug Investigation and Bug fixing</li>
                    <li className="text-muted h6">MySQL database design and Integration In websites</li>
                    <li className="text-muted h6">MySQL database bugs fixing and Integration Issues fixing</li>
                  </ul>
                </div>
                <div className="h6 title__ratedSeller">
                  I will do the work until you are satisfied with fast and responsive communication
                </div>
                <div className="dropdown-divider mt-4"></div>
                <div className="d-flex mt-3">
                  <div>
                    <h6 className="text-secondary">Programing Language</h6>
                    <p>PHP</p>
                  </div>
                  <div className="ml-4">
                    <h6 className="text-secondary">Expertise</h6>
                    <p className="m-0">Cross Browser</p>
                    <p className="m-0">Compatibility,</p>
                    <p className="m-0">PSD to HTML, Performance</p>
                  </div>
                </div>
              </div>

              {/* ABOUT SELLER */}
              <h4 className="mt-5">About The Seller</h4>
              <div className="about__seller d-flex align-items-center mt-4">
                <div className="about__seller-avatar">
                  <img
                    width={90}
                    height={90}
                    src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/297993792_2335625759933235_726241504302813939_n.jpg?stp=c0.42.148.148a_dst-jpg_p148x148&_nc_cat=103&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=7om80uHN7Y4AX8nI3bV&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT91UvWBgQHYAkwCuqXeN6-3XAu-MOtG2Vgt00Evfix-5A&oe=6346A05C"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <div className="about__seller-info ml-4">
                  <h6 className="m-0 font-weight-bold">hungdev1108</h6>
                  <span className="text-secondary">Web Developer</span>
                  <span className="d-block">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning ml-1"></i>
                    <i className="fa fa-star text-warning ml-1"></i>
                    <i className="fa fa-star text-warning ml-1"></i>
                    <i className="fa fa-star text-warning ml-1"></i>
                    <span className="text-warning ml-1 mr-1">5</span>
                    <span className="text-secondary">(999)</span>
                  </span>
                </div>
              </div>

              {/* FAQ */}
              <h4 className="mt-5">FAQ</h4>
              <div className="faq__seller mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="h6">Do you provide regular on order?</p>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="dropdown-divider mt-3"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="h6">How do you guarantee product quality and reliability?</p>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="dropdown-divider mt-3"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="h6">Do you give post-development support?</p>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="dropdown-divider mt-3"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="h6">Do you convert PSD to HTML?</p>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>

              {/* REVIEWS */}
              <div className="d-flex justify-content-between align-items-end">
                <div className="mt-5 d-flex align-items-center">
                  <h4 className="m-0 mr-2"> 335 Reviews</h4>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <span className="text-warning ml-1 mr-1">5</span>
                </div>
                <div>
                  <p className="m-0">
                    Sort by
                    <span className="font-weight-bold ml-2">
                      Most relevant <i className="ml-2 fas fa-chevron-down"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/* 5* */}
              <div className="d-flex align-items-end mt-4">
                <div className="">
                  <h6 className="text-primary">5 Stars (330)</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={95} />
                </div>
                <div className="ml-5">
                  <span className="font-weight-bold">Rating Breakdown</span>
                </div>
              </div>
              {/* 4* */}
              <div className="d-flex align-items-end mt-4">
                <div className="">
                  <h6 className="text-primary">4 Stars (5)</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={5} />
                </div>
                <div className="ml-5">
                  <span className="text-secondary d-flex align-items-center">
                    Seller communication level
                    <span className="ml-3">5</span>
                    <i className="text-warning ml-1 fa fa-star"></i>
                  </span>
                </div>
              </div>
              {/* 3* */}
              <div className="d-flex align-items-end mt-4">
                <div className="">
                  <h6 className="text-black-50">3 Stars</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={0} />
                </div>
                <div className="ml-5 ">
                  <span className="text-secondary d-flex align-items-center">
                    Recommend to a friend
                    <span className="ml-3">5</span>
                    <i className="text-warning ml-1 fa fa-star"></i>
                  </span>
                </div>
              </div>
              {/* 2* */}
              <div className="d-flex align-items-end mt-4">
                <div className="">
                  <h6 className="text-black-50">2 Stars</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={0} />
                </div>
                <div className="ml-5 ">
                  <span className="text-secondary d-flex align-items-center">
                    Service as described
                    <span className="ml-3">5</span>
                    <i className="text-warning ml-1 fa fa-star"></i>
                  </span>
                </div>
              </div>
              {/* 1* */}
              <div className="d-flex align-items-end mt-4">
                <div className="">
                  <h6 className="text-black-50">1 Stars</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={0} />
                </div>
              </div>

              {/* COMMENT */}
              <div className="comment__seller mt-4">
                <h5 className="">Filter</h5>
                <p className="m-0 text-secondary">
                  Industry
                  <span className="text-dark font-weight-bold ml-2">
                    Most relevant <i className="ml-2 fas fa-chevron-down"></i>
                  </span>
                </p>
                <div className="dropdown-divider mt-4"></div>

                <div className="mt-4">
                  <div className="d-flex">
                    <div className="comment__seller-avatar">
                      <img
                        width={28}
                        height={28}
                        src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/307505025_1357717081301751_5489596097578224531_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XVuVQyyRNMAAX_aCPZZ&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT-ZgDtqW_bk4zQu9MB14ToFswNxy6p9UOrVV1EKTUB4RQ&oe=63458272"
                        alt=""
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment__seller-content ml-2">
                      <p className="m-0 font-weight-bold">
                        Nguyen Tuan Anh <i className="ml-1 fa fa-star text-warning"></i>
                        <span className="ml-1 text-warning">5</span>
                      </p>
                      <div className="d-flex mt-1 align-items-center">
                        <img
                          width={23}
                          height={15}
                          src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
                          alt=""
                        />
                        <span className="ml-1 text-secondary">Viet Nam</span>
                      </div>
                      <p className="m-0">
                        @hungdev1108 did a great job. I forgot to add a few things and he had no problem fixing what I
                        forgot and making sure I was happy with the end product.
                      </p>
                      <div className="mt-1">
                        <span className="text-secondary">Published 5 minutes ago</span>
                      </div>
                      <div className="mt-2">
                        <div className="">
                          <span>
                            <i className="far fa-thumbs-up mr-1"></i>Helpful
                          </span>
                          <span className="ml-3">
                            <i className="far fa-thumbs-down mr-1"></i>Not Helpful
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex">
                    <div className="comment__seller-avatar">
                      <img
                        width={28}
                        height={28}
                        src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/307505025_1357717081301751_5489596097578224531_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XVuVQyyRNMAAX_aCPZZ&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT-ZgDtqW_bk4zQu9MB14ToFswNxy6p9UOrVV1EKTUB4RQ&oe=63458272"
                        alt=""
                        className="rounded-circle"
                      />
                    </div>
                    <div className="comment__seller-content ml-2" style={{ flex: "auto" }}>
                      <FloatingLabel controlId="floatingTextarea" className="">
                        <Form.Control as="textarea" placeholder="Leave a comment here..." />
                      </FloatingLabel>
                      <button className="btn btn-primary mb-3">Add Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <Tabs size="large" defaultActiveKey="2" centered type="card">
                <TabPane tab={<h4>Basic</h4>} key="1">
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <h5>Basic</h5>
                      <p className="h5 text-muted">$500</p>
                    </div>
                    <p className="disabled h6 my-4" style={{ color: "#a8abae" }}>
                      Create web application for your business
                    </p>

                    <ul className="list-unstyled">
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>1 page
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Design customization
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Content upload
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Responsive design
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Include source code
                      </li>
                    </ul>
                    <button className="btn-lg btn btn-success btn-block my-4">Continue ($500)</button>
                    <div role="button" className="h5 text-success text-center">
                      Compare Package
                    </div>
                  </div>
                </TabPane>
                <TabPane tab={<h4>Standard</h4>} key="2">
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <h5>Standard</h5>
                      <p className="h5 text-muted">$1,000</p>
                    </div>
                    <p className="disabled h6 my-4" style={{ color: "#a8abae" }}>
                      Create web application for your business
                    </p>

                    <ul className="list-unstyled">
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>2 page
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Design customization
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Content upload
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Responsive design
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Include source code
                      </li>
                    </ul>
                    <button className="btn-lg btn btn-success btn-block my-4">Continue ($1,000)</button>
                    <div role="button" className="h5 text-success text-center">
                      Compare Package
                    </div>
                  </div>
                </TabPane>
                <TabPane tab={<h4>Premium</h4>} key="3">
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <h5>Premium</h5>
                      <p className="h5 text-muted">$1,999</p>
                    </div>
                    <p className="disabled h6 my-4" style={{ color: "#a8abae" }}>
                      Build a quality website system
                    </p>

                    <ul className="list-unstyled">
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>5 page
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Design customization
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Content upload
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Responsive design
                      </li>
                      <li className="h6 text-muted">
                        <i className="fas fa-check mr-2"></i>Include source code
                      </li>
                    </ul>
                    <button className="btn-lg btn btn-success btn-block my-4">Continue ($1,999)</button>
                    <div role="button" className="h5 text-success text-center">
                      Compare Package
                    </div>
                  </div>
                </TabPane>
              </Tabs>

              <div className="mt-4 px-4 py-3 bg-light border text-center">
                <p className="m-0 font-weight-bold">Do you have any special requirements?</p>
                <button className="btn border mt-3">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDetail;
