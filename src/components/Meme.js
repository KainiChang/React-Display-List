
import React from 'react';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })


    function handleChange(event){
        const {name, value}=event.target
        setMeme(prev=>({
                ...prev,
                [name]:value
        }))
    }

    const [allMemeImages,setAll] = React.useState([])

React.useEffect(()=>{
    async function getMemes(){
       const res= await fetch("https://api.imgflip.com/get_memes")
       const data=await res.json()
       setAll(data.data.memes)
    }
getMemes()
},[])

function getMemeImage() {
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
                <input type="text" name="topText" onChange={handleChange} value={meme.topText} placeholder="Top text" className="form--input"></input>
                <input type="text" name="bottomText" onChange={handleChange} value={meme.bottomText} placeholder="Bottom text" className="form--input"></input>
                <button onClick={getMemeImage} className="form--btn">Get a new meme image</button>

            </div>
            <div className='meme'>
                 <img src={meme.randomImage} className="randomMeme" alt="new" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )

}