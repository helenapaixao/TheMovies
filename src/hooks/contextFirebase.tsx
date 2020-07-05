 
import { firestore } from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore/memory';
import { createContext } from 'react';

const addFavourite = async (uid: string, fav: object) => {
  return firestore()
    .collection('favs')
    .doc(uid)
    .set(fav, { merge: true });
};



export const getFavourites = async (uid: string): Promise<firestore.DocumentSnapshot<firestore.DocumentData>> => (firestore().collection('favs').doc(uid).get());

export const setContext = (contextFx: React.Dispatch<any>, context: any, properties: any, favourites: any = []): void => {
  contextFx({
    ...init,
    ...context,
    user: properties.user,
    signOut: properties.signOut,
    signInWithEmailAndPassword: properties.signInWithEmailAndPassword,
    createUserWithEmailAndPassword: properties.createUserWithEmailAndPassword,
    favourites,
    error: properties.error,
  });
};

export const init = {
  user: {},
  signInWithEmailAndPassword: null,
  createUserWithEmailAndPassword: null,
  favourites: [],
  error: null,
  addFavourite,
  getFavourites
}
const UserContext = createContext(init);

export default UserContext