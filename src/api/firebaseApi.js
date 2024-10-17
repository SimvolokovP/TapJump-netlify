import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";

export default class UsersService {
  static async getAllUsers() {
    try {
      const ref = query(
        collection(firebaseDB, "users"),
        orderBy("score", "desc")
      );
      const querySnapshot = await getDocs(ref);
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      return users;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async shortTimeout(id) {
    const currentTime = Timestamp.now();
    const time = new Timestamp(
      currentTime.seconds + 60,
      currentTime.nanoseconds
    );
    try {
      const userRef = doc(firebaseDB, "users", String(id));
      await updateDoc(userRef, {
        farmEnd: time,
      });
      console.log("UPDATE!");
    } catch (error) {
      console.error("Error updating user score:", error);
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const q = query(collection(firebaseDB, "users"), where("id", "==", id));
      const querySnapshot = await getDocs(q);
      let user = null;

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          user = { ...doc.data(), id: doc.id };
        });
      }

      if (!user) {
        user = { id: id, score: 0, isFarm: false, farmEnd: null, isSub: false };
        const userRef = doc(firebaseDB, "users", String(id));
        await setDoc(userRef, user);
      }

      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async addUserScore(user) {
    console.log(user);
    try {
      const userRef = doc(firebaseDB, "users", String(user.id));
      await updateDoc(userRef, {
        score: user?.score + 1000,
        isFarm: false,
        farmEnd: null,
      });
      console.log("UPDATE!");
    } catch (error) {
      console.error("Error updating user score:", error);
      throw error;
    }
  }

  static async updateFarmState(user, time) {
    console.log(user);
    try {
      const userRef = doc(firebaseDB, "users", String(user.id));
      await updateDoc(userRef, {
        isFarm: true,
        farmEnd: time,
      });
      console.log("UPDATE!");
    } catch (error) {
      console.error("Error updating user score:", error);
      throw error;
    }
  }
  static async resetAll() {
    try {
      const ref = collection(firebaseDB, "users");
      const querySnapshot = await getDocs(ref);
      const updates = querySnapshot.docs.map((doc) => {
        return updateDoc(doc.ref, {
          isFarm: false,
          farmEnd: null,
          isSub: false,
          score: 0,
        });
      });
      await Promise.all(updates);
      console.log("All users' farm states have been reset!");
    } catch (error) {
      console.error("Error resetting farm states:", error);
      throw error;
    }
  }
  static async resetAllFarmStates() {
    try {
      const ref = collection(firebaseDB, "users");
      const querySnapshot = await getDocs(ref);
      const updates = querySnapshot.docs.map((doc) => {
        return updateDoc(doc.ref, {
          isFarm: false,
          farmEnd: null,
        });
      });
      await Promise.all(updates);
      console.log("All users' farm states have been reset!");
    } catch (error) {
      console.error("Error resetting farm states:", error);
      throw error;
    }
  }
  static async resetAllSubStates() {
    try {
      const ref = collection(firebaseDB, "users");
      const querySnapshot = await getDocs(ref);
      const updates = querySnapshot.docs.map((doc) => {
        return updateDoc(doc.ref, {
          isSub: false,
        });
      });
      await Promise.all(updates);
      console.log("All users' farm states have been reset!");
    } catch (error) {
      console.error("Error resetting farm states:", error);
      throw error;
    }
  }
  static async getStatusSubs(user) {
    console.log(user);
    try {
      const userRef = doc(firebaseDB, "users", String(user.id));
      await updateDoc(userRef, {
        isSub: true,
        score: user?.score,
      });
      console.log("UPDATE!");
    } catch (error) {
      console.error("Error updating user score:", error);
      throw error;
    }
  }
}
