

import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/admin/src/service/Data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-page-register',
  templateUrl: "./page-register.component.html",
  styleUrls: ["./page-register.component.scss"],


})
export class PageRegisterComponent implements OnInit {
  public registerForm!: FormGroup;


  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', Validators.required,],
    });
  }

  handleRegister() {
    console.log(this.registerForm.value)
    this.dataService.registerUser(this.registerForm.value)
      .subscribe(data => {
        alert('Tài khoản đăng kí thành công!')
        this.router.navigate(['/page-login'])
      }, error => {
        alert('Tài khoản đăng kí thất bại')
        // Handle registration error (e.g., display an error message to the user)
      });
  }
}

