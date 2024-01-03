<<<<<<< HEAD
import styled from "styled-components";
import { information } from "../movieinformation";
import Movie from "../components/Movie";

const AppContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Movies = () => {
  if (!information || !information.results) {
    return <div>영화 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <AppContainer>
        {information.results.map((list) => (
          <Movie
            key={list.id}
            title={list.title}
            poster_path={list.poster_path}
            vote_average={Math.round(list.vote_average * 10) / 10}
            overview={list.overview}
            release_date={list.release_date}
          />
        ))}
      </AppContainer>
    </div>
  );
};

export default Movies;
=======
import React from "react";
import { information } from "../movieinformation";
import Movie from "../components/Movie";

export default function Movies() {
    return(
        <div>
            <div className="app-container">
                {
                information.results.map((list) => {
                    return (
                    <Movie
                    key={list.id}
                    title={list.title}
                    poster_path={list.poster_path}
                    vote_average={list.vote_average}
                    overview={list.overview}
                    release_date={list.release_date}
                    />
                    )
                })  // 소괄호는 return문 없이 값 반환
                }
            </div>
        </div>
    )
}
>>>>>>> 28cc9c12cca5453d9f94f69dacdad67fc7af1ad0
