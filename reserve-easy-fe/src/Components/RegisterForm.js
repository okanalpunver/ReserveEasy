import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Form, FormGroup, Input, Label, Row, } from "reactstrap";
import Button from "./RegisterButton";



const RegisterForm = () => {
    return(
        <Form className={"register-form"}>
            <Row>
                <Col md={6} >
                    <FormGroup>
                        <Label for="Email">
                            Email
                        </Label>
                        <Input
                            id="Email"
                            name="email"
                            placeholder="E-mail"
                            type="email"
                        />
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Label for="Password">
                            Password
                        </Label>
                        <Input
                            id="Password"
                            name="password"
                            placeholder="password "
                            type="password"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for ="Adınız">
                            Adınız
                        </Label>
                        <Input
                            id={"Adınız"}
                            name={"Adınız"}
                            placeholder={"Adınız"}
                            type={"Adınız"}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for ="Soy İsim">
                           Soy İsim
                        </Label>
                        <Input
                            id={"Soy İsim"}
                            name={"Soy İsim"}
                            placeholder={"Soy İsim"}
                            type={"Soy İsim"}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="Adres">
                    Adres
                </Label>
                <Input
                    id="Adres"
                    name="Adres"
                    placeholder="1234 Main St"
                />
            </FormGroup>
            <FormGroup>
                <Label for="Adres2">
                    Adres
                </Label>
                <Input
                    id="Adres2"
                    name="Adres2"
                    placeholder="Apartment, studio, or floor"
                    valid
                />
            </FormGroup>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="Şehir">
                            Şehir
                        </Label>
                        <Input
                            id="Şehir"
                            name="Şehir"
                            valid
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="Ülke">
                            Ülke
                        </Label>
                        <Input
                            id="Ülke"
                            name="Ülke"
                            valid
                        />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="exampleZip">
                            Zip
                        </Label>
                        <Input
                            id="exampleZip"
                            name="zip"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup check>
                <Input
                    id="exampleCheck"
                    name="check"
                    type="checkbox"

                />
                <Label
                    check
                    for="exampleCheck"
                >
                    Terms&Conditions
                </Label>
            </FormGroup>
            <Button color="primary" type="button">
                Üye Ol
            </Button>
        </Form>
    )
}
export default RegisterForm