import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserRole = new BehaviorSubject<string | null>(null);

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  signUp(email: string, password: string, role: string, firstName: string, lastName: string, commune: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          return this.firestore.collection('users').doc(userCredential.user.uid).set({
            email,
            role,
            firstName,
            lastName,
            commune
          });
        } else {
          throw new Error('No user ID found after registration');
        }
      });
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  fetchAndSetUserRole(uid: string): Promise<void> {
    return this.firestore.collection('users').doc(uid).get().toPromise().then((documentSnapshot) => {
      // On vérifie si documentSnapshot est défini ET si le document existe avant de continuer
      if (documentSnapshot && documentSnapshot.exists) {
        const data = documentSnapshot.data() as { role: string };
        this.setCurrentUserRole(data.role);
      } else {
        this.setCurrentUserRole(null);
      }
    }).catch(error => {
      console.error("Error fetching user role: ", error);
      this.setCurrentUserRole(null);
    });
  }
  

  setCurrentUserRole(role: string | null): void {
    this.currentUserRole.next(role);
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  getCurrentUserRole() {
    return this.currentUserRole.asObservable();
  }


  getUserData(uid: string): Observable<any> {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  updateUserData(uid: string, data: any): Promise<void> {
    return this.firestore.collection('users').doc(uid).update(data);
  }


}
