import React, {useState, useEffect} from 'react';
import './App.css';
//import {Link} from 'react-router-dom';

function HeroDetail({ match }) {
    
    useEffect(() => {
        fetchItem({match});
        console.log(match);
        console.log("This is the match " + match.params.id);

    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        // const fetchItem = await fetch("https://cors-anywhere.herokuapp.com/https://best-overwatch-api.herokuapp.com/heroes/${match.params.id}");
        const fetchItem = await fetch("https://cors-anywhere.herokuapp.com/https://best-overwatch-api.herokuapp.com/heroes");

        const item = await fetchItem.json();
        console.log(item[match.params.id-1]);

        setItem(item[match.params.id-1]);
        console.log(item[match.params.id-1]);

    };
    return (
        <div >
           <h1>{item.name}</h1>
        </div>
    );
}

export default HeroDetail;
