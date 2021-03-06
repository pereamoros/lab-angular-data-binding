import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  processing = false;
  feedbackEnabled = false;
  createForm = false;
  foods: Object[];
  newFood: Object;
  todaysList: Object[];
  totalCalories:number;

  constructor() {
    this.totalCalories = 0;
    this.newFood = {};
    this.todaysList= [];
  }
  
  ngOnInit() {
    this.foods = foods;
  }

  showCreate(){
    this.createForm = true;
  }

  addFood(){
    this.foods.push(this.newFood);
    this.newFood = {};
    this.processing = false;
  }

  submitForm(form) {
    if (form.valid) {
      this.processing = true;
      this.addFood();
      this.createForm = false;
      this.feedbackEnabled = false;
    }
    else{
      this.feedbackEnabled = true;
    }
  }

  addTodaysList(food){
    this.todaysList.push(food)
    this.totalCalories += food.calories;
  }

}
