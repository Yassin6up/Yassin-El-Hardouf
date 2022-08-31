document.querySelectorAll('.image-continer img').forEach(portfolio =>{
  portfolio.onclick = () =>{
    document.querySelector('.poup-image').style.display = "block"
    document.querySelector('.poup-image img').src = portfolio.getAttribute('src'); 
  }
  
});
document.querySelector('.poup-image span').onclick = () => {
  document.querySelector('.poup-image').style.display="none";
    
}
