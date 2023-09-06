import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string=""
  pass =""
  showError = false
  showLoading = false
  constructor(private router: Router, private api: ApiRestService){}
  register(){
    this.showLoading = true
    this.api.register(this.email, this.pass).subscribe({
      next: respuesta => {
        this.router.navigate(['/home']);
      },
      error: problemilla => {
        this.showLoading = false
        this.showError = true
      }
      
    })
  
  }
}
