// Importe les modules nécessaires pour effectuer les tests unitaires en Angular.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Importe la classe HomePage depuis le fichier './home.page' pour tester cette composante.
import { HomePage } from './home.page';

// Définit une suite de tests pour la composante HomePage.
describe('HomePage', () => {
  // Déclare des variables pour stocker l'instance de la composante HomePage et son fixture (pour les tests).
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // Avant chaque test asynchrone, configure le module de test Angular.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Déclare la composante HomePage comme composant à tester.
      declarations: [HomePage],
      // Importe le module IonicModule pour les tests.
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    // Crée un objet fixture qui encapsule la composante HomePage.
    fixture = TestBed.createComponent(HomePage);
    // Récupère l'instance de la composante HomePage depuis le fixture.
    component = fixture.componentInstance;
    // Déclenche la détection de changements dans la composante.
    fixture.detectChanges();
  });

  // Définit un test unitaire : "should create"
  it('should create', () => {
    // Vérifie si l'instance de la composante HomePage a été créée avec succès.
    expect(component).toBeTruthy();
  });
});

