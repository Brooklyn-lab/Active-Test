$(document).ready(function () {
   let link = $('.form__footer');
   let table = $('.table');
   let arrow = $('.arrow');
   let form = $('.form');

   link.click(function () {
      table.toggleClass('active');
      arrow.toggleClass('active');
      form.toggleClass('active');
   });
});