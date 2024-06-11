import { initializeApp } from "firebase/app";
import { getDatabase, ref, update } from "firebase/database";
import Config from '../config';

const app = initializeApp(Config.firebaseConfig);
const db = getDatabase(app);


export function updateClean(firebaseRef, valueMaybeUndefined) {

  //          _                       _   _  _
  //  /|     |_ o      _|_ |_   _    |_) |_ |_
  //   | o   |  | ><    |_ | | (/_   | \ |_ |

  // Because it may be a Vue Proxy, which causes an error if you are also
  // listening at that firebase location, we must reconstitute the 
  // reference from the path.

  const targetPath = firebaseRef._path.pieces_.join("/");
  const targetRef = ref(db, targetPath);

  // _       _                                       _
  //  )     |_ o      _|_ |_   _    \  / /\  |  | | |_
  // /_ o   |  | ><    |_ | | (/_    \/ /--\ |_ |_| |_

  // Because we are not allowed to write undefined to Firebase, 
  // we convert it to null.

  const valueNeverUndefined =
    valueMaybeUndefined === undefined ? null : valueMaybeUndefined;

  console.log("updateClean", targetPath, valueNeverUndefined);
  return update(targetRef, valueNeverUndefined);
}