class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length; 
    }

    clear() {
        this.items = [];
    }

add(item) {
    this.itens.push(item);
  }

  remove() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.itens.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined; 
    }
    return this.itens[0]; 
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  size() {
    return this.itens.length;
  }
 enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items.length > 0 ? this.items[0] : null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
 enfileirar(elemento) {
        this.itens.push(elemento);
  }

    desenfileirar() {
        return this.itens.shift();
  }

    primeiro() {
        return this.itens[0];
  }

    estaVazia() {
        return this.itens.length === 0;
  }

    tamanho() {
        return this.itens.length;
  }
}



module.exports = Queue