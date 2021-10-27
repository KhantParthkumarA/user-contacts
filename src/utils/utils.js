import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

export function errorMessage (message) {
  toastr.error(message)
}

export function successMessage (message) {
  toastr.success(message)
}
