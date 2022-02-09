import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPokemon } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";

export default function CreatePokemon() {
  const dispatch = useDispatch();
  const history = useHistory();
  const getAllTypes = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    sprite: "",
    types: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    /* setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
        console.log(e) */
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemon(input));
    alert("Pokemon creado con éxito");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      sprite: "",
      types: [],
    });
    console.log(setInput);
    history.push("/home");
  };

  const handleChangeType = (e) => {
    setInput({ ...input, types: [...input.types, e.target.value] });
  };

  const handleDelete = (el) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== el),
    });
  };

  /* const validate = () => {
        let errors = {};
        if(!input.name) {
            errors.name = 'Es obligatorio colocar un nombre';
        } else if(!input.sprite) {
            errors.sprite = 'No olvides seleccionar tu imagen';
        } else if(!input.hp) {
            errors.hp = 'El pokemon debe tener vida'
        }
        return errors;
    } */

  return (
    <div>
      <NavBar />
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              required
              value={input.name}
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {/* {errors.name && (<p className={style.error}>{errors.name}</p>)} */}

            <label>Nombre:</label>
          </div>
          <div>
            <input
              required
              type="number"
              min="0"
              max="200"
              name="hp"
              onChange={(e) => handleChange(e)}
            />
            {/* {errors.hp && (<p className={style.error}>{errors.hp}</p>)} */}

            <label>Salud:</label>
          </div>
          <div>
            <input
              required
              type="number"
              min="0"
              max="200"
              name="attack"
              onChange={(e) => handleChange(e)}
            />

            <label>Ataque:</label>
          </div>
          <div>
            <input
              required
              type="number"
              min="0"
              max="200"
              name="defense"
              onChange={(e) => handleChange(e)}
            />

            <label>Defensa:</label>
          </div>
          <div>
            <input
              required
              type="number"
              min="0"
              max="200"
              name="speed"
              onChange={(e) => handleChange(e)}
            />

            <label>Velocidad:</label>
          </div>
          <div>
            <input
              required
              type="number"
              min="0"
              max="200"
              name="height"
              onChange={(e) => handleChange(e)}
            />

            <label>Altura:</label>
          </div>
          <div>
            <input
              required
              type="number"
              min="0"
              max="200"
              name="weight"
              onChange={(e) => handleChange(e)}
            />
            <span></span>
            <span></span>
            <label>Peso:</label>
          </div>
          <div>
            <input
              required
              type="text"
              name="sprite"
              onChange={(e) => handleChange(e)}
            />

            <label>Imagen:</label>
          </div>
          <div>
            <p>Type:</p>
            <select onChange={(e) => handleChangeType(e)}>
              {getAllTypes?.map((type, i) => (
                <option key={i} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          {input.types.map((el, i) => (
            <div key={i}>
              <h3>{el}</h3>
              <button onClick={() => handleDelete(el)}>X</button>
            </div>
          ))}
          <div>
            <button type="submit">CreaTe Pokemon</button>
          </div>
          <Link to="/home">
            <button type="submit">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
