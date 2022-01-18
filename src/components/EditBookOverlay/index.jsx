import React, { PureComponent } from 'react'
import { observer } from 'mobx-react'

// states
import { BooksStore } from '../../store/books'

const booksStore = BooksStore

@observer
export class EditBookOverlay extends PureComponent {
    constructor() {
        super()

        this.state = {
            title: '',
            author: '',
            image: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(ev) {
        const { value, name } = ev.currentTarget

        this.setState((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    onSubmitHandler(ev) {
        ev.preventDefault()

        booksStore.updateBook(this.props.id, this.state)
    }

    render() {
        const { title, image, author, desc } = this.props.editData

        return (
            <div id='edit-book-push' uk-offcanvas='mode: push; overlay: true'>
                <form 
                    className='uk-offcanvas-bar' 
                    style={{ padding: 20 }}
                    onSubmit={this.onSubmitHandler}
                >
                    <h3>Edit book</h3>

                    <div>
                        <label className='d-inline-block uk-margin-small-bottom'>
                            Title
                        </label>

                        <input 
                            defaultValue={title}
                            className='uk-input uk-form-width-medium uk-width-1-1' 
                            type='text' 
                            placeholder='Enter title' 
                            name='title'
                            onChange={this.onChangeHandler}
                        />
                    </div>

                    <div className='uk-margin-top'>
                        <label className='d-inline-block uk-margin-small-bottom'>
                            Author
                        </label>

                        <input
                            defaultValue={author}
                            className='uk-input uk-form-width-medium uk-width-1-1' 
                            type='text'
                            placeholder='Enter author name' 
                            name='author'
                            onChange={this.onChangeHandler}
                        />
                    </div>

                    <div className='uk-margin-top'>
                        <textarea 
                            defaultValue={desc}
                            className='uk-textarea' 
                            rows='5' 
                            placeholder='Enter description'
                            name='desc'
                            onChange={this.onChangeHandler}
                        >
                        </textarea>
                    </div>

                    <div className='uk-margin-top'>
                        <label className='d-inline-block uk-margin-small-bottom'>
                            Image link
                        </label>

                        <input 
                            defaultValue={image}
                            className='uk-input uk-form-width-medium uk-width-1-1' 
                            type='text'
                            placeholder='Put image link' 
                            name='image'
                            onChange={this.onChangeHandler}
                        />
                    </div>

                    <div className='uk-margin-medium-top'>
                        <button className='uk-button uk-button-primary uk-width-1-1'>
                            <span uk-icon='plus' />
                            &nbsp; 
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}