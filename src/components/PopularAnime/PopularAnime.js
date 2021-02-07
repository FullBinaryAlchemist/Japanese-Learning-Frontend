import React from "react";
import "./PopularAnime.css";

import animeImages from "../../consts";

function PopularAnime() {
  return (
    <>
      <div className="popular-anime">
        <h1>PopularAnime</h1>
        <hr />
      </div>
      <div className="anime-grid">
        <article className="mw5 center bg-white br3 mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[0]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[1]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[2]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[3]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[4]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[5]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[5]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
        <article className="mw5 center bg-white br3  mv3 ba b--black-10 grow grid-items">
          <div className="anime-img">
            <img src={animeImages[5]} alt="" height="250px" width="auto" />
          </div>
          <p className="center f4 tc pt1 strong">Anime Name</p>
        </article>
      </div>
    </>
  );
}

export default PopularAnime;
