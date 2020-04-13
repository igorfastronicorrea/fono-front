import React, { useState } from 'react';
import './styles.css';
import api from '../../services/api';
import Audio from '../../components/AudioComponent';

export default function CreateExercise() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleCreate(e) {
        e.preventDefault();

        const data = {
            title,
            description
        }

        try {
            const response = await api.post("/exercise", data)
            alert(`Seu id é = ${response.data.exerciseResponse._id}`)
        } catch (err) {
            alert(`Deu erro`);
        }
    }

    return (
        <div className="exercise-container">
            <div className="content">
                <section>

                    <h1>Cadastro</h1>
                    <p>Faça aqui o cadastro do exercise</p>
                </section>

                <form onSubmit={handleCreate}>
                    <input placeholder="Título"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />

                    <input placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />


                    <button className="button" type="submit">Cadastrar</button>


                </form>

                <Audio />
            </div>
        </div>
    );
}