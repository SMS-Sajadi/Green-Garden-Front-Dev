import React from "react";
// Component
import PlantHeader from "../../components/plant/PlantHeader";
// Image
import team from "../../assets/images/team.jpg";
import monitor from "../../assets/icons/about_us/monitor-svgrepo-com.svg";
import browser from "../../assets/icons/about_us/browser-coding-svgrepo-com.svg";
import b from "../../assets/icons/about_us/bold-svgrepo-com.svg";

import mehrnaz from "../../assets/icons/about_us/mehrnaz.jpg";
import maryam from "../../assets/icons/about_us/maryam.jpg";
import sms from "../../assets/icons/about_us/sms.jpg";
import mmd from "../../assets/icons/about_us/mmd.jpg";
import rey from "../../assets/icons/about_us/reyhane.jpg";
import lida from "../../assets/icons/about_us/lida.JPG";






const AboutUs = () => {
  return (
    <>
      <PlantHeader name={"درباره ما"} bool={true} />
      <section className="section pb-0">
        <div class="container mb-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="position-relative">
                <img
                  src={team}
                  class="rounded img-fluid mx-auto d-block"
                  alt=""
                />
                <div class="play-icon">
                  <div
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    class="play-btn lightbox"
                  >
                    <i class="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div class="section-title ms-lg-4">
                <h4 class="title mb-4"> ما کی هستیم؟ </h4>
                <p class="text-muted">
                  شروع به کار ما درواقع یه{" "}
                  <span class="text-primary fw-bold"> وبگردی </span> کوچک بود !
                </p>
                <p class="text-muted">
                  {" "}
                  یه تیم کوچولو موچوله توی یه دانشگاه نه چندان گنده منده که
                  اومدیم باهم یه پروژه درسی بزنیم و شاید در آینده دیگه محصولمون
                  یه پروژه نبود!😶
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mt-5">
            <div class="col-12 text-center">
              <div class="section-title mb-4 pb-2 mt-3">
                <h4 class="title mb-4"> ویژگی‌های این سایت</h4>
              </div>
            </div>
          </div>

          <div class="row" style={{ padding: "0 45px" }}>
            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                <div class="icon text-center rounded-circle me-3">
                  <img
                    src={monitor}
                    alt=""
                    class="fea icon-ex-md text-primary"
                  />
                </div>
                <div class="flex-1">
                  <h4 class="title mb-0">کاملا ریسپانسیو</h4>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                <div class="icon text-center rounded-circle me-3">
                  <img
                    src={browser}
                    alt=""
                    class="fea icon-ex-md text-primary"
                  />
                </div>
                <div class="flex-1">
                  <h4 class="title mb-0">سازگاری مرورگر</h4>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                <div class="icon text-center rounded-circle me-3">
                  <img src={b} alt="" class="fea icon-ex-md text-primary" />
                </div>
                <div class="flex-1">
                  <h4 class="title mb-0">بر اساس بوت استرپ 5</h4>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                <div class="icon text-center rounded-circle me-3">
                  <i class="uil uil-heart icon-ex-md text-primary"></i>
                </div>
                <div class="flex-1">
                  <h4 class="title mb-0">آیکن های متنوع</h4>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="d-flex key-feature align-items-center p-3 rounded shadow">
                <div class="icon text-center rounded-circle me-3">
                  <i class="uil uil-cog align-middle"></i>
                </div>
                <div class="flex-1">
                  <h4 class="title mb-0">آسان برای سفارشی سازی</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="section bg-light">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <div class="section-title mb-4 pb-2">
                  <h4 class="title mb-4"> تیم ما</h4>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6 mt-4 pt-2">
                <div class="card team text-center bg-transparent border-0">
                  <div class="card-body p-0">
                    <div class="position-relative">
                      <img
                        src={sms}
                        class="img-fluid avatar avatar-ex-large rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="content pt-3 pb-3">
                      <h5 class="mb-0">
                        <div class="name text-dark"> سروش سجادی </div>
                      </h5>
                      <small class="designation text-muted">بک اند</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 pt-2">
                <div class="card team text-center bg-transparent border-0">
                  <div class="card-body p-0">
                    <div class="position-relative">
                      <img
                        src={mmd}
                        class="img-fluid avatar avatar-ex-large rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="content pt-3 pb-3">
                      <h5 class="mb-0">
                        <div class="name text-dark">محمد خرسندی</div>
                      </h5>
                      <small class="designation text-muted">بک اند </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 pt-2">
                <div class="card team text-center bg-transparent border-0">
                  <div class="card-body p-0">
                    <div class="position-relative">
                      <img
                        src={maryam}
                        class="img-fluid avatar avatar-ex-large rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="content pt-3 pb-3">
                      <h5 class="mb-0">
                        <div class="name text-dark"> مریم صفوی</div>
                      </h5>
                      <small class="designation text-muted">بک اند </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 pt-2">
                <div class="card team text-center bg-transparent border-0">
                  <div class="card-body p-0">
                    <div class="position-relative">
                      <img
                        src={mehrnaz}
                        class="img-fluid avatar avatar-ex-large rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="content pt-3 pb-3">
                      <h5 class="mb-0">
                        <div class="name text-dark">مهرناز شاهی</div>
                      </h5>
                      <small class="designation text-muted"> فرانت اند </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-4 pt-2">
                <div class="card team text-center bg-transparent border-0">
                  <div class="card-body p-0">
                    <div class="position-relative">
                      <img
                        src={lida}
                        class="img-fluid avatar avatar-ex-large rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="content pt-3 pb-3">
                      <h5 class="mb-0">
                        <div class="name text-dark"> زهرا صفاری</div>
                      </h5>
                      <small class="designation text-muted">فرانت اند </small>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-lg-3 col-md-6 mt-4 pt-2">
                <div class="card team text-center bg-transparent border-0">
                  <div class="card-body p-0">
                    <div class="position-relative">
                      <img
                        src={rey}
                        class="img-fluid avatar avatar-ex-large rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="content pt-3 pb-3">
                      <h5 class="mb-0">
                        <div class="name text-dark"> ریحانه خرمیان</div>
                      </h5>
                      <small class="designation text-muted">فرانت اند </small>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
