import {db} from "../../firebase"

import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, setDoc } from "firebase/firestore";


export const createTask = async (task, user) => {
    const userCollection = collection(db, "tasks");
    await addDoc(userCollection, 
        {
            titulo: task,
            status: false,
            user: user.uid
        }
        );

}

export const getTasks = async (user) => {
    const userCollection = collection(db, "tasks");
    const querySnapshot = await getDocs(userCollection);
    const tasks = [];
    querySnapshot.forEach((doc) => {
        if(doc.data().user === user.uid){
            tasks.push({...doc.data(), id: doc.id});
        }
    });
    return tasks;
}

export const deleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
}

export const updateTask = async (id, status) => {
    const taskDoc = doc(db, "tasks", id);
    await setDoc(taskDoc, {status: status }, {merge: true});
}