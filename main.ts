import{readFileSync as R,mkdirSync as K,writeFileSync as W,readdirSync as D}from"node:fs";
let E=process.env,I=E.MAKEFUN_INPUT_DIR||"/input",O=E.MAKEFUN_OUTPUT_DIR||"/output";
for(let d of D(I)){
let y=I+"/"+d+"/",p=R(y+"program.bin"),q=R(y+"input.bin"),s=[],c=[],m=new Int32Array(256),o=[],x=0,g=0,h=0,j=0,k=0,U=()=>{if(!h)throw 2;return s[--h]},V=v=>{if(h>255)throw 3;s[h++]=v|0};
try{for(;;){
if(k++>=1e6)throw 10;
if(g<0||g>=p.length)throw 9;
let u=p[g],z=u==1?1:u==2?4:u>47&&u<52?2:0;
if(!(u<8||u>15&&u<35||u>47&&u<53||u==64||u==65||u>79&&u<84))throw 5;
if(z&&g+z>=p.length)throw 9;
let n=g+1+z,t,a,b;
g=n;
if(!u)throw 0;
if(u==1)V(p.readInt8(n-1));
else if(u==2)V(p.readInt32LE(n-4));
else if(u==3)U();
else if(u==4)t=U(),V(t),V(t);
else if(u==5)b=U(),a=U(),V(b),V(a);
else if(u==6)b=U(),a=U(),V(a),V(b),V(a);
else if(u==7)t=U(),b=U(),a=U(),V(b),V(t),V(a);
else if(u==23)V(-U());
else if(u==27)V(~U());
else if(u>15&&u<35){b=U();a=U();if(!b&&u>18&&u<23)throw 4;V(u<17?a+b:u<18?a-b:u<19?Math.imul(a,b):u<20?a/b:u<21?a%b:u<22?(a>>>0)/(b>>>0):u<23?(a>>>0)%(b>>>0):u<25?a&b:u<26?a|b:u<27?a^b:u<29?a<<b:u<30?a>>b:u<31?a>>>b:u<33?(a==b?1:0):u<34?(a<b?1:0):(a>>>0)<(b>>>0)?1:0)}
else if(u>47&&u<51){t=p.readInt16LE(n-2);if(u==48)g=n+t;else if((u==49)==!U())g=n+t;}
else if(u==51){if(c.length>63)throw 7;c.push(n);g=p[n-2]|p[n-1]<<8;}
else if(u==52){if(!c.length)throw 8;g=c.pop();}
else if(u==64){a=U();if(a<0||a>255)throw 6;V(m[a]);}
else if(u==65){a=U();b=U();if(a<0||a>255)throw 6;m[a]=b;}
else if(u==80){t=""+U();if(o.length+t.length>65536)throw 11;for(let e of t)o.push(e.charCodeAt());}
else if(u==81){if(o.length>65535)throw 11;o.push(U()&255);}
else if(u==82)V(j<q.length?q[j++]:-1);
else if(u==83)throw U()&255;
}}catch(e){x=e}
let w=O+"/"+d+"/";
K(w,{recursive:!0});
W(w+"stdout.bin",Buffer.from(o));
W(w+"exit.txt",""+x);
}
