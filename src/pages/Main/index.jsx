import React, { Component } from 'react'
import { observer } from 'mobx-react'

// components
import { CardItem } from '../../components/CardItem'
import { AddBookOverlay } from '../../components/AddBookOverlay'
import { EditBookOverlay } from '../../components/EditBookOverlay'

// states
import { BooksStore } from '../../store/books'

// styles
import './Main.scss'

const booksStore = BooksStore

@observer
export class MainPage extends Component {
    constructor() {
        super()

        this.state = {
            editData: {},
            id: null,
            loaded: false
        }

        this.createBook = this.createBook.bind(this)
        this.setEditData = this.setEditData.bind(this)
    }

    componentDidMount() {
        this.getBooks()
    }

    async getBooks() {
        await booksStore.getBooks()

        this.setState((prev) => ({
            ...prev,
            loaded: true
        }))

        console.log(this.props)
    }

    async createBook(data) {
        await booksStore.addBook(data)

        this.setState((prev) => ({
            ...prev,
            loaded: true
        }))
    }
    
    setEditData(id, data) {
        this.setState((prev) => ({
            ...prev,
            id,
            editData: {
                ...data
            }
        }))
    }

    render() {
        if(!this.state.loaded) return (
            <div className='spinner-loader'>
                <span class="uk-margin-small-right" uk-spinner="ratio: 3"></span>
            </div>
        )

        return (
            <div>
                <div style={{ padding: 30 }}>
                    <h1 class='uk-heading-line'>
                        <span>All books</span>
                    </h1>

                    <button 
                        class="uk-button uk-button-primary uk-margin-top"
                        uk-toggle="target: #add-book-push"
                    >
                        <span uk-icon='plus' />
                        &nbsp; 
                        Add book
                    </button>
                </div>

                <div 
                    className='uk-grid-collapse uk-grid-match uk-child-width-1-3@m' 
                    uk-grid='true'
                >
                    {
                        booksStore.books.map((book, index) => (
                            <CardItem 
                                { ...book }
                                isLight={index % 2}
                                onClick={() => this.setEditData(book.id, book)}
                                key={index}
                            />
                        ))
                    }
                </div>

                <AddBookOverlay 
                    onSubmit={this.createBook}
                />

                <EditBookOverlay 
                    editData={this.state.editData}
                    id={this.state.id}
                />
            </div>
        )
    }
}