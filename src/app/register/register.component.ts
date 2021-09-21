import { Component, ElementRef, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TempTracker } from "../temp-tracker";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private el: ElementRef) {}
  registrationForm: FormGroup;
  countryList = ["Afghanistan", "Albania", "Algeria", "India"];
  temTracker = new TempTracker();
  ngOnInit() {
    this.createRegisterForm();
    console.log(this.is_Anagram("cellar", "recall"));
    console.log(this.temTracker.get_max);
    console.log(this.temTracker.get_min);
  }

  createRegisterForm() {
    this.registrationForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(5)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      phoneNo: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      country: ["", [Validators.required]],
    });
  }

  submit() {
    if (this.registrationForm.valid) {
      alert(
        `${
          this.registrationForm.value.firstName +
          " " +
          this.registrationForm.value.lastName
        } register successfully`
      );
    } else {
      const invalidControl =
        this.el.nativeElement.querySelectorAll(".ng-invalid")[1];

      if (invalidControl) {
        invalidControl.scrollIntoView();
        this.registrationForm.markAllAsTouched();
      }
    }
  }


  is_Anagram(param1: string, param2: string): boolean {
    if (param1.length === param2.length) {
      param1 = param1.toLocaleLowerCase();
      param2 = param2.toLocaleLowerCase();

      let compareParam = param2.split("");
      for (let i = 0; i < param1.length; i++) {
        if (compareParam.indexOf(param1.charAt(i)) !== -1) {
          compareParam.splice(compareParam.indexOf(param1.charAt(i)), 1);
        }
      }

      if (compareParam.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
