const btnSave = document.querySelector('#btnSave');

btnSave.addEventListener('click', ()=>{
    // Getting all inputs
    const allInputs = document.querySelectorAll('.input-validator');
    allInputs.forEach((input)=>{
        if (input.value.length < 1){
            // Error message
        }
    })
});

// Toast message function
function showToast(status, message){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
}