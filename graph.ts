class Nodo {
  public item: Pixel;
  public vertex: number;
  public next: Nodo;
}

class Pixel {
  public r: number;
  public g: number;
  public b: number;
  public a: number;
}

//TODO : Implement Iterator for Bags
class MyBag {
  private n: number;
  private primero: Nodo;

  constructor() {
    this.primero = null;
    this.n = null;
  }

  public isEmpty(): boolean {
    return (this.primero === null);
  }

  public size(): number{
    return this.n;
  }

  public add(item: Pixel, vertex:number){
    let firstA: Nodo;
    firstA = this.primero;
    this.primero = new Nodo();
    this.primero.item = item;
    this.primero.vertex = vertex;
    this.primero.next = firstA;
    this.n++;

  }
}
class Graph {
  private vertex: number;
  private edge: number;
  public adj: MyBag[];

  constructor(vertex: number) {
    if (vertex < 0) {
      console.log("Numero Negativo");
    }
    this.vertex = vertex;
    this.edge = 0;
    this.adj = new MyBag()[vertex];
    for (var v = 0; v < vertex; v++) {
      this.adj[v] = new MyBag();
    }
  }
   public V(): number{
      return this.vertex;
   }

   public E(): number{
     return this.edge;
   }

   public addEdge(v: number, w:number,vpix: Pixel, wpix:Pixel){
     if(v<0 || v>=this.vertex)
      console.log("Error");

      if(w<0 || w >= this.vertex)
      console.log("Error2");

      this.edge++;
      this.adj[v].add(wpix,w);
      this.adj[w].add(vpix,v);

   }
}

class NodoQ{
    public item: Pixel;
    public vertex: number;
    public prox:NodoQ;
}
class Cola{
  private n: number;
  private inicio: NodoQ;
  private ultimo: NodoQ;

  constructor(){
    this.inicio = null;
    this.ultimo = null;
    this.n = 0;
  }

  public isEmpty(): boolean{
    return this.inicio == null;
  }

  public entrar(item: Pixel, vertex:number){
    let anteriorUltimo: NodoQ;
    anteriorUltimo = this.ultimo;
    this.ultimo = new NodoQ();
    this.ultimo.item = item;
    this.ultimo.vertex = vertex;
    this.ultimo.prox = null;
    if(this.isEmpty)  this.inicio = this.ultimo;
    else anteriorUltimo.prox = this.ultimo;
    this.n++;
  }

  public salir(): number{
    if(this.isEmpty) console.log("Cola vacia");
    let item: number;
    item = this.inicio.vertex;
    this.inicio = this.inicio.prox;
    this.n--;
    if(this.isEmpty) this.ultimo = null;
    return item;
  }
}
class BFS{
  private marcado: Boolean[];
  private aristaHacia: number[];
  
  constructor(G: Graph, s:number, pixel: Pixel){
    this.marcado = new Boolean[G.V()];
    this.aristaHacia = new Number[G.V()];
    this.bfs2(G,s,pixel);
  }

  private bfs2(G: Graph, s:number, pixel : Pixel){
    let c = new Cola();
    c.entrar(pixel,s);
    
    while(!c.isEmpty){
        let v : number;


        v = c.salir();

        G.adj.forEach(element => {
          
        });
        for ( key:NodoQ in G.adj[v]) {
          if(!this.marcado[v]){
            c.entrar(key.)
          }
        }
        
    }
  }

}
