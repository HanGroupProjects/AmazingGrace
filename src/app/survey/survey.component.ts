import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { questions } from './questions';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  // Body Type Form
  bodyTypes = ["Hourglass", "Round (Apple)", "Rectangle", "Triangle", "Pear", "Inverted Triangle"];
  bodyTypesString = ["hourglass", "round", "rectangle", "triangle", "pear", "inverted_triangle"]

  // Questionnaire Form
  questionFg: FormGroup;
  questions = questions;


  // General Vars
  selectedType: string;
  totalNumber = 2; // CHANGE
  active = 0;
  percentage = 0;

  feet: number;
  inches: number;
  weight: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {


    this.questionFg = this.fb.group({
      priority: ['', Validators.required],
      time_effort: ['', Validators.required],
      aspiring_style: ['', Validators.required],
      budget_everyday: ['', Validators.required],
      budget_specialday: ['', Validators.required],
      normal_size_top: ['', Validators.required],
      normal_size_botton: ['', Validators.required],
      normal_size_dress: ['', Validators.required],
      normal_size_shoe: ['', Validators.required],
      height: [{feet: 0, inches: 0}, Validators.required],
      weight: [0, Validators.required],
    })


    console.log(this.questionFg);
    console.log(questions.questions);
  }



  onClickBodyType(type: string) {
    for(let i = 0; i < this.bodyTypes.length; i++) {
      if(this.bodyTypes[i] === type) {
        this.selectedType = this.bodyTypesString[i];
      }
    }
    this.active += 1;
    this.percentage = (this.active / this.totalNumber) * 100;
  }

  setActive(index: number) {
    if(index === this.totalNumber) {
      return;
    }
    this.active = index;
    this.percentage = (this.active / this.totalNumber) * 100;
  }


  onSubmit() {
    this.feet = +(<HTMLInputElement>document.getElementById('feet')).value;
    this.inches = +(<HTMLInputElement>document.getElementById('inches')).value;
    this.questionFg.controls['height'].setValue({feet: this.feet, inches: this.inches});

    console.log(this.selectedType);
    console.log(this.questionFg.value);
  }
}
