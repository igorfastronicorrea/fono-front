import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';
import { Link } from 'react-router-dom'

export default class Exercises extends Component {

    state = {
        exercises: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadExercises();
    }

    loadExercises = async (page = 1) => {
        const response = await api.get(`/exercises?page=${page}`);

        const { exerciseResponse } = response.data;


        this.setState({ exercises: exerciseResponse })
    }

    render() {

        const { exercises } = this.state;

        return (
            <div className="product-list">
                {exercises.map(exercise => (
                    <article key={exercise._id}>
                        <strong>{exercise.title}</strong>
                        <p>{exercise.description}</p>
                        <Link to={`/products/${exercise._id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        )
    }
}