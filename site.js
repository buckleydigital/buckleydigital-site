  const hdr=document.querySelector('header');
  window.addEventListener('scroll',()=>{hdr.classList.toggle('scrolled',window.scrollY>40)},{passive:true});
  const burger=document.querySelector('.burger');
  const menu=document.querySelector('.mobile-menu');
  burger.addEventListener('click',()=>{burger.classList.toggle('active');menu.classList.toggle('open')});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('active');menu.classList.remove('open')}));
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(Math.min(i,3)*55)+'ms';io.observe(el)});
