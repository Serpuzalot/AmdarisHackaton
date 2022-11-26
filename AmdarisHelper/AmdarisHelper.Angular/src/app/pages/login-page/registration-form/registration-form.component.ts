import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {DataEncryption} from "../../../services/DataEncryption";
import {MyErrorStateMatcher} from "../../../utils/MyErrorStateMatcher";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit{

  registrationForm: FormGroup;
  password: string;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.initRegistrationForm();
  }

  initRegistrationForm(): void {
    this.registrationForm = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required]),
      userName: new FormControl('',[Validators.required]),
    }, {validators: this.checkPasswords});
  }

  onSubmitRegistrationForm(): void {
    const dataEncryptor = new DataEncryption();
    const encryptPassword = dataEncryptor.encryptString(this.registrationForm.controls['password'].value)
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

}
