import { defineStore } from 'pinia'

export const useQusetionStore = defineStore('store',{
    state: () => {
        return {
            currentQuestions:[],
            answers:[],
            currentScore:0
        }
    },
})