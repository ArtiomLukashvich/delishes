import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

function Searched() {
	const [searchedRecipe, setSearchedRecipe] = useState([])
	let params = useParams()

	const getSearched = async name => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)

		const recipes = await data.json()
		setSearchedRecipe(recipes.results)
	}

	useEffect(() => {
		getSearched(params.search)
	}, [params.search])

	return (
		<Grid>
			{searchedRecipe.map(el => {
				return (
					<Card key={el.id}>
						<Link to={'/recipe/' + el.id}>
							<img src={el.image} alt={el.title} />
							<h4>{el.title}</h4>
						</Link>
					</Card>
				)
			})}
		</Grid>
	)
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`
const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`

export default Searched
