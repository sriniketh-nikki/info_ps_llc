import contactus from "./Images/contact2.png";

export default function Footer() {
  return (
    <div className="container">
      <div className="">
        <h2 className="text-center pt-5">Learn about our company</h2>
        <p className="fs-4 text-center pt-4">Contact Us</p>
        <hr className="text-danger" />
        <div className="d-md-flex">
          <div className="col-lg-6 text-center">
            <img src={contactus} alt="contactus" width="60%" />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
              <div>
                <div className="p-lg-2 d-flex gap-5">
                  <div className="fs-2">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <h5>1102 Weldon Park Dr, Sugar Land, TX 77479</h5>
                  </div>
                </div>
                <div className="p-lg-2 d-flex gap-5">
                  <div className="fs-2">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h4>PHONE</h4>
                    <h5>919-993-3110</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-lg-2 d-flex gap-5">
                  <div className="fs-2">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h4>EMAIL</h4>
                    <h5>
                      <a
                        href="mailto:hr@infopsllc.com"
                        className="text-dark text-decoration-none"
                      >
                        hr@infopsllc.com
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="p-lg-2 d-flex gap-5">
                  <div className="fs-2">
                    <i className="bi bi-globe"></i>
                  </div>
                  <div>
                    <h4>Website</h4>
                    <h5>
                      <a
                        href="https://www.infopsllc.com"
                        className="text-decoration-none text-dark"
                      >
                        www.infopsllc.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-danger" />
        {/* <div className="p-3 d-flex gap-5">
          <h4>Follow Us</h4>
          <div className="d-flex gap-4">
            <div className="text-danger bg-danger fs-3 text-light ps-2 pe-2 text-center rounded">
                <i className="bi bi-youtube"></i>
            </div>
            <div className="text-info fs-2 bg-info ps-2 pe-2 rounded text-light">
                <i className="bi bi-linkedin"></i>
            </div>
            <div className="text-primary fs-2 bg-primary ps-2 pe-2 rounded text-light">
                <i className="bi bi-facebook"></i>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
// Company Name: INFO PAYROLL SOLUTIONS LLC

// Office Address: 1102 Weldon Park Dr, Sugar Land, TX 77479

// Phone Number : 919-993-3110

// Email : mailto:hr@infopsllc.com

// Website : https://www.infopsllc.com
