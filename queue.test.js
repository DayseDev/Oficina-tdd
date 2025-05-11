const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const fila = new Queue();
   fila.enqueue(10);
   fila.enqueue(20);
   fila.enqueue(30);

   expect(fila.size());
   })

  it('Deve ser capaz de adicionar um item na fila', () => {
   const minhaFila = new Fila();

   minhaFila.add(10);
   minhaFila.add(20);
   minhaFila.add(30);

   expect(minhaFila.size());

   expect(minhaFila.peek());

   const primeiroItem = minhaFila.remove();
   expect(primeiroItem);
   })

  it('Deve escolher o primeiro item da fila', () => {
    const minhaFila = new Fila();
   minhaFila.enqueue(10);
   minhaFila.enqueue(20);
   minhaFila.enqueue(30);

   console.log(minhaFila.peek()); 
   minhaFila.dequeue();
   expect(minhaFila.peek()); 
   })

  it('Deve remover o primeiro item da fila', () => {
    const fila = new Fila();
   fila.enfileirar("A");
   fila.enfileirar("B");
   fila.enfileirar("C");

   expect("Tamanho da fila:", fila.tamanho()); 
   expect("Primeiro elemento:", fila.primeiro()); 

   const primeiroElemento = fila.desenfileirar();
   expect("Elemento removido:", primeiroElemento); 
   expect("Tamanho da fila depois do dequeue:", fila.tamanho());
   })
})