import { Input, Tabs, Form } from "antd";
import { BookingCheckSignin, confirmComment } from "components/Notifications/Notifications";
import moment from "moment/moment";
import { Fragment, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { getBinhLuanTheoMaCongViecAction, postBinhLuanAction } from "store/actions/ManagerCommentAction";
import { getCongViecChiTietAction } from "store/actions/ManagerJobAction";
import { bookingJobAction } from "store/actions/UserManagerAction";
import { TOKEN, USER_LOGIN } from "utils/settings/config";
import { InfoBooking } from "_core/models/InfoBooking";
import "./JobDetail.scss";

const { TabPane } = Tabs;

function JobDetail(props) {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [loadComment, setLoadComment] = useState(0);
  const [form] = Form.useForm();
  const history = useHistory();

  const { congViecChiTiet } = useSelector((state) => state.ManagerJobReducer);
  const { danhSachBinhLuan } = useSelector((state) => state.ManagerCommentReducer);

  const jobId = match.params.jobId;
  const { userSignin } = useSelector((state) => state.UserManagerReducer);
  const userId = userSignin.user?.id;

  useEffect(() => {
    dispatch(getCongViecChiTietAction(jobId));
    dispatch(getBinhLuanTheoMaCongViecAction(jobId));
  }, []);

  const getToDay = () => {
    const today = new Date();
    const yyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + dd;

    const formattedToday = dd + "/" + mm + "/" + yyy;

    return formattedToday;
  };

  const handleHireJob = () => {
    const infoBooking = new InfoBooking();
    infoBooking.maCongViec = jobId;
    infoBooking.maNguoiThue = userId;
    infoBooking.ngayThue = getToDay();
    infoBooking.hoanThanh = false;

    dispatch(bookingJobAction(infoBooking));
  };

  const onFinish = (values) => {
    if (!localStorage.getItem(USER_LOGIN)) {
      return confirmComment(history);
    }

    values.maCongViec = jobId;
    values.maNguoiBinhLuan = userId;
    values.ngayBinhLuan = moment().format("DD/MM/YYYY");
    values.saoBinhLuan = 5;
    console.log(values);
    if (dispatch(postBinhLuanAction(values))) form.resetFields();
  };

  return (
    <section id="jobDetail" className="mt-4">
      <div className="container">
        <div className="jobDetail__breadcrumb">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item text-secondary">{congViecChiTiet[0]?.tenLoaiCongViec}</li>
              <li className="breadcrumb-item text-secondary">{congViecChiTiet[0]?.tenNhomChiTietLoai}</li>
              <li className="breadcrumb-item active" aria-current="page">
                {congViecChiTiet[0]?.tenChiTietLoai}
              </li>
            </ol>
          </nav>
        </div>
        <div className="jobDetail__content">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h2 className="mt-2 jobDetail__title">{congViecChiTiet[0]?.congViec.tenCongViec}</h2>
              {/* Detail Job INFO USER CREATE */}
              <div className="jobDetail__info-userCreate d-flex align-items-center mt-4">
                <img width={28} height={28} src={congViecChiTiet[0]?.avatar} alt="" className="rounded-circle" />
                <h6 className="m-0 ml-2 font-weight-bold">{congViecChiTiet[0]?.tenNguoiTao}</h6>
                <span className="ml-2 text-warning">Top Rated Seller</span>
                <span className="ml-2 info__userCreate--star">
                  {congViecChiTiet[0]?.congViec.saoCongViec === 1 ? (
                    <i className="fa fa-star text-warning ml-2"></i>
                  ) : congViecChiTiet[0]?.congViec.saoCongViec === 2 ? (
                    <Fragment>
                      <i className="fa fa-star text-warning ml-2"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                    </Fragment>
                  ) : congViecChiTiet[0]?.congViec.saoCongViec === 3 ? (
                    <Fragment>
                      <i className="fa fa-star text-warning ml-2"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                    </Fragment>
                  ) : congViecChiTiet[0]?.congViec.saoCongViec === 4 ? (
                    <Fragment>
                      <i className="fa fa-star text-warning ml-2"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                    </Fragment>
                  ) : congViecChiTiet[0]?.congViec.saoCongViec === 5 ? (
                    <Fragment>
                      <i className="fa fa-star text-warning ml-2"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                      <i className="fa fa-star text-warning ml-1"></i>
                    </Fragment>
                  ) : congViecChiTiet[0]?.congViec.saoCongViec === 0 ? (
                    <i className="ml-2">No star</i>
                  ) : (
                    ""
                  )}
                  <span className="text-warning ml-1 mr-1">{congViecChiTiet[0]?.congViec.saoCongViec}</span>
                  <span className="text-secondary mr-2">({congViecChiTiet[0]?.congViec.danhGia})</span>
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
                  src="https://cdn.tgdd.vn/2020/09/GameApp/video-star-ung-dung-chinh-sua-tao-hieu-ung-video-logo-11-09-2020-200x200.png"
                  alt=""
                  className="rounded-circle"
                />
                <h6 className="text-secondary ml-2 mb-0">
                  <span className="text-dark mr-2 font-weight-bold">Buyers keep returning!</span>
                  {congViecChiTiet[0]?.tenNguoiTao} has an exceptional number of repeat buyers.
                </h6>
              </div>
              <div className="text-center mt-4">
                <img width={"90%"} src={congViecChiTiet[0]?.congViec.hinhAnh} alt="" />
              </div>

              {/* Detail Job DESC */}
              <div className="jobDetail__sellers-description">
                <h4 className="mt-5">About This Gig</h4>
                <div className="h6 title__ratedSeller">Top Rated Seller with all positive reviews</div>
                <p className="mt-3 text-secondary h6" style={{ lineHeight: 1.5 }}>
                  {/* <span className="mb-3 d-block">Hello,</span> */}
                  {congViecChiTiet[0]?.congViec.moTa}
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
                  <img width={90} height={90} src={congViecChiTiet[0]?.avatar} alt="" className="rounded-circle" />
                </div>
                <div className="about__seller-info ml-4">
                  <h6 className="m-0 font-weight-bold">{congViecChiTiet[0]?.tenNguoiTao}</h6>
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
                  <button className="btn btn-outline-secondary mt-1">Contact Me</button>
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
              <div className="jobDetail__review d-flex justify-content-between align-items-end ">
                <div className="jobDetail__review--right mt-5 d-flex align-items-center">
                  <h4 className="m-0 mr-2">335 Reviews</h4>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <i className="fa fa-star text-warning ml-1"></i>
                  <span className="text-warning ml-1 mr-1">5</span>
                </div>
                <div className="jobDetail__review--left">
                  <p className="m-0">
                    Sort by
                    <span className="font-weight-bold ml-2">
                      Most relevant <i className="ml-2 fas fa-chevron-down"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/* 5* */}
              <div className="d-flex align-items-end mt-4 seller__progressBar">
                <div className="">
                  <h6 className="text-primary">5 Stars (330)</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={95} />
                </div>
                <div className="ml-5 rating__desc">
                  <span className="font-weight-bold">Rating Breakdown</span>
                </div>
              </div>
              {/* 4* */}
              <div className="d-flex align-items-end mt-4 seller__progressBar">
                <div className="">
                  <h6 className="text-primary">4 Stars (5)</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={5} />
                </div>
                <div className="ml-5 rating__desc">
                  <span className="text-secondary d-flex align-items-center">
                    Seller communication level
                    <span className="ml-3">5</span>
                    <i className="text-warning ml-1 fa fa-star"></i>
                  </span>
                </div>
              </div>
              {/* 3* */}
              <div className="d-flex align-items-end mt-4 seller__progressBar">
                <div className="">
                  <h6 className="text-black-50">3 Stars</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={0} />
                </div>
                <div className="ml-5 rating__desc ">
                  <span className="text-secondary d-flex align-items-center">
                    Recommend to a friend
                    <span className="ml-3">5</span>
                    <i className="text-warning ml-1 fa fa-star"></i>
                  </span>
                </div>
              </div>
              {/* 2* */}
              <div className="d-flex align-items-end mt-4 seller__progressBar">
                <div className="">
                  <h6 className="text-black-50">2 Stars</h6>
                  <ProgressBar style={{ height: "10px", width: "20rem" }} variant="warning" now={0} />
                </div>
                <div className="ml-5 rating__desc ">
                  <span className="text-secondary d-flex align-items-center">
                    Service as described
                    <span className="ml-3">5</span>
                    <i className="text-warning ml-1 fa fa-star"></i>
                  </span>
                </div>
              </div>
              {/* 1* */}
              <div className="d-flex align-items-end mt-4 seller__progressBar">
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

                {danhSachBinhLuan?.map((binhLuan, index) => {
                  return (
                    <div className="mt-4" key={index}>
                      <div className="d-flex">
                        <div className="comment__seller-avatar">
                          <img width={28} height={28} src={binhLuan.avatar} alt="" className="rounded-circle" />
                        </div>
                        <div className="comment__seller-content ml-2">
                          <p className="m-0 font-weight-bold">
                            {binhLuan.tenNguoiBinhLuan}
                            {binhLuan.saoBinhLuan === 1 ? (
                              <i className="fa fa-star text-warning ml-2"></i>
                            ) : binhLuan.saoBinhLuan === 2 ? (
                              <Fragment>
                                <i className="fa fa-star text-warning ml-2"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                              </Fragment>
                            ) : binhLuan.saoBinhLuan === 3 ? (
                              <Fragment>
                                <i className="fa fa-star text-warning ml-2"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                              </Fragment>
                            ) : binhLuan.saoBinhLuan === 4 ? (
                              <Fragment>
                                <i className="fa fa-star text-warning ml-2"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                              </Fragment>
                            ) : binhLuan.saoBinhLuan === 5 ? (
                              <Fragment>
                                <i className="fa fa-star text-warning ml-2"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                                <i className="fa fa-star text-warning ml-1"></i>
                              </Fragment>
                            ) : binhLuan.saoBinhLuan === 0 ? (
                              <i className="ml-2">No star</i>
                            ) : (
                              ""
                            )}

                            <span className="ml-1 text-warning">{binhLuan.saoBinhLuan}</span>
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
                          <p className="m-0">{binhLuan.noiDung}</p>
                          <div className="mt-1">
                            <span className="text-secondary">Published {binhLuan.ngayBinhLuan}</span>
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
                  );
                })}

                <div className="mt-4">
                  <div className="d-flex">
                    <div className="comment__seller-avatar">
                      <img width={28} height={28} src={userSignin?.avatar} alt="" className="rounded-circle" />
                    </div>
                    <div className="comment__seller-content ml-2" style={{ flex: "auto" }}>
                      <Form form={form} onFinish={onFinish}>
                        <Form.Item name="noiDung" className="">
                          <Input.TextArea placeholder="Leave a comment here..." />
                        </Form.Item>
                        <button className="btn btn-primary mb-5" type="submit">
                          Add Comment
                        </button>
                      </Form>
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
                      <p className="h5 text-muted">${(congViecChiTiet[0]?.congViec.giaTien * 50) / 100}</p>
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
                    <button
                      onClick={() => {
                        if (!localStorage.getItem(TOKEN)) {
                          BookingCheckSignin();
                        } else {
                          handleHireJob();
                        }
                      }}
                      className="btn-lg btn btn-success btn-block my-4"
                    >
                      Continue (${(congViecChiTiet[0]?.congViec.giaTien * 50) / 100})
                    </button>
                    <div role="button" className="h5 text-success text-center">
                      Compare Package
                    </div>
                  </div>
                </TabPane>
                <TabPane tab={<h4>Standard</h4>} key="2">
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <h5>Standard</h5>
                      <p className="h5 text-muted">${congViecChiTiet[0]?.congViec.giaTien}</p>
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
                    <button
                      onClick={() => {
                        if (!localStorage.getItem(TOKEN)) {
                          BookingCheckSignin();
                        } else {
                          handleHireJob();
                        }
                      }}
                      className="btn-lg btn btn-success btn-block my-4"
                    >
                      Continue (${congViecChiTiet[0]?.congViec.giaTien})
                    </button>
                    <div role="button" className="h5 text-success text-center">
                      Compare Package
                    </div>
                  </div>
                </TabPane>
                <TabPane tab={<h4>Premium</h4>} key="3">
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <h5>Premium</h5>
                      <p className="h5 text-muted">${congViecChiTiet[0]?.congViec.giaTien * 2}</p>
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
                    <button
                      onClick={() => {
                        if (!localStorage.getItem(TOKEN)) {
                          BookingCheckSignin();
                        } else {
                          handleHireJob();
                        }
                      }}
                      className="btn-lg btn btn-success btn-block my-4"
                    >
                      Continue (${congViecChiTiet[0]?.congViec.giaTien * 2})
                    </button>
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
