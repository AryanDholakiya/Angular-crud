import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  hobbiesArray: string[] = ['Reading', 'writing', 'singing', 'travelling'];

  EmpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    EmployeeId: new FormControl('', [Validators.required]),
    MobileNo: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
    Position: new FormControl('', [Validators.required]),
    hobby: new FormArray([], [Validators.required]),
  });

  get f() {
    return this.EmpForm.controls;
  }

  onchange(e: any) {
    let checked_value = e.target.value;
    console.log('checked_value :', checked_value);
    let checked = e.target.checked;
    // console.log(`${checked_value} : ${checked}`);

    let checkedArray = this.EmpForm.get(checked_value) as FormArray;
    console.log('checkedArray :', checkedArray);

    if (checked) {
      checkedArray.push(checked_value);
    } else {
      let i: number = 0;

      checkedArray.controls.forEach((item) => {
        if (item.value == checked_value) {
          checkedArray.removeAt(i);
        }
        i++;
      });
    }
  }
}
