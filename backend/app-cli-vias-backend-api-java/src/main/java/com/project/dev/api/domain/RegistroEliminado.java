/*
 * @fileoverview    {RegistroEliminado}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code RegistroEliminado}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"RegistroEliminado\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RegistroEliminado implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private String strPlaca;
    private String strCaso;
    private String strConductor;
    private Integer intCedula;
    private String strMateriaPrimaProducto;
    private String strClienteProveedor;
    private String strOrigenDestino;
    private String strFechaEntrada;
    private String strHoraEntrada;
    private String strFechaPesoVacio;
    private String strHoraPesoVacio;
    private String strFechaDespachoPlanta;
    private String strHoraDespachoPlanta;
    private String strFechaPesoLleno;
    private String strHoraPesoLleno;
    private String strFechaSalida;
    private String strHoraSalida;
    private Integer intBruto;
    private Integer intTara;
    private Integer intNeto;
    private String strNoShipment;
    private String strNoSello;
    private String strNoR;
    private String strNoContenedor;
    private String strOperario;
    private String strNickOperario;
    private String strObservaciones;
    @JoinColumn(name = "strTransportadora", referencedColumnName = "strCodigo")
    private String strTransportadora;
    @JoinColumn(name = "strPlanta", referencedColumnName = "strNombre")
    private String strPlanta;

}
