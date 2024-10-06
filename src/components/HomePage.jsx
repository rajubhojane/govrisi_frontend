
import React from 'react'
import govlogo from '../assets/images/gov-logo.png';


export default function HomePage() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary" padding="1px" border="1px">
<div className="container" id='container-nav-1' padding="1px" margin-left="0px">
<img src={govlogo} width="60" height="100" margin="1px">
</img>
<a className="navbar-brand" href="#">

</a>
</div>
</nav>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<a className="navbar-brand" href="#">Home</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <a className="nav-link active" href="#">Features</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Links</a>
  </li>
 

</ul>
<form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
  </input>
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>
</div>
</div>
</nav>
    </div>
  )
}

