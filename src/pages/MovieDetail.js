import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../components/Movie";

const PageContainer = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
`;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
  }
`;

const TextBox = styled.div`
  width: 500px;
  position: absolute;
  right: 0;
  top: 40px;
  color: #fff;

  h1 {
    font-size: 30px;
    margin-bottom: 50px;
    font-weight: 700;
  }

  p {
    font-size: 20px;
    line-height: 23px;
  }
`;

const MovieDetail = () => {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <PageContainer>
      <ImageContainer>
        <img src={BASE_URL + state.poster_path} alt="영화 포스터" />
      </ImageContainer>
      <TextBox>
        <h1>{title}</h1>
        <p>{state.overview}</p>
      </TextBox>
    </PageContainer>
  );
};

export default MovieDetail;
