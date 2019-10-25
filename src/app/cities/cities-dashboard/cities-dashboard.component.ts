import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { City } from "../city.model";
import { CityService } from "../city.service";

@Component({
  selector: "app-cities-dashboard",
  templateUrl: "./cities-dashboard.component.html",
  styleUrls: ["./cities-dashboard.component.scss"]
})
export class CitiesDashboardComponent implements OnInit {
  cityForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: CityService) {}

  ngOnInit() {
    this.createCityForm();
  }

  createCityForm() {
    this.cityForm = this.fb.group({
      name: [""],
      description: [""],
      numberOfHighrises: [""],
      country: [""]
    });
  }

  saveCity(data?: City) {
    const formData: City = {
      name: this.cityForm.get("name").value,
      description: this.cityForm.get("description").value,
      numberOfHighrises: this.cityForm.get("numberOfHighrises").value,
      country: this.cityForm.get("country").value
    };
    if (!this.cityForm.untouched) {
      this.cs.createCity(formData);
      this.cityForm.reset();
    }
  }
}
