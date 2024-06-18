import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-login',
  template: ` <main>
      <div class="container">
        <section
          class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
              >
                <div class="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    class="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/Icon_of_Zalo.svg.webp" alt="" />
                    <span class="d-none d-lg-block">ZALO: DOANNGON</span>
                  </a>
                </div>
                <!-- End Logo -->

                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">
                        Đăng nhập với tài khoản ADMIN
                      </h5>
                      <p class="text-center small">
                        Bạn nhập Tài khoản & Mật khẩu để
                        <br />
                        <span style="color: red;">*</span> Đăng nhập
                        <span style="color: red;">*</span>
                      </p>
                    </div>

                    <form class="row g-3 needs-validation" novalidate>
                      <div class="col-12">
                        <label for="yourUsername" class="form-label"
                          ><span style="color: red;">*</span> Tài khoản</label
                        >
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            id="yourUsername"
                            required
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label"
                          ><span style="color: red;">*</span> Mật khẩu</label
                        >
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          id="yourPassword"
                          required
                        />
                      </div>

                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label class="form-check-label" for="rememberMe"
                            >Lưu phiên đăng nhập</label
                          >
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">
                          Đăng nhập
                        </button>
                      </div>
                      <!-- <div class="col-12">
                        <p class="small mb-0">
                          Don't have account?
                          <a href="pages-register.html">Create an account</a>
                        </p>
                      </div> -->
                    </form>
                  </div>
                </div>

                <div class="credits">
                  <!-- All the links in the footer should remain intact. -->
                  <!-- You can delete the links only if you purchased the pro version. -->
                  <!-- Licensing information: https://bootstrapmade.com/license/ -->
                  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                  Designed by
                  <a href="https://www.facebook.com/luong.an.khang.9x"
                    >An Phan</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <!-- End #main -->`,
})
export class PageLoginComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
