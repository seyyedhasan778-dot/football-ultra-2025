// modules/menu.mjs
export function showMenu(){
  const canvas=document.getElementById('cv'),ctx=canvas.getContext('2d');
  canvas.width=innerWidth;canvas.height=innerHeight-80;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='#090';ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='#fff';ctx.font='48px Tahoma';ctx.textAlign='center';
    ctx.fillText('انتخاب تیم',canvas.width/2,100);
  }
  draw();
}
