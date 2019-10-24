'use strict';

$(function (){

  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let addedItem = $(event.currentTarget).find('#shopping-list-entry').val();
    // console.log(addedItem);
    $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${addedItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });


  //Make a delete by removeClass
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove(); 
  });




  //use toggleClass() for check uncheck
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').toggleClass('shopping-item__checked'); 
  });


});