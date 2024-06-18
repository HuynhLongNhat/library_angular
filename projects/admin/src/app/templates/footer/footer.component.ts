import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      <div class="copyright">
        &copy; Copyright <strong><span>An Phan</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
        Designed by
        <a href="https://www.facebook.com/luong.an.khang.9x">An Phan</a>
      </div>
    </footer>
    <!-- End Footer -->

    <!-- <a
    href="#"
    class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a> -->`,
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
