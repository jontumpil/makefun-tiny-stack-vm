import{readdirSync as D,readFileSync as R,mkdirSync as K,writeFileSync as W}from"fs"
let T=e=>{throw e},S="0` 1A2B3}}}}}}}}222222212221222}222}}}}}}}}}}}}}pqqp0}}}}}}}}}}}12}}}}}}}}}}}}}}11@1",{MAKEFUN_INPUT_DIR:I,MAKEFUN_OUTPUT_DIR:O}=process.env;I??="/input",O??="/output"
for(let n of D(I)){
let p=R(I+"/"+n+"/program.bin"),q=R(I+"/"+n+"/input.bin"),s=[],t=[],m=[],o="",P=0,j=0,x=10,k,u,v,L,A,a,b,g,r,z,y,d=O+"/"+n
try{
for(k=1e6;k;k--)
z=s.length,P<0|P>=p.length&&T(9),u=p[P],v=(S.charCodeAt(u)||125)-48,v==77&&T(5),
L=v>>5,L=L>2?4:L,P+L>=p.length&&T(9),z<(v&3)&&T(2),
v&16&&z>255&&T(3),A=L?p.readIntLE(P+1,L):0,
b=s[z-1],a=s[z-2],g=s[z-3],P+=1+L,
(u==0|u==83)?(x=u?b&255:0,k=1):u<3?s[z]=A:u==3?s.pop():u==4?s[z]=b:
u==5?(s[z-2]=b,s[z-1]=a):u==6?s[z]=a:u==7?(s[z-3]=a,s[z-2]=b,s[z-1]=g):
u>18&u<23&!b?T(4):u>15&u<35?((u==23|u==27)&&(a=b),r=[
a+b,a-b,Math.imul(a,b),a/b|0,a%b,(a>>>0)/(b>>>0),(a>>>0)%(b>>>0),
-a,a&b,a|b,a^b,~a,a<<b,a>>b,a>>>b,0,a==b,a<b,a>>>0<b>>>0][u-16]|0,
u==23|u==27?s[z-1]=r:(s[z-2]=r,s.pop())):
u>47&u<51?(u>48&&s.pop(),(u==48||(b!=0)^(u==49))&&(P+=A)):u==51?t[63]?T(7):(t.push(P),P=A&65535):
u==52?!t[0]?T(8):P=t.pop():
u>63&u<66?b<0|b>255?T(6):u==64?s[z-1]=m[b]||0:(m[b]=a,s.length-=2):
u>79&u<82?(y=u==80?""+b:String.fromCharCode(b&255),o.length+y.length>65536?T(11):(o+=y,s.pop())):u==82?s[z]=j<q.length?q[j++]:-1:0
}catch(e){x=e}
K(d,{recursive:!0}),W(d+"/stdout.bin",Buffer.from(o,"latin1")),W(d+"/exit.txt",""+x)
}
