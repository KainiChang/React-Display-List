import React from 'react';
import memesData from '../memesData';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })

    function getMemeImage() {
        const allMemeImages = memesData
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        let url =allMemeImages[randomNumber].url
        setMeme(prev=>({
            ...prev,
            randomImage: url
        }))
    }


    return (
        <main className="main">
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"></input>
                <input type="text" placeholder="Bottom text" className="form--input"></input>
                <button onClick={getMemeImage} className="form--btn">Get a new meme image</button>

            </div>
            <img src={meme.randomImage} className="randomMeme" alt="new" />
        </main>
    )

}