import { defineStore } from "pinia";
import { db } from "./../../composables/firebase";
import {
  collection,
  getDocs,
  addDoc,
  orderBy,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export const useTasksStore = defineStore("tasksStore", {
  state: () => {
    return {
      tasks: [],
    };
  },
  actions: {
    async getAllTasks() {
      try {
        const response = await getDocs(
          query(collection(db, "tasks"), orderBy("createdDate")),
        );
        this.tasks = [];
        response.forEach((task) => {
          this.tasks.push({
            id: task.data().id,
            name: task.data().name,
            description: task.data().description,
          });
        });
        return this.tasks;
      } catch (e) {
        //
      }
    },
    async addTask(task) {
      try {
        const response = await addDoc(collection(db, "tasks"), task);
        return response;
      } catch (e) {
        //
      }
    },
    async editTask(id, newTask) {
      try {
        const response = await updateDoc(doc(db, "tasks", id), newTask);
        return response;
      } catch (e) {
        //
      }
    },
    async deleteTaskById(id) {
      const response = await deleteDoc(doc(db, "tasks", id));
      return response;
    },
  },
});
