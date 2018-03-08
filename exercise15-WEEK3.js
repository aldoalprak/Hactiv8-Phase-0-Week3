function groupAnimals(animals) {
  // you can only write your code here!
  var gabung=[];
   var a= [];var b= [];var c= [];var d= [];var e= [];var f= [];var g= [];var h= [];var i= [];var j= [];var k= [];var l= [];var m= [];var n= [];var o= [];var p= [];var q= [];var r= [];var s= [];var t= [];var u= [];var v= [];var w= [];var x= [];var y= [];var z= [];
  for(var ix=0;ix<animals.length;ix++) {
    if(animals[ix][0] === 'a') {
      a.push(animals[ix]);
    }
    if(animals[ix][0] === 'b') {
      b.push(animals[ix]);
    }
    if(animals[ix][0] === 'c') {
      c.push(animals[ix]);
    }
    if(animals[ix][0] === 'd') {
      d.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'e') {
      e.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'f') {
      f.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'g') {
      g.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'h') {
      h.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'i') {
      i.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'j') {
      j.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'k') {
      k.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'l') {
      l.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'm') {
      m.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'n') {
      n.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'o') {
      o.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'p') {
      p.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'q') {
      q.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'r') {
      r.push(animals[ix]);
      
    }
    if(animals[ix][0] === 's') {
      s.push(animals[ix]);
      
    }
    if(animals[ix][0] === 't') {
      t.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'u') {
      u.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'v') {
      v.push(animals[ix]);
      
    }
   
    if(animals[ix][0] === 'w') {
      w.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'x') {
      x.push(animals[ix]);
      
    }
    if(animals[ix][0] === 'y') {
      y.push(animals[ix]);
      
    }
     if(animals[ix][0] === 'z') {
      z.push(animals[ix]);
      
    }
  }
 // var abjad=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
  
  
  if(a[0]!== undefined){
  gabung.push(a);
  }
  if(b[0]!== undefined){
  gabung.push(b);
  }
  if(c[0]!== undefined){
  gabung.push(c);
  }
  if(d[0]!== undefined){
  gabung.push(d);
  }
  if(e[0]!== undefined){
  gabung.push(e);
  }
  if(f[0]!== undefined){
  gabung.push(f);
  }
  if(g[0]!== undefined){
  gabung.push(g);
  }
  if(h[0]!== undefined){
  gabung.push(h);
  }
  if(i[0]!== undefined){
  gabung.push(i);
  }
  if(j[0]!== undefined){
  gabung.push(j);
  }
  if(k[0]!== undefined){
  gabung.push(k);
  }
  if(l[0]!== undefined){
  gabung.push(l);
  }
  if(m[0]!== undefined){
  gabung.push(m);
  }
  if(n[0]!== undefined){
  gabung.push(n);
  }
  if(o[0]!== undefined){
  gabung.push(o);
  }
  if(p[0]!== undefined){
  gabung.push(p);
  }
  if(q[0]!== undefined){
  gabung.push(q);
  }
  if(r[0]!== undefined){
  gabung.push(r);
  }
  if(s[0]!== undefined){
  gabung.push(s);
  }
  if(t[0]!== undefined){
  gabung.push(t);
  }
  if(u[0]!== undefined){
  gabung.push(u);
  }
  if(v[0]!== undefined){
  gabung.push(v);
  }
  if(w[0]!== undefined){
  gabung.push(w);
  }
  if(x[0]!== undefined){
  gabung.push(x);
  }
  if(y[0]!== undefined){
  gabung.push(y);
  }
  if(z[0]!== undefined){
  gabung.push(z);
  }
  
  
  
  return gabung;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]


