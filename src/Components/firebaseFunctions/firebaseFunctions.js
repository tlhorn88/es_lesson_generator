import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { firestore, auth } from '../../firebaseConfig';

export const addSong = async (song) => {
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(firestore, 'users', user.uid);
    const songsCollectionRef = collection(userDocRef, 'addedSongs');
    await setDoc(doc(songsCollectionRef), song);
    console.log('Song added:', song);
  } else {
    console.log('No user logged in');
  }
};

export const fetchUserSongs = async () => {
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(firestore, 'users', user.uid);
    const songsCollectionRef = collection(userDocRef, 'addedSongs');
    const snapshot = await getDocs(songsCollectionRef);
    const songs = snapshot.docs.map(doc => doc.data());
    console.log('User songs:', songs);
    return songs;
  } else {
    console.log('No user logged in');
    return [];
  }
};
