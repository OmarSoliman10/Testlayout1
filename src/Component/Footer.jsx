import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../src/img//LOGO.png';


export default function Footer() {
  return (<>

<footer className='text-white text-center bottom-0 end-0 start-0'>

<div className='footer-end py-4 px-5'>
<div className='container footer-end'>
    <div className="row my-3 gy-1 justify-content-center align-items-center">

    <div className="col-md-4 ">
            <div className='w-75 m-auto'>
              <img src={LOGO} className='w-100' alt="" />
            </div>
        </div>

        <div className="col-md-4 mt-4">
            <h4>صـفـحــاتــــــــنــا</h4>

            <div className="mb-4 icons ">
                <Link className="btn btn-outline-light btn-floating m-1" to="https://www.facebook.com/layoutagency1/" 
                target="_blank" rel="noopener noreferrer" role="button">  
                <i className="fa-brands fa-facebook-f"></i></Link>

                <Link className="btn btn-outline-light btn-floating m-1" to="https://www.instagram.com/layout.agency1/" 
                 target="_blank" rel="noopener noreferrer" role="button" >
                <i className="fa-brands fa-instagram "></i></Link>

                <Link className="btn btn-outline-light btn-floating m-1" to="https://www.linkedin.com/in/layout-agency-583500323/" 
                 target="_blank" rel="noopener noreferrer" role="button">
                <i className="fa-brands fa-linkedin-in"></i></Link>

                <Link className="btn btn-outline-light btn-floating m-1" to="https://www.tiktok.com/@layoutagency1" 
                 target="_blank" rel="noopener noreferrer" role="button">
                <i className="fa-brands fa-tiktok"></i></Link>

            </div>
        </div>


        <div className="col-md-4">
            <h4 className='m-0'>Copyright © 2024 All rights reserved by Layoutegco</h4>
        </div>


    </div>
</div>
</div>
</footer>

</>
    )
  }