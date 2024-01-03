import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
`;

const ErrorMessage = styled.p`
  line-height: 50px;
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 30px;
`;

const GoToMainButton = styled.div`
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageContainer onClick={() => navigate("/")}>
      <ErrorMessage>해당 페이지를 찾지 못했습니다.</ErrorMessage>
      <Description>
        주소가 잘못되었거나 더이상 제공되지 않는 페이지입니다.
      </Description>
      <GoToMainButton>메인 페이지로 이동</GoToMainButton>
    </PageContainer>
  );
};

export default NotFound;