function atualizarContador(){
  let agora = new Date();
  let futuro = new Date("2025-09-07T00:00:00");
  let tempoRestante = futuro - agora;
  
  if(tempoRestante > 0){
    let dias = Math.floor(tempoRestante/(1000*60*60*24));
     
    let horas =  Math.floor((tempoRestante/(1000*60*60))%24);
    
    let minutos = Math.floor((tempoRestante/(1000*60))%60);
    
    let segundos = Math.floor((tempoRestante/1000)%60);
    
    document.getElementById("contador").textContent = `${dias}d:${horas}h:${minutos}m:${segundos}`;
    
  } else {
    document.getElementById("contador").textContent = "feliz aniversario";
    
  }
  
}

setInterval(atualizarContador, 1000)
atualizarContador();
