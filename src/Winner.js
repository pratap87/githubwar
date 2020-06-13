import React, { useState, useEffect } from 'react';
import './App.css';
import './winner.css';
import logo from './trophy.png'

const Win = (props) => {
    if (props.winner == true)
        return (
            <img src={logo} />
        )
    else
        return (
            <>
            </>
        )




}
const Win2 = (props) => {
    if (props.winner2 == true)
        return (
            <img src={logo} />
        )
    else
        return (
            <>
            </>
        )

}



const Winner = (props) => {





    return (

        <> <h1 style={{ color: 'white' }}>GitHubWars</h1>
            <div className="conatiner main">
                <div className="row">
                    <div className="container col-lg-4  col-sm-6 col-xs-12 conta">
                        <div className="box">
                            <img src={props.img1} />
                        </div>
                        <div className="heading">
                            <h6 style={{ color: 'white' }}>@{props.user1}</h6>
                            <h6 style={{ color: 'white' }}> &nbsp;{props.name1}</h6>

                        </div>

                        <h3>Followers:{props.followers}</h3>

                        <h3>Repos:{props.public_repos}</h3>

                        <Win winner={props.winner} />

                    </div>

                    <div className="container col-lg-4 col-sm-6 col-xs-12  conta">
                        <div className="box">
                            <img src={props.img2} />
                        </div>
                        <div className="heading">
                            <h6 style={{ color: 'white' }}>@{props.user2}</h6>
                            <h6 style={{ color: 'white' }}> &nbsp;{props.name2}</h6>

                        </div>


                        <h3>Followers: {props.followers2}</h3>
                        <h3>Repos: {props.public_repos2}</h3>
                        <Win2 winner2={props.winner2} />
                    </div>
                    <div className="col-lg-12 b">
                        < a href="/">
                            <button className="button" onClick={props.handlefight}>Start Again</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Winner;
