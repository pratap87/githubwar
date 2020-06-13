import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Zoom } from 'react-reveal'
import Winners from './Winner';
import g from './ninja.png'
const App = () => {
  const [user1, setuser1] = useState('')
  const [user2, setuser2] = useState('')
  const [stars, setStars] = useState('')
  const [stars2, setStars2] = useState('')
  const [name, setname] = useState('');
  const [name2, setname2] = useState('');
  const [avatar_url, setavatar] = useState('')
  const [public_repos, setrepo] = useState('');
  const [followers, setforks] = useState('')
  const [avatar2, setavatar2] = useState('')
  const [public_repos2, setrepo2] = useState('');
  const [followers2, setforks2] = useState('')
  const [fight, setfight] = useState(false)
  const [winner, setwinner] = useState(false)
  const [winner2, setwinner2] = useState(false)





  const handleclick1 = () => {
    fetch(`https://api.github.com/users/${user1}`).then(res => res.json()).then(data => setdata(data))
  }
  const handleclick2 = () => {
    fetch(`https://api.github.com/users/${user2} `).then(res => res.json()).then(data => setdata2(data))
  }
  const handlefight = () => {
    setfight(!fight)
    if (followers > followers2 && public_repos > public_repos2) {
      setwinner(true)
    }
    else if (followers2 > followers && public_repos2 > public_repos || stars > stars2) {
      setwinner2(true)
    }
  }


  const setdata = ({ stars, public_repos, followers, avatar_url, name, public_gists }) => {
    setrepo(public_repos);
    setavatar(avatar_url);
    setforks(followers);
    setname(name)
    setStars(public_gists)
  }
  const setdata2 = ({ stars, public_repos, followers, avatar_url, name, public_gists }) => {
    setrepo2(public_repos);
    setavatar2(avatar_url);
    setforks2(followers);
    setname2(name);
    setStars2(public_gists)
  }






  if (fight === false) {
    return (


      <>
        <h1 style={{ color: 'white' }}>GitHubWars</h1>
        <div className="conatiner main">

          <div className="row">
            <div className=" container col-lg-5 col-sm-6 col-xs-12 cont">
              <div className="box">
                <img src={g} />
              </div>
              <h1 style={{ color: 'white' }}>Player 1</h1>
              <label>username</label>
              <input type="text" placeholder=" username" onChange={(event) => setuser1(event.target.value)} />

              <button class="btn btn-secondary" type="button"
                onClick={handleclick1}>
                <i class="fa fa-search"></i>
              </button>
              <h1>{user1}</h1>

            </div>

            <div className="container col-lg-5 col-sm-6 col-xs-12 cont">
              <div className="box">
                <img src={g} />
              </div>
              <h1 style={{ color: 'white' }}>Player 2</h1>
              <label>username</label>
              <input type="text" placeholder=" username" onChange={(event) => setuser2(event.target.value)} />

              <button class="btn btn-secondary" type="button"
                onClick={handleclick2}
              >
                <i class="fa fa-search"></i>

              </button>
              <h1>{user2}</h1>


            </div>
            <div className="col-lg-12 b">
              <button className="button" onClick={handlefight}>Start</button>
            </div>
          </div>

        </div>

      </>

    );
  }
  else {
    console.log(user1)
    return (
      <Zoom>
        <Winners name1={name} name2={name2}
          user1={user1} user2={user2}
          img1={avatar_url} img2={avatar2}
          followers={followers} followers2={followers2}
          public_repos={public_repos} public_repos2={public_repos2}
          winner={winner} winner2={winner2}
          handlefight={handlefight}
        />
      </Zoom>
    )
  }
}

export default App;
