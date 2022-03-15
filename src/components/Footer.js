import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-light " style={{marginTop:"30px"}}>
        <div className="container text-center text-md-left">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <h5 className="mt-2 mb-1">Seneca Resources</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="https://web322.ca/" className="text-decoration-none">WEB322</a>
                        </li>
                        <li>
                            <a href="https://web422.ca/"  className="text-decoration-none">WEB422</a>
                        </li>
                    </ul>

                </div>
                <div className="col-md-4 mx-auto">
                    <h5 className=" mt-2 mb-1">Other Resort Sources</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="https://www.airbnb.ca/" className="text-decoration-none">airbnb</a>
                        </li>
                        <li>
                            <a href="https://www.expedia.ca/"  className="text-decoration-none">expedia</a>
                        </li>
                    </ul>

                </div>
                <div className="col-md-4 mx-auto">
                    <h5 className=" mt-2 mb-1">Hotels</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="https://www.trivago.ca/" className="text-decoration-none">trivago</a>
                        </li>
                        <li>
                            <a href="https://www.booking.com/" className="text-decoration-none">booking.com</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="footer-copyright text-center py-1">
        <a href="https://www.flaticon.com/free-icons/vacations" className="text-decoration-none" title="vacations icons">Vacation icon created by Freepik - Flaticon</a>
        </div>
    </footer>
    );
};

export default Footer;