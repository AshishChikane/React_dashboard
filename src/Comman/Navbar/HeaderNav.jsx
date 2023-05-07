import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGear } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {
    Navbar,
    NavbarBrand,
    NavbarText,
} from 'reactstrap';


export default function HeaderNav() {
    return (
        <div>
            <Navbar
                className="my-0"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <h2 style={{ paddingLeft: '50px', paddingTop: '0px', height: 30, width: 40 }} >Tagtalk</h2>
                </NavbarBrand>
                <NavbarText>
                    <div className="dropdown open">
                        <span className="dropdown-toggle" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <FontAwesomeIcon style={{ paddingRight: '20px', height: 20, width: 40 }} icon={faUserGear} size="sm" />
                        </span>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <Link style={{ background: 'black' }} className="dropdown-item" to={'/'}>Logout</Link>
                        </div>
                    </div>
                </NavbarText>
            </Navbar>

        </div>
    );

}