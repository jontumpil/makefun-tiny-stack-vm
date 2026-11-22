import{readdirSync as R,readFileSync as F,writeFileSync as W,mkdirSync as M}from"node:fs";
for(let d of R("/input").sort()){
M("/output/"+d,{recursive:true});
let P=F("/input/"+d+"/program.bin"),I;
try{I=F("/input/"+d+"/input.bin")}catch{I=P.subarray(0,0)}
let S=new Int32Array(256),s=0,C=new Int32Array(64),c=0,m=new Int32Array(256),O=[],p=0,q=0,n=0,E=0,L=P.length;
x:for(;;){
if(n>=1e6){E=10;break}
if(p<0||p>=L){E=9;break}
let o=P[p],k=o==1?1:o==2?4:o>47&&o<52?2:0;
if(!(o<8||o>15&&o<31||o>31&&o<35||o>47&&o<53||o==64||o==65||o>79&&o<84)){E=5;break}
if(k&&p+k>=L){E=9;break}
n++;
let v=o==1?(P[p+1]<<24)>>24:o==2?P[p+1]|P[p+2]<<8|P[p+3]<<16|P[p+4]<<24:o>47&&o<52?P[p+1]|P[p+2]<<8:0,j=(v<<16)>>16,po=0,pu=0;
if(o<3||o==82)pu=1;else if(o==3||o==49||o==50||o>79)po=1;else if(o==4){po=1;pu=2}else if(o==5){po=2;pu=2}else if(o==6){po=2;pu=3}else if(o==7)po=pu=3;else if(o==23||o==27||o==64){po=1;pu=1}else if(o==65)po=2;else if(o>15&&o<35){po=2;pu=1}
if(s<po){E=2;break}
if(s-po+pu>256){E=3;break}
if(o==0)break;
if(o<3){S[s++]=v;p+=k+1}
else if(o==3){s--;p++}
else if(o==4){S[s]=S[s-1];s++;p++}
else if(o==5){v=S[s-1];S[s-1]=S[s-2];S[s-2]=v;p++}
else if(o==6){S[s]=S[s-2];s++;p++}
else if(o==7){v=S[s-3];S[s-3]=S[s-2];S[s-2]=S[s-1];S[s-1]=v;p++}
else if(o>15&&o<35){
if(o==23){S[s-1]=-S[s-1];p++}
else if(o==27){S[s-1]=~S[s-1];p++}
else{let b=S[--s],a=S[s-1];
if(o>18&&o<23&&!b){E=4;break}
S[s-1]=o==16?a+b:o==17?a-b:o==18?Math.imul(a,b):o==19?(a/b)|0:o==20?a%b:o==21?((a>>>0)/(b>>>0))|0:o==22?((a>>>0)%(b>>>0))|0:o==24?a&b:o==25?a|b:o==26?a^b:o==28?a<<b:o==29?a>>b:o==30?a>>>b:o==32?a==b?1:0:o==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;p++}}
else if(o==48)p+=3+j;
else if(o==49)p+=3+(S[--s]?0:j);
else if(o==50)p+=3+(S[--s]?j:0);
else if(o==51){if(c>63){E=7;break}C[c++]=p+3;p=v}
else if(o==52){if(!c){E=8;break}p=C[--c]}
else if(o==64){v=S[s-1];if(v<0||v>255){E=6;break}S[s-1]=m[v];p++}
else if(o==65){v=S[s-1];if(v<0||v>255){E=6;break}m[v]=S[s-2];s-=2;p++}
else if(o==80){let t=""+S[--s];if(O.length+t.length>65536){E=11;break}for(let z of t)O.push(z.charCodeAt(0));p++}
else if(o==81){if(O.length>65535){E=11;break}O.push(S[--s]&255);p++}
else if(o==82){S[s++]=q<I.length?I[q++]:-1;p++}
else{E=S[--s]&255;break}
}
W("/output/"+d+"/stdout.bin",Buffer.from(O));W("/output/"+d+"/exit.txt",""+E);
}
