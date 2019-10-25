import { Injectable } from "@angular/core";
import { Building } from "./building.model";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BuildingsService {
  buildingCollection: AngularFirestoreCollection<Building>;
  buildingRef: AngularFirestoreDocument<Building>;

  constructor(private afs: AngularFirestore) {
    this.buildingCollection = this.afs.collection("buildings", ref =>
      ref.orderBy("heightInMeters", "desc").limit(10)
    );
  }

  create(data: Building) {
    this.buildingCollection.add(data);
  }

  getBuildings(): Observable<Building[]> {
    return this.buildingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Building;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getBuilding(id: string) {
    return this.afs.doc(`buildings/${id}`);
  }
}
