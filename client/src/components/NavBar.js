import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavLink } from 'react-router-dom';
import {SHOP_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import Button from "react-bootstrap/Button"
import {observer} from 'mobx-react-lite';
import {useHistory} from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/consts";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut =  () =>{
         user.setUser({})
         user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container >
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {/*<Button*/}
                        {/*    variant={"outline-light"}*/}
                        {/*    onClick={() =>history.push(ADMIN_ROUTE)}*/}
                        {/*>Админ панель*/}
                        {/*</Button>*/}
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="mx-2"
                        >Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(LOGIN_ROUTE)}>Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;