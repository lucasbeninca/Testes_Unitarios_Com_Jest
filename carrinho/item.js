class Item {
  constructor(nome, valor, quantidade) {
    this.nome = nome;
    this.valor = valor;
    this.quantidade = quantidade;
  }

  pegaValorTotalItem() {
    return this.quantidade * this.valor;
  }
}

export default Item;

// class Item {
//   constructor(nome, valor, quantidade) {
//     this.nome = nome;
//     this.valor = valor;
//     this.quantidade = quantidade;
//   }

//   calculaTotal() {
//     return this.quantidade * this.valor;
//   }
// }

// export default Item;
