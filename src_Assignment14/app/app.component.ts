import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {
  }

  MarvellousForm = this.fbobj.group
  (
    {
      // Add Multiple validations
      firstname : ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')] ],
      lastname : ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')] ],
      cityname : ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{4,}$/)] ],
      emailname : ['', [Validators.required,  Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phonenumber :['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)] ],
      zip : ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      address : ['', [Validators.required]],
      description : [null,Validators.compose([Validators.required,Validators.minLength(30)])],
    }
  );   
}
