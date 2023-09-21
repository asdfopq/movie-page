import React from 'react'
import { useNavigate } from 'react-router-dom'


export const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Movie(props) {
    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/movie/${props.title}`, {
            state: props,
        });
    };

    return (
        <div className='movie-container' onClick={onClickMovieItem}>
            <img src={BASE_URL + props.poster_path} alt="영화 포스터" />
            <div className='overview'>
                <p>{props.overview}</p>
            </div>
            <div className="movie-info">
                <h4>{props.title}</h4>
                <p>{props.vote_average}</p>
                <p>개봉일 {props.release_date}</p>
            </div>
        </div>
    )
}

