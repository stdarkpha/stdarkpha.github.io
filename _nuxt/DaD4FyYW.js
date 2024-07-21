import{c as b,f as c,g as v,S as p,d as h,r as i,a as l,b as d,e as D,u as g,h as u,s as I}from"./8dfXx0dx.js";import{i as n,r as R}from"./DXMov7Gx.js";import{a as k}from"./Dt0KXldn.js";const L=k([]),f=async()=>{try{const e=b(c,"development"),a=await v(e);L.value=a.docs.map(t=>({id:t.id,...t.data()})).sort((t,o)=>o.id.localeCompare(t.id))}catch(e){throw console.error("Error fetching development data:",e),e}},x=async(e,a)=>{if((await p.fire({title:"Are you sure?",text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",confirmButtonColor:"#ef4444",cancelButtonText:"Cancel"})).isConfirmed)try{const o=h(c,"development",e),r=i(l,`development/${a}`);await d(r);const s=i(l,`development/thumbnail_${a}`);await d(s),await D(o),await f(),n("Project Has Been Deleted",{theme:localStorage.getItem("theme")=="dark"?"dark":"auto",type:"success",position:"bottom-right",dangerouslyHTMLString:!0})}catch(o){n("Error deleting project, "+o,{theme:localStorage.getItem("theme")=="dark"?"dark":"auto",type:"error",position:"bottom-right",dangerouslyHTMLString:!0})}},C=async(e,a,t,o)=>{if(e)try{const r=e.name;console.log("Original File Name",r);const s=i(l,`development/${e.name}`),m=i(l,`development/thumbnail_${e.name}`),w=await R(e,480);await g(s,e);const y=await u(s);await g(m,w);const S=await u(m);await I(h(c,"development",new Date().toISOString()),{title:a,description:t,url:o,fileName:r,image:y,thumbnail:S}),f(),n("Image Succesfully Uploaded",{theme:localStorage.getItem("theme")=="dark"?"dark":"auto",type:"success",position:"bottom-right",dangerouslyHTMLString:!0})}catch(r){n("Error uploading image, "+r,{theme:localStorage.getItem("theme")=="dark"?"dark":"auto",type:"error",position:"bottom-right",dangerouslyHTMLString:!0})}else p.fire({icon:"error",title:"Oops...",text:"Please select an image to upload!"}),n("Oopss.., Please select an image to upload!",{theme:localStorage.getItem("theme")=="dark"?"dark":"auto",type:"error",position:"bottom-right",dangerouslyHTMLString:!0})};export{L as a,C as c,x as d,f as g};
