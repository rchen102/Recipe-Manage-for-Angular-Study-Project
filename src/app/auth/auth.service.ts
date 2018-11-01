import * as firebase from 'firebase/app';
import 'firebase/auth';

export class AuthService {
	signupUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.catch(
				error => console.log(error)
			);
	}

	signinUser(email: string, password: string) {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				response => console.log(response)
			)
			.catch(
				error => console.log(error)
			);
	}
}