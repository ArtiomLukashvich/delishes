import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Search() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/recipes/' + search)
  }

  return (
    <Form onSubmit={submitHandler}>
      <GoSearch />
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </Form>
  )
}

const Form = styled.form`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    border: none;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search
