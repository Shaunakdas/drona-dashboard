import React from 'react';
import './App.css';

function Trial() {
  return (
    <div>
        <header className="header">
            <div className="page-header navbar navbar-fixed-top page-header-fixed">
                <div className="page-header-inner">
                    <div className="client-logo">
                        <a href="/en"><img src="/assets/logo-cf7b78c2f23f209eabe053cebb77658c3e5273b52905d9ac57a23a4581ee9cde.jpg" alt="Logo" /></a>
                    </div>
                    <button className="navbar-toggle offcanvas-toggle" data-target="#js-bootstrap-offcanvas" data-toggle="offcanvas" type="button"><span className="sr-only">Toggle Button</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                    <div className="reset-counter-desktop"><i className="fa fa-clock-o"></i> Site resets in <span className="demo-reset-counter"></span></div>
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            <li className="dropdown notifications-menu"><a aria-expanded="true" className="dropdown-toggle notif-count-zero" data-toggle="dropdown" href="#"><i className="fa fa-bell-o"></i><span className="label header-notify-count" id="header-notify-count">0</span></a>
                                <ul className="dropdown-menu">
                                    <li className="header-notif">You have <span className='header-notify-count'>no</span> unread notifications</li>
                                    <li>
                                        <div className="inner-noti">
                                            <ul className="menu"></ul>
                                        </div>
                                    </li>
                                    <li className="footer"><a href="/en/dashboard/notifications">View all</a></li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-user">
                                <a aria-expanded="true" className="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown" href="javascript:;"><img className="img-circle" src="/assets/default-profile-71426c71a738a03adec224d70dceb4ff1dd73f5312c69f6bb0bfacd9d047521f.png" alt="Default profile" /><span className="username username-hide-on-mobile">admin</span><i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-menu dropdown-menu-default">
                                    <li><a href="/en/profile">Edit Profile</a></li>
                                    <li><a rel="nofollow" data-method="delete" href="/en/users/sign_out">Sign Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </header>
        <div className="page-container">
            <div className="side-bar-wrapper">
                <div className="left-nav-block">
                    <div className="page-sidebar">
                        <nav className="active" id="menu">
                            <ul className="left-nav">
                                <li><a href="/en/dashboard"><i className="fa fa-home"></i><span>Dashboard</span></a></li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-institution"></i><span>Course</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/courses">Course List</a></li>
                                        <li><a href="/en/admin/courses/new">New Course</a></li>
                                    </ul>
                                </li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-server"></i><span>Batch</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/batches">Batch List</a></li>
                                        <li><a href="/en/admin/batches/new">New Batch</a></li>
                                        <li><a href="/en/admin/batches/batch_courses">Batch Courses</a></li>
                                    </ul>
                                </li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-user"></i><span>Users</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/users">User List</a></li>
                                        <li><a href="/en/admin/users/new">New User</a></li>
                                        <li><a href="/en/admin/users/guests/new">New Guest Users</a></li>
                                        <li><a href="/en/admin/users/imports/new">Import Users</a></li>
                                        <li><a href="/en/admin/users/export">Export Users</a></li>
                                    </ul>
                                </li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-leanpub"></i><span>Subjects</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/subjects">Subjects List</a></li>
                                        <li><a href="/en/admin/subjects/new">New Subject</a></li>
                                    </ul>
                                </li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-question-circle"></i><span>Questions</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/questions">Questions List</a></li>
                                        <li><a href="/en/admin/questions/new">New Question</a></li>
                                        <li><a href="/en/admin/pools">Question Bank List</a></li>
                                        <li><a href="/en/admin/pools/new">New Question Bank</a></li>
                                        <li><a href="/en/admin/questions/imports/new">Import Questions</a></li>
                                        <li><a href="/en/admin/questions/export">Export Questions</a></li>
                                        <li><a href="/en/admin/questions/move">Move Questions</a></li>
                                    </ul>
                                </li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-graduation-cap"></i><span>Exams</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/exams">Exam List</a></li>
                                        <li><a href="/en/admin/exams/new">New Exam</a></li>
                                        <li><a href="/en/admin/exams/trash">Exam Trash</a></li>
                                    </ul>
                                </li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-book"></i><span>Homework</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/home_works">Homework List</a></li>
                                        <li><a href="/en/admin/home_works/trash">Homework Trash</a></li>
                                    </ul>
                                </li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-bar-chart"></i><span>Reports</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/reports">Exam Report</a></li>
                                        <li><a href="/en/admin/reports?report=student">Student Report</a></li>
                                    </ul>
                                </li>
                                <li className="subnav">
                                    <a className="arrow " href="#"></a><a href="#"><i className="fa fa-gear"></i><span>Account</span></a>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="/en/admin/accounts/credit_points">Credit Points</a></li>
                                        <li><a href="/en/admin/settings/ip_securities">IP Security</a></li>
                                        <li><a href="/en/admin/settings">Settings</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="content-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="breadcrumb">
                                <li><h2>Accounts</h2></li>
                                <li>Dashboard</li>
                            </div>
                            <div id="demo-reset-time">8074.927919019</div>
                            <div className="alert alert-dismissible fade in alert-info reset-timer-main-demo-mob">Site resets in <span className="demo-reset-counter"></span></div>
                            <h3>Dashboard</h3>
                            <hr />
                            <p>Hello <b>admin</b>, Welcome to <b>ABC school</b> management portal. You can use this interface to manage your Exams and the rest of your account.</p>
                            <hr />
                            <div className="row dashboard-stats">
                                <div className="col-lg-4 col-sm-6">
                                    <section className="panel panel-box">
                                        <div className="panel-left panel-item dash-st-1"><i className="fa fa-rocket text-large stat-icon"></i></div>
                                        <div className="panel-right panel-item bg-reverse">
                                            <p className="size-h1 no-margin">1K</p>
                                            <p className="text-muted no-margin"><span>Credit Points</span></p>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <section className="panel panel-box">
                                        <div className="panel-left panel-item dash-st-2"><i className="fa fa-users text-large stat-icon"></i></div>
                                        <div className="panel-right panel-item bg-reverse">
                                            <p className="size-h1 no-margin">10</p>
                                            <p className="text-muted no-margin"><span>Active Users</span></p>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <section className="panel panel-box">
                                        <div className="panel-left panel-item dash-st-3"><i className="fa fa-graduation-cap text-large stat-icon"></i></div>
                                        <div className="panel-right panel-item bg-reverse">
                                            <p className="size-h1 no-margin">0</p>
                                            <p className="text-muted no-margin"><span>Published Exams</span></p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="header-panel-dashboard color-1">
                                        <div className="pannel-box"><a href="#"><h2>Users</h2></a>
                                            <div className="info-holder"><a className="info-ico" data-placement="left" data-toggle="tooltip" data-original-title="This is the area where you can manage the users section where you can see the list of users, creation of new user etc." href="#"><i className="fa fa-info-circle"></i></a></div>
                                        </div>
                                        <ul className="panel-box-Menu">
                                            <li><a href="/en/admin/users">Users List</a></li>
                                            <li><a href="/en/admin/users/new">New User</a></li>
                                            <li><a href="/en/admin/users/guests/new">New Guest Users</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="header-panel-dashboard color-2">
                                        <div className="pannel-box"><a href="#"><h2>Questions</h2></a>
                                            <div className="info-holder"><a className="info-ico" data-placement="left" data-toggle="tooltip" data-original-title="This is the area where you can manage the Questions." href="#"><i className="fa fa-info-circle"></i></a></div>
                                        </div>
                                        <ul className="panel-box-Menu">
                                            <li><a href="/en/admin/questions">Questions List</a></li>
                                            <li><a href="/en/admin/questions/new">New Question</a></li>
                                            <li className="subnav-dash"><a href="#">Question Bank</a><a className="arrow" href="#"><i className="fa fa-arrow-circle-down"></i></a>
                                                <ul className="subMenu">
                                                    <li><a href="/en/admin/pools">Question Banks</a></li>
                                                    <li><a href="/en/admin/pools/new">New Question Bank</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/en/admin/questions/imports/new">Import Questions</a></li>
                                            <li><a href="/en/admin/questions/export">Export Questions</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="header-panel-dashboard color-3">
                                        <div className="pannel-box"><a href="#"><h2>Exams</h2></a>
                                            <div className="info-holder"><a className="info-ico" data-placement="left" data-toggle="tooltip" data-original-title="This is the area where you can manage the Exams." href="#"><i className="fa fa-info-circle"></i></a></div>
                                        </div>
                                        <ul className="panel-box-Menu">
                                            <li><a href="/en/admin/exams">Exams List</a></li>
                                            <li><a href="/en/admin/exams/new">New Exam</a></li>
                                            <li><a href="/en/admin/exams/trash">Exam Trash</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="header-panel-dashboard color-4">
                                        <div className="pannel-box"><a href="#"><h2>Homeworks</h2></a>
                                            <div className="info-holder"><a className="info-ico" data-placement="left" data-toggle="tooltip" data-original-title="This is the area where you can manage the Homeworks." href="#"><i className="fa fa-info-circle"></i></a></div>
                                        </div>
                                        <ul className="panel-box-Menu">
                                            <li><a href="/en/admin/home_works">Homeworks List</a></li>
                                            <li><a href="/en/admin/home_works/trash">Homework Trash</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="page-footer">
                <div className="footer-inner">
                    <div className="row">
                        <div className="col-md-4 col-sm-5 col-xs-12 text-left">
                            <p>
                                <a className="logo" href="/en"><img src="/assets/logo-vx-invert-d673a95786b216f89a23b3212e0e5e032a1ba457fce974d3b65f7b5e8fe19bf0.png" alt="Logo vx invert" /></a>2016 &copy; VirtualX. All rights reserved.</p>
                        </div>
                        <div className="col-md-8 col-sm-7 col-xs-12 text-right pull-right">
                            <ul className="footer-nav">
                                <li><a href="/en">About Us</a></li>
                                <li><a href="/en/contact_us">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      <div className="modal fade" id="notif-modal" role="dialog">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <button className="close" data-dismiss="modal" type="button"> &times;</button>
                      <h4 className="modal-title">Notification Preview</h4></div>
                  <div className="modal-body">
                      <p></p>
                  </div>
                  <div className="modal-footer">
                      <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                  </div>
              </div>
          </div>
      </div>
      <div id="demo-redirect-url">/en/sign_in</div>
    </div>
  );
}

export default Trial;
