import { useEffect, useState } from "react";
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from "react-router-dom";

const Veggie = () => {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, [])

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check))
        }else{
            const api = await fetch(
                ` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json();

            console.log(data);
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
        
            setVeggie(data.recipes)
        }
        

        
    }

  return (
    <div>
           <Wrapper>
               <h3>Our Vegetarians Picks</h3>
               <Splide options={{
                   perPage: 3,
                   arrows: true,
                   pagination: true,
                   drag: "free",
                   gap: "4rem",
                   perMove: 1
                  
               }}>
               {veggie.map((recipe) => {
                   return(
                    <SplideSlide key={recipe.id}>
                        <Card>
                        <Link to={"/recipe/" + recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient />
                        </Link>
                        </Card>
                    
                    </SplideSlide>
                   )
               })}
               </Splide>
           </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;

`;

const Card = styled.div`
    min-height: 18rem;
    border-radius: 3.5rem;
    overflow: hidden;
    width: 100%;
    position: relative;

    img{
        min-height: 15rem;
        border-radius: 3.5rem;
        position: absolute;
        left:0;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left:50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
`;

const Gradient = styled.div`
        z-index: 3;
        position: absolute;
        height: 100%;
        width: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

`;

export default Veggie
