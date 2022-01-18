import { makeAutoObservable } from 'mobx'

class AddBookOverlay {
    form = {
        title: '',
        author: '',
        image: ''
    }
    errors = {
        title: false,
        author: false
    }

    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    changeField(name, value) {
        this.form[name] = value
    }

    clear() {
        this.form = {
            title: '',
            author: '',
            image: ''
        }
    }

    submit(callback) {
        if(!this.form.title.trim().length) this.errors.title = true
        if(!this.form.author.trim().length) this.errors.author = true

        if(this.errors.title || this.errors.author) return

        callback(this.form)
    }
}

export const AddBookOverlayStore = new AddBookOverlay()