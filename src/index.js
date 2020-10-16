import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';

const tag= (
    <div>
        <div style={{backgroundColor:'aqua',textAlign:'center',fontSize:'24px',marginBottom:'20px'}}>
            <Header/>
            <p>FrontEnd</p>
        </div>

        <div style={{backgroundColor:'red',textAlign:'center',fontSize:'24px'}}>
            <Slider/>
        <ul>
            <li style={{listStyle:'none'}}>React Js</li>
            <li style={{listStyle:'none'}}>Html</li>
            <li style={{listStyle:'none'}}>css</li>
        </ul>  

        </div>

        <div style={{backgroundColor:'pink',textAlign:'center',fontSize:'24px'}}>
            <Footer/>
            <p>Binaya Bhattarai</p>
        </div>
    </div>
);
ReactDOM.render(tag,document.getElementById("root"))