import React, { Component } from 'react'

export class CardItem extends Component {
    render() {
        return (
            <div 
                className={`${this.props.isLight ? 'uk-light' : 'uk-dark'} cursor-pointer`}
                uk-toggle='target: #edit-book-push'
                onClick={this.props.onClick}
            >
                <div
                    className={`uk-card uk-card-small uk-card-hover ${this.props.isLight ? 'uk-card-default' : 'uk-card-secondary'}`}
                >
                    {
                        this.props.image && (
                            <div className='uk-card-media-top uk-padding-small'>
                                <img 
                                    src={ this.props.image } 
                                    alt='404' 
                                    className='uk-width-1-1'
                                />
                            </div>
                        )
                    }

                    <div className='uk-card-body'>
                        <h3 className='uk-card-title'>
                            { this.props.title }
                        </h3>

                        <p className='text-ellipsis-break'>
                            Author: { this.props.author }
                        </p>

                        <p className='text-ellipsis-break'>
                            Description: { this.props.desc || '-' }
                        </p>

                        <div class='uk-card-badge uk-label'>
                            Now
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}