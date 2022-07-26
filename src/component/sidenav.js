
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Sidenav() {               
    return (
        
        <>
    <div className="l-navbar" id="navbar">
  <nav className="nav">
    <div>
      <div className="nav__brand">
        {/* <ion-icon name="menu-outline" class="nav__toggle" id="nav-toggle"></ion-icon>*/}
        <i className="riot-icon riot-icon-menu nav__toggle" id="nav-toggle" />
        <a href="#" className="nav__logo">
          
        </a>
      </div>
      <div className="nav__list">

        <li>
        <Link className="nav__link active" to="/"><i className="riot-icon riot-icon-dashboard nav__icon" />
            <span className="nav__name">Dashboard</span></Link>
            {/*<ion-icon name="home-outline" class="nav__icon"></ion-icon>*/}
        </li>

        <li>
          <div className="nav__link riot-collapse">
            {/*<ion-icon name="folder-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-invoices nav__icon" />
            <span className="nav__name">Invoice</span>
            {/*<ion-icon name="chevron-down-outline" class="riot-collapse__link"></ion-icon>*/}
            <i className="riot-icon riot-icon-down riot-collapse__link" />
            <ul className="riot-collapse__menu">
              <Link className="collapse__sublink" to="/proforma-invoice">
                Create Proforma Invoice
              </Link>
              <Link className="collapse__sublink" to="/proforma-invoice">
                View Proforma Invoice
              </Link>
              <Link className="collapse__sublink" to="/pay-invoice">
                Create Pay Invoice
              </Link>
              <Link className="collapse__sublink" to="/pay-invoice">
                View Pay Invoice
              </Link>
              <Link className="collapse__sublink" to="/view-invoice">
                View Invoice
              </Link>
            </ul>
          </div>
        </li>

        <li>
        <Link className="nav__link" to="/payslip"> 
            {/*<ion-icon name="chatbubbles-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-expencess nav__icon" />
            <span className="nav__name">Payslip</span></Link>
          
        </li>

        <li>
          <div className="nav__link riot-collapse">
            {/*<ion-icon name="folder-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-location nav__icon" />
            <span className="nav__name">Address</span>
            {/*<ion-icon name="chevron-down-outline" class="riot-collapse__link"></ion-icon>*/}
            <i className="riot-icon riot-icon-down riot-collapse__link" />
            <ul className="riot-collapse__menu">
              <Link className="collapse__sublink" to="/clients">
                Clients
              </Link>
              <Link className="collapse__sublink" to="/vendors">
                Vendors
              </Link>
            </ul>
          </div>
        </li>

        <li>
          <div className="nav__link riot-collapse">
            {/*<ion-icon name="folder-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-employee nav__icon" />
            <span className="nav__name">Employee</span>
            {/*<ion-icon name="chevron-down-outline" class="riot-collapse__link"></ion-icon>*/}
            <i className="riot-icon riot-icon-down riot-collapse__link" />
            <ul className="riot-collapse__menu">
              <Link className="collapse__sublink" to="/view-employee">
                View Employee
              </Link>
              <Link className="collapse__sublink" to="/designation">
                Designation
              </Link>
              <Link className="collapse__sublink" to="/employee-id">
                Employee ID
              </Link>
            </ul>
          </div>
        </li>

        <li>
        <Link className="nav__link" to="/expancess"> 
            {/*<ion-icon name="chatbubbles-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-expencess nav__icon" />
            <span className="nav__name">Expancess</span></Link>
          
        </li>

        <li>
          <div className="nav__link riot-collapse">
            {/*<ion-icon name="folder-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-attantance nav__icon" />
            <span className="nav__name">Attandance</span>
            {/*<ion-icon name="chevron-down-outline" class="riot-collapse__link"></ion-icon>*/}
            <i className="riot-icon riot-icon-down riot-collapse__link" />
            <ul className="riot-collapse__menu">
              <Link className="collapse__sublink" to="view-attandance/">
                View Attandance
              </Link>
              <Link className="collapse__sublink" to="/take-attandance">
                take Attandance
              </Link>
            </ul>
          </div>
        </li>

        <li>
        <Link className="nav__link" to="/setting">
            {/*<ion-icon name="settings-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-setting nav__icon" />
            <span className="nav__name">Settings</span>
          </Link>
        </li>

      </div>
    </div>
    <Link className="nav__link" to="/login">
      {/*<ion-icon name="log-out-outline" class="nav__icon"></ion-icon>*/}
      <i className="riot-icon riot-icon-logout nav__icon" />
      <span className="nav__name">Log Out</span>
    </Link>
  </nav>
</div>



        </>
    );
}

export default Sidenav;