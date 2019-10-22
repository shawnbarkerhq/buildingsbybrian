import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { Country } from "./country.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  countryCollection: AngularFirestoreCollection<Country>;
  countryDoc: AngularFirestoreDocument<Country>;

  constructor(private afs: AngularFirestore) {
    this.countryCollection = this.afs.collection("countries", ref =>
      ref.orderBy("founded", "desc").limit(10)
    );
  }

  getCountries(): Observable<Country[]> {
    return this.countryCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Country;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCountry(id: string) {
    return this.afs.doc<Country>(`countries/${id}`);
  }
}
