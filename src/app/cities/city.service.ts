import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { City } from "./city.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CityService {
  cityCollection: AngularFirestoreCollection<City>;
  cityRef: AngularFirestoreDocument<City>;

  constructor(private afs: AngularFirestore) {
    this.cityCollection = this.afs.collection("cities", ref =>
      ref.orderBy("numberOfHighrises").limit(10)
    );
  }

  createCity(formData: City) {
    this.cityCollection.add(formData);
  }

  getCities(): Observable<City[]> {
    return this.cityCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as City;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCity(id: string) {
    return this.afs.doc<City>(`cities/${id}`);
  }
}
