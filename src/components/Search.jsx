import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Search = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    let params = useParams();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);

        setInput('');
    }
    
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        
        <input onChange={(e) => setInput(e.target.value)}
         type="text" value={input} />
         <FaSearch />
        </div>
        <h4>{input}</h4>
    </FormStyle>
  )
}

const FormStyle = styled.form`
        margin: 0rem 0rem;


        div{
            position: relative;
            width: 80%;
            display: flex;
            align-items: flex-start;

        }

        input {
            border: none;
            background: linear-gradient(35deg, #494949, #313131);
            font-size:  1.3rem;
            color: white;
            padding: 0.5rem 3rem;
            border: none;
            border-radius: 0.5rem;
            outline: none;
            width: 100%;
            font-family: 'Times New Roman', Times;
        }

        svg{ 
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(100%, -50%);
            color: white;
        }

        h4{
            margin: 2rem 1rem;
            font-family: "Monserrat" ;
        }


        @media screen and (min-width: 480px) {
            input {
            
        }
        }
`

export default Search