import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome, faTachometerAlt, faList, faThLarge,
    faBox, faShoppingCart, faUser, faUsers,
    faImages, faChartBar, faCogs, faQuestionCircle, faLifeRing,
    faServer
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router';

function Sidebar() {

    const [openMenus, setOpenMenus] = useState({});
    const location = useLocation();
    const currentLocation = useLocation().pathname

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const newOpenMenus = {};

        if (pathSegments.length > 0) {
            const parentMenu = pathSegments[0];
            newOpenMenus[parentMenu] = true;
        }

        setOpenMenus(prev => ({ ...prev, ...newOpenMenus }));
    }, [location]);

    const handleToggleMenu = (menuId) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [menuId]: !prevState[menuId],
        }));
    };

    const handleActive = (pathName) => {
        return pathName == currentLocation ? 'active' : '';
    }

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* dashboard */}
                            <li className="nav-item">
                                <Link to={'/'} className={`nav-link ${currentLocation == '/' && 'active'}`}>
                                    {/* <i className="nav-icon fas fa-tachometer-alt" /> */}
                                    <FontAwesomeIcon icon={faTachometerAlt} className='nav-icon' />
                                    <p>
                                        Dshboard
                                    </p>
                                </Link>
                            </li>
                            {/* Test */}
                            <li className="nav-item">
                                <Link to={'/test'} className={`nav-link ${currentLocation == '/test' && 'active'}`}>
                                    {/* <i className="nav-icon fas fa-tachometer-alt" /> */}
                                    <FontAwesomeIcon icon={faServer} className='nav-icon' />
                                    <p>
                                        Test
                                    </p>
                                </Link>
                            </li>
                            {/* category */}
                            <li className={`nav-item  ${openMenus.category && 'menu-open'}`}>
                                <a className={`nav-link ${currentLocation.startsWith('/addcategory') ||
                                    currentLocation.startsWith('/allcategory') ? 'active' : ''
                                    }`} onClick={() => handleToggleMenu('category')}>
                                    {/* <i className="nav-icon fab fa-product-hunt"></i> */}
                                    <FontAwesomeIcon icon={faList} className='nav-icon' />
                                    <p>
                                        Category
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to={'/addcategory'} className={`nav-link ${handleActive('/addcategory')}`}>
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Category</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/allcategory'} className={`nav-link ${handleActive('/allcategory')}`}>
                                            <i className="far fa-circle nav-icon" />
                                            <p>Category List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Attaribute */}
                            <li className={`nav-item  ${openMenus.variants && 'menu-open'}`}>
                                <a className={`nav-link ${openMenus.variants && 'active'}`} onClick={() => handleToggleMenu('variants')}>
                                    {/* <i className="nav-icon fab fa-product-hunt"></i> */}
                                    <FontAwesomeIcon icon={faThLarge} className='nav-icon' />
                                    <p>
                                        Variants
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Variants</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Variants List</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* product */}
                            <li className={`nav-item  ${openMenus.product && 'menu-open'}`}>
                                <a className={`nav-link ${openMenus.product && 'active'}`} onClick={() => handleToggleMenu('product')}>
                                    <FontAwesomeIcon icon={faBox} className='nav-icon' />
                                    <p>
                                        Product
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Product</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Product List</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Product Details</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* orders */}
                            <li className={`nav-item  ${openMenus.order && 'menu-open'}`}>
                                <a className={`nav-link ${openMenus.order && 'active'}`} onClick={() => handleToggleMenu('order')}>
                                    <FontAwesomeIcon icon={faShoppingCart} className='nav-icon' />
                                    <p>
                                        Order
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Order</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Order List</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* users */}
                            <li className={`nav-item  ${openMenus.user && 'menu-open'}`}>
                                <a className={`nav-link ${openMenus.user && 'active'}`} onClick={() => handleToggleMenu('user')}>
                                    <FontAwesomeIcon icon={faUser} className='nav-icon' />
                                    <p>
                                        User
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add User</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>User List</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* settings */}
                            <li className={`nav-item  ${openMenus.settings && 'menu-open'}`}>
                                <a className={`nav-link ${openMenus.settings && 'active'}`} onClick={() => handleToggleMenu('settings')}>
                                    <FontAwesomeIcon icon={faCogs} className='nav-icon' />
                                    <p>
                                        Settings
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Manage Footer</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Profile</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* widgets */}
                            {/* <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Widgets
                                        <span className="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </>
    )
}

export default Sidebar
