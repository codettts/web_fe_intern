$(document).ready(function () {
          //an noi dung
          $('.tab-pane').hide(); //an noi dung
          $('.tab-pane:first-child').fadeIn(); //hien thi noi dung item con
          $('.nav-tabs li').click(function () {
            $('.nav-tabs li').removeClass('active');
            //active nav tabs
            $(this).addClass('active');
            //show tab-content
            let id_tab_content = $(this).children('a').attr('href');
            //alert(id_tab_content);
            $('.tab-pane').hide(); //an noi dung
            $(id_tab_content).fadeIn();
            return false;
          })
          $('.nav-tabs li a').click(function () {
            $('.nav-tabs li a').removeClass('active');
            //active nav tabs
            $(this).addClass('active');
          })
})