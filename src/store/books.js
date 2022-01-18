import { action, makeAutoObservable } from 'mobx'
import { addDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

// utils
import { colRef, db } from '../firebase'

class Books {
    books = []
    colRef = colRef

    constructor() {
        makeAutoObservable(this)
    }

    @action
    async getBooks() {
        const data = await getDocs(this.colRef)

        this.books = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }

    @action
    async addBook(data) {
        await addDoc(this.colRef, data)

        this.books.push(data)
    }

    @action
    async updateBook(id, data) {
        const bookDoc = doc(db, 'books', id)

        updateDoc(bookDoc, data)
        .then(() => {
            this.books = [ ...this.books ].map((book) => {
                if(book.id === id) return data
    
                return book
            })
        })
    }

    @action
    removeBook(id) {
        this.books = [ ...this.books ].filter((i) => i.id !== id)
    }
}

export const BooksStore = new Books()