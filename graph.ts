class Nodo {
  private item: number;
  private next: Nodo;
}

//TODO : Implement Iterator for Bags
class Bag {
  private n: number;
  private primero: Nodo;

  constructor() {
    this.primero = null;
    this.n = 0;
  }

  public isEmpty(): boolean {
    return (this.primero === null);
  }
}
class Graph {
  private pixel: number;
  private edge: number;
  private adj: Bag[];

  constructor(pixel: number) {
    if (pixel < 0) {
      console.log("Numero Negativo");
    }
    this.pixel = pixel;
    this.edge = 0;
    //   ady = (Bolsa<Integer>[]) new Bolsa[V];
    for (var v = 0; v < pixel; v++) {
     // ady[v] = new Bolsa<Integer>();
    }
    
  }
}
