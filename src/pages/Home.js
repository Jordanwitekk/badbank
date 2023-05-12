import React from "react";
import logo from "../bank.png";
import Layout from "../components/Layout";


const Home = () => {
  localStorage.clear()
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
 
            <h4 className="card-header text-center">Welcome to Bad Bank App!</h4>
                <div className="card-body text-center">
                  <h6 className="card-text">The All-New online banking experience!<br></br> Start by navigating to Create Account.</h6>
                
                <img src={logo} className="card-img-top img-center" alt="" style={{ width: "14rem"  }}  />
               </div>
                <div>
                  <p className="card-text text-center">MITxPro exercise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
    </Layout>
  );
};

export default Home;