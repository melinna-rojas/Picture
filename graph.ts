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

  public isEmpty():boolean{
      return (this.primero === null);
  }
}
class Graph {
  private pixel: number;
  private edge: number;
}
