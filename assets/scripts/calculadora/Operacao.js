export default class Operacao {
    operacao;
    onCalculado;
    constructor(opts, operacao = []) {
        this.operacao = operacao;
        this.onCalculado = opts.onCalculado;
    }
    adicionar(valor) {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        this.operacao.push(valor);
        return this.length;
    }
    obterResultado() {
        let resultado;
        try {
            resultado = eval(this.operacao.join('')).toString();
        }
        catch (e) {
            resultado = 'ERRO';
        }
        return resultado;
    }
    calcular() {
        let resultado = this.obterResultado();
        if (resultado.length > 12) {
            resultado = resultado.substring(0, 12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }
    get ultimaPosicao() {
        return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0";
    }
    set ultimaPosicao(valor) {
        const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;
        this.operacao[ultimoIndex] = valor;
    }
    get length() {
        return this.operacao.length;
    }
}
//# sourceMappingURL=Operacao.js.map