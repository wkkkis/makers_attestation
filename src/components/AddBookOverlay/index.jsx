import React, { Component } from 'react'
import { observer } from 'mobx-react'

// states
import { AddBookOverlayStore } from '../../store/addBookOverlay'

const addBookOverlayStore = AddBookOverlayStore

@observer
export class AddBookOverlay extends Component {
    constructor() {
        super()

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onSubmitHandler(ev) {
        ev.preventDefault()

        addBookOverlayStore.submit((data) => {
            this.props.onSubmit(data)
        })
    }

    onChangeHandler(ev) {
        const { name, value } = ev.currentTarget

        addBookOverlayStore.changeField(name, value)
    }

    render() {
        const { title, image, author, desc } = addBookOverlayStore.form

        return (
            <div id='add-book-push' uk-offcanvas='mode: push; overlay: true'>
                <form 
                    className='uk-offcanvas-bar' 
                    style={{ padding: 20 }}
                    onSubmit={this.onSubmitHandler}
                >
                    <h3>Add new book</h3>

                    <div>
                        <label className='d-inline-block uk-margin-small-bottom'>
                            Title
                        </label>

                        <input 
                            value={title}
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
                            value={author}
                            className='uk-input uk-form-width-medium uk-width-1-1' 
                            type='text'
                            placeholder='Enter author name' 
                            name='author'
                            onChange={this.onChangeHandler}
                        />
                    </div>

                    <div className='uk-margin-top'>
                        <textarea 
                            value={desc}
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
                            value={image}
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
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}