import {defineStore} from "pinia";

export const nameStore = defineStore("store", {
    state: () => ({
        age: 45,
        name: "Reza"
    }),
    actions: {
        increaseAge(): void {
            this.age++;
        }
    },
    getters: {
        tooOld(): string {
            if (this.age > 50) {
                return "You are too old!";
            }
            return "You are NOT too old for this!";
        }
    }
});