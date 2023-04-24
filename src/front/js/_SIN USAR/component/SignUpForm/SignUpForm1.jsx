import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../../store/AppContext.js";

import "./signup-form.css";

const SignUpForm1 = () => {

  const { store, actions } = useAppContext();

  const handleChangeLocalidad = (event) => actions.setLocalidad(event.target.value);
  const handleCheckPropietario = () => { actions.setPropietario(!store.propietario); if (store.cuidador) actions.setCuidador(false); }
  const handleCheckCuidador = () => { actions.setCuidador(!store.cuidador); if (store.propietario) actions.setPropietario(false); }


  return (
    <>
      <section className="py-2 custom-login">
        <div className="container p-2 bg-light">
          <div className="row">
            <h2 className="text-center p-4">REGISTRO DE USUARIOS</h2>

            <div className="col-12 col-md-6 py-3">
              <img
                src="https://cdn.pixabay.com/photo/2019/02/07/16/26/cocker-spaniel-3981587_1280.jpg"
                className="img-fluid" />
            </div>

            <div className="col-12 col-md-6 p-2">
              <form>
                <h2 className="pb-2">Información personal</h2>
                <p className="pb-2">Cuéntanos un poquito acerca de ti.</p>

                <div className="d-grid gap-2">
                  <label htmlFor="foto-usuario" className="form-label">
                    Foto de perfil
                  </label>
                  <input className="form-control" type="file" id="foto-usuario" value={store.fotoUser}
                    onChange={(e) => actions.setFotoUser(e.target.value)} />

                  <div className="py-2">
                    <label htmlFor="nombre-usuario" className="form-label">
                      Nombre *
                    </label>
                    <input className="form-control" type="text" id="nombre-usuario"
                      aria-describedby="nombre_usuario" placeholder="Nombre del usuario"
                      value={store.nombreUser}
                      onChange={(e) => actions.setNombreUser(e.target.value)}
                      required />
                  </div>

                  <div className="py-2">
                    <label htmlFor="apellidos-usuario" className="form-label">
                      Apellidos *
                    </label>
                    <input className="form-control" type="text" id="apellidos-usuario"
                      aria-describedby="apellidos_usuario" placeholder="Apellidos del usuario"
                      value={store.apellidosUser}
                      onChange={(e) => actions.setApellidosUser(e.target.value)}
                      required />
                  </div>

                  <div className="py-2">
                    <label htmlFor="emailRegistroUser">Correo Electrónico</label>
                    <input className="form-control" type="email" id="emailRegistroUser"
                      placeholder="name@example.com"
                      value={store.emailRegistro}
                      onChange={(e) => actions.setEmailRegistro(e.target.value)}
                      required />
                  </div>

                  <div className="py-2">
                    <label htmlFor="passRegistroUser">Contraseña</label>
                    <input className="form-control" type="password" id="passRegistroUser"
                      placeholder="Password"
                      value={store.passwordRegistro}
                      onChange={(e) => actions.setPasswordRegistro(e.target.value)}
                      required />
                  </div>

                  <div className="py-2">
                    <label htmlFor="direccion-usuario" className="form-label">
                      Dirección *
                    </label>
                    <input className="form-control" type="text" id="direccion-usuario"
                      aria-describedby="direccion_usuario" placeholder="Dirección del usuario (Calle y número)"
                      value={store.direccion}
                      onChange={(e) => actions.setDireccion(e.target.value)}
                      required />
                  </div>

                  <div className="py-2">
                    <label htmlFor="codigo-postal-usuario" className="form-label">
                      Código Postal *
                    </label>
                    <input className="form-control" type="text" id="codigo-postal-usuario"
                      aria-describedby="codigo_postal_usuario" placeholder="30000"
                      value={store.codigoPostal}
                      onChange={(e) => actions.setCodigoPostal(e.target.value)}
                      required />
                  </div>

                  <div className="py-2">
                    <label htmlFor="provincia-user" className="form-label">
                      Localidad *
                    </label>
                    <select required name="provincia" id="provincia-user" className="form-control" value={store.localidad} onChange={handleChangeLocalidad}>
                      <option defaultValue="">Elige Provincia</option>
                      <option value="Álava">Álava</option>
                      <option value="Albacete">Albacete</option>
                      <option value="Alicante">Alicante</option>
                      <option value="Almería">Almería</option>
                      <option value="Asturias">Asturias</option>
                      <option value="Ávila">Ávila</option>
                      <option value="Badajoz">Badajoz</option>
                      <option value="Baleares">Baleares</option>
                      <option value="Barcelona">Barcelona</option>
                      <option value="Burgos">Burgos</option>
                      <option value="Cáceres">Cáceres</option>
                      <option value="Cádiz">Cádiz</option>
                      <option value="Cantabria">Cantabria</option>
                      <option value="Castellón">Castellón</option>
                      <option value="Ceuta">Ceuta</option>
                      <option value="Ciudad Real">Ciudad Real</option>
                      <option value="Córdoba">Córdoba</option>
                      <option value="Cuenca">Cuenca</option>
                      <option value="Gerona">Gerona</option>
                      <option value="Granada">Granada</option>
                      <option value="Guadalajara">Guadalajara</option>
                      <option value="Guipúzcoa">Guipúzcoa</option>
                      <option value="Huelva">Huelva</option>
                      <option value="Huesca">Huesca</option>
                      <option value="Jaén">Jaén</option>
                      <option value="La Coruña">La Coruña</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Las Palmas">Las Palmas</option>
                      <option value="León">León</option>
                      <option value="Lérida">Lérida</option>
                      <option value="Lugo">Lugo</option>
                      <option value="Madrid">Madrid</option>
                      <option value="Málaga">Málaga</option>
                      <option value="Melilla">Melilla</option>
                      <option value="Murcia">Murcia</option>
                      <option value="Navarra">Navarra</option>
                      <option value="Orense">Orense</option>
                      <option value="Palencia">Palencia</option>
                      <option value="Pontevedra">Pontevedra</option>
                      <option value="Salamanca">Salamanca</option>
                      <option value="Segovia">Segovia</option>
                      <option value="Sevilla">Sevilla</option>
                      <option value="Soria">Soria</option>
                      <option value="Tarragona">Tarragona</option>
                      <option value="Tenerife">Tenerife</option>
                      <option value="Teruel">Teruel</option>
                      <option value="Toledo">Toledo</option>
                      <option value="Valencia">Valencia</option>
                      <option value="Valladolid">Valladolid</option>
                      <option value="Vizcaya">Vizcaya</option>
                      <option value="Zamora">Zamora</option>
                      <option value="Zaragoza">Zaragoza</option>
                    </select>
                  </div>

                  <div className="py-2">
                    <label htmlFor="telefono-user" className="form-label">
                      Teléfono *
                    </label>
                    <input className="form-control" type="tel" id="telefono-user"
                      aria-describedby="telefono" placeholder="666123456"
                      value={store.telefono}
                      onChange={(e) => actions.setTelefono(e.target.value)}
                      required />
                  </div>
                </div>

                <h3 className="pb-2">¿Cómo quieres registrarte?</h3>
                <p>Elige una opción</p>
                <div className="row g-2">
                  <div className="col-md">
                    <div className="form-floating">
                      <div className="glowing-register m-2">
                        <input type="radio" id="propietario" name="perfil"
                          onChange={handleCheckPropietario}
                          checked={store.propietario} />
                        <label htmlFor="propietario">Propietario</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating">
                      <div className="glowing-register m-2">
                        <input type="radio" id="cuidador" name="perfil"
                          onChange={handleCheckCuidador}
                          checked={store.cuidador} />
                        <label htmlFor="cuidador">Cuidador</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end py-3">
                  {store.propietario
                    ? <Link to="/sign-up-form3"> <button className="btn btn-primary m-3" type="submit"> Siguiente </button> </Link>
                    : store.cuidador
                      ? <Link to="/sign-up-form-c1"> <button className="btn btn-primary m-3" type="submit"> Siguiente </button> </Link>
                      : null
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUpForm1;
