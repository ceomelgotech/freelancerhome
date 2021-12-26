import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="footer section section-sm">
            
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-7 offset-md-1 offset-lg-0">
                    
                    <div class="block about">
                    
                    <img src="images/logo-footer.png" alt="" />
                    
                    <p class="alt-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                
                <div class="col-lg-2 offset-lg-1 col-md-3">
                    <div class="block">
                    <h4>Site Pages</h4>
                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/Home'>Categories</Link></li>
                        <li><Link to='/Home'>Contact Us</Link></li>
                    </ul>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-3 offset-md-1 offset-lg-0">
                    <div class="block">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to='authentication/login'>login</Link></li>
                        <li><Link to='authentication/sign-up'>Sign-Up</Link></li>
                    </ul>
                    </div>
                </div>
                
                </div>
            </div>
            
            </footer>
            <footer class="footer-bottom">
            
            <div class="container">
                <div class="row">
                <div class="col-sm-6 col-12">
                    
                    <div class="copyright">
                    <p>Copyright © <script>
                        var CurrentYear = new Date().getFullYear()
                        document.write(CurrentYear)
                        </script>. All Rights Reserved, Website by <a class="text-primary" rel='noreferrer' href="https://melgotech.co.zw/" target="_blank">Melgotech Incorporated</a></p>
                    </div>
                </div>
                </div>
            </div>-
            <div class="top-to">
                <a id="top" class="" href="/"><i class="fa fa-angle-up"></i></a>
            </div>
            </footer>
        </>
    )
}

export default Footer
