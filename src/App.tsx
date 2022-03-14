import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Auth from "./components/Auth";
import Feed from "./components/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./App.module.css";
import styles from "./App.module.css"

const App: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            dispatchName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);

  return <>
    {user.uid ? (
      <div className={styles.app}>
        <Feed />
      </div>
    ) : (
      <Auth />
    )}
  </>;
};

export default App;
