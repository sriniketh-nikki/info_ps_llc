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
                solution designed to suit businesses of every scale. By
                leveraging our comprehensive suite of automated services, you
                can ensure accurate and timely payroll processing for your
                employees. This empowers you to dedicate your focus to the core
                driver of success propelling your business forward. Our
                comprehensive services allow you to focus on what truly matters
                growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* OPTIMIZING YOUR PAYROLL PROCESS */}
      <div className="mb-4">
        <h2 className="text-center">Our Features</h2>
      </div>
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
        <div className="d-md-flex">
          <div className="col-5 text-center">
            <img
              src={record_keeping_reporting}
              alt="record_keeping_reporting"
              width="350px"
              height="300px"
            />
          </div>
          <div className="col-lg-7 p-2">
            <h5 className="text-center pt-lg-5">
              <b>RECORD KEEPING AND REPORTING</b>
            </h5>
            <p className="pt-lg-4 p-3">
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
          <h2>Benefits of Payroll Process</h2>
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
            width="320px"
            height="280px"
          />
        </div>
        <div className="col-lg-7  p-5">
          <h5 className="text-center">UNLOCKING EFFICIENCY</h5>
          <p className="pt-lg-4 p-3">
            Infomerica Payroll Solutions offers a comprehensive array of
            benefits, from automating payroll processes to ensuring compliance
            and providing real-time insights. With our solution, organizations
            can streamline payroll management, enhance efficiency, and drive
            business success.
          </p>
        </div>
      </div>
      <Footer />
      <div
          className="p-1 ps-2 text-center"
        >
          <p>
            <b>
            &copy; 2024{" "}
            <a
              href="https://infomericainc.com/"
              className="text-decoration-none text-danger"
            >
              Infomerica
            </a>{" "}
            All Rights Reserved.
            </b>
          </p>
        </div>
    </>
  );
}

export default App;
