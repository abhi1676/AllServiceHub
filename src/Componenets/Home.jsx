import React from "react";
import styled from "styled-components";

export function Home() {
  return (
   
    <>
      <HomeContainer>
        <section>
          <header id="header1">
            <div className="container search_job_header">
              <div className="row">
                <div className="col job_search">
                  <h6 className="lead" style={{ color: 'black', fontWeight: 'bold' }}>
                 
"Seamless Solutions, Delivered to Your Doorstep - AllServiceHub, Your Trusted Home Companion"
                  </h6>
                  <h1 className="display1 mt-5" style={{ color: 'black', fontWeight: 'bold' }}>
                    You can Find Your
                    <br />
                    Perfect Home Service below
                  </h1>
                </div>
              </div>
              <form action="http://localhost:3000/employeelogin">
    <div className="row">
        <div className="col-md-4">
            <label htmlFor="" className="form-label" />{" "}
            <input
                name="jobtitle"
                className="form-control"
                type="text"
                placeholder="Service category"
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="" className="form-label" />{" "}
            <input name="date" className="form-control" type="date" />
        </div>
        <div className="col-md-4">
            <label htmlFor="" className="form-label" />{" "}
            <input
                name="location"
                className="form-control"
                type="text"
                placeholder="location"
            />
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div id="searchjob" className="col-2 m-auto">
                <button type='submit' class='btn btn-success mt-5'>search</button>
            </div>
        </div>
    </div>
</form>
            </div>
          </header>
          <div className="main">
            {/* ==================== Features ================== */}
            <div className="container features">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="feature">
                    <i className="fa fa-search" aria-hidden="true" />
                    <h5>Search Any housing service</h5>
                    <p>We offer various types of services </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature">
                    <i className="fa fa-users" aria-hidden="true" />
                    <h5>Easy To Book </h5>
                    <p>
                      We have made it so simple that you can book out the service
                      your  so easily
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature">
                    <i className="fa fa-briefcase" aria-hidden="true" />
                    <h5>Easy Payment</h5>
                    <p>
                      Simple and efficient Payment System
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="feature">
                    <i className="fa fa-user" aria-hidden="true" />
                    <h5>Search Excellent home service provider</h5>
                    <p>
                      find the helpers based on thier ratings which is real time
                      rating provide to them
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ==================== Popular Categories ================== */}
            <div id="category">
              <div className="container">
                <div className="row">
                  <div className="col heading">
                    <h3 className="category_heading m-auto" style={{ color: 'black', fontWeight: 'bold' }} >
                     Our Services
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/plumber.jpg" width="100%" alt="" />
                    <h5>Plumber</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/painter.jpg" width="100%" alt="" />
                    <h5>Painter</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/housekeeper.jpeg" width="100%" alt="" />
                    <h5>HouseKeeper</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/cleaner.jpg" width="100%" alt="" />
                    <h5>cleaner</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/pet walker.jpg" width="100%" alt="" />
                    <h5>pet walker</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/tank.jpeg" width="100%" alt="" />
                    <h5>Water tank Cleaner</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/pestcontrol.jpeg" width="100%" alt="" />
                    <h5>Pest Controll</h5>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="/img/home/ac.jpeg" width="100%" alt="" />
                    <h5>Ac reparing</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* ========== Blogs ============== */}
            <div id="blogs">
              <div className="container">
                <div className="row">
                  <div className="col heading">
                    <h3>Recent Blog</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 blog_cols">
                    <div className="img">
                      <img src="/img/home/240109103808-modi-maldives.webp" alt="" width="100%" />
                    </div>
                    <p className="lead">January 9, 2024</p>
                    <h5 className="news_heading">
                      <a href="https://edition.cnn.com/2024/01/09/india/maldives-india-modi-tourism-boycott-intl-hnk/index.html">
                      Why Modi’s beach shots sparked calls for an Indian boycott of Maldives tourism
                      </a>
                    </h5>
                    <p className="lead">
                    Maldives is facing a boycott from one of its biggest sources of tourism income after three of its officials mocked India’s Prime Minister Narendra Modi, 
                    sparking calls from Indian citizens and celebrities to shun the sun-kissed getaway for domestic beaches instead.
                    </p>
                  </div>

                  <div className="col-md-3 blog_cols">
                    <div className="img">
                      <img src="/img/home/th.jpeg" alt="" width="100%" />
                    </div>
                    <p className="lead">January 9, 2024</p>
                    <h5 className="news_heading">
                      <a href="https://www.msn.com/en-us/money/companies/boeing-pressured-over-737-max-9-blowout-says-january-deliveries-shrank-29/ar-BB1ieK6o">
                      Boeing, pressured over 737 MAX 9 blowout, says January deliveries shrank 29%
                      </a>
                    </h5>
                    <p className="lead">
                    WASHINGTON, Feb 13  - Boeing said on Tuesday it delivered 27 airplanes in January, which was down 29% from the same month last year as regulators, 
                    lawmakers and customers pressured the planemaker following a MAX 9 mid-air cabin panel blowout last month.
                    </p>
                  </div>
                  <div className="col-md-3 blog_cols">
                    <div className="img">
                      <img src="/img/home/blog/trump.jpg" alt="" width="100%" />
                    </div>
                    <p className="lead">January 9, 2024</p>
                    <h5 className="news_heading">
                      <a href="https://www.cnbc.com/2016/08/08/why-trump-is-now-the-most-dangerous-man-in-the-world-commentary.html">
                      Why Trump is now the most dangerous man in the world
                      </a>
                    </h5>
                    <p className="lead">
                    Trump's disclosure that if he is elected president, the U.S. may not defend NATO allies attacked by Russia,
                     breaks over six decades of strong bipartisan support for the transatlantic alliance. Since World War II,
                      every American president has recognized the importance of NATO to the U.S. and they would all reject the madness of Trump's views on the alliance. 
                      For example, Ronald Reagan described NATO as "the core of America's foreign policy and of America's own security.
                    " Trump fails to understand this central role of NATO in U.S. national security
                    </p>
                  </div>
                  <div className="col-md-3 blog_cols">
                    <div className="img">
                      <img src="/img/home/blog/img4.jpg" alt="" width="100%" />
                    </div>
                    <p className="lead">January 9, 2024</p>
                    <h5 className="news_heading">
                      <a href="">
                        Modi govt on employment: Agnipath scheme, 10 lakh jobs
                        in 18 months | All you need to know about big jobs push
                      </a>
                    </h5>
                    <p className="lead">
                      Various departments and ministries were asked to prepare
                      the details of vacancies following PM Modi's direction to
                      this effect and the decision to recruit 10 lakh people was
                      taken following an overall review. The government also
                      unveiled a radical Agnipath scheme, short-term employment
                      for youngsters as soldiers in the armed forces, under
                      which over 46,000 people are likely to be inducted in the
                      first go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.section`
  
  /* ============ Header ============= */

  section{

    padding-top: 56px;
  }
  #header1 {
    background: url("/img/house.jpg") no-repeat 0 0;
    opacity: 0.9;
    background-size: cover;
    color: #fff;
    min-height: 100vh;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  /* ================= Main ================= */

  /* =============== features ================= */

  .feature {
    margin-top : 20px;
    text-align: center;
  }
  .fa {
    color: rgb(70, 125, 125);
    margin: 25px 0;
    transform: scale(3);
  }
  .fa:hover {
    color: rgb(43, 173, 173);
  }
  /* ============ Categories ============== */
  #category {
   
    background-size: cover;
  }
  .heading h3 {
    padding: 20px;
    text-align: center;
  }

  #category .col-md-3 {
    min-height: 200px;
    gap: 20px;
    transform: scale(0.8);
    transition: 0.5s;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  #category .col-md-3 img {
    border-radius: 10px;
  }
  #category .col-md-3 > h5 {
    text-align: center;
    color: #000000;
  }
  #category .col-md-3:hover {
    transform: scale(1);
    border-radius: 10px;
  }
  
  /*  =========== login page ===========  */

  #login-page .row .col-md-4 {
    background-color: rgba(240, 238, 238, 0.2);
  }

  #old_user_login,
  #reg_new_user {
    background: rgba(42, 39, 39, 0.5);
  }

  #login-page .lead {
    text-align: center;
    cursor: pointer;
    padding: 10px;
    font-weight: bold;
  }
  #login-page .lead:hover {
    color: rgb(10, 91, 145);
  }
  #login-page #login-bar {
    color: aqua;
  }

  #login_page .col-md-4,
  .col-6,
  .col-12 {
    border-radius: 5px;
    border: 2px ridge rgb(154, 131, 99);
  }
  #login-page-toggle {
    overflow: hidden;
  }

  #login-page input {
    background-color: rgba(229, 216, 216, 0.5);
  }
  #login-page input:focus {
    background-color: rgb(194, 181, 181);
  }
  #login-page-toggle input[type="submit"] {
    padding: 5px 10px;
    border-radius: 5px;
  }
  #login-page-toggle input[type="submit"]:hover {
    background-color: aqua;
    outline: none;
  }

  #login-page input::placeholder {
    color: #fff;
  }

  /* =========== Footer ============== */
  #footer {
    background-color: rgb(34, 40, 49);
    color: #fff;
  }

  /* ========= common properties ============= */
  .search_job_header {
    padding-top: 100px;
  }
  .breakcrum_row {
    font: 900;
    font-size: 2rem;
    /* border: 1px solid red; */
  }
  /* ========= about ============= */
  .about_row {
    background-color: rgba(183, 215, 215, 0.6);
    color: rgb(35, 31, 31);
    border-radius: 5px;
  }
  .about_img {
    margin-top: 15px;
  }
  .about_img img {
    border-radius: 30px;
  }
  .test_img {
    margin: auto;
    height: 100px;
    width: 100px;
  }
  .test_heading + .col-md-4 h2 strong {
    color: rgb(60, 53, 53);
    font: lighter;
  }
  .test_cols {
    color: rgb(40, 51, 61);
  }
  .test_img img {
    border-radius: 25px;
  }
  .test_Desc {
    text-align: center;
  }
  .test_name {
    text-align: center;
  }

  #straticstics {
    padding: 50px;
    background: url("/img/home/statistics.jpg");
    color: rgb(37, 44, 44);
  }
  #newsletter {
    background-color: rgb(100, 223, 182);
    padding: 40px;
  }
  .news_letter input {
    position: relative;
  }
  .news_letter input:after {
    content: "Subscribe";
    position: absolute;
    right: 20;
    top: 0;
    width: 30px;
    height: 30px;
    background-color: rgb(153, 18, 133);
  }

  /* ================ blog =============== */
  .blog_cols {
    height: 400px;
    padding: 5px;
    overflow: hidden;
    text-overflow: clip;
    background: rgba(216, 210, 210, 0.5);
  }
  .blog_cols img {
    border-radius: 15px;
  }
  .blog_cols a {
    color: rgb(15, 100, 160);
  }
  #blogs {
    padding-bottom: 20px;
  }

  /* ============== media queries ======== */
  /* Media query */
  @media (max-width: 576px) {

    .fa {
      transform: scale(1.5);
    }
    .title-bar {
      align-items: center;
      margin-top: -15px;
    }
    #close_menu {
      margin-right: 10px;
    }

    .search_job_header {
      padding-top: 30px;
    }
    .breakcrum_row {
      font: 500;
      font-size: 1rem;
      /* border: 1px solid red; */
    }
    footer {
      padding-bottom: 50px;
    }

    /* ======== about ====== */
    .about_row {
      margin: 10px;
      padding: 30px;
    }

    /* ====== blogs == */
    .blog_cols {
      padding: 15px;
      margin-bottom: 10px;
    }
  }
`;
