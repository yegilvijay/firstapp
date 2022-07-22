
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
          {" "}
        </a>
      </div>
      <div className="nav__list">
        <li>
          <a href="index.html" className="nav__link active">
            {/*<ion-icon name="home-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-dashboard nav__icon" />
            <span className="nav__name">Dashboard</span>
          </a>
        </li>
        <li>
          <div className="nav__link riot-collapse">
            {/*<ion-icon name="folder-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-invoices nav__icon" />
            <span className="nav__name">Invoice</span>
            {/*<ion-icon name="chevron-down-outline" class="riot-collapse__link"></ion-icon>*/}
            <i className="riot-icon riot-icon-down riot-collapse__link" />
            <ul className="riot-collapse__menu">
              <a href="proforma_invoice.html" className="collapse__sublink">
                Create Proforma Invoice{" "}
              </a>
              <a href="proforma_invoice.html" className="collapse__sublink">
                View Proforma Invoice{" "}
              </a>
              <a href="pay_invoice.html" className="collapse__sublink">
                Create Pay Invoice{" "}
              </a>
              <a href="pay_invoice.html" className="collapse__sublink">
                View Pay Invoice{" "}
              </a>
              <a href="view_invoice.html" className="collapse__sublink">
                View Invoice{" "}
              </a>
            </ul>
          </div>
        </li>
        <li>
          <div className="nav__link riot-collapse">
            {/*<ion-icon name="folder-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-location nav__icon" />
            <span className="nav__name">Address</span>
            {/*<ion-icon name="chevron-down-outline" class="riot-collapse__link"></ion-icon>*/}
            <i className="riot-icon riot-icon-down riot-collapse__link" />
            <ul className="riot-collapse__menu">
              <a href="clients.html" className="collapse__sublink">
                Clients{" "}
              </a>
              <a href="vendors.html" className="collapse__sublink">
                Vendors
              </a>
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
              <a href="view_employee.html" className="collapse__sublink">
                View Employee{" "}
              </a>
              <a href="designation.html" className="collapse__sublink">
                Designation{" "}
              </a>
              <a href="employee_id.html" className="collapse__sublink">
                Employee ID{" "}
              </a>
            </ul>
          </div>
        </li>
        <li>
          <a href="Expancess.html" className="nav__link">
            {/*<ion-icon name="chatbubbles-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-expencess nav__icon" />
            <span className="nav__name">Expancess</span>
          </a>
        </li>
        <li>
          <div className="nav__link riot-collapse">
            {/*<ion-icon name="folder-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-attantance nav__icon" />
            <span className="nav__name">Attandance</span>
            {/*<ion-icon name="chevron-down-outline" class="riot-collapse__link"></ion-icon>*/}
            <i className="riot-icon riot-icon-down riot-collapse__link" />
            <ul className="riot-collapse__menu">
              <a href="view_attandance.html" className="collapse__sublink">
                View Attandance{" "}
              </a>
              <a href="take_attandance.html" className="collapse__sublink">
                take Attandance
              </a>
            </ul>
          </div>
        </li>
        <li>
          <a href="settings.html" className="nav__link">
            {/*<ion-icon name="settings-outline" class="nav__icon"></ion-icon>*/}
            <i className="riot-icon riot-icon-setting nav__icon" />
            <span className="nav__name">Settings</span>
          </a>
        </li>
      </div>
    </div>
    <a href="#" className="nav__link">
      {/*<ion-icon name="log-out-outline" class="nav__icon"></ion-icon>*/}
      <i className="riot-icon riot-icon-logout nav__icon" />
      <span className="nav__name">Log Out</span>
    </a>
  </nav>
</div>



        </>
    );
}

export default Sidenav;