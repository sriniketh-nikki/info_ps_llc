import contactus from "./Images/contact-new.png";

export default function Footer() {
  return (
    <div className="container">
      <div className="">
        <h2 className="text-center pt-5">Contact Us</h2>
        <hr className="text-danger" />
        <div className="d-md-flex">
          <div className="col-lg-6 text-center">
            <img src={contactus} alt="contactus" width="80%" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
              <div>
                <div className="p-lg-2 d-flex gap-5">
                  <div className="fs-2 text-danger">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h5>Address</h5>
                    <h6>1102 Weldon Park Dr, Sugar Land, TX 77479</h6>
                  </div>
                </div>
                <div className="p-lg-2 d-flex gap-5">
                  <div className="fs-2 text-danger">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <h6>(919) 993-3110</h6>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-lg-2 d-flex gap-5">
                  <div className="fs-2 text-danger">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <h6>
                      <a
                        href="mailto:hr@infopsllc.com"
                        className="text-dark"
                      >
                        hr@infopsllc.com
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="p-lg-2 d-flex gap-5">
                  <div className="fs-2 text-danger">
                    <i className="bi bi-globe"></i>
                  </div>
                  <div>
                    <h5>Website</h5>
                    <h6>
                      <a
                        href="https://www.infopsllc.com"
                        className="text-decoration-none text-dark"
                      >
                        www.infopsllc.com
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-danger" />
      </div>
    </div>
  );
}
// Company Name: INFO PAYROLL SOLUTIONS LLC

// Office Address: 1102 Weldon Park Dr, Sugar Land, TX 77479

// Phone Number : 919-993-3110

// Email : mailto:hr@infopsllc.com

// Website : https://www.infopsllc.com
