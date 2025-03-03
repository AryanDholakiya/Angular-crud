import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  isAddEmpOpen = false;
  // @Output() isAddEmpOpen = new EventEmitter<boolean>();

  openAddEmp() {
    this.router.navigate(['addEmployee'], { relativeTo: this.route });
    this.isAddEmpOpen = true;
  }
  // openAddEmp(value: boolean) {
  //   this.router.navigate(['addEmployee'], { relativeTo: this.route });
  //   this.isAddEmpOpen.emit(value);
  // }
}
