import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/lab8-4ac5b.appspot.com/o/69916571_2457682117663507_178914434742222848_o.jpg?alt=media&token=777c34f4-0440-4ebc-8d4c-79c2b8109bdb" className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Aujchara Dee-unkong (610610624)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
