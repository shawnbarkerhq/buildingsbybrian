import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BuildingsService } from "../buildings.service";
import { Building } from "../building.model";

export interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-buildings-dashboard",
  templateUrl: "./buildings-dashboard.component.html",
  styleUrls: ["./buildings-dashboard.component.scss"]
})
export class BuildingsDashboardComponent implements OnInit {
  buildingForm: FormGroup;

  statuses: Status[] = [
    { value: "underConstruction", viewValue: "Under Construction" },
    { value: "option2", viewValue: "Option2" },
    { value: "option3", viewValue: "Option3" },
    { value: "option4", viewValue: "Option4" },
    { value: "option5", viewValue: "Option5" },
    { value: "option6", viewValue: "Option6" }
  ];

  constructor(private fb: FormBuilder, private bs: BuildingsService) {}

  ngOnInit() {
    this.createBuildingForm();
  }

  createBuildingForm() {
    this.buildingForm = this.fb.group({
      name: [""],
      description: [""],
      heightInMeters: [""],
      heightInFeet: [""],
      status: [""],
      city: [""],
      country: [""],
      use: [""],
      type: [""]
    });
  }

  saveBuilding(data?: Building) {
    const formData: Building = {
      name: this.buildingForm.get("name").value,
      description: this.buildingForm.get("description").value,
      heightInMeters: this.buildingForm.get("heightInMeters").value,
      heightInFeet: this.buildingForm.get("heightInFeet").value,
      status: this.buildingForm.get("status").value,
      city: this.buildingForm.get("city").value,
      country: this.buildingForm.get("country").value,
      use: this.buildingForm.get("use").value,
      type: this.buildingForm.get("type").value
    };
    if (!this.buildingForm.untouched) {
      this.bs.create(formData);
      this.buildingForm.reset();
    }
  }
}
