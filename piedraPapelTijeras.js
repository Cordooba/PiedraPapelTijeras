var usuario = prompt("piedra, papel o tijera?");
var computador = Math.random();

if (computador <0,34){

	computador = "piedra";

}else if(computador <=0.67){

	computador = "papel";

}else{

	computador = "tijera";

}

var comparar = function (elecion1, elecion2) {
    
    if (elecion1 === elecion2) {
    
        return "¡Es un empate!";
    
    }
    
    if (elecion1 === "piedra") {
    
        if(elecion2 === "tijera") {
        
            return "Piedra gana";
        
        }else{
            
            return "Tijera gana";    
        
        }
    
    }else if (elecion1 === "papel") {
        
        if (elecion2 === "piedra") {
            
            return "Papel gana";    
            
        }else{
            
            return "Tijera gana";    
        
        }
        
    }else{
        
        if (elecion2 === "piedra") {
            
            return "Piedra gana";    
        
        }else{
            
            return "Tijera gana";    
            
        }
    
    }
    
    };
    
    comparar(usuario, computador);