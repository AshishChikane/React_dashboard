import { Link, useLocation } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/js/dist/dropdown'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/js/dist/collapse';


export default function Aside() {

    const { pathname } = useLocation()
    let subpage = pathname.split('/')[1]
    let subpage1 = pathname.split('/')[2]

    function linkClasses(type) {
        let classes = 'nav-link text-white my-1'
        if (type === subpage) {
            classes += ' bg-info bg-gradient'
        } else if (type === subpage1) {
            classes += ' bg-dark bg-gradient'
        }
        return classes;
    }

    return (
        <>
            <ul className="nav nav-pills flex-column" id="#parentM">
                <li className="nav-item text-white my-1">
                    <Link to='/dashboard' className={linkClasses('dashboard')} aria-current='page'>
                        <i className="bi bi-speedometer2"></i>
                        <span className="ms-2">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#submenu" className={linkClasses('product')} data-bs-toggle='collapse' aria-current='page'>
                        <i className="bi bi-grid"></i>
                        <span className="ms-2">Product</span>
                        <i className="bi bi-arrow-down-short ms-3"></i>
                    </a>
                    <ul className="nav collapse ms-2 flex-column" id='submenu' data-bs-parent='#parentM'>
                        <li className="nav-item">
                            <Link className={linkClasses('advertise')} to={'/product/advertise'} aria-current="page">Advertise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={linkClasses('publisher')} to={'/product/publisher'}>Publisher</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className={linkClasses('highlight')} to={'/product/highlight'}>Highlight</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item text-white my-1">
                    <Link to='/home' className={linkClasses('home')} aria-current='page'>
                        <i className="bi bi-house"></i>
                        <span className="ms-2">Home</span>
                    </Link>
                </li>
                <li className="nav-item text-white my-1">
                    <Link to='/customer' className={linkClasses('customer')} aria-current='page'>
                        <i className="bi bi-people"></i>
                        <span className="ms-2">Customers</span>
                    </Link>
                </li>
            </ul>
        </>
    );
}