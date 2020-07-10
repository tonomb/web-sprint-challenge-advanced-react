import React, {useState,useEffect} from 'react';
import '../App.css'

function DarkModeToggle(){
    const [darkmode, setDarkMode] = useState(()=>{
        const item = window.localStorage.getItem('darkMode');
        return item ? JSON.parse(item) : true;
    })

    function toggleMode(){
        setDarkMode(!darkmode)
        window.localStorage.setItem('darkMode', JSON.stringify(!darkmode))
    }

    useEffect(()=>{
        const body= document.querySelector('body');
        const plantName = document.querySelectorAll('.plant-name')
        const plantDetails = document.querySelectorAll('.plant-details')
        const title = document.querySelector('h1')
        const form = document.querySelector('form')
        const input = document.querySelectorAll('input')
    
    
        if(!darkmode){
            body.classList.add('light-mode')
            title.classList.add('light-mode')
            form.classList.add('light-mode')
            plantName.forEach(plant =>{
                plant.classList.add('light-mode')
            })
            plantDetails.forEach(plant =>{
                plant.classList.add('light-mode')
            })
            input.forEach(input =>{
                input.classList.add('light-mode-input')
            })
        }
        
        if(darkmode){
            body.classList.remove('light-mode')
            title.classList.remove('light-mode')
            form.classList.remove('light-mode')
            plantName.forEach(plant =>{
                plant.classList.remove('light-mode')
            })
            plantDetails.forEach(plant =>{
                plant.classList.remove('light-mode')
            })
            input.forEach(input =>{
                input.classList.remove('light-mode-input')
            })
        }
    },[darkmode])

    return(
        <div className='toggle-darkmode'>
            {
                darkmode 
                ? <button onClick={toggleMode}>Light</button>
                : <button onClick={toggleMode}>Dark</button>

            }
        </div>
    )
}

export default DarkModeToggle;