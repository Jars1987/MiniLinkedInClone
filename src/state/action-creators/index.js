import {
  LOADING,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_ERROR,
  REGISTER_ERROR,
  FETCH_POSTS,
  CREATE_POST_ERROR,
} from '../types';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../../firebase';
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';

const auth = getAuth();

export const registerUser =
  (name, email, password, profilePicture) => async dispatch => {
    dispatch({ type: LOADING });
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName: name,
        photoURL: profilePicture,
      });
      const user = {
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        photoURL: auth.currentUser.photoURL,
      };
      console.log(auth.currentUser);
      console.log(user);
      dispatch({ type: LOGIN_USER, payload: user });
    } catch (e) {
      dispatch({
        type: REGISTER_ERROR,
        payload: 'Email adress already exists.',
      });
    }
  };

export const loginUser = (email, password) => async dispatch => {
  dispatch({ type: LOADING });
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const loggedInUser = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL,
    };
    dispatch({ type: LOGIN_USER, payload: loggedInUser });
  } catch (e) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: 'User not registered or incorrect password/email',
    });
  }
};

export const logoutUser = () => {
  auth.signOut();
  return { type: LOGOUT_USER };
};

export const fetchPosts = () => async dispatch => {
  const q = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'));
  const querySnapshot = await getDocs(q);
  const data = [];
  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, data: doc.data() });
  });
  dispatch({ type: FETCH_POSTS, payload: data });
};

export const createPost = (input, name, email, photoURL) => async dispatch => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      name: name,
      description: email,
      message: input,
      photoURL: photoURL,
      timeStamp: serverTimestamp(),
    });
    console.log(docRef);
    dispatch(fetchPosts());
  } catch (e) {
    dispatch({
      type: CREATE_POST_ERROR,
      payload: 'Something went wrong, try again later!',
    });
  }
};

export const isLogedIn = () => async dispatch => {
  dispatch({ type: LOADING });
  await auth.onAuthStateChanged(user => {
    if (user) {
      const loggedInUser = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
      };
      dispatch({ type: LOGIN_USER, payload: loggedInUser });
    } else {
      dispatch({ type: LOGOUT_USER, payload: null });
    }
  });
};
