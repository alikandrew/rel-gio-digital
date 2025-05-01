function hora_certa(){
   let tempo = document.getElementById('relogio')
   //na primeira linha eu pego o elemento id=relogio e guardo em uma variavel no javascript 

   let data = new Date( )
   
   let horas =String(data.getHours( )).padStart(2,"0")
   let minutos = String(data.getMinutes( )).padStart(2,"0")
   let segundos = String(data.getSeconds( )).padStart(2,"0")
   
   tempo.innerHTML = `${horas}:${minutos}:${segundos}`
   //essa linha serve para reescrever no html a IDENTIFICAÇÃO RELOGIO
}
hora_certa()
setInterval(hora_certa,1000)
//essa ultima linha vai atualizara apagina a todo momento

function data_certa(){
   let calendario = document.getElementById('calendario')
   //na primeira linha eu pego o elemento id=relogio e guardo em uma variavel no javascript 

   let cal = new Date( )
   let data_completa = String(cal.toLocaleDateString())
   calendario.innerHTML = `${data_completa}`
   //essa linha serve para reescrever no html a IDENTIFICAÇÃO RELOGIO
}
data_certa()
setInterval(data_certa_certa,1000)
//essa ultima linha vai atualizara apagina a todo momento
