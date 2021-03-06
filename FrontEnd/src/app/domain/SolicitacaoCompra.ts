import { StatusCompra } from './StatusCompra';
import { Usuario } from './Usuario';

export class SolicitacaoCompra {
    id?: number;
    preco: string;
    descricao: string;
    statusCompra: StatusCompra;
    usuarioSolicitante: Usuario;
    observacaoReprovacao: string;
};