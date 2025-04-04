import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  requestForm!: FormGroup
  response: any

  constructor(private http: HttpClient){
    this.createForm()
  }

  createForm(){
    this.requestForm = new FormGroup({
      url: new FormControl(''),
      method: new FormControl('')
    })
  }

  async handleSubmitRequest(){
    console.log('this.requestForm.value: ', this.requestForm.value);
    let getresult = this.http.get(this.requestForm.value.url).subscribe((res)=>{
      console.log('res: ', res);
      this.response = JSON.stringify(res)
    })
    console.log('getresult: ', getresult);
  }
}
