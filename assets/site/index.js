//alert()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var current_url= window.location.pathname;//content after domain 
var current_url_query = window.location.search; //url contents after ?
var current_domain = window.location.host;//domain en port


//change protocol to unsecured if coming from unsecured site ::
var http_https = "https://"; 

if(location.protocol === 'http:'){
	http_https = 'http://';//return http
}

//hide or show div

function show_hide(div, to_show_hide = 'hide'){

    //if  show_hide = 'hide'; then hide the html division else show it
    to_show_hide == 'hide'?document.getElementById(div).style.display='none' : document.getElementById(div).style.display='block';
}


//div append
function div_append(div_id = '', data = ''){

    return $('#'+ div_id).append(data);

}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//$('body').append(`<h1>Hello</h1>`);




//$(selector).post(URL,data,function(data,status,xhr),dataType)


//++++++++++++++++++++++++++++ post html to server ++++++++++++++++++++++

function produce_html (){

    var current_body_source = $('body')[0].outerHTML;//get html source code of current page state


    var url = http_https + current_domain + '/convert';


    $.post(url, { data :current_body_source },function(data, status){

        if(status == 'success'){

            //return console.log('reply'+data);

            if(data.sucess){//if success
                
                //return $('#x').append(data.download);
                return window.open(http_https + current_domain + '/'+ data.download, '_blank');//open pdf in new tab
            }

            //if error

            return alert('There was an issue producing the CV/Resume, please try again later.'); 
           

        }

        //console.log('err', data);

        alert('There was an issue connecting to the server computer, please try again later.'); 

    });

   
}


//+++++++++++++++++++++++++++++++++++++++++++  front page +++++++++++++++++++++++++++++++++++++++++

var selected_div = '';//div selected to be edited

var component_id_tracking = 0;



function component_add(component_type){//write selected component to dom

    //increment component id
    component_id_tracking = component_id_tracking + 1;


    //div_append(div_id = '', data = '')

    //console.log(component_type);

        
    if(component_type == 'component_1'){

        let div_component = `
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id='${component_id_tracking}_container'>
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id='${component_id_tracking}_a' onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;" ></i></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:bold;" class="" ><p id='${component_id_tracking}_b' style='width:100%;height:auto;text-align:center' onclick='component_text_edit(this.id)' >Click here</p></span>
            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }


            
    if(component_type == 'component_2'){

        let div_component = `
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id='${component_id_tracking}_container'>
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id='${component_id_tracking}_a' onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;" ></i></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;" class="" ><p id='${component_id_tracking}_b' style='width:100%;height:auto;text-align:center' onclick="component_text_edit(this.id)">Click here</p></span>
            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }

    if(component_type == 'component_3'){

        let div_component = `
            <div class="w3-black" style="width:935px;height:auto; display:flex;margin:auto" id='${component_id_tracking}_container'>
                <p id='${component_id_tracking}_b' style='width:100%;height:auto;text-align:center;margin:0px;min-height:40px;line-height:40px; vertical-align:middle;' class='' onclick="component_text_edit(this.id)">Click here</p>
            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }
    
    if(component_type == 'component_4'){

        let div_component = `
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id='${component_id_tracking}_container'>
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id='${component_id_tracking}_a' onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;" ></i></span>
                <span style="width:43.5%;height:auto;margin:0px;font-weight:bold" class="" id='${component_id_tracking}_b' onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id='${component_id_tracking}_d' onclick='separator_component_edit_container(this.id)'>:</span>
                <span style="width:50%;height:auto;margin:0px;font-weight:bold" class="" id='${component_id_tracking}_c' onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        `;


       return div_append('Cv_1_content_container', div_component);

    }

    if(component_type == 'component_5'){

        let div_component = `
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id='${component_id_tracking}_container'>
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id='${component_id_tracking}_a' onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;" ></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id='${component_id_tracking}_b' onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id='${component_id_tracking}_d' onclick='separator_component_edit_container(this.id)'>:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id='${component_id_tracking}_c' onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }
    if(component_type == 'component_6'){

        let div_component = `
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id='${component_id_tracking}_container'>
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id='${component_id_tracking}_a' onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;" ></i></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;" class="" ><p id='${component_id_tracking}_b' style='width:100%;height:auto;text-align:left' onclick="component_text_edit(this.id)">Click here</p></span>
            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }
    if(component_type == 'component_7'){

        let div_component = `
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id='${component_id_tracking}_container'>
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id='${component_id_tracking}_a' onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;" ></i></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;font-weight:bold" class="" ><p id='${component_id_tracking}_b' style='width:100%;height:auto;text-align:left' onclick="component_text_edit(this.id)">Click here</p></span>
            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }

    if(component_type == 'component_8'){

        let div_component = `
            <div class="" style="width:935px;height:auto; margin:0px" id='${component_id_tracking}_container' > 
            
                <div style="width: 100%;height: 2px;" class='' ><p id='${component_id_tracking}_b' style="border-bottom: 2px solid #000;" onclick='component_line_edit(this.id)'></p></div>

            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }

    if(component_type == 'component_9'){

        let div_component = `
            <div class="" style="width:935px;height:auto; margin:0px" id='${component_id_tracking}_container'>
                <div style="width: 100%;height: 20px;margin:0px;" class='' id='${component_id_tracking}_b' onclick='component_space_edit(this.id)'>&nbsp</div>
            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }
    


}


//++++++++++ icons add +++++++++++++++

function icons_div_add(icon_number){

    //icon array
    var icon_array = [
        
        '<i class="la la-plus-circle" style="font-size: 20px;" ></i>',
        '<i class="la la-angle-right" style="font-size: 20px;" ></i>',
        '<i class="la la-arrow-right" style="font-size: 20px;" ></i>',
        '<i class="la la-chevron-right" style="font-size: 20px;" ></i>',
        '<i class="la la-play" style="font-size: 20px;" ></i>',
        '<i class="la la-stop" style="font-size: 20px;" ></i>',
        '<i class="la la-youtube" style="font-size: 20px;" ></i>',
        '<i class="la la-ambulance" style="font-size: 20px;" ></i>',
        '<i class="la la-bus" style="font-size: 20px;" ></i>',
        '<i class="la la-car" style="font-size: 20px;" ></i>',
        '<i class="la la-motorcycle" style="font-size: 20px;" ></i>',
        '<i class="la la-taxi" style="font-size: 20px;" ></i>',
        '<i class="la la-truck" style="font-size: 20px;"></i>',
        '<i class="la la-university" style="font-size: 20px;" ></i>',
        '<i class="la la-industry" style="font-size: 20px;" ></i>',
        '<i class="la la-phone" style="font-size: 20px;" ></i>',
        '<i class="la la-at" style="font-size: 20px;" ></i>',
        '<i class="la la-comment" style="font-size: 20px;" ></i>',
        '<i class="la la-language" style="font-size: 20px;" ></i>',
        '<i class="la la-paper-plane" style="font-size: 20px;" ></i>',
        '<i class="la la-desktop" style="font-size: 20px;" ></i>',
        '<i class="la la-laptop" style="font-size: 20px;" ></i>',
        '<i class="la la-mobile" style="font-size: 32px;" ></i>',
        '<i class="la la-wrench" style="font-size: 20px;" ></i>',
        '<i class="la la-calendar" style="font-size: 20px;" ></i>',
        '<i class="la la-hourglass-end" style="font-size: 20px;" ></i>',
        '<i class="la la-clone" style="font-size: 20px;" ></i>',
        '<i class="la la-graduation-cap" style="font-size: 20px;" ></i>',
        '<i class="la la-book" style="font-size: 20px;" ></i>',
        '<i class="la la-mars" style="font-size: 20px;" ></i>',
        '<i class="la la-venus" style="font-size: 20px;" ></i>',

    ];

    

    document.getElementById(selected_div).innerHTML = ''; //clean div before adding icon
    //document.getElementById(selected_div).style.color='red'

    div_append(selected_div, icon_array[icon_number]);//add icond to div

    show_hide('icon_select_container');//hide icon selector box

    

}

//+++++++ find fonts uploded on style sheet  +++++++++

var total_style_sheets = document.styleSheets.length;//total number of style sheets
var all_fonts_on_style_sheet = ['Verdana, sans-serif','Arial, Helvetica, sans-serif'];//store retrieved font names //added websafe default font

for(var i = 0; i <= total_style_sheets - 1; i++){//loop through per stylesheets objects

    if(document.styleSheets[i].href.search('font_base_64_converted.css') == -1){ continue };//skip loop if stylesheet does not mmatch

    for(var b = 0; b <= document.styleSheets[i].cssRules.length - 1; b++){//loop through stylesheet dom objects, to locate style.fontFamily

        if(document.styleSheets[i].cssRules[b].style){   
            if(document.styleSheets[i].cssRules[b].style.fontFamily){//check if font family is not undefined
                //console.log(document.styleSheets[i].cssRules[b].style.fontFamily);
                all_fonts_on_style_sheet.push(document.styleSheets[i].cssRules[b].style.fontFamily)
            }
        } 
    };
}


//console.log(all_fonts_on_style_sheet);


//+++++++++++++ component edit ++++++++++++++++++

// text edit
function component_text_edit(callee_fn_id){


    //retrieve and porpulate edit box  with current component details data
    var html_element_data = document.getElementById(callee_fn_id);

    //html component text
    document.getElementById('text_edit_box_textarea').value = html_element_data.innerHTML.replace(/<br>/g, '\n');

    //html component number
    document.getElementById('text_edit_box_text_size').value = (html_element_data.style.fontSize.length == 0?parseInt(window.getComputedStyle(html_element_data).fontSize) : parseInt(html_element_data.style.fontSize));//if no font size specified for text, get system text set fontsize

    //html component text position
    document.getElementById('text_edit_box_text_position').value = (html_element_data.style.textAlign.length == 0?window.getComputedStyle(html_element_data).textAlign : html_element_data.style.textAlign);

    //html component font color
    //convert font returned by system from rgb to hex
    var font_color_rgb_to_hex = '#'; //store font as hex

    //test if font is provided by system or is set by user, convert rgb result to array, convert array item to base 16 string, then combine as hex code
    (html_element_data.style.color.length == 0?window.getComputedStyle(html_element_data).color : html_element_data.style.color).replace(/[r,g,b,(,)]/g, '').trim().split(' ').forEach((element, index) => {

        if(index != 3){//process only three items, ignore the four applicable to rgba() color;
            var hex = Number(element).toString(16);
            if (hex.length < 2) {
                hex = "0" + hex;
            }

            font_color_rgb_to_hex  = font_color_rgb_to_hex + hex;
        }
    })
        
    //console.log(font_color_rgb_to_hex)
    document.getElementById('text_edit_box_color_pick').value = font_color_rgb_to_hex ;//show font as color on div
    
    
    //html font weigh
    var font_weight = (html_element_data.style.fontWeight.length == 0?parseInt(window.getComputedStyle(html_element_data).fontWeight) : parseInt(html_element_data.style.fontWeight));//if no font weight specified for text, get system text set fontweight

    document.getElementById('text_edit_box_font_weight').value = font_weight;//set font weight as seletted on edit box text weight option


    //html page background color
    var page_background_color = document.getElementById('body_or_print_area');

    //convert color returned by system from rgb to hex
    var background_color_rgb_to_hex = '#'; //store color as hex

    //test if background color is provided by system or is set by user, convert rgb result to array, convert array item to base 16 string, then combine as hex code
    (page_background_color.style.backgroundColor.length == 0?window.getComputedStyle(page_background_color).backgroundColor : page_background_color.style.backgroundColor).replace(/[r,g,b,(,)]/g, '').trim().split(' ').forEach((element, index) => {

        if(index != 3){//process only three items, ignore the four applicable to rgba() color;

            var hex = Number(element).toString(16);
                if (hex.length < 2) {
                    hex = "0" + hex;
                }

            background_color_rgb_to_hex  = background_color_rgb_to_hex + hex;
        }
    })


    //console.log(background_color_rgb_to_hex);
    document.getElementById('text_edit_page_color_pick').value = background_color_rgb_to_hex;//set backgroung color to edit box page background option


    //html component font type
    //add system uploaded fonts

    document.getElementById('text_edit_box_font_type').innerHTML = '';//clean html of prev contents

    var system_uploaded_fonts = '';
    all_fonts_on_style_sheet.forEach(function(font){//all stored fonts

        system_uploaded_fonts = system_uploaded_fonts + `<option value='${font}' style='font-family:${font}'>${font.replace(/[\"']/gi,'')}</option>`;

    });

    var html_component_font_type = (html_element_data.style.fontFamily.length == 0?window.getComputedStyle(html_element_data).fontFamily : html_element_data.style.fontFamily); //current applied font
    $('#text_edit_box_font_type').append('<option  selected disabled hidden value=' + html_component_font_type + ' style="font-family:' + html_component_font_type + '">'+ html_component_font_type.replace(/[\"']/gi,'') +'</option>' + system_uploaded_fonts);//if no font specified for div, get system div set font
   
    
    //html component font style
    document.getElementById('text_edit_box_font_style').value = (html_element_data.style.fontStyle.length == 0?window.getComputedStyle(html_element_data).fontStyle : html_element_data.style.fontStyle);//if no fontstyle specified for text, get system text set fontstyle

    //html component text decoration
    //console.log((html_element_data.style.textDecoration.length == 0?window.getComputedStyle(html_element_data).textDecoration : html_element_data.style.textDecoration))


    //html component background color
     //convert font returned by system from rgb to hex
     var background_color_rgb_to_hex = '#'; //store font as hex
     
     var container_div_background_color = document.getElementById(callee_fn_id.replace(/[a,b,c]/g, 'container'));
    

     //test if font is provided by system or is set by user, convert rgb result to array, convert array item to base 16 string, then combine as hex code
    (container_div_background_color.style.backgroundColor.length == 0?window.getComputedStyle(container_div_background_color).backgroundColor : container_div_background_color.style.backgroundColor).replace(/[r,g,b,a,(,)]/g, '').trim().split(' ').forEach((element, index) => {

       // console.log( element )
        if(index != 3){//process only three items, ignore the four applicable to rgba() color;

            var hex = Number(element).toString(16);
            if (hex.length < 2) {
                hex = "0" + hex;
            }
    
            background_color_rgb_to_hex = background_color_rgb_to_hex + hex;

        }
    })
     
    //console.log( background_color_rgb_to_hex );
   

    document.getElementById('text_edit_box_text_background_color').value = background_color_rgb_to_hex ;//show font as color on div


    // show div

   /* console.log(    document.getElementById('text_edit_box_textarea').value,
                    document.getElementById('text_edit_box_text_size').value,
                    document.getElementById('text_edit_box_color_pick').value,
                    document.getElementById('text_edit_box_font_type').value,
                    document.getElementById('text_edit_box_text_background_color').value,
                );
    */

    show_hide('separator_component_edit_container');//hide separator edit form/box
    show_hide('component_select_container');//hide component add form/box
    show_hide('line_component_edit_container');//hide line edit form/box
    show_hide('space_component_edit_container');//hide line edit form/box
    show_hide('text_edit_container', 'show');//show text edit form/box
    
    

    selected_div = callee_fn_id;//save id of dive invoked function
    //console.log(selected_div);



}

function component_text_edit_save(){

    
    var html_element_data = document.getElementById(selected_div);//get div to work with;

    //and change properties to those set by user is any
    html_element_data.innerHTML = document.getElementById('text_edit_box_textarea').value.replace(/[\n\r]/g, '<br>'); //set text
    html_element_data.style.fontSize = document.getElementById('text_edit_box_text_size').value + 'px';//set font size
    html_element_data.style.color = document.getElementById('text_edit_box_color_pick').value;//set font color
    html_element_data.style.fontFamily = document.getElementById('text_edit_box_font_type').value;//set font type
    html_element_data.style.fontWeight = document.getElementById('text_edit_box_font_weight').value;//set font weight
    html_element_data.style.fontStyle = document.getElementById('text_edit_box_font_style').value;//set text font style
    html_element_data.style.textDecoration = document.getElementById('text_edit_box_font_decoration').value;//set text decoration
    html_element_data.style.textAlign = document.getElementById('text_edit_box_text_position').value;//set text position

    //+++ element div background color +++

    //covert rgb() to hex; check if background color was cahnge or not//if changed apply new color
    var background_color_rgb_to_hex = '#'; //store font as hex
     
    var container_div_background_color = document.getElementById(selected_div.replace(/[a,b,c]/g, 'container'));//get div to apply background on 

    //test if font is provided by system or is set by user, convert rgb result to array, convert array item to base 16 string, then combine as hex code
   (container_div_background_color.style.backgroundColor.length == 0?window.getComputedStyle(container_div_background_color).backgroundColor : container_div_background_color.style.backgroundColor).replace(/[r,g,b,a,(,)]/g, '').trim().split(' ').forEach((element, index) => {

      // console.log( element )
       if(index != 3){//process only three items, ignore the four applicable to rgba() color;

           var hex = Number(element).toString(16);
           if (hex.length < 2) {
               hex = "0" + hex;
           }
   
           background_color_rgb_to_hex = background_color_rgb_to_hex + hex;

       }
   })
    
   //system return unset background as color black;
   //prevent setting background as color black if user has not changed background of div 
    if(background_color_rgb_to_hex != document.getElementById('text_edit_box_text_background_color').value ){

        document.getElementById(selected_div.replace(/[a,b,c]/g, 'container')).style.backgroundColor = document.getElementById('text_edit_box_text_background_color').value;//set backgound color
    }


    //+++ page background /test & apply ++

    
    //covert rgb() to hex; check if background color was cahnge or not//if changed apply new color
    var page_background_color_rgb_to_hex = '#'; //store font as hex
     
    var page_div_background_color = document.getElementById('body_or_print_area');//get div to apply background on 

    //test if font is provided by system or is set by user, convert rgb result to array, convert array item to base 16 string, then combine as hex code
   (page_div_background_color.style.backgroundColor.length == 0?window.getComputedStyle(page_div_background_color).backgroundColor : page_div_background_color.style.backgroundColor).replace(/[r,g,b,a,(,)]/g, '').trim().split(' ').forEach((element, index) => {

      // console.log( element )
       if(index != 3){//process only three items, ignore the four applicable to rgba() color;

           var hex = Number(element).toString(16);
           if (hex.length < 2) {
               hex = "0" + hex;
           }
   
           page_background_color_rgb_to_hex = page_background_color_rgb_to_hex + hex;

       }
   })
    
   //system return unset background as color black;
   //prevent setting background as color black if user has not changed background of div 
    if(page_background_color_rgb_to_hex != document.getElementById('text_edit_page_color_pick').value ){

        document.getElementById('body_or_print_area').style.backgroundColor = document.getElementById('text_edit_page_color_pick').value;//set page body baground color
    }

    
}

//separator edit

function separator_component_edit_container(callee_fn_id) {

    var html_element_data = document.getElementById(callee_fn_id);

    show_hide('component_select_container');//hide component add form/box
    show_hide('space_component_edit_container');//hide text edit form/box
    show_hide('text_edit_container');//hide line edit form/box
    show_hide('line_component_edit_container');//hide line edit form/box
    show_hide('separator_component_edit_container', 'show');//show separator edit form/box

    //show current components details
    
    document.getElementById('separator_component_separator_size').value = (html_element_data.style.fontSize.length == 0?parseInt(window.getComputedStyle(html_element_data).fontSize) : parseInt(html_element_data.style.fontSize));//set current component size


    selected_div = callee_fn_id;//save id of dive invoked function

    
}

function separator_component_edit_save(to_append_separator){//save separator edits
    
    // console.log(to_append_separator)
    
    show_hide('component_select_container');//hide component add form/box
    show_hide('space_component_edit_container');//hide text edit form/box
    show_hide('text_edit_container');//hide line edit form/box
    show_hide('line_component_edit_container');//hide line edit form/box
    show_hide('separator_component_edit_container');//hide separator edit form/box



    //set selected separator
    document.getElementById(selected_div).innerHTML = to_append_separator;

    //set separator size
    document.getElementById(selected_div).style.fontSize = document.getElementById('separator_component_separator_size').value + 'px';
    document.getElementById(selected_div).style.verticalAlign = 'middle';
    document.getElementById(selected_div).style.lineHeight = '20px';

   



}


//line edit
function component_line_edit(callee_fn_id){

    show_hide('separator_component_edit_container');//hide separator edit form/box
    show_hide('component_select_container');//hide component add form/box
    show_hide('space_component_edit_container');//hide text edit form/box
    show_hide('text_edit_container');//hide line edit form/box
    show_hide('line_component_edit_container', 'show');//show line edit form/box

    selected_div = callee_fn_id;//save id of dive invoked function

    //console.log(selected_div);

}


//space delete
function component_space_edit(callee_fn_id){

    show_hide('separator_component_edit_container');//hide separator edit form/box
    show_hide('component_select_container');//hide component add form/box
    show_hide('line_component_edit_container');//hide line edit form/box
    show_hide('text_edit_container');//hide line edit form/box
    show_hide('space_component_edit_container', 'show');//show line edit form/box

    selected_div = callee_fn_id;//save id of dive invoked function

   // console.log(selected_div);

}


//+++ element delete +++
function element_edit_delete(calling_element){
    
    if( calling_element == 'text_element'){//text element/componet delete; 

        var confirm_text_element_delete = confirm('You are about to delete : \n'+ document.getElementById(selected_div).innerHTML);//give delete alert

        if(confirm_text_element_delete){//delete when okay pressed

            $('#' + selected_div.replace(/[a,b,c]/,'') + 'container').remove();show_hide('text_edit_container');
        }

        return;//dont delete item when cancelled pressed
    }



}



//+++++++++++++ font upload +++++++++++++++++
var newly_added_font_name = ''; //store font name of font to be uploaded

function font_upload_fn(){

    var font_file_to_upload = document.getElementById('font_upload_input');

    if(font_file_to_upload.value.search('.ttf') == -1 & font_file_to_upload.value.search('.woff') == -1 & font_file_to_upload.value.search('.woff2') == -1 & font_file_to_upload.value.search('.otf') == -1 & font_file_to_upload.value.search('.svg') == -1 & font_file_to_upload.value.search('.eot') == -1 ){

        alert('Please upload a font file. \ni.e Search google for "font download"')
        return
    }

    //console.log(font_file_to_upload.value,font_file_to_upload.type, font_file_to_upload.files[0].name);


    //convert font to base64
    var font_to_base_64 = '';//font converted to base 64

    var file = font_file_to_upload.files[0];//upload file, file


    (function() {

        var reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {

          //console.log(reader.result);
          font_to_base_64 = reader.result;
          upload_font_to_server();

        };

        reader.onerror = function (error) {

            return alert('There was an issue comverting your font to required format, please try again later.')

        };
     })();
     
    


    //post font to server
    function upload_font_to_server(){

        newly_added_font_name = font_file_to_upload.files[0].name.trim().replace(/(.tt|.woff|.woff2|.otf|.svg|.eot)/gi,'')//filter & save font name

        var url = http_https + current_domain + '/font_to_base_64_save';

        $.post(url, { font :font_to_base_64, font_name:  font_file_to_upload.files[0].name},function(data, status){

            if(status == 'success'){

                //console.log('reply'+ data);

                if(data){//if success

                    //reload all style sheets to include newly added font

                    /*    breaks font search function

                    var links = document.getElementsByTagName("link");

                    for (var cl in links){

                        var link = links[cl];

                        if (link.rel === "stylesheet"){
                            link.href += "";
                        }
                            
                    };
                    */

                    //add newly added font temporary to font array//for immidiate use
                    //all_fonts_on_style_sheet.push(newly_added_font_name);

                    return alert('Font loaded, Please reload page and open "Text type" option when editing text component.')
                }

                //if error
                return alert('There was an issue processing your font, please try again later.'); 
            
            }

            //console.log('err', data);
            alert('There was an issue connecting to the server computer, please try again later.'); 

        });
    }

}

//track page componants adding and automatically increase page width/add new page if first page width has been usedup
function new_page_or_width_increase(){



}

//page load option
function options_menu(){

    //add start option contents
    document.getElementById('menu_or_loading_options_option_menu').innerHTML = `
        
        <div style="width: 44%;height: auto; border: 1px solid blueviolet; margin:  auto auto 5px 3%;display:inline-block" class="">

            <p style="width: 100%; height: auto;margin: 0px; text-align: center;">Blank Page</p>

            <div style="width: 40%; height: 100px;margin: 16px auto 16px auto;box-shadow: 1px 1px 2px 3px #ccc;" class="w3-border"></div>

            <span style="width: 100%; height: auto;margin: 0px; display: flex;">
                <button onclick="page_templates(1)" style="width: 45%;height: auto;display: flexbox; margin: 16px 8px ;" class="btn btn-primary">Use template</button>
                <button onclick="" style="width: 45%;height: auto;display: flexbox; margin: auto;" class="btn btn-success" disabled >Download</button>
            </span>

        </div>

        <div style="width: 44%;height: auto; border: 1px solid blueviolet;margin:  auto auto 5px auto;display:inline-block" class="">

            <p style="width: 100%; height: auto;margin: 0px; text-align: center;">Simple/Default 1</p>

            <div style="width: 40%; height: 100px;margin: 16px auto 16px auto;box-shadow: 1px 1px 2px 3px #ccc;background-image:url('${http_https + current_domain }/templates/images/Simple_Default 1.png');background-size:cover" class="w3-border"></div>

            <span style="width: 100%; height: auto;margin: 0px; display: flex;">
                <button onclick="page_templates(2)" style="width: 45%;height: auto;display: flexbox; margin: 16px 8px ;" class="btn btn-primary">Use template</button>
                <button onclick="window.open('${http_https + current_domain }/templates/files/SimpleDefault _1 9-8-57AM, 10-Jan-2020 CV_Resume.pdf')" style="width: 45%;height: auto;display: flexbox; margin: auto;" class="btn btn-success">Download</button>
            </span>

         </div>`;
         
    show_hide('menu_or_loading_options_container', 'show');//show start option menu

}

//menu contents
function page_menu_contents(){

//add menu option contents
document.getElementById('menu_or_loading_options_option_menu').innerHTML = `
                        
    <div style="width: 40%;height: auto; display:inline-block;margin:  auto auto 5px 9%;" class="w3-border">

    <p style="width: 100%; height: auto;margin: 0px; text-align: center;">Preview page</p>

    <button style="width: 100%; height: 100px;margin: 16px auto 16px auto;" class="w3-border btn btn-primary" onclick="page_menu_options(1)">
        Preview                        
    </button>

    </div>

    <div style="width: 40%;height: auto; display: inline-block;margin:  auto auto 5px auto;" class="w3-border">

    <p style="width: 100%; height: auto;margin: 0px; text-align: center;">Print Page</p>

    <button style="width: 100%; height: 100px;margin: 16px auto 16px auto;" class="w3-border btn btn-primary" onclick="page_menu_options(2)">
        Print                      
    </button>

    </div>
    <div style="width: 40%;height: auto; display: inline-block;margin:  auto auto 5px 9%;" class="w3-border">

    <p style="width: 100%; height: auto;margin: 0px; text-align: center;">Save Page view</p>

    <button style="width: 100%; height: 100px;margin: 16px auto 16px auto;" class="w3-border btn btn-primary" onclick="page_menu_options(3)">
        Save                     
    </button>

    </div>
    <div style="width: 40%;height: auto; display: inline-block; margin:  auto auto 5px auto;" class="w3-border">

    <p style="width: 100%; height: auto;margin: 0px; text-align: center;">Restore Page view</p>

    <button style="width: 100%; height: 100px;margin: 16px auto 16px auto;" class="w3-border btn btn-primary" onclick="page_menu_options(4)">
        Restore                     
    </button>

    </div>
    <div style="width: 40%;height: auto;display: inline-block;margin: auto auto 5px 9%;" class="w3-border">

    <p style="width: 100%; height: auto;margin: 0px; text-align: center;">Choose template</p>

    <button style="width: 100%; height: 100px;margin: 16px auto 16px auto;" class="w3-border btn btn-primary" onclick="page_menu_options(5)">
        Template                     
    </button>

    </div>

`;




    //show option menu
    show_hide('menu_or_loading_options_container', 'show');
}


//menu options
function page_menu_options(menu_number){

    //hide option menu
    show_hide('menu_or_loading_options_container');

    if(menu_number == 1){//print preview pdf
        
    }
    
    if(menu_number == 2){//print pdf
        return produce_html();//
    }

    if(menu_number == 3){//take screen shot
        return screen_shot_take_or_restore('take');
    }

    if(menu_number == 4){//restore screenshot
        return screen_shot_take_or_restore('restore');
    }

    if(menu_number == 5){//templates

        return options_menu();//show page load option

    }

}


//screen shot take or restore
var screen_shot_store = '';

function screen_shot_take_or_restore(instruction){

    // if(screen_shot_store.length == 0){
    //     
    // }

    if(instruction == 'take'){
        //screen_shot_store = $('body')[0].outerHTML;//get html source code of current page state
        screen_shot_store = $('#Cv_1_content_container')[0].outerHTML;
        console.log(screen_shot_store)
    }
    if(instruction == 'restore'){

        //$('body')[0].outerHTML = screen_shot_store;//get html source code of current page state
        $('#Cv_1_content_container')[0].outerHTML = screen_shot_store;
    }

}



//default templates
 

function page_templates(template_number){

    //hide onloading option menu
    show_hide('menu_or_loading_options_container');

  

    if(template_number == 1){//empty/blank page

        screen_shot_store = ``;
        return $('#Cv_1_content_container')[0].outerHTML = screen_shot_store;
    }


    if(template_number == 2){//
    alert('**TIPS**\nClick on any item to edit or delete it..')
        screen_shot_store = `

        <div id="Cv_1_content_container" style="width: 100%;height: auto; margin-top:0px">
            
            <div class="" style="width:935px;height:auto; margin:0px" id="1_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="1_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="2_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="2_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="3_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="3_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:bold;" class=""><p id="3_b" style="width: 100%; height: auto; text-align: center; font-size: 21px; color: rgb(41, 43, 44); font-family: seguibl; font-weight: 700; font-style: normal; text-decoration: none;" onclick="component_text_edit(this.id)">CARRICULUM VITAE</p></span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="4_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="4_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id="5_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="5_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;font-weight:bold" class=""><p id="5_b" style="width: 100%; height: auto; text-align: left; font-size: 18px; color: rgb(41, 43, 44); font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-style: normal; text-decoration: none;" onclick="component_text_edit(this.id)">PERSONAL DETAILS</p></span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="6_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="6_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="6_b" onclick="component_text_edit(this.id)">Surname</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="6_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="6_c" onclick="component_text_edit(this.id)">Doe</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="7_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="7_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="7_b" onclick="component_text_edit(this.id)">First name</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="7_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="7_c" onclick="component_text_edit(this.id)">Tsehla</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="8_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="8_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="8_b" onclick="component_text_edit(this.id)">Date of birth</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="8_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="8_c" onclick="component_text_edit(this.id)">13 May 1989</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="9_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="9_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="9_b" onclick="component_text_edit(this.id)">ID number</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="9_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="9_c" onclick="component_text_edit(this.id)">8905135800000</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="10_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="10_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="10_b" onclick="component_text_edit(this.id)">Residential address</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="10_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="10_c" onclick="component_text_edit(this.id)">07180 Extension 4<br>Orange Farm<br>1841</span>
            </div>
        
            
        
            <div class="" style="width:935px;height:auto; margin:0px" id="12_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="12_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="13_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="13_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="13_b" onclick="component_text_edit(this.id)">Contact details</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="13_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="13_c" onclick="component_text_edit(this.id)">0719000000</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="14_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="14_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="14_b" onclick="component_text_edit(this.id)">Marital status</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="14_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="14_c" onclick="component_text_edit(this.id)">Single</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="15_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="15_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="15_b" onclick="component_text_edit(this.id)">Gender</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="15_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="15_c" onclick="component_text_edit(this.id)">Male</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="16_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="16_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="16_b" onclick="component_text_edit(this.id)">Dependant</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="16_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="16_c" onclick="component_text_edit(this.id)">None</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="17_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="17_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="17_b" onclick="component_text_edit(this.id)">Nationality</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="17_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="17_c" onclick="component_text_edit(this.id)">South african</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="18_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="18_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="18_b" onclick="component_text_edit(this.id)">Home language</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="18_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="18_c" onclick="component_text_edit(this.id)">Sesotho</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="19_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="19_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="19_b" onclick="component_text_edit(this.id)">Other language</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="19_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="19_c" onclick="component_text_edit(this.id)">English, Zulu</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="20_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="20_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="20_b" onclick="component_text_edit(this.id)">Hobbies</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="20_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="20_c" onclick="component_text_edit(this.id)">Cleaning, cooking</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="21_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="21_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="21_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="21_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="21_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="22_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="22_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="22_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="22_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="22_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="23_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="23_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="23_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="23_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="23_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="24_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="24_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="24_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="24_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="24_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="25_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="25_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="25_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="25_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="25_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="26_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="26_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id="27_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="27_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;font-weight:bold" class=""><p id="27_b" style="width: 100%; height: auto; text-align: left; font-size: 18px; color: rgb(41, 43, 44); font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-style: normal; text-decoration: none;" onclick="component_text_edit(this.id)">EDUCATION QUALIFICATIONS</p></span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="28_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="28_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="28_b" onclick="component_text_edit(this.id)">High school attended</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="28_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="28_c" onclick="component_text_edit(this.id)">Leshata secondary</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="29_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="29_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="29_b" onclick="component_text_edit(this.id)">Highest grade passed</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="29_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="29_c" onclick="component_text_edit(this.id)">Grade 12</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="30_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="30_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="31_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="31_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="31_b" onclick="component_text_edit(this.id)">Subjects</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="31_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="31_c" onclick="component_text_edit(this.id)">Sesotho</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="32_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="32_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="32_b" onclick="component_text_edit(this.id)"></span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="32_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="32_c" onclick="component_text_edit(this.id)">History</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="33_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="33_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="33_b" onclick="component_text_edit(this.id)"></span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="33_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="33_c" onclick="component_text_edit(this.id)">Geography</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="34_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="34_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="34_b" onclick="component_text_edit(this.id)"></span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="34_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="34_c" onclick="component_text_edit(this.id)">Maths literacy</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="35_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="35_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="35_b" onclick="component_text_edit(this.id)"></span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="35_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="35_c" onclick="component_text_edit(this.id)">Life orientation</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="36_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="36_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="36_b" onclick="component_text_edit(this.id)"></span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="36_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="36_c" onclick="component_text_edit(this.id)">Life science</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="37_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="37_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="37_b" onclick="component_text_edit(this.id)"></span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="37_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="37_c" onclick="component_text_edit(this.id)">English</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="39_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="39_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="46_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="46_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="46_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="46_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="46_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="47_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="47_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="47_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="47_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="47_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="48_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="48_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="49_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="49_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="49_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="49_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="49_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="50_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="50_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="50_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="50_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="50_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="51_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="51_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="51_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="51_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="51_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="52_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="52_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="52_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="52_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="52_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="53_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="53_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="53_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="53_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="53_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="54_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="54_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="54_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="54_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="54_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="55_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="55_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="55_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="55_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="55_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="56_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="56_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="57_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="57_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="57_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="57_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="57_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="58_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="58_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="58_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="58_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="58_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            
        
            <div class="" style="width:935px;height:auto; margin:0px" id="60_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="60_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="61_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="61_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="61_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="61_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="61_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="62_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="62_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="62_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="62_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="62_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="63_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="63_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="63_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="63_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="63_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="64_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="64_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="64_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="64_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="64_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="65_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="65_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="65_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="65_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="65_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="66_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="66_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="66_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="66_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="66_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="67_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="67_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="67_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="67_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="67_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="68_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="68_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id="69_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="69_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;font-weight:bold" class=""><p id="69_b" style="width: 100%; height: auto; text-align: left; font-size: 18px; color: rgb(41, 43, 44); font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-style: normal; text-decoration: none;" onclick="component_text_edit(this.id)">OTHER QUALIFICATIONS</p></span>
            </div>
        
            
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="71_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="71_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 16px; color: rgb(41, 43, 44); font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-style: normal; text-decoration: none;" class="" id="71_b" onclick="component_text_edit(this.id)">Information technlogy</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="71_d" onclick="separator_component_edit_container(this.id)"></span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 16px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Arial, Helvetica, sans-serif;" class="" id="71_c" onclick="component_text_edit(this.id)">Nqf level 6</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="72_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="72_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="73_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="73_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px;font-weight:bold" class="" id="73_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="73_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px;font-weight:bold" class="" id="73_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="74_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="74_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="75_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="75_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px;font-weight:bold" class="" id="75_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="75_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px;font-weight:bold" class="" id="75_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="76_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="76_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="77_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="77_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px;font-weight:bold" class="" id="77_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="77_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px;font-weight:bold" class="" id="77_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="78_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="78_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            
        
            
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id="81_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="81_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;font-weight:bold" class=""><p id="81_b" style="width: 100%; height: auto; text-align: left; font-size: 18px; color: rgb(41, 43, 44); font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-style: normal; text-decoration: none;" onclick="component_text_edit(this.id)">WORK EXPERIENCE</p></span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="82_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="82_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="82_b" onclick="component_text_edit(this.id)">Company</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="82_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="82_c" onclick="component_text_edit(this.id)">iCafe</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="83_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="83_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="83_b" onclick="component_text_edit(this.id)">Position</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="83_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="83_c" onclick="component_text_edit(this.id)">Attendant</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="84_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="84_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="84_b" onclick="component_text_edit(this.id)">Start date</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="84_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="84_c" onclick="component_text_edit(this.id)">15 January 2020</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="85_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="85_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="85_b" onclick="component_text_edit(this.id)">End date</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="85_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="85_c" onclick="component_text_edit(this.id)">Currently employed </span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="86_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="86_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" class="" id="86_b" onclick="component_text_edit(this.id)">Responsibilities</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="86_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="86_c" onclick="component_text_edit(this.id)">Attend to customer request, print documents, copy, manage computers</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="87_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="87_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="88_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="88_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="88_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="88_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="88_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="89_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="89_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="89_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="89_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="89_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="90_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="90_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="90_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="90_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="90_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="91_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="91_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="91_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="91_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="91_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="92_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="92_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="92_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="92_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="92_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="93_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="93_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="94_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="94_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="94_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="94_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="94_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="95_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="95_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="95_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="95_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="95_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="96_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="96_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="96_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="96_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="96_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="97_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="97_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="97_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="97_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="97_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="98_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="98_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="98_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="98_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="98_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="99_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="99_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="100_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="100_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="100_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="100_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="100_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="101_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="101_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="101_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="101_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="101_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="102_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="102_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="102_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="102_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="102_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="103_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="103_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="103_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="103_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="103_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="104_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="104_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="104_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="104_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="104_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="105_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="105_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id="106_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="106_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;font-weight:bold" class=""><p id="106_b" style="width: 100%; height: auto; text-align: left; font-size: 18px; color: rgb(41, 43, 44); font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-style: normal; text-decoration: none;" onclick="component_text_edit(this.id)">ABOUT ME</p></span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id="107_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="107_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;" class=""><p id="107_b" style="width: 100%; height: auto; text-align: left; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none;" onclick="component_text_edit(this.id)">I'm fascinated by technology and everything machine. I enjoy reading a good book when relaxed, or listening to audio book when busy.</p></span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="108_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="108_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id="109_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="109_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;" class=""><p id="109_b" style="width:100%;height:auto;text-align:left" onclick="component_text_edit(this.id)">Click here</p></span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="110_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="110_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class=" " id="111_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="111_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width:90%;height:auto;margin:0px;font-weight:regular;font-weight:bold" class=""><p id="111_b" style="width: 100%; height: auto; text-align: left; font-size: 18px; color: rgb(41, 43, 44); font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-style: normal; text-decoration: none;" onclick="component_text_edit(this.id)">REFERENCE</p></span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="112_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="112_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="112_b" onclick="component_text_edit(this.id)">Name</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="112_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="112_c" onclick="component_text_edit(this.id)">Tsehla Doe</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="113_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="113_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="113_b" onclick="component_text_edit(this.id)">Relationship</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="113_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="113_c" onclick="component_text_edit(this.id)">Friend</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="114_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="114_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"></span>
                <span style="width: 43.5%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-family: Alef-Regularf; font-weight: 400; font-style: normal; text-decoration: none;" class="" id="114_b" onclick="component_text_edit(this.id)">Contact</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="114_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width: 50%; height: auto; margin: 0px; font-size: 15px; color: rgb(41, 43, 44); font-weight: 400; font-style: normal; text-decoration: none; font-family: Alef-Regularf;" class="" id="114_c" onclick="component_text_edit(this.id)">0719010000</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="115_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="115_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="116_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="116_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="116_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="116_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="116_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="117_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="117_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="117_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="117_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="117_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="118_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="118_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="118_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="118_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="118_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="119_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="119_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="120_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="120_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="120_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="120_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="120_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="121_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="121_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="121_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="121_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="121_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="122_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="122_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="122_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="122_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="122_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div class="" style="width:935px;height:auto; margin:0px" id="123_container">
                <div style="width: 100%;height: 20px;margin:0px;" class="" id="123_b" onclick="component_space_edit(this.id)">&nbsp;</div>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="124_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="124_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="124_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="124_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="124_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="125_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="125_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="125_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="125_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="125_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id="126_container">
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id="126_a" onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;"></i></span>
                <span style="width:43.5%;height:auto;margin:0px" class="" id="126_b" onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:8px;max-width:16px;height:auto;margin:0px 15px 0px 15px" class="" id="126_d" onclick="separator_component_edit_container(this.id)">:</span>
                <span style="width:50%;height:auto;margin:0px" class="" id="126_c" onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        </div>
        
        
        
        
        
        
        
        
        
        `;
        

        return $('#Cv_1_content_container')[0].innerHTML = screen_shot_store;
    }


    if(template_number == 3){

        screen_shot_store = ``;
        

        return $('#Cv_1_content_container')[0].innerHTML = screen_shot_store;
    }

    



}