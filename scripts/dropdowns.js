/*This code creates a custom select dropdown in JavaScript. When the window object loads, the function create_select is executed. 
This function loops through all elements with the attribute data-mate-select='active' and converts them into custom select dropdowns. 
The function isMobileDevice is used to check if the device is a mobile device or not.
For each custom select dropdown, a ul element is created and all options from the corresponding select element are appended as li elements to the ul. 
The class active is assigned to the li element that corresponds to the selected option. 
When a li element is clicked, the function _select_option is called with two arguments - the index of the selected li and the index of the custom select dropdown.
 The function open_select is used to open the custom select dropdown. 
This function toggles the height of the ul element and rotates the icon to indicate whether the select dropdown is open or closed.
*/
window.onload = function() {
    create_select();
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

var li = new Array();

function create_select() {
    var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
    var select_ = '';
    for (var e = 0; e < div_cont_select.length; e++) {
        div_cont_select[e].addEventListener('mouseout', function(event) {
            if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
              var idx1 = this.getAttribute('data-indx-select');
              document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
              document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = '0px';
              document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
            }
          });
        div_cont_select[e].setAttribute('data-indx-select', e);
        div_cont_select[e].setAttribute('data-selec-open', 'false');
        var ul_cont = document.querySelectorAll("[data-indx-select='" + e + "'] > .cont_list_select_mate > ul");
        select_ = document.querySelectorAll("[data-indx-select='" + e + "'] >select")[0];
        if (isMobileDevice()) {
            select_.addEventListener('change', function() {
                _select_option(select_.selectedIndex, e);
            });
        }
        var Select_options1 = select_.options;
        document.querySelectorAll("[data-indx-select='" + e + "']  > .selectoption ")[0].setAttribute('data-n-select', e);
        document.querySelectorAll("[data-indx-select='" + e + "']  > .icon_select_mate ")[0].setAttribute('data-n-select', e);
        for (var i = 0; i < Select_options1.length; i++) {
            li[i] = document.createElement('li');
            if (Select_options1[i].selected == true || select_.value == Select_options1[i].innerHTML) {
                li[i].className = 'active';
                document.querySelector("[data-indx-select='" + e + "']  > .selectoption ").innerHTML = Select_options1[i].innerHTML;
            };
            li[i].setAttribute('data-index', i);
            li[i].setAttribute('data-selec-index', e);
            // funcion click al selecionar 
            li[i].addEventListener('click', function() {
                _select_option(this.getAttribute('data-index'), this.getAttribute('data-selec-index'));
            });

            li[i].innerHTML = Select_options1[i].innerHTML;
            ul_cont[0].appendChild(li[i]);

        };
    };
}



var cont_slc = 0;

function open_select(idx) {
    var idx1 = idx.getAttribute('data-n-select');
    var ul_cont_li = document.querySelectorAll("[data-indx-select='" + idx1 + "'] .cont_select_int > li");
    var hg = 0;
    var slect_open = document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].getAttribute('data-selec-open');
    var slect_element_open = document.querySelectorAll("[data-indx-select='" + idx1 + "'] select")[0];
    if (isMobileDevice()) {
        if (window.document.createEvent) { // All
            var evt = window.document.createEvent("MouseEvents");
            evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            slect_element_open.dispatchEvent(evt);
        } else if (slect_element_open.fireEvent) { // IE
            slect_element_open.fireEvent("onmousedown");
        } else {
            slect_element_open.click();
        }
    } else {


        for (var i = 0; i < ul_cont_li.length; i++) {
            hg += ul_cont_li[i].offsetHeight;
        };
        if (slect_open == 'false') {
            document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'true');
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = hg + "px";
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
        } else {
            document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
        }
    }

}

function drop_select(indx) {
    var select_ = document.querySelectorAll("[data-indx-select='" + indx + "'] > select")[0];
    document.querySelectorAll("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
    document.querySelector("[data-indx-select='" + indx + "'] > .icon_select_mate").style.transform = 'rotate(0deg)';
    document.querySelectorAll("[data-indx-select='" + indx + "']")[0].setAttribute('data-selec-open', 'false');
}


function _select_option(indx, selec_index) {
    var idx1 = selec_index;
    var select_ = document.querySelectorAll("[data-indx-select='" + idx1 + "'] >select")[0];
    select_.selectedIndex = indx;
    document.querySelector("[data-indx-select='" + idx1 + "'] > .selectoption").innerHTML = select_.options[indx].innerHTML;
    document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul > li")[indx].classList.add("active");
    var li_s = document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul > li");
    for (var i = 0; i < li_s.length; i++) {
      if (i != indx) {
        li_s[i].classList.remove("active");
      };
    };
    document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
    document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = '0px';
    document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
  };