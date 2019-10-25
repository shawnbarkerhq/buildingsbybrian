export interface Building {
  name: string;
  description?: string;
  heightInMeters: number;
  heightInFeet: number;
  status: string;
  city: string;
  country: string;
  use?: string;
  type: string;
}
