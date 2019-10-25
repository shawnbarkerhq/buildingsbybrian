import { TestBed } from "@angular/core/testing";

import { CityService } from "./city.service";

describe("CitiesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CityService = TestBed.get(CityService);
    expect(service).toBeTruthy();
  });
});
