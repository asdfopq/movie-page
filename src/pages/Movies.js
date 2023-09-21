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