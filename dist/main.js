(()=>{"use strict";const e=function(){this.length=0,this.ships=[],this.lost=()=>{for(let e=0;e<5;e++)if(0==this.ships[e].Sunk())return 0;return 1},this.full=()=>5==this.length,this.add=e=>{this.ships.push(e),this.length+=1}},l=function(e,l,t,r){this.type=e,this.length=l,this.cells=t,this.grids=t,this.color=r,this.Sunk=()=>0==this.length?1:0,this.belongs=e=>{for(let l=0;l<this.length;l++)if(e[0]==this.cells[l][0]&e[1]==this.cells[l][1])return l;return-1},this.delete=e=>{this.cells.splice(e,1),this.length+=-1}},t=(e,l,t,r,n)=>function(e,l,t,r){let n=l,i=10*(e[0]-1)+(e[1]-1);if(0==t){if(l>11-e[1])return 0;for(;n>0;){if(""!=r[i].style.backgroundColor)return 0;n+=-1,i+=1}}else{if(l>11-e[0])return 0;for(;n>0;){if(""!=r[i].style.backgroundColor)return 0;n+=-1,i+=10}}return 1}(e,l,t,r)?function(e,l,t,r,n){let i=l,o=10*(e[0]-1)+(e[1]-1),h=[];if(0==t)for(;i>0;)r[o].style.backgroundColor=n,h.push([Math.floor(o/10)+1,o%10+1]),i+=-1,o+=1;else for(;i>0;)r[o].style.backgroundColor=n,h.push([Math.floor(o/10)+1,o%10+1]),i+=-1,o+=10;return h}(e,l,t,r,n):-1;let r=[["Carrier",5,"orange"],["Battleship",4,"red"],["Cruiser",3,"Blue"],["Submarine",3,"green"],["Destroyer",2,"pink"]],n=document.querySelector("#computer"),i=new e;const o=()=>{for(let e=0;e<10;e++)for(let l=0;l<10;l++){let t=document.createElement("div");t.value=[e+1,l+1],n.appendChild(t)}!function(){for(;!i.full();){let e=Math.floor(100*Math.random()),o=n.children[e],h=i.length,s=Math.floor(2*Math.random()),a=t(o.value,r[h][1],s,n.children,r[h][2]);if(-1!=a){let e=new l(r[h][0],r[h][1],a,r[h][2]);i.add(e)}}for(let e=0;e<n.children.length;e++)n.children[e].style.backgroundColor="grey"}()};let h=[],s=[],a={},u={},c=[[1,0],[-1,0],[0,1],[0,-1]],f=[],d=()=>{let e=-1,l=s.length,t=0;if(console.log(s,s.length,l),0==l&&0!=f.length&&(s=[f[f.length-1]],f.pop()),l=s.length,0==l){let l=Math.floor(Math.random()*h.length);e=m.children[h[l]],s.push(e.value),t=1}else if(1==l)for(let l=0;l<4;l++){let r=s[0][0]+c[l][0],n=s[0][1]+c[l][1],i=a[[Math.max(1,Math.min(10,r)),Math.max(1,Math.min(10,n))]];if(0==u[i]){e=m.children[[i]],s.push(e.value),t=1;break}}else{let r=1;if(s[0][0]==s[1][0]&&(r=0),1==r){let r=[Math.min(10,s[l-1][0]+1),s[l-1][1]];if(1==u[a[[Math.min(10,s[l-1][0]+1),s[l-1][1]]]]){for(let n=0;n<l;n++)if(r=[Math.max(1,s[n][0]-1),s[n][1]],0==u[a[r]]){s.push(r),t=1,console.log(s),e=m.children[a[r]];break}}else console.log(r,u[a[r]]),s.push(r),t=1,e=m.children[a[r]]}else{let r=[s[l-1][0],Math.min(10,s[l-1][1]+1)];if(1==u[a[[s[l-1][0],Math.min(10,s[l-1][1]+1)]]]){for(let n=0;n<l;n++)if(r=[s[n][0],Math.max(1,s[n][1]-1)],console.log(r),0==u[a[r]]){s.push(r),t=1,e=m.children[a[r]];break}}else console.log(r,u[a[r]]),s.push(r),t=1,e=m.children[a[r]]}}if(0==t){f=[];for(let e=0;e<s.length;e++)f.push(s[e]);s=[f[f.length-1]],f.pop();for(let l=0;l<4;l++){let r=s[0][0]+c[l][0],n=s[0][1]+c[l][1],i=a[[Math.max(1,Math.min(10,r)),Math.max(1,Math.min(10,n))]];if(0==u[i]){e=m.children[[i]],s.push(e.value),t=1;break}}}!function(e){if(""==e.innerHTML){let l=e.value,t=a[l];u[t]=1;for(let t=0;t<5;t++)if(-1!=M.ships[t].belongs(l)){if(M.ships[t].delete(M.ships[t].belongs(l)),0==M.ships[t].length){for(let e=0;e<s.length;e++){let l=h.indexOf(a[s[e]]);-1!=l&&h.splice(l,1)}s=[]}return e.style.backgroundColor=M.ships[t].color,e.innerHTML="R",void(M.lost()&&alert("WINNER Computer"))}e.style.backgroundColor="black",e.innerHTML="W";let r=h.indexOf(a[s[s.length-1]]);h.splice(r,1),s.pop()}}(e)};function g(){if("grey"==this.style.backgroundColor){let e=this.value;for(let l=0;l<5;l++)if(-1!=i.ships[l].belongs(e))return i.ships[l].delete(i.ships[l].belongs(e)),console.log(i.ships[l].color),this.style.backgroundColor=i.ships[l].color,d(),void(i.lost()&&alert("WINNER user"));this.style.backgroundColor="black",d()}}let p=[["Carrier",5,"orange"],["Battleship",4,"red"],["Cruiser",3,"Blue"],["Submarine",3,"green"],["Destroyer",2,"pink"]],m=document.querySelector("#user"),M=new e;function b(){if(M.full())o();else{let e=M.length,r=0,i=t(this.value,p[e][1],r,m.children,p[e][2]);if(-1!=i){let t=new l(p[e][0],p[e][1],i,p[e][2]);M.add(t)}if(M.full()){o();for(let e=0;e<m.children.length;e++)m.children[e].removeEventListener("click",b);(()=>{for(let e=0;e<n.children.length;e++)n.children[e].addEventListener("click",g)})(),(()=>{for(let e=0;e<m.children.length;e++)a[m.children[e].value]=e,u[e]=0,h.push(e)})()}}}(()=>{for(let e=0;e<10;e++)for(let l=0;l<10;l++){let t=document.createElement("div");t.value=[e+1,l+1],t.addEventListener("click",b),m.appendChild(t)}})()})();