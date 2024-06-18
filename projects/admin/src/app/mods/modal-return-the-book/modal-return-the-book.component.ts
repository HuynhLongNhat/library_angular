import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-return-the-book',
  template: `
    <!-- Modal -->
    <div
      class="modal"
      id="modalReturnTheBook"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <span class="bi bi-bell-fill bell-icon"></span> Thông báo
            </h5>
          </div>
          <div class="modal-body">
            <p>Đồng ý trả sách?</p>
          </div>
          <div class="modal-footer">
            <a class="btn btn-outline-danger">No</a>
            <a class="btn btn-outline-success">Yes</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .bell-icon {
        color: #ffc107;
      }

      .modal.show {
        display: block;
        animation: fadeIn 0.3s ease-out forwards;
      }

      .modal.hide {
        animation: fadeOut 0.3s ease-in forwards;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      .modal-dialog {
        position: fixed;
        top: 30%;
        left: 50%;
        margin: 0;
        border-radius: 0;
      }

      .modal-content {
        border-radius: 0;
        width: 200px;
        height: 180px;
        font-size: 14px;
      }

      .modal-header {
        padding: 0.75rem 1rem;
        border-bottom: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      .modal-title {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        font-weight: bold;
      }

      .modal-body {
        padding: 0.75rem 1rem;
        text-align: center;
        border-radius: 0;
        font-size: 14px;
      }

      .modal-footer {
        padding: 0.75rem 1rem;
        border-top: none;
        justify-content: center;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        font-size: 14px;
      }

      .modal-footer a {
        font-size: 14px;
      }
    `,
  ],
})
export class ModalReturnTheBookComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
