import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-error',
  template: `
    <section
      class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center"
    >
      <h1>404</h1>
      <h2>Trang bạn yêu cầu không tồn tại.</h2>
      <a class="btn" href="page-home">Trở lại Trang chủ</a>
      <img
        src="assets/img/not-found.svg"
        class="img-fluid py-5"
        alt="Page Not Found"
      />
    </section>
  `,
})
export class PageErrorComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
