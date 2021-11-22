import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';
import Table from '../../assets/table/Table';
import TableGrouping from '../../assets/table/TableGrouping';
import Home from '../../pages/Home';

const Navigation = () => {
    return(
        <Navbar className="navbar pt-0 fixed-top">
            <Router>
                <Container> 
                    <Nav className="bg-custom col-12">
                        <Link className="nav-item" to="/">Home</Link>
                        <Link className="nav-item" to="/tableGrouping">Grouping</Link>
                        <Link className="nav-item" to="/table">Table</Link>
                    </Nav> 
                </Container>
                <br/>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/tableGrouping" element={<TableGrouping/>}></Route>
                        <Route path="/table" element={<Table/>}></Route>
                    </Routes>
                </Container>
            </Router>
        </Navbar>
    )
}

export default Navigation;