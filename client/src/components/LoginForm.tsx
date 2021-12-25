import { stringify } from "querystring";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { resourceLimits } from "worker_threads";

const LoginForm = (): JSX.Element => {

  const [ user, setUser ] = useState({
    email: "",
    password: ""
  })

  const [ error, setError] = useState("")
  const [ message, setMessage ] = useState("")

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const {value, name } = target
    setUser({...user, [name]: value})

  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const result = await axios.post("http://localhost:4000/login", user)
    console.log(result)
    setError(result.data.error)
    setMessage(result.data.msg)
  }


  return (
    <div>
      <Container>
        {error ? <p>{error}</p> : ""}
        {message ? <p>Welcome {message}</p> : ""}
        <p style={{ marginTop: "100px" }}>This is the login form</p>
        <form onSubmit={onSubmitHandler}>
          <div>
            <input type="text" name="email" value={user.email} onChange={onChangeHandler}/>
          </div>
          <div>
            <input type="password" name="password" value={user.password} onChange={onChangeHandler}/>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default LoginForm;

const Container = styled.div`
  margin: 200px, auto;
  background-color: hsla(36, 4%, 88%, 1);
  padding: 50px;
`;
