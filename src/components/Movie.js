<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieContainer = styled.div`
  width: 250px;
  margin: 15px;
  color: #fff;
  border-radius: 10px;
  background: #444;
  position: relative;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:hover {
    .overview {
      opacity: 1;
    }
  }
`;

const MovieImage = styled.img`
  max-width: 100%;
  height: 375px;
`;

const Overview = styled.div`
  height: 375px;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  opacity: 0;
  line-height: 30px;
  padding: 4px;
  white-space: normal;
  overflow: hidden;
`;

const MovieInfo = styled.div`
  padding: 10px;
`;

const MovieTitle = styled.h4``;

const MovieRating = styled.p``;

const ReleaseDate = styled.p`
  font-size: 0.9rem;
`;

export const BASE_URL = "https://image.tmdb.org/t/p/w500";

const Movie = (props) => {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${props.title}`, {
      state: props,
    });
  };

  return (
    <MovieContainer onClick={onClickMovieItem}>
      <MovieImage src={BASE_URL + props.poster_path} alt="영화 포스터" />
      <Overview>
        <p>{props.overview}</p>
      </Overview>
      <MovieInfo>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieRating>{props.vote_average}</MovieRating>
        <ReleaseDate>개봉일 {props.release_date}</ReleaseDate>
      </MovieInfo>
    </MovieContainer>
  );
};

export default Movie;
=======
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

>>>>>>> 28cc9c12cca5453d9f94f69dacdad67fc7af1ad0
