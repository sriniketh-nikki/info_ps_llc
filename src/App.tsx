import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "./Images/infopsllc_logo.png";
import record_keeping_reporting from "./Images/record_keeping_reporting.png";
import unlocking_efficiency from "./Images/unlocking_efficiency.png";
import Card from "./Card";
import { payrollProcessData } from "./payrollProcess.tsx";
import { optimizePayrollProcessData } from "./optimizePayrollprocess.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <img src={Logo} alt="Logo" width="280px" className="" />
          </div>
          <div className="">
            <h2 className=" ps-3 pe-3 text-center">
              <b>Streamline Your Payroll Process</b>
            </h2>
            <div className="ps-5 pe-5 pt-3 pb-3 container">
              <p className="ps-lg-5 pe-lg-5">
                Managing payroll can be complex and time-consuming. At Info
                Payroll Solutions LLC, we offer a streamlined, reliable payroll
                solution designed to meet the needs of businesses of all sizes.
                Our comprehensive services allow you to focus on what truly
                matters growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* OPTIMIZING YOUR PAYROLL PROCESS */}
      <div className="mt-2 mb-2 d-flex justify-content-around gap-2 flex-wrap container">
        {payrollProcessData.map((item) => (
          <Card
            logo={item.logo}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="teal-blue text-white pb-3 mt-5 container">
        <div className="d-md-flex text-center">
          <div className="col-5">
            <img
              src={record_keeping_reporting}
              alt="record_keeping_reporting"
              width="350px"
              height="300px"
            />
          </div>
          <div className="col-lg-7 p-2">
            <h5 className="pt-lg-5">
              <b>RECORD KEEPING AND REPORTING</b>
            </h5>
            <p className="pt-lg-5 p-3">
              Maintain detailed records and generate customizable reports for
              analysis. Monitor processes regularly, implementing updates for
              enhanced efficiency and compliance. Our solution ensures
              meticulous record-keeping, including historical payroll data and
              employee records, and provides insightful, customizable reports
              for better decision-making and strategic planning.
            </p>
            {/* <p>Experience Infomerica's Efficiency Today! </p>
            <p>
              Our solution simplifies complex payroll tasks, ensuring accuracy,
              compliance, and employee satisfaction. With Info Payroll Solutions
              LLC, transform your payroll process and focus on growing your
              business.
            </p> */}
          </div>
        </div>
      </div>
      <div>
        <div className="m-5 text-center">
          <h1>
            <b>Essential Steps For Info Payroll Process</b>
          </h1>
        </div>
      </div>
      <div className="mt-2 mb-2 d-flex justify-content-around gap-2 flex-wrap container">
        {optimizePayrollProcessData.map((item) => (
          <Card
            logo={item.logo}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="d-md-flex col-12 teal-blue mt-5 text-white container">
        <div className="col-5 text-center">
          <img
            src={unlocking_efficiency}
            alt="unlocking_efficiency"
            width="350px"
            height="300px"
          />
        </div>
        <div className="col-lg-7 text-center p-5">
          <h5>UNLOCKING EFFICIENCY</h5>
          <p className="pt-lg-5 p-3">
            Infomerica Payroll Solutions offers a comprehensive array of
            benefits, from automating payroll processes to ensuring compliance
            and providing real-time insights. With our solution, organizations
            can streamline payroll management, enhance efficiency, and drive
            business success.
          </p>
        </div>
      </div>
      <Footer />
      <div className="text-center">
        <a
          href="https://www.infopsllc.com/lander"
          target="blank"
          className="text-decoration-none text-dark"
        >
          <p>
            <b>www.infopsllc.com</b>
          </p>
        </a>
      </div>
    </>
  );
}

export default App;
