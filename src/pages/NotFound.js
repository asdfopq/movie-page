import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const navigate = useNavigate();

    return(
        <div 
        className="page-container"
        onClick={() => navigate("/")}
        >
            <p>해당 페이지를 찾지 못했습니다.</p>
            <p>주소가 잘못되었거나 더이상 제공되지 않는 페이지입니다.</p>
            <div>메인 페이지로 이동</div>
        </div>
    )
}