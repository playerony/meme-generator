import React, { Component } from 'react'

import Image from '../components/Image'
import ReactCanvas from './ReactCanvas'
import Button from './Button'
import Navbar from './Navbar'

import images from '../utils/image-loader'

import '../styles/app.css'

class App extends Component {

    constructor() {
        super()

        this.state = {
            indexOfImage : 0,
            topText: '',
            bottomText: ''
        }

        this.handleBottomInputChange = this.handleBottomInputChange.bind(this)
        this.handleTopInputChange = this.handleTopInputChange.bind(this)
    }

    handleImageClick(index){
        this.setState({
            indexOfImage: index
        })
    }

    handleTopInputChange(event){
        this.setState({
            topText: event.target.value
        })
    }

    handleBottomInputChange(event){
        this.setState({
            bottomText: event.target.value
        })
    }

    resetInput(input){
        if(input === 'bottom'){
            this.setState({
                bottomText : ''
            })
        }
        else if(input === 'top'){
            this.setState({
                topText : ''
            })
        }
    }

    handleSaveButtonClick(){
        let canvas = document.getElementById('canvas')
        let canvasimage = document.createElement('img')
        canvasimage = canvas.toDataURL('image/png')

        const w = window.open('about:blank', 'img')
        w.document.write('<iframe src="' + canvasimage + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
    }

    render() {
        return (
            <div>
                <Navbar />

                <main>
                    {images.length > 0 &&
                        <div>
                            <div>
                                {images.map((e, index) => {
                                    return <Image onClick={()=> this.handleImageClick(index)} 
                                                value={index} 
                                                source={images[index]} 
                                                key={index} />
                                })}
                            </div>
                            <div>
                                <ReactCanvas image={images[this.state.indexOfImage]} 
                                            topText={this.state.topText} 
                                            bottomText={this.state.bottomText}/>
                            </div>
                            <div>
                                <input maxLength='36' value={this.state.topText} onChange={this.handleTopInputChange} placeholder='top text' type='text'/>
                                <Button onClick={() => this.resetInput('top')} name='clear'/>
                                <input maxLength='36' value={this.state.bottomText} onChange={this.handleBottomInputChange} placeholder='bottom text'  type='text'/>
                                <Button onClick={() => this.resetInput('bottom')} name='clear'/><br/>
                                <Button onClick={() => this.handleSaveButtonClick()} name='generate'/>
                            </div>
                        </div>
                    }
                </main>
            </div>
        )
    }
}
export default App