import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-demo.html',
  styleUrls: ['./template-demo.css']
})

export class TemplateDemo {
  title = "Template Driven Form";
  username = "";
  email = "";
  password = "";
  role = "";

  // Added requested fields
  gender = "";
  status = "";
  comments = "";

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
