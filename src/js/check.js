$(document).ready(function() {
    $('#eliminarvarios').click(function(){
        let selected = '';    
        $('input[type=checkbox]').each(function(){
            if (this.checked) {
                selected += $(this).val()+', ';
            }
        }); 

        if (selected === '') {
            alert('Debes seleccionar al menos una opción.');
            return false;  
        }  
        else
            return true;
    });         
});    