import Swal from 'sweetalert2';

export default {
  tagColor(index) {
    const color = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning text-dark', 'bg-info text-dark'];
    return color[index % color.length];
  },
  swaAlert({ position = 'center', title = 'success!', text = '新增成功', icon = 'success', timer = 2000 } = {}) {
    Swal.fire({
      position,
      title,
      text,
      icon,
      timer,
    });
  },
  swaError({ toast = false, position = 'center', title = 'title', icon = 'error', showCloseButton = true, showConfirmButton = false } = {}) {
    Swal.fire({
      toast,
      position,
      icon,
      title,
      showCloseButton,
      showConfirmButton,
    });
  },
  swaInfo({ toast = true, position = 'top-end', title = '讀取產品', icon = 'info', showConfirmButton = false, timer = 1000 } = {}) {
    Swal.fire({
      toast,
      position,
      showConfirmButton,
      timer,
      icon,
      title,
    });
  },
};
