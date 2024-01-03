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