(()=>{"use strict";const e=function(){this.length=0,this.ships=[],this.lost=()=>{for(let e=0;e<5;e++)if(0==this.ships[e].Sunk())return 0;return 1},this.full=()=>5==this.length,this.add=e=>{this.ships.push(e),this.length+=1}},t=function(e,t,l,i,n){this.type=e,this.length=t,this.cells=l,this.grids=[],this.color=i,this.src=n,this.Sunk=()=>0==this.length?1:0,this.belongs=e=>{for(let t=0;t<this.length;t++)if(e[0]==this.cells[t][0]&e[1]==this.cells[t][1])return t;return-1},this.delete=e=>{this.grids.push(this.cells[e]),this.cells.splice(e,1),this.length+=-1}},l=(e,t,l,i,n,r)=>function(e,t,l,i){let n=t,r=10*(e[0]-1)+(e[1]-1);if(0==l){if(t>11-e[1])return 0;for(;n>0;){if(""!=i[r].style.backgroundColor)return 0;n+=-1,r+=1}}else{if(t>11-e[0])return 0;for(;n>0;){if(""!=i[r].style.backgroundColor)return 0;n+=-1,r+=10}}return 1}(e,t,l,i)?function(e,t,l,i,n,r){let s=t,o=10*(e[0]-1)+(e[1]-1),a=[];if(0==l)for(;s>0;){i[o].style.backgroundColor=n;let e=document.createElement("img");e.classList.add("imgstyle"),e.src=r,i[o].appendChild(e),a.push([Math.floor(o/10)+1,o%10+1]),s+=-1,o+=1}else for(;s>0;){i[o].style.backgroundColor=n;let e=document.createElement("img");e.classList.add("imgstyle"),e.src=r,i[o].appendChild(e),a.push([Math.floor(o/10)+1,o%10+1]),s+=-1,o+=10}return a}(e,t,l,i,n,r):-1;let i=[["Carrier",5,"orange","images/carrier.jpg"],["Battleship",4,"red","images/battleship.jpeg"],["Cruiser",3,"Blue","images/cruiser.jpeg"],["Submarine",3,"green","images/submarine.jpg"],["Destroyer",2,"pink","images/destroyer.jpg"]],n=document.querySelector("#computer"),r=new e;const s=()=>{for(let e=0;e<10;e++)for(let t=0;t<10;t++){let l=document.createElement("div");l.value=[e+1,t+1],n.appendChild(l)}!function(){for(;!r.full();){let e=Math.floor(100*Math.random()),s=n.children[e],o=r.length,a=Math.floor(2*Math.random()),h=l(s.value,i[o][1],a,n.children,i[o][2],i[o][3]);if(-1!=h){let e=new t(i[o][0],i[o][1],h,i[o][2],i[o][3]);r.add(e)}}for(let e=0;e<n.children.length;e++)if(n.children[e].style.backgroundColor="grey",1==n.children[e].children.length){let t=n.children[e].children[0];n.children[e].removeChild(t)}}()};let o=[],a=[],h={},c={},d=[[1,0],[-1,0],[0,1],[0,-1]],u=[],g=document.querySelector("#result"),m=document.querySelector("#reload");function p(){document.getElementById("hit").play()}let f=()=>{let e=-1,t=a.length,l=0;if(0==t&&0!=u.length&&(a=[u[u.length-1]],u.pop()),t=a.length,0==t){let t=Math.floor(Math.random()*o.length);e=E.children[o[t]],a.push(e.value),l=1}else if(1==t)for(let t=0;t<4;t++){let i=a[0][0]+d[t][0],n=a[0][1]+d[t][1],r=h[[Math.max(1,Math.min(10,i)),Math.max(1,Math.min(10,n))]];if(0==c[r]){e=E.children[[r]],a.push(e.value),l=1;break}}else{let i=1;if(a[0][0]==a[1][0]&&(i=0),1==i){let i=[Math.min(10,a[t-1][0]+1),a[t-1][1]];if(1==c[h[[Math.min(10,a[t-1][0]+1),a[t-1][1]]]]){for(let n=0;n<t;n++)if(i=[Math.max(1,a[n][0]-1),a[n][1]],0==c[h[i]]){a.push(i),l=1,e=E.children[h[i]];break}}else a.push(i),l=1,e=E.children[h[i]]}else{let i=[a[t-1][0],Math.min(10,a[t-1][1]+1)];if(1==c[h[[a[t-1][0],Math.min(10,a[t-1][1]+1)]]]){for(let n=0;n<t;n++)if(i=[a[n][0],Math.max(1,a[n][1]-1)],0==c[h[i]]){a.push(i),l=1,e=E.children[h[i]];break}}else a.push(i),l=1,e=E.children[h[i]]}}if(0==l){u=[];for(let e=0;e<a.length;e++)u.push(a[e]);a=[u[u.length-1]],u.pop();for(let t=0;t<4;t++){let i=a[0][0]+d[t][0],n=a[0][1]+d[t][1],r=h[[Math.max(1,Math.min(10,i)),Math.max(1,Math.min(10,n))]];if(0==c[r]){e=E.children[[r]],a.push(e.value),l=1;break}}}!function(e){if(""!=e.value&!T.lost()){let t=e.value,l=h[t];c[l]=1;for(let l=0;l<5;l++)if(-1!=T.ships[l].belongs(t)){if(T.ships[l].delete(T.ships[l].belongs(t)),0==T.ships[l].length){for(let e=0;e<a.length;e++){let t=o.indexOf(h[a[e]]);-1!=t&&o.splice(t,1)}a=[],e.value="";let t=document.createElement("img");return t.classList.add("answer"),t.src="images/check.ico",e.appendChild(t),g.innerHTML=`The enemy fires a shot into your waters  and they sunk your  ${T.ships[l].type}`,p(),T.lost()?(alert("WINNER Computer"),g.innerHTML="Computer Won Try Again",void(m.style.display="block")):void 0}e.value="";let i=document.createElement("img");return i.classList.add("answer"),i.src="images/check.ico",e.appendChild(i),g.innerHTML="The enemy fires a shot into your waters ...... it's a hit!",p(),void(T.lost()&&(alert("WINNER Computer"),m.style.display="block"))}e.style.backgroundColor="black";let i=document.createElement("img");i.classList.add("answer"),i.src="images/wrong.jpg",e.appendChild(i),e.value="",g.innerHTML="The enemy fires a shot into your waters ...... and misses.",document.getElementById("miss").play();let n=o.indexOf(h[a[a.length-1]]);o.splice(n,1),a.pop()}}(e)},y={},M=document.querySelector("#result"),k=document.querySelector("#reload");function b(e){return new Promise((t=>{setTimeout((()=>{t(2)}),e)}))}function v(){document.getElementById("hit").play()}function C(){document.getElementById("fire").play()}async function L(){if("grey"==this.style.backgroundColor&!r.lost()&!T.lost()){C();let e=await b(600),t=this.value;for(let l=0;l<5;l++)if(-1!=r.ships[l].belongs(t)){if(r.ships[l].delete(r.ships[l].belongs(t)),0==r.ships[l].length){this.style.backgroundColor="black",console.log(r.ships[l].grids);for(let e=0;e<r.ships[l].grids.length;e++){let t=n.children[y[r.ships[l].grids[e]]];if(1==t.children.length){let e=t.children[0];t.removeChild(e)}let i=document.createElement("img");i.classList.add("imgstyle"),i.src=r.ships[l].src,t.appendChild(i)}return M.innerHTML=`You fire a shot into enemy waters and you sunk your opponent ${r.ships[l].type}`,r.lost()?(alert("WINNER USER"),M.innerHTML="You WON hurray!🥳 ",void(k.style.display="block")):(v(),e=await b(1500),M.innerHTML="Your opponent is aiming...",C(),e=await b(1e3),void f())}this.style.backgroundColor="black",M.innerHTML="You fire a shot into enemy waters ...... it's a hit!";let i=document.createElement("img");return i.classList.add("answer"),i.src="images/check.ico",this.appendChild(i),v(),e=await b(1500),M.innerHTML="Your opponent is aiming...",C(),e=await b(1e3),f(),void(r.lost()&&(alert("WINNER USER"),M.innerHTML="You WON hurray!🥳 ",k.style.display="block"))}this.style.backgroundColor="black";let l=document.createElement("img");l.classList.add("answer"),l.src="images/wrong.jpg",this.appendChild(l),document.getElementById("miss").play(),M.innerHTML="You fire a shot into enemy waters ...... and miss.",e=await b(1900),M.innerHTML="Your opponent is aiming...",C(),e=await b(1e3),f()}}let w=[["Carrier",5,"orange","images/carrier.jpg"],["Battleship",4,"red","images/battleship.jpeg"],["Cruiser",3,"Blue","images/cruiser.jpeg"],["Submarine",3,"green","images/submarine.jpg"],["Destroyer",2,"pink","images/destroyer.jpg"]],E=document.querySelector("#user"),T=new e,H=0,S=document.querySelector("#direction");S.addEventListener("click",(function(){S.innerHTML=0==H?"Horizontal":"Vertical",H=1-H}));let j=document.querySelector("#result");function N(){if(T.full())s();else{let e=T.length,i=l(this.value,w[e][1],H,E.children,w[e][2],w[e][3]);if(-1!=i){let l=new t(w[e][0],w[e][1],i,w[e][2],w[e][3]);T.add(l),T.full()||(j.innerHTML=`Select position for your ${w[T.length][0]}...`)}if(T.full()){S.style.display="none",j.innerHTML="Awaiting for your order to fire.....",s();for(let e=0;e<E.children.length;e++)E.children[e].removeEventListener("click",N);(()=>{for(let e=0;e<n.children.length;e++)n.children[e].addEventListener("click",L),y[n.children[e].value]=e})(),(()=>{for(let e=0;e<E.children.length;e++)h[E.children[e].value]=e,c[e]=0,o.push(e)})()}}}j.innerHTML=`Select position for your ${w[T.length][0]}...`,(()=>{for(let e=0;e<10;e++)for(let t=0;t<10;t++){let l=document.createElement("div");l.value=[e+1,t+1],l.addEventListener("click",N),E.appendChild(l)}})();let q=document.querySelector("#reload");console.log(3),q.addEventListener("click",(()=>{console.log(1),location.reload()}))})();