var data_pick_active = 0;
var data_pick_type = '';
var data_pick_hover = '';
var metro_form_status = 0;
var scroll_status = 0;
$(document).ready(function(){


    function get_mento_name(id){
        var arr = new Array();


        arr[1] = 'Авиамоторная';
        arr[2] = 'Автозаводская';
        arr[3] = 'Академическая';
        arr[4] = 'Александровский сад';
        arr[151] = 'Алексеевская';
        arr[2135] = 'Алма-Атинская';
        arr[5] = 'Алтуфьево';
        arr[2174] = 'Андроновка';
        arr[148] = 'Аннино';
        arr[6] = 'Арбатская';
        arr[7] = 'Аэропорт';
        arr[8] = 'Бабушкинская';
        arr[9] = 'Багратионовская';
        arr[2159] = 'Балтийская';
        arr[10] = 'Баррикадная';
        arr[11] = 'Бауманская';
        arr[12] = 'Беговая';
        arr[2179] = 'Белокаменная';
        arr[13] = 'Белорусская';
        arr[14] = 'Беляево';
        arr[15] = 'Бибирево';
        arr[16] = 'Библиотека им. Ленина';
        arr[2145] = 'Битцевский парк';
        arr[215] = 'Борисово';
        arr[18] = 'Боровицкая';
        arr[19] = 'Ботанический сад';
        arr[20] = 'Братиславская';
        arr[1010] = 'Бульвар адмирала Ушакова';
        arr[149] = 'Бульвар Дмитрия Донского';
        arr[127] = 'Бульвар Рокоссовского';
        arr[1012] = 'Бунинская аллея';
        arr[2155] = 'Бутырская';
        arr[22] = 'Варшавская';
        arr[21] = 'ВДНХ';
        arr[2168] = 'Верхние котлы';
        arr[23] = 'Владыкино';
        arr[24] = 'Водный стадион';
        arr[25] = 'Войковская';
        arr[26] = 'Волгоградский проспект';
        arr[27] = 'Волжская';
        arr[1003] = 'Волоколамская';
        arr[28] = 'Воробьевы Горы';
        arr[152] = 'Выставочная';
        arr[29] = 'Выхино';
        arr[2146] = 'Деловой центр';
        arr[2163] = 'Деловой центр (МЦК)';
        arr[30] = 'Динамо';
        arr[31] = 'Дмитровская';
        arr[32] = 'Добрынинская';
        arr[33] = 'Домодедовская';
        arr[2001] = 'Достоевская';
        arr[34] = 'Дубровка';
        arr[2143] = 'Жулебино';
        arr[2169] = 'ЗИЛ';
        arr[2184] = 'Зорге';
        arr[217] = 'Зябликово';
        arr[2176] = 'Измайлово';
        arr[35] = 'Измайловская';
        arr[37] = 'Калужская';
        arr[38] = 'Кантемировская';
        arr[39] = 'Каховская';
        arr[40] = 'Каширская';
        arr[41] = 'Киевская';
        arr[42] = 'Китай-город';
        arr[43] = 'Кожуховская';
        arr[44] = 'Коломенская';
        arr[45] = 'Комсомольская';
        arr[46] = 'Коньково';
        arr[2182] = 'Коптево';
        arr[2151] = 'Котельники';
        arr[47] = 'Красногвардейская';
        arr[48] = 'Краснопресненская';
        arr[49] = 'Красносельская';
        arr[50] = 'Красные ворота';
        arr[51] = 'Крестьянская застава';
        arr[52] = 'Кропоткинская';
        arr[53] = 'Крылатское';
        arr[2167] = 'Крымская';
        arr[54] = 'Кузнецкий мост';
        arr[55] = 'Кузьминки';
        arr[56] = 'Кунцевская';
        arr[57] = 'Курская';
        arr[58] = 'Кутузовская';
        arr[59] = 'Ленинский проспект';
        arr[2142] = 'Лермонтовский проспект';
        arr[2144] = 'Лесопарковая';
        arr[2158] = 'Лихоборы';
        arr[2177] = 'Локомотив';
        arr[2186] = 'Ломоносовский проспект';
        arr[60] = 'Лубянка';
        arr[2165] = 'Лужники';
        arr[61] = 'Люблино';
        arr[62] = 'Марксистская';
        arr[2002] = 'Марьина Роща';
        arr[63] = 'Марьино';
        arr[64] = 'Маяковская';
        arr[65] = 'Медведково';
        arr[1004] = 'Международная';
        arr[66] = 'Менделеевская';
        arr[2185] = 'Минская';
        arr[1001] = 'Митино';
        arr[67] = 'Молодежная';
        arr[1002] = 'Мякинино';
        arr[68] = 'Нагатинская';
        arr[69] = 'Нагорная';
        arr[70] = 'Нахимовский проспект';
        arr[2173] = 'Нижегородская';
        arr[71] = 'Новогиреево';
        arr[2133] = 'Новокосино';
        arr[72] = 'Новокузнецкая';
        arr[73] = 'Новослободская';
        arr[2172] = 'Новохохловская';
        arr[17] = 'Новоясеневская';
        arr[74] = 'Новые Черемушки';
        arr[2157] = 'Окружная';
        arr[75] = 'Октябрьская';
        arr[76] = 'Октябрьское поле';
        arr[77] = 'Орехово';
        arr[78] = 'Отрадное';
        arr[79] = 'Охотный ряд';
        arr[80] = 'Павелецкая';
        arr[2183] = 'Панфиловская';
        arr[82] = 'Парк культуры';
        arr[81] = 'Парк Победы';
        arr[36] = 'Партизанская';
        arr[83] = 'Первомайская';
        arr[84] = 'Перово';
        arr[85] = 'Петровско-Разумовская';
        arr[86] = 'Печатники';
        arr[87] = 'Пионерская';
        arr[88] = 'Планерная';
        arr[2166] = 'Площадь Гагарина';
        arr[89] = 'Площадь Ильича';
        arr[90] = 'Площадь революции';
        arr[91] = 'Полежаевская';
        arr[92] = 'Полянка';
        arr[93] = 'Пражская';
        arr[94] = 'Преображенская площадь';
        arr[95] = 'Пролетарская';
        arr[96] = 'Проспект Вернадского';
        arr[97] = 'Проспект Мира';
        arr[98] = 'Профсоюзная';
        arr[99] = 'Пушкинская';
        arr[2136] = 'Пятницкое шоссе';
        arr[2187] = 'Раменки';
        arr[100] = 'Речной вокзал';
        arr[101] = 'Рижская';
        arr[102] = 'Римская';
        arr[2180] = 'Ростокино';
        arr[2149] = 'Румянцево';
        arr[103] = 'Рязанский проспект';
        arr[104] = 'Савеловская';
        arr[2150] = 'Саларьево';
        arr[105] = 'Свиблово';
        arr[106] = 'Севастопольская';
        arr[107] = 'Семеновская';
        arr[108] = 'Серпуховская';
        arr[1005] = 'Славянский бульвар';
        arr[109] = 'Смоленская';
        arr[110] = 'Сокол';
        arr[2181] = 'Соколиная гора';
        arr[111] = 'Сокольники';
        arr[2147] = 'Спартак';
        arr[112] = 'Спортивная';
        arr[1007] = 'Сретенский бульвар';
        arr[2160] = 'Стрешнево';
        arr[214] = 'Строгино';
        arr[113] = 'Студенческая';
        arr[114] = 'Сухаревская';
        arr[115] = 'Сходненская';
        arr[116] = 'Таганская';
        arr[117] = 'Тверская';
        arr[118] = 'Театральная';
        arr[119] = 'Текстильщики';
        arr[120] = 'Теплый стан';
        arr[2152] = 'Технопарк';
        arr[121] = 'Тимирязевская';
        arr[122] = 'Третьяковская';
        arr[2148] = 'Тропарево';
        arr[1006] = 'Трубная';
        arr[123] = 'Тульская';
        arr[124] = 'Тургеневская';
        arr[125] = 'Тушинская';
        arr[2171] = 'Угрешская';
        arr[126] = 'Улица 1905 года';
        arr[128] = 'Улица академика Янгеля';
        arr[1011] = 'Улица Горчакова';
        arr[1009] = 'Улица Скобелевская';
        arr[1008] = 'Улица Старокачаловская';
        arr[129] = 'Университет';
        arr[130] = 'Филевский парк';
        arr[131] = 'Фили';
        arr[2154] = 'Фонвизинская';
        arr[132] = 'Фрунзенская';
        arr[2161] = 'Хорошево';
        arr[133] = 'Царицыно';
        arr[134] = 'Цветной бульвар';
        arr[135] = 'Черкизовская';
        arr[136] = 'Чертановская';
        arr[137] = 'Чеховская';
        arr[138] = 'Чистые пруды';
        arr[139] = 'Чкаловская';
        arr[140] = 'Шаболовская';
        arr[2162] = 'Шелепиха';
        arr[216] = 'Шипиловская';
        arr[141] = 'Шоссе Энтузиастов';
        arr[142] = 'Щелковская';
        arr[143] = 'Щукинская';
        arr[144] = 'Электрозаводская';
        arr[145] = 'Юго-Западная';
        arr[146] = 'Южная';
        arr[147] = 'Ясенево';


        if(id){
            return arr[id];
        }
    }



    function map_click(obj){
        status = 0;
        if(obj.attr('class') =='label'){
            map_select( obj );
            status = 1;
        }
        if(obj.attr('class') =='label label-small'){
            map_select( obj );
            status = 1;
        }
        if(status==1){
            data_st_id = obj.attr('data-st-id');
            data_pick = obj.attr('data-pick');
            $('#map-inner path').each(function(){
                if($(this).attr('data-st-id')==data_st_id){
                    if(data_pick==1){
                        $(this).attr('data-pick','1');
                    } else {
                        $(this).removeAttr('data-pick');
                    }
                }
            });
            $('#map-inner circle').each(function(){
                if($(this).attr('data-st-id')==data_st_id){
                    if(data_pick==1){
                        $(this).attr('data-pick','1');
                    } else {
                        $(this).removeAttr('data-pick');
                    }
                }
            });
        }else {
            map_select( obj );
            data_st_id = obj.attr('data-st-id');
            data_pick = obj.attr('data-pick');
            $('#map-inner text').each(function(){
                if($(this).attr('data-st-id')==data_st_id){
                    if(data_pick==1){
                        $(this).attr('data-pick','1');
                    } else {
                        $(this).removeAttr('data-pick');
                    }
                }
            });
        }
        metro_count();
    }
    $('#map-inner path').hover(
        function(){
            data_pick_hover = $(this);
        },
        function(){
            data_pick_hover = '';
        }
    );
    $('#map-inner circle').hover(
        function(){
            data_pick_hover = $(this);
        },
        function(){
            data_pick_hover = '';
        }
    );
    $('#map-inner text').hover(
        function(){
            data_pick_hover = $(this);
        },
        function(){
            data_pick_hover = '';
        }
    );
    window.onmousedown = function(){
        if(scroll_status==1){ } else {
            data_pick_active = 1;
            if(data_pick_hover){
                if(data_pick_hover.attr('data-pick')){
                    data_pick_type = 1;
                } else {
                    data_pick_type = 2;
                }
                map_click(data_pick_hover)
            }
        }

    }
    window.onmouseup = function(){
        data_pick_active = 0;
    }
    $(document).mouseup(function (e) {
        var container = $("#directions-popup");
        if (container.has(e.target).length === 0){

            if(metro_form_status==1){
                if(scroll_status==0){
                    $('#directions-popup').removeClass('directions-active');
                }
            }
        }
    });


    var scr = $(".scroll");
    scr.mousedown(function () {
        if(data_pick_hover){ } else {
            scroll_status = 1;

            data_pick_active = 0;
            var startX = this.scrollLeft + event.pageX;
            var startY = this.scrollTop + event.pageY;
            scr.mousemove(function () {
                this.scrollLeft = startX - event.pageX;
                this.scrollTop = startY - event.pageY;
                return false;
            });
        }
    });
    $(window).mouseup(function () {
        scr.off("mousemove");
        scroll_status = 0;
    });
    function metro_count(){
        count = 0;
        status = 0;

        metro_list = '';

        $('#map-inner text').each(function(){
            if($(this).attr('data-pick')==1){
                status = 1;
                count++;
            }
        });
        if(status == 1){
            $('#map-inner').attr('class','selected');
            $('.directions-select').html('Выбрано станций ('+count+')');
            metro_list = '';
            $('#map-inner text').each(function(){
                if($(this).attr('data-pick')==1){
                    var data_st_id = $(this).attr('data-st-id');
                    var data_val= get_mento_name(data_st_id);
                    if(data_val!=''){
                        data_val = data_val.replace(/ /g,"%20");
                        //data_val = encodeURIComponent(data_val);
                        metro_list = metro_list+data_val+',';
                    }
                }
            });
            $('#filter_metro').val(metro_list);
        } else {
            $('#map-inner').attr('class','');
            $('.directions-select').html('Выберите станции');
        }
    }

    function map_select(this_obj=''){
        if(this_obj.attr('data-pick')==1){
            this_obj.removeAttr('data-pick');
        } else {
            this_obj.attr('data-pick','1');
        }
    }
    $('.metro-uncheck').click(function(){
        $('#map-inner path').each(function(){
            $(this).removeAttr('data-pick');
        });
        $('#map-inner circle').each(function(){
            $(this).removeAttr('data-pick');
        });
        $('#map-inner text').each(function(){
            $(this).removeAttr('data-pick');
        });
        $('#map-inner').attr('class','');
        $('.directions-select').html('Выберите станции');
    });
    $('.metro-apply').click(function(){
        $('#directions-popup').removeClass('directions-active');
        $('#directions-popup').removeClass('dir-active');
        $('header').removeClass('blur');
        $('#wrp').removeClass('blur');
        $('body').removeClass('blur-img');
        metro_form_status = 0;
    });
    $('.directions-select').click(function(){
        $('#directions-popup').toggleClass('directions-active');
        $('#directions-popup').toggleClass('dir-active');
        $('#wrp').toggleClass('blur');
        $('header').toggleClass('blur');
        $('body').toggleClass('blur-img');
        $('#metro_scroll_wrap').scrollTop(97);
        $('#metro_scroll_wrap').scrollLeft(132);
        if( $('#directions-popup').hasClass('directions-active') ){
            metro_form_status = 1;
        } else {
            metro_form_status = 0;
        }
    });
    $(document).mouseup(function (e) {
        var container = $("#directions-popup");
        if (container.has(e.target).length === 0){
            if(metro_form_status==1){
                $('#directions-popup').removeClass('directions-active');
                $('#directions-popup').removeClass('dir-active');
                $('#wrp').removeClass('blur');
                $('header').removeClass('blur');
                $('body').removeClass('blur-img');
                //$('.metro-form').submit();
            }
        }
    });
    $('#map-inner path').hover(function(){
        if(data_pick_active == 1 && scroll_status==0){
            data_st_id = $(this).attr('data-st-id');

            if(data_st_id){
                if(data_pick_type==1){
                    $(this).removeAttr('data-pick');
                }
                if(data_pick_type==2){
                    $(this).attr('data-pick','1');
                }
                data_pick = $(this).attr('data-pick');
                $('#map-inner text').each(function(){
                    if($(this).attr('data-st-id')==data_st_id){
                        if(data_pick==1){
                            $(this).attr('data-pick','1');
                        } else {
                            $(this).removeAttr('data-pick');
                        }
                    }
                });
                metro_count();
            }
        }
    });
    $('#map-inner circle').hover(function(){
        if(data_pick_active == 1 && scroll_status==0){
            data_st_id = $(this).attr('data-st-id');

            if(data_st_id){
                if(data_pick_type==1){
                    $(this).removeAttr('data-pick');
                }
                if(data_pick_type==2){
                    $(this).attr('data-pick','1');
                }
                data_pick = $(this).attr('data-pick');
                $('#map-inner text').each(function(){
                    if($(this).attr('data-st-id')==data_st_id){
                        if(data_pick==1){
                            $(this).attr('data-pick','1');
                        } else {
                            $(this).removeAttr('data-pick');
                        }
                    }
                });
                metro_count();
            }
        }
    });
    $('#map-inner text').hover(function(){
        if(data_pick_active == 1 && scroll_status==0){
            if($(this).attr('class') =='label'){
                if(data_pick_type==1){
                    $(this).removeAttr('data-pick');
                }
                if(data_pick_type==2){
                    $(this).attr('data-pick','1');
                }
            }
            if($(this).attr('class') =='label label-small'){
                if(data_pick_type==1){
                    $(this).removeAttr('data-pick');
                }
                if(data_pick_type==2){
                    $(this).attr('data-pick','1');
                }
            }
            data_st_id = $(this).attr('data-st-id');
            data_pick = $(this).attr('data-pick');
            $('#map-inner path').each(function(){
                if($(this).attr('data-st-id')==data_st_id){
                    if(data_pick==1){
                        $(this).attr('data-pick','1');
                    } else {
                        $(this).removeAttr('data-pick');
                    }
                }
            });
            $('#map-inner circle').each(function(){
                if($(this).attr('data-st-id')==data_st_id){
                    if(data_pick==1){
                        $(this).attr('data-pick','1');
                    } else {
                        $(this).removeAttr('data-pick');
                    }
                }
            });
            metro_count();
        }
    });
});

$('.spinner__plus').on('click', function() {
    if (parseInt($('.spinner__input').val(), 10) >= 0) {
        $('.spinner__input').val( parseInt($('.spinner__input').val(), 10) + 1);
    }
    if (parseInt($('.spinner__input_h').val(), 10) >= 0) {
        $('.spinner__input_h').val( parseInt($('.spinner__input_h').val(), 10) + 1);
    }
});
$('.spinner__minus').on('click', function() {
    if (parseInt($('.spinner__input').val(), 10) >= 2) {
        $('.spinner__input').val( parseInt($('.spinner__input').val(), 10) - 1);
    }
    if (parseInt($('.spinner__input_h').val(), 10) >= 2) {
        $('.spinner__input_h').val( parseInt($('.spinner__input_h').val(), 10) - 1);
    }
});

var status = 0;

function set_hover_effect(){
    $('.ui-state-highlight').removeClass('ui-state-hover');
    $('.ui-datepicker-hover-effect').removeClass('ui-datepicker-hover-effect');
    var status_hover = 0;
    $('.ui-datepicker-calendar tbody tr td').each(function(){
        if($(this).find('a').hasClass('ui-state-hover')){
            status_hover = 1;
        }
    });
    //console.log('status: '+status + ' status_hover: '+status_hover);
    type = 0;
    this_start = 0;
    if(status==1 && status_hover==1){
        $('.ui-datepicker-calendar tbody tr td').each(function(){
            if($(this).hasClass('selected-start')){
                if(type==0){
                    type=1;
                }
            }
            if($(this).find('a').hasClass('ui-state-hover')){
                if(type==0){
                    type=2;
                }
            }
        });
        if(type==1){
            $('.ui-datepicker-calendar tbody tr td').each(function(){
                if($(this).hasClass('selected-start')){
                    this_start=1;
                }
                if($(this).find('a').hasClass('ui-state-hover')){
                    this_start=0;
                }
                if(this_start==1){
                    if(!$(this).hasClass('selected-start') && !$(this).hasClass('selected-end') && !$(this).hasClass('ui-state-disabled') ){
                        $(this).addClass('ui-datepicker-hover-effect');
                    }
                }
            });
        }
        if(type==2){
            $('.ui-datepicker-calendar tbody tr td').each(function(){
                if($(this).find('a').hasClass('ui-state-hover')){
                    this_start=1;
                }
                if($(this).hasClass('selected-start')){
                    this_start=0;
                }
                if(this_start==1){
                    if(!$(this).hasClass('selected-start') && !$(this).hasClass('selected-end') && !$(this).hasClass('ui-state-disabled') && !$(this).find('a').hasClass('ui-state-hover') ){
                        $(this).addClass('ui-datepicker-hover-effect');
                    }
                }
            });
        }

    }

}

function set_click_effect(){
    this_status = 0;
    $('.ui-datepicker-calendar tbody tr td').each(function(){
        if($(this).hasClass('selected-start')){
            if($(this).hasClass('selected-end')){
                this_status = 1;
            }
        }
    });

    if(this_status==1){

        status = 1;
        set_hover_effect();
        setTimeout('set_click_effect()',100);
    } else {
        $('.ui-datepicker-hover-effect').removeClass('ui-datepicker-hover-effect');
        status = 0;
    }
    //console.log('status: '+status);
}
$(document).ready(function(){

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['01.', '02.', '03.', '04.', '05.', '06.',
            '07.', '08.', '09.', '10.', '11.', '12.'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $('#datepicker').datepicker({
        //widget: true,
        range: 'period',
        numberOfMonths: 2,
        dateFormat: "dd.mm.yy",
        onSelect: function(dateText, inst, extensionRange) {
            if(extensionRange.startDateText && extensionRange.endDateText && extensionRange.startDateText!=extensionRange.endDateText){
                $('#datepicker').val(extensionRange.startDateText+' - '+ extensionRange.endDateText);
                $( "#datepicker" ).datepicker( "hide" );
            } else {
                $('#datepicker').val('');
                $('.ui-datepicker-hover-effect').removeClass('ui-datepicker-hover-effect');
                status = 0;
            }
            $('.ui-state-highlight').removeClass('ui-state-hover');
            setTimeout('set_click_effect()',100);
        },
        onChange: function (formated) {
            //console.log('onChange');
        }
    });
});

$(document).ready(function() {
    $('#directions-select').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '80%'}, 400);
            });
    });
    $('#overlay,#close,.metro-apply').click( function(){
        $('#modal')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});