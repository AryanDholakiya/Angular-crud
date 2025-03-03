import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  constructor(private router: Router) {}
  hobbiesArray: string[] = ['Reading', 'writing', 'singing', 'travelling'];

  EmpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    EmployeeId: new FormControl('', [Validators.required, Validators.min(1)]),
    MobileNo: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
    ]),
    Gender: new FormControl('', [Validators.required]),
    Position: new FormControl('', [Validators.required]),
    hobby: new FormArray([], [Validators.required]),
    Img: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.EmpForm.controls;
  }

  onchange(e: any) {
    const checked_value = e.target.value;
    const checked = e.target.checked;
    // console.log('checked_value :', checked_value);

    const hobbyFormArray = this.EmpForm.get('hobby') as FormArray;
    // console.log('hobbyFormArray :', hobbyFormArray);

    if (checked) {
      hobbyFormArray.push(new FormControl(checked_value));
    } else {
      const index = hobbyFormArray.controls.findIndex(
        (control) => control.value === checked_value
      );
      if (index !== -1) {
        hobbyFormArray.removeAt(index);
      }
    }

    console.log('Updated hobbies:', hobbyFormArray.value);
  }

  onSubmit() {
    console.log(this.EmpForm.value);
    this.router.navigate(['/home']);
  }
  gotoHome() {
    this.router.navigate(['/home']);
  }

  // gotoHomescreen(newhomepage: boolean) {
  //   this.isOpen = newhomepage;
  // }
}
