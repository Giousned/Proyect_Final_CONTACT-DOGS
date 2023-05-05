import React from "react";
import { Link } from "react-router-dom";
{/* import { Link, animateScroll as scroll } from "react-scroll"; */ }
{/* import "./hire.js"; */ }
import "./hire.css";

const Hire = () => {
    return (
        <div className="hire">
            <div className="reserves">
                <div className="header">
                    <h1 className="text-center p-4">CONTRATAR CUIDADOR</h1>
                </div>
            </div>

            <div className="container my-4">
                <div className=" bg-body-tertiary rounded-3">
                    <h3 className="text-body-emphasis text-center pb-4">Contacta con: Sandra M</h3>
                    <h4>Selecciona el servicio:</h4>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <div className="glowing-register m-2">
                                    <input type="radio" id="noche"
                                        name="radioService" value="AlojamientoNoche" />
                                    <label htmlFor="noche">Alojamiento de Noche</label>
                                    <p className="fst-italic justify-content-center pt-2">
                                        Alojamiento para tu perro en casa del cuidador seleccionado incluyendo la noche.
                                        No olvides entregar su comida, premios, cama, cartilla veterinaria y su juguete favorito.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <div className="glowing-register m-2">
                                    <input type="radio" id="paseo"
                                        name="radioService" value="Paseo" />
                                    <label htmlFor="paseo">Paseo</label>
                                    <p className="fst-italic justify-content-center pt-2">
                                        60 minutos de paseo para tu perro. La recogida y entrega será en tu casa. ¡No olvides la correa!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <div className="glowing-register m-2">
                                    <input type="radio" id="dia"
                                        name="radioService" value="GuarderiaDia" />
                                    <label htmlFor="dia">Guarderia de Día</label>
                                    <p className="fst-italic justify-content-center pt-2">
                                        Deja a tu perro durante el día en casa de un cuidador de Gudog un máximo de 10 horas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* CALENDARIO ---> NO SE COMO HACERLO */}
                    <div className="container d-flex">
                        <div className="p-5 col-6">
                            <div className="softcard">
                                <div className="calendar-bar">
                                    <button className="prev soft-btn"><i className="fas fa-chevron-left"></i></button>
                                    <div className="current-month"></div>
                                    <button className="next soft-btn"><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="calendar">
                                    <div className="weekdays-name">
                                        <div className="days-name">Sab</div>
                                        <div className="days-name">Dom</div>
                                        <div className="days-name">Lun</div>
                                        <div className="days-name">Mar</div>
                                        <div className="days-name">Mie</div>
                                        <div className="days-name">Jue</div>
                                        <div className="days-name">Vie</div>
                                    </div>
                                    <div className="calendar-days"></div>
                                </div>
                                <div className="goto-buttons">
                                    ENTREGA:
                                </div>
                            </div>
                        </div>

                        <div className="p-5 col-6">
                            <div className="softcard">
                                <div className="calendar-bar">
                                    <button className="prev soft-btn"><i className="fas fa-chevron-left"></i></button>
                                    <div className="current-month"></div>
                                    <button className="next soft-btn"><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="calendar">
                                    <div className="weekdays-name">
                                        <div className="days-name">Sab</div>
                                        <div className="days-name">Dom</div>
                                        <div className="days-name">Lun</div>
                                        <div className="days-name">Mar</div>
                                        <div className="days-name">Mie</div>
                                        <div className="days-name">Jue</div>
                                        <div className="days-name">Vie</div>
                                    </div>
                                    <div className="calendar-days"></div>
                                </div>
                                <div className="goto-buttons">
                                    RECOGIDA:
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CALENDARIO */}
                    <div className="d-flex">
                        <div className="col-6 me-2">
                            <label htmlFor="fechaReserva" className="form-label">
                                ENTREGA:
                            </label>
                            <br />
                            <input className="form-control" type="date" id="fechaReserva"
                                aria-describedby="fecha-nacimiento-perro"
                                name="fechaReserva"
                                value="fechaReserva"
                                required />
                            <br />
                            <label for="appt">Elige una hora: &nbsp;</label>
                            <input type="time" id="appt" name="appt"
                                min="07:00" max="23:00" required />
                            <small>&nbsp;Elige una hora entre las 7:00 y las 23:00</small>
                        </div>

                        <div className="col-6 ms-2">
                            <label htmlFor="fechaReserva" className="form-label">
                                RECOGIDA:
                            </label>
                            <br />
                            <input className="form-control" type="date" id="fechaReserva"
                                aria-describedby="fecha-nacimiento-perro"
                                name="fechaReserva"
                                value="fechaReserva"
                                required />
                            <br />
                            <label for="appt">Elige una hora: &nbsp;</label>
                            <input type="time" id="appt" name="appt"
                                min="07:00" max="23:00" required />
                            <small>&nbsp;Elige una hora entre las 7:00 y las 23:00</small>

                        </div>
                    </div>

                    <h3 className="mt-4 pt-4">Tus Perros</h3>
                    <p className="lead">
                        Tu Perro o Añadir otro Perro
                    </p>

                    <h3 className="mt-4 pt-4">Tu Teléfono</h3>
                    <p className="lead">
                        666 123 456
                    </p>

                    <h3 className="mt-4 pt-4">Mensaje</h3>
                    <div className="mb-3">
                        <label for="MensajeACuidador" className="form-label">
                            Comparte más información sobre tu perro con <b>SANDRA M.</b>
                        </label>
                        <textarea className="form-control" id="MensajeACuidador" rows="3"></textarea>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="action-button shadow animate blue">Enviar</button>
                        <Link to="/more-About" className="action-button shadow animate red">Ir Atrás</Link>
                    </div>

                    <Link to="#navbar" className="simplescrollup__button simplescrollup__button--hide"
                        spy={true} smooth={true} duration={800}>
                        <h2>
                            <i className="fas fa-arrow-circle-up"></i>
                        </h2>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Hire;