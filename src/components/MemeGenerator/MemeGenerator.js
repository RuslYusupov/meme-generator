import './MemeGenerator.css';
import {useState, useEffect} from 'react';

function MemeGenerator() {
    const [inputData, setInputData] = useState({topText: "", bottomText: ""})
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, setAllMemeImgs] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            setAllMemeImgs(memes)
        })
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * allMemeImgs.length)
        const randMemeImg = allMemeImgs[randNum].url
        setRandomImg(randMemeImg)
    }

    return (
        <main>
            <div className="main-container">
                <form className="meme-form" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={inputData.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={inputData.bottomText}
                        onChange={handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={randomImg} alt="Meme" />
                    <h2 className="top">{inputData.topText}</h2>
                    <h2 className="bottom">{inputData.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}

export default MemeGenerator

/* 
Протестировать библиотеки для скриншотов 
Создать поля по каждый мем 
*/
