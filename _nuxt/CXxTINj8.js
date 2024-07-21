import{f as w,d as x,R as F,N as B,g as q,e as b,L as J,ad as K,D as V,v as Q,ab as W,ac as X,ae as Y,p as N,F as j,af as m,ag as r,Z as G,ah as p,j as k,a as M,t as P}from"./Bv51b8_d.js";import"./BZoLRGKd.js";import"./Dt0KXldn.js";import"./DERI3neg.js";import"./CFCai9Z7.js";import"./8dfXx0dx.js";import"./B-BKVMzn.js";import"./BVCFKUFY.js";const T=.5,g=0,v=1,L=60,_=0,oo=.01;function no(n){const o=n.initialPosition,{dx:i,dy:s}=w(o,n.position),e=Math.abs(i),a=Math.abs(s),{maxDistance:t}=n.retina,u=t.horizontal,c=t.vertical;if(!u&&!c)return;const d=(u&&e>=u)??!1,y=(c&&a>=c)??!1;if((d||y)&&!n.misplaced)n.misplaced=!!u&&e>u||!!c&&a>c,u&&(n.velocity.x=n.velocity.y*T-n.velocity.x),c&&(n.velocity.y=n.velocity.x*T-n.velocity.y);else if((!u||e<u)&&(!c||a<c)&&n.misplaced)n.misplaced=!1;else if(n.misplaced){const h=n.position,f=n.velocity;u&&(h.x<o.x&&f.x<g||h.x>o.x&&f.x>g)&&(f.x*=-x()),c&&(h.y<o.y&&f.y<g||h.y>o.y&&f.y>g)&&(f.y*=-x())}}function io(n,o,i,s,e,a){eo(n,a);const t=n.gravity,u=t!=null&&t.enable&&t.inverse?-v:v;e&&i&&(n.velocity.x+=e*a.factor/(L*i)),t!=null&&t.enable&&i&&(n.velocity.y+=u*(t.acceleration*a.factor)/(L*i));const c=n.moveDecay;n.velocity.multTo(c);const d=n.velocity.mult(i);t!=null&&t.enable&&s>g&&(!t.inverse&&d.y>=g&&d.y>=s||t.inverse&&d.y<=g&&d.y<=-s)&&(d.y=u*s,i&&(n.velocity.y=d.y/i));const y=n.options.zIndex,h=(v-n.zIndexFactor)**y.velocityRate;d.multTo(h);const{position:f}=n;f.addTo(d),o.vibrate&&(f.x+=Math.sin(f.x*Math.cos(f.y)),f.y+=Math.cos(f.y*Math.sin(f.x)))}function so(n,o){const i=n.container;if(!n.spin)return;const s={x:n.spin.direction===F.clockwise?Math.cos:Math.sin,y:n.spin.direction===F.clockwise?Math.sin:Math.cos};n.position.x=n.spin.center.x+n.spin.radius*s.x(n.spin.angle),n.position.y=n.spin.center.y+n.spin.radius*s.y(n.spin.angle),n.spin.radius+=n.spin.acceleration;const e=Math.max(i.canvas.size.width,i.canvas.size.height),a=e*T;n.spin.radius>a?(n.spin.radius=a,n.spin.acceleration*=-v):n.spin.radius<_&&(n.spin.radius=_,n.spin.acceleration*=-v),n.spin.angle+=o*oo*(v-n.spin.radius/e)}function eo(n,o){var t;const i=n.options,s=i.move.path;if(!s.enable)return;if(n.lastPathTime<=n.pathDelay){n.lastPathTime+=o.value;return}const a=(t=n.pathGenerator)==null?void 0:t.generate(n,o);a&&n.velocity.addTo(a),s.clamp&&(n.velocity.x=B(n.velocity.x,-v,v),n.velocity.y=B(n.velocity.y,-v,v)),n.lastPathTime-=n.pathDelay}function to(n){return n.slow.inRange?n.slow.factor:v}function ao(n){const o=n.container,i=n.options,s=i.move.spin;if(!s.enable)return;const e=s.position??{x:50,y:50},a=.01,t={x:e.x*a*o.canvas.size.width,y:e.y*a*o.canvas.size.height},u=n.getPosition(),c=q(u,t),d=b(s.acceleration);n.retina.spinAcceleration=d*o.retina.pixelRatio;const y=0;n.spin={center:t,direction:n.velocity.x>=y?F.clockwise:F.counterClockwise,angle:n.velocity.angle,radius:c,acceleration:n.retina.spinAcceleration}}const uo=2,co=1,ro=1;class fo{init(o){const i=o.options,s=i.move.gravity;o.gravity={enable:s.enable,acceleration:b(s.acceleration),inverse:s.inverse},ao(o)}isEnabled(o){return!o.destroyed&&o.options.move.enable}move(o,i){var E,I;const s=o.options,e=s.move;if(!e.enable)return;const a=o.container,t=a.retina.pixelRatio;(E=o.retina).moveSpeed??(E.moveSpeed=b(e.speed)*t),(I=o.retina).moveDrift??(I.moveDrift=b(o.options.move.drift)*t);const u=to(o),c=o.retina.moveSpeed*a.retina.reduceFactor,d=o.retina.moveDrift,y=J(s.size.value)*t,h=e.size?o.getRadius()/y:co,f=i.factor||ro,U=c*h*u*f/uo,Z=o.retina.maxSpeed??a.retina.maxSpeed;e.spin.enable?so(o,U):io(o,e,U,Z,d,i),no(o)}}async function yo(n,o=!0){await n.addMover("base",()=>Promise.resolve(new fo),o)}const mo=2,ho=Math.PI*mo,vo=0,H={x:0,y:0};function xo(n){const{context:o,particle:i,radius:s}=n;i.circleRange||(i.circleRange={min:vo,max:ho});const e=i.circleRange;o.arc(H.x,H.y,s,e.min,e.max,!1)}const lo=12,go=360,$=0;class bo{constructor(){this.validTypes=["circle"]}draw(o){xo(o)}getSidesCount(){return lo}particleInit(o,i){const s=i.shapeData,e=(s==null?void 0:s.angle)??{max:go,min:$};i.circleRange=K(e)?{min:V(e.min),max:V(e.max)}:{min:$,max:V(e)}}}async function po(n,o=!0){await n.addShape(new bo,o)}class zo{constructor(o){this.container=o}init(o){const i=Q(o.options.color,o.id,o.options.reduceDuplicates);i&&(o.color=W(i,o.options.color.animation,this.container.retina.reduceFactor))}isEnabled(o){const{h:i,s,l:e}=o.options.color.animation,{color:a}=o;return!o.destroyed&&!o.spawning&&((a==null?void 0:a.h.value)!==void 0&&i.enable||(a==null?void 0:a.s.value)!==void 0&&s.enable||(a==null?void 0:a.l.value)!==void 0&&e.enable)}update(o,i){X(o.color,i)}}async function wo(n,o=!0){await n.addParticleUpdater("color",i=>Promise.resolve(new zo(i)),o)}class Mo{constructor(o){this.container=o}init(o){const i=o.options.opacity,s=1;o.opacity=Y(i,s);const e=i.animation;e.enable&&(o.opacity.velocity=b(e.speed)/N*this.container.retina.reduceFactor,e.sync||(o.opacity.velocity*=x()))}isEnabled(o){return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((o.opacity.maxLoops??0)<=0||(o.opacity.maxLoops??0)>0&&(o.opacity.loops??0)<(o.opacity.maxLoops??0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}update(o,i){!this.isEnabled(o)||!o.opacity||j(o,o.opacity,!0,o.options.opacity.animation.destroy,i)}}async function Po(n,o=!0){await n.addParticleUpdater("opacity",i=>Promise.resolve(new Mo(i)),o)}const A=0,z=0;function Ro(n){if(n.outMode!==m.bounce&&n.outMode!==m.split||n.direction!==r.left&&n.direction!==r.right)return;n.bounds.right<z&&n.direction===r.left?n.particle.position.x=n.size+n.offset.x:n.bounds.left>n.canvasSize.width&&n.direction===r.right&&(n.particle.position.x=n.canvasSize.width-n.size-n.offset.x);const o=n.particle.velocity.x;let i=!1;if(n.direction===r.right&&n.bounds.right>=n.canvasSize.width&&o>A||n.direction===r.left&&n.bounds.left<=z&&o<A){const e=b(n.particle.options.bounce.horizontal.value);n.particle.velocity.x*=-e,i=!0}if(!i)return;const s=n.offset.x+n.size;n.bounds.right>=n.canvasSize.width&&n.direction===r.right?n.particle.position.x=n.canvasSize.width-s:n.bounds.left<=z&&n.direction===r.left&&(n.particle.position.x=s),n.outMode===m.split&&n.particle.destroy()}function Co(n){if(n.outMode!==m.bounce&&n.outMode!==m.split||n.direction!==r.bottom&&n.direction!==r.top)return;n.bounds.bottom<z&&n.direction===r.top?n.particle.position.y=n.size+n.offset.y:n.bounds.top>n.canvasSize.height&&n.direction===r.bottom&&(n.particle.position.y=n.canvasSize.height-n.size-n.offset.y);const o=n.particle.velocity.y;let i=!1;if(n.direction===r.bottom&&n.bounds.bottom>=n.canvasSize.height&&o>A||n.direction===r.top&&n.bounds.top<=z&&o<A){const e=b(n.particle.options.bounce.vertical.value);n.particle.velocity.y*=-e,i=!0}if(!i)return;const s=n.offset.y+n.size;n.bounds.bottom>=n.canvasSize.height&&n.direction===r.bottom?n.particle.position.y=n.canvasSize.height-s:n.bounds.top<=z&&n.direction===r.top&&(n.particle.position.y=s),n.outMode===m.split&&n.particle.destroy()}class So{constructor(o){this.container=o,this.modes=[m.bounce,m.split]}update(o,i,s,e){if(!this.modes.includes(e))return;const a=this.container;let t=!1;for(const[,f]of a.plugins)if(f.particleBounce!==void 0&&(t=f.particleBounce(o,s,i)),t)break;if(t)return;const u=o.getPosition(),c=o.offset,d=o.getRadius(),y=G(u,d),h=a.canvas.size;Ro({particle:o,outMode:e,direction:i,bounds:y,canvasSize:h,offset:c,size:d}),Co({particle:o,outMode:e,direction:i,bounds:y,canvasSize:h,offset:c,size:d})}}const R=0;class Oo{constructor(o){this.container=o,this.modes=[m.destroy]}update(o,i,s,e){if(!this.modes.includes(e))return;const a=this.container;switch(o.outType){case p.normal:case p.outside:if(k(o.position,a.canvas.size,M.origin,o.getRadius(),i))return;break;case p.inside:{const{dx:t,dy:u}=w(o.position,o.moveCenter),{x:c,y:d}=o.velocity;if(c<R&&t>o.moveCenter.radius||d<R&&u>o.moveCenter.radius||c>=R&&t<-o.moveCenter.radius||d>=R&&u<-o.moveCenter.radius)return;break}}a.particles.remove(o,void 0,!0)}}const C=0;class Do{constructor(o){this.container=o,this.modes=[m.none]}update(o,i,s,e){if(!this.modes.includes(e)||((o.options.move.distance.horizontal&&(i===r.left||i===r.right))??(o.options.move.distance.vertical&&(i===r.top||i===r.bottom))))return;const a=o.options.move.gravity,t=this.container,u=t.canvas.size,c=o.getRadius();if(a.enable){const d=o.position;(!a.inverse&&d.y>u.height+c&&i===r.bottom||a.inverse&&d.y<-c&&i===r.top)&&t.particles.remove(o)}else{if(o.velocity.y>C&&o.position.y<=u.height+c||o.velocity.y<C&&o.position.y>=-c||o.velocity.x>C&&o.position.x<=u.width+c||o.velocity.x<C&&o.position.x>=-c)return;k(o.position,t.canvas.size,M.origin,c,i)||t.particles.remove(o)}}}const S=0,O=0;class Fo{constructor(o){this.container=o,this.modes=[m.out]}update(o,i,s,e){if(!this.modes.includes(e))return;const a=this.container;switch(o.outType){case p.inside:{const{x:t,y:u}=o.velocity,c=M.origin;c.length=o.moveCenter.radius,c.angle=o.velocity.angle+Math.PI,c.addTo(M.create(o.moveCenter));const{dx:d,dy:y}=w(o.position,c);if(t<=S&&d>=O||u<=S&&y>=O||t>=S&&d<=O||u>=S&&y<=O)return;o.position.x=Math.floor(P({min:0,max:a.canvas.size.width})),o.position.y=Math.floor(P({min:0,max:a.canvas.size.height}));const{dx:h,dy:f}=w(o.position,o.moveCenter);o.direction=Math.atan2(-f,-h),o.velocity.angle=o.direction;break}default:{if(k(o.position,a.canvas.size,M.origin,o.getRadius(),i))return;switch(o.outType){case p.outside:{o.position.x=Math.floor(P({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.x,o.position.y=Math.floor(P({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.y;const{dx:t,dy:u}=w(o.position,o.moveCenter);o.moveCenter.radius&&(o.direction=Math.atan2(u,t),o.velocity.angle=o.direction);break}case p.normal:{const t=o.options.move.warp,u=a.canvas.size,c={bottom:u.height+o.getRadius()+o.offset.y,left:-o.getRadius()-o.offset.x,right:u.width+o.getRadius()+o.offset.x,top:-o.getRadius()-o.offset.y},d=o.getRadius(),y=G(o.position,d);i===r.right&&y.left>u.width+o.offset.x?(o.position.x=c.left,o.initialPosition.x=o.position.x,t||(o.position.y=x()*u.height,o.initialPosition.y=o.position.y)):i===r.left&&y.right<-o.offset.x&&(o.position.x=c.right,o.initialPosition.x=o.position.x,t||(o.position.y=x()*u.height,o.initialPosition.y=o.position.y)),i===r.bottom&&y.top>u.height+o.offset.y?(t||(o.position.x=x()*u.width,o.initialPosition.x=o.position.x),o.position.y=c.top,o.initialPosition.y=o.position.y):i===r.top&&y.bottom<-o.offset.y&&(t||(o.position.x=x()*u.width,o.initialPosition.x=o.position.x),o.position.y=c.bottom,o.initialPosition.y=o.position.y);break}}break}}}}const D=(n,o)=>n.default===o||n.bottom===o||n.left===o||n.right===o||n.top===o;class Ao{constructor(o){this._updateOutMode=(i,s,e,a)=>{for(const t of this.updaters)t.update(i,a,s,e)},this.container=o,this.updaters=[]}init(o){this.updaters=[];const i=o.options.move.outModes;D(i,m.bounce)?this.updaters.push(new So(this.container)):D(i,m.out)?this.updaters.push(new Fo(this.container)):D(i,m.destroy)?this.updaters.push(new Oo(this.container)):D(i,m.none)&&this.updaters.push(new Do(this.container))}isEnabled(o){return!o.destroyed&&!o.spawning}update(o,i){const s=o.options.move.outModes;this._updateOutMode(o,i,s.bottom??s.default,r.bottom),this._updateOutMode(o,i,s.left??s.default,r.left),this._updateOutMode(o,i,s.right??s.default,r.right),this._updateOutMode(o,i,s.top??s.default,r.top)}}async function Vo(n,o=!0){await n.addParticleUpdater("outModes",i=>Promise.resolve(new Ao(i)),o)}const l=0;class To{init(o){const i=o.container,s=o.options.size,e=s.animation;e.enable&&(o.size.velocity=(o.retina.sizeAnimationSpeed??i.retina.sizeAnimationSpeed)/N*i.retina.reduceFactor,e.sync||(o.size.velocity*=x()))}isEnabled(o){return!o.destroyed&&!o.spawning&&o.size.enable&&((o.size.maxLoops??l)<=l||(o.size.maxLoops??l)>l&&(o.size.loops??l)<(o.size.maxLoops??l))}reset(o){o.size.loops=l}update(o,i){this.isEnabled(o)&&j(o,o.size,!0,o.options.size.animation.destroy,i)}}async function ko(n,o=!0){await n.addParticleUpdater("size",()=>Promise.resolve(new To),o)}async function No(n,o=!0){await yo(n,!1),await po(n,!1),await wo(n,!1),await Po(n,!1),await Vo(n,!1),await ko(n,!1),await n.refresh(o)}export{No as loadBasic};
