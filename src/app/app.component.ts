import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup , Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HCLAssessment';
  constructor(private router: Router){}
  ngOnInit(){
    //this.router.navigate(['sample-page']);
  }
}
