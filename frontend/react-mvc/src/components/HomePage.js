import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'




const HomePage = () => {

    return (
        <Fragment>
            <div className="jumbotron">
                <h1 >Data Visualization Demo</h1>
                <p className="lead">This demonstrates <strong>Steven Wiggins' skills as a <u>Full Stack Developer</u> and <u>Data Engineer</u></strong> using small code samples.
                This demo uses the <strong><a href="https://gojs.net/latest/samples/index.html">GoJS Javascript Data Visualization library</a></strong> to diagram various data models from the
                 <strong><a href="https://dodcio.defense.gov/Library/DoD-Architecture-Framework/dodaf20_models/"> DoD Architecture Framework (DoDAF) Meta Model.</a></strong>
                </p>
                <br />
                <p className="lead">
                    The frontend is powered by various Javascript frameworks:
                       <strong><a href="https://reactjs.org/"> React JS,</a>
                        <a href="https://js.devexpress.com/"> DevExtreme,</a>
                        <a href="https://getbootstrap.com/"> BootStrap, </a></strong>
                  and modern languages: <strong> Javascript ECMAScript2015 (ES6),  HTML5, and CSS3.</strong>  A <strong> Microsoft SQL Server database, </strong> powers the server-side backend.
                  The backend implementes <strong>MVC/Web API REST architecture</strong> with controllers/services using 2 different frameworks: <strong>C#/ASP.NET</strong> and <strong>Node.JS/Express. </strong>
                </p>
                <br />
                <p className="lead">
                    Source code is available on <strong><a href="https://github.com/sbwiggins/samples"> Github</a></strong>
                </p>
                <p><Link to="/summary" className="btn btn-dark btn-lg">See Demo &raquo;</Link></p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2 className="bootstrap">Architecture Summary</h2>
                    <p>This page summarizes DoDAF Architecture and Viewpoint data. Two <strong>DevExtreme</strong> DataGrids display DoDAF Model data using <strong>C#/.NET based REST services. </strong>
                        Services extract database tables with <strong>.NET Entity Framework 6</strong> Object Relational Mapper (ORM).
                        A modal popup with a <strong>GoJS diagram</strong> is available to visualize this data. </p>
                    <p><Link className="btn btn-outline-dark" to="/summary">Go to page &raquo;</Link></p>
                </div>
                <div className="col-md-4">
                    <h2>Relating Architectures</h2>
                    <p>The user can define new DoDAF Architecture relationships using a <strong>DevExtreme</strong> Datagrid widget.
                        The frontend uses <strong>AJAX</strong> calls to <strong>Node.JS/Express REST API services </strong>that perform
                        <strong> CRUD opertions</strong> on the database.  Since <strong>Node.JS</strong> converts SQL result sets into <strong>JSON</strong> objects,
                        <strong> SQL stored procedures</strong> are used instead of an ORM.
                    </p>
                    <p><Link className="btn btn-outline-dark" to="/architectures">Go to page &raquo;</Link></p>
                </div>
                <div className="col-md-4">
                    <h2>Relating Viewpoints</h2>
                    <p>The user can define new  <strong><a href="https://dodcio.defense.gov/Library/DoD-Architecture-Framework/dodaf20_models/"> DoDAF ViewPoint </a></strong>
                        relationships using a <strong>DevExtreme</strong> Datagrid widget.
                        The frontend uses <strong>AJAX</strong> calls to <strong>Node.JS/Express REST API services </strong>that perform
                        <strong> CRUD opertions</strong> on the database.  Since <strong>Node.JS</strong> converts SQL result sets into <strong>JSON</strong> objects,
                        <strong> SQL stored procedures</strong> are used instead of an ORM.
                    </p>
                    <p><Link className="btn btn-outline-dark" to="/views">Go to page &raquo;</Link></p>
                </div>
            </div>


        </Fragment>
    )
}

export default HomePage