import Swal from 'sweetalert2'; 

const Toasty = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
})

export const Toast = {
  
  fire(icon, title) {
    return Toasty.fire({
      icon: icon,
      title: title
    })
  }

};
