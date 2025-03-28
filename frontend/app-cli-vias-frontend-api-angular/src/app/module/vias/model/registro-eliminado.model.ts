/*
 * @fileoverview    {RegistroEliminadoViewModel}
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
import { Injectable } from "@angular/core";
import { GenericViewModel } from "@app/module/essential/model/generic.model";
import { Id } from "@app/module/essential/decorator/id.decorator";
import { NotNull } from "@app/module/essential/decorator/not-null.decorator";
import { Hidden } from "@app/module/essential/decorator/hidden.decorator";
import { Temporal } from "@app/module/essential/decorator/temporal.decorator";
import { TemporalType } from "@app/module/essential/model/temporal-type.model";

/**
 * TODO: Description of {@code RegistroEliminadoViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RegistroEliminadoViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public strPlaca: string;
    public strCaso: string;
    public strConductor: string;
    public intCedula: number;
    public strMateriaPrimaProducto: string;
    public strPlanta: string;
    public strClienteProveedor: string;
    public strOrigenDestino: string;
    public strTransportadora: string;
    public strFechaEntrada: string;
    public strHoraEntrada: string;
    public strFechaPesoVacio: string;
    public strHoraPesoVacio: string;
    public strFechaDespachoPlanta: string;
    public strHoraDespachoPlanta: string;
    public strFechaPesoLleno: string;
    public strHoraPesoLleno: string;
    public strFechaSalida: string;
    public strHoraSalida: string;
    public intBruto: number;
    public intTara: number;
    public intNeto: number;
    public strNoShipment: string;
    public strNoSello: string;
    public strNoR: string;
    public strNoContenedor: string;
    public strOperario: string;
    public strNickOperario: string;
    public strObservaciones: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): RegistroEliminadoViewModel {
        return new RegistroEliminadoViewModel();
    }

}
