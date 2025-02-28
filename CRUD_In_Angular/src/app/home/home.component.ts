import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  openAddEmp() {
    this.router.navigate(['addEmployee'], { relativeTo: this.route });
  }
}
