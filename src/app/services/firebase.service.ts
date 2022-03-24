import { Injectable } from '@angular/core';
import { getFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(public database: AngularFirestore) { }
//CRUD
  //crear reserva
  createDoc(data: any, path: string, id: string){
    //llamar coleccion
    const collection = this.database.collection(path);
    //documento
    return collection.doc(id).set(data);
  }
  //ver los datos de la base de datos
  getDoc(path: string, id: string){
    //llamar a la coleccion
    const collection = this.database.collection(path);
    //funcion para validar los cambios en un documento por id
    return collection.doc(id).valueChanges();
  }
  //eliminar
  deleteDoc(path: string, id: string){
    //llamar a la coleccion
    const collection = this.database.collection(path);
    //funcion para eliminar un documento por su id
    return collection.doc(id).delete();
  }
  //actualizar
  updateDoc(data: any, path: string, id: string){
    //llamar a la coleccion
    const collection = this.database.collection(path);
    //funcion para actualizar un documento por su id
    return collection.doc(id).update(data);
  }
  //generar id
  getId(){
    return this.database.createId();
  }
}
