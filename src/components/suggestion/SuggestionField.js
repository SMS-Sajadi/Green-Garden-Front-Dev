import React from "react";

const SuggestionField = () => {
  const searchHandeler = () => {};

  return (
    <section className="section-two" id="bookroom" style={{padding: '60px 0 0 0'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <form
              className="p-4 shadow bg-white rounded"
              onSubmit={searchHandeler}
            >
              <h4 className="mb-4">اکنون پیشنهاد بگیر !</h4>
              <span>موارد ستاره‌دار الزامی است  :)</span>
              <div className="row text-start" style={{ marginTop: "30px" }}>
                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label">  میزان نور <span className="text-danger">*</span> : </label>
                    <select
                      required
                      className="form-control"
                      name="light_intensity"
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="high">زیاد</option>
                      <option value="middle">متوسط</option>
                      <option value="low">کم</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> دما <span className="text-danger">*</span> : </label>
                    <select
                      required
                      className="form-control"
                      name="temperature"
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="">گرم </option>
                      <option value="">شرجی</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label">  میزان آبدهی <span className="text-danger">*</span> : </label>
                    <select required className="form-control " name="water">
                      <option value="">انتخاب کنید</option>
                      <option value="everyday">هر روز</option>
                      <option value="two_day">دو روز یکبار</option>
                      <option value="every_weak">هر هفته</option>
                      <option value="two_weak">دو هفته یکبار</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> نوع گیاه <span className="text-danger">*</span> : </label>
                    <select
                      required
                      className=" form-control"
                      name="plant_type"
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="prickly">خاردار</option>
                      <option value="phanerogam">گل‌دار</option>
                      <option value="noneflower">بدون گل</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> نوع محیط <span className="text-danger">*</span> : </label>
                    <select
                      required
                      className="form-control"
                      name="location_type"
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="apartment">آپارتمانی</option>
                      <option value="outdoor">باز</option>
                      <option value="closed">بسته</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> مرحله رشد : </label>
                    <select className="form-control" name="growth_state">
                      <option value="">انتخاب کنید</option>
                      <option value="seed">بذر</option>
                      <option value="vegetative">نهال</option>
                      <option value="reproductive">رشد کامل</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> حیوان خانگی : </label>
                    <select className="form-control" name="">
                      <option value="">انتخاب کنید</option>
                      <option value="yes">دارم</option>
                      <option value="no">ندارم</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> حساسیت : </label>
                    <select className="form-control" name="">
                      <option value="">انتخاب کنید</option>
                      <option value="yes">دارم</option>
                      <option value="no">ندارم</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> زمان رسیدگی : </label>
                    <select className="form-control" name="">
                      <option value="">انتخاب کنید</option>
                      <option value="">روزانه</option>
                      <option value="">هفتگی</option>
                      <option value="">ماهیانه</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> خوراکی : </label>
                    <select className="form-control" name="">
                      <option value="">انتخاب کنید</option>
                      <option value="">باشد</option>
                      <option value="">نباشد</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> فصلی : </label>
                    <select className="form-control" name="">
                      <option value="">انتخاب کنید</option>
                      <option value="">باشد</option>
                      <option value="">نباشد</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label"> عطری : </label>
                    <select className="form-control" name="">
                      <option value="">انتخاب کنید</option>
                      <option value="">باشد</option>
                      <option value="">نباشد</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4 mt-lg-4 pt-2 pt-lg-1">
                  <div className="d-grid">
                    <input
                      type="submit"
                      id="search"
                      name="search"
                      className="searchbtn btn btn-primary"
                      value="جستجو "
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestionField;
