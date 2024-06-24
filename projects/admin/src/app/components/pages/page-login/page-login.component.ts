import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: "./page-login.component.html",
  styleUrls: ["./page-login.component.scss"]

})
export class PageLoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });

  }

  handleLogin() {

    this.dataService.loginUser(this.loginForm.value)
      .subscribe((response: any) => { // Cast response to any
        console.log('res', response.EC);
        if (response.EC === 0) {

          localStorage.setItem('email', response.DT.libraryStaff.email);
          localStorage.setItem('id', response.DT.libraryStaff.id);
          localStorage.setItem('name', response.DT.libraryStaff.name);
          localStorage.setItem('isAdmin', response.DT.libraryStaff.admin)
          alert(response.EM);
          this.router.navigate(['/page-home']);
        } else {
          alert(response.EM);
          // Handle registration error (e.g., display an error message to the user)
        }
      }, error => {
        alert('Tài khoản đăng nhập thất bại');
        // Handle registration error (e.g., display an error message to the user)
      });
  }
}
