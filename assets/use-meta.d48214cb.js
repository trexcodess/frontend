import{h as i,x as o,a4 as e,K as u,J as l,R as v,a5 as c}from"./index.cf8050ef.js";function d(t){{const a={active:!0};if(typeof t=="function"){const n=i(t);a.val=n.value,o(n,s=>{a.val=s,a.active===!0&&e()})}else a.val=t;c.push(a),e(),u(()=>{a.active=!0,e()}),l(()=>{a.active=!1,e()}),v(()=>{c.splice(c.indexOf(a),1),e()})}}export{d as u};
