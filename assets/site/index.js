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

    document.getElementsByTagName('body')[0].style.marginTop = '0px';//set body magin to zero, //it affects how item start prin position on page
    show_hide('cv_resume_1_component_add_button');//temporary hide component add button/prevent it from being printed
    show_hide('cv_resume_1_print_button');//temporary hide print button/to prevent it being prented

    var current_body_source = $('body')[0].outerHTML;//get html source code of current page state


    var url = http_https + current_domain + '/convert';


    $.post(url, { data :current_body_source },function(data, status){

        if(status == 'success'){

            //return console.log('reply'+data);

            if(data.sucess){//if success
                
                //return $('#x').append(data.download);
                show_hide('cv_resume_1_component_add_button', 'show');//re show component add button
                show_hide('cv_resume_1_print_button', 'show');//re show print button
                document.getElementsByTagName('body')[0].style.marginTop = '50px';//make margin 50px from top/ good appearance and easy working with
                return window.open(http_https + current_domain + '/'+ data.download, '_blank');//open pdf in new tab
            }

            //if error
            show_hide('cv_resume_1_component_add_button', 'show');//re show component add button
            show_hide('cv_resume_1_print_button', 'show');//re show print button
            document.getElementsByTagName('body')[0].style.marginTop = '50px';//make margin 50px from top/ good appearance and easy working with
            return alert('There was an issue producing the CV/Resume, please try again later.'); 
           

        }

        //console.log('err', data);
        show_hide('cv_resume_1_component_add_button', 'show');//re show component add button
        show_hide('cv_resume_1_print_button', 'show');//re show print button
        document.getElementsByTagName('body')[0].style.marginTop = '50px';//make margin 50px from top/ good appearance and easy working with
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
                <span style="width:40%;height:auto;margin:0px;font-weight:bold" class="" id='${component_id_tracking}_b' onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:3px;height:auto;margin:0px 15px 0px 15px" class="">:</span>
                <span style="width:40%;height:auto;margin:0px;font-weight:bold" class="" id='${component_id_tracking}_c' onclick="component_text_edit(this.id)"> Click here</span>
            </div>
        `;

       return div_append('Cv_1_content_container', div_component);

    }

    if(component_type == 'component_5'){

        let div_component = `
            <div style="width:930px;height:auto; display:flex;margin:auto" class="" id='${component_id_tracking}_container'>
                <span style="width:3%;height:auto;margin:0px 4px 0px 0px" class="" id='${component_id_tracking}_a' onclick="selected_div = this.id; show_hide('icon_select_container', 'show');"> <i class="la la-paper-plane" style="font-size: 16px;" ></i></span>
                <span style="width:40%;height:auto;margin:0px" class="" id='${component_id_tracking}_b' onclick="component_text_edit(this.id)"> Click here</span>
                <span style="width:3px;height:auto;margin:0px 15px 0px 15px" class="">:</span>
                <span style="width:40%;height:auto;margin:0px" class="" id='${component_id_tracking}_c' onclick="component_text_edit(this.id)"> Click here</span>
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
   

        //html component font color
        //convert font returned by system from rgb to hex
        var font_color_rgb_to_hex = '#'; //store font as hex

        //test if font is provided by system or is set by user, convert rgb result to array, convert array item to base 16 string, then combine as hex code
        (html_element_data.style.color.length == 0?window.getComputedStyle(html_element_data).color : html_element_data.style.color).replace(/[r,g,b,(,)]/g, '').trim().split(' ').forEach(element => {
                var hex = Number(element).toString(16);
                if (hex.length < 2) {
                    hex = "0" + hex;
                }

                font_color_rgb_to_hex  = font_color_rgb_to_hex + hex;
        })
        
        //console.log(font_color_rgb_to_hex)
        document.getElementById('text_edit_box_color_pick').value = font_color_rgb_to_hex ;//show font as color on div


    //html component font type

    //add system uploaded fonts

    document.getElementById('text_edit_box_font_type').innerHTML = '';//clean html of prev contents

    var system_uploaded_fonts = '';
    all_fonts_on_style_sheet.forEach(function(font){

        system_uploaded_fonts = system_uploaded_fonts + `<option value='${font}' style='font-family:${font}'>${font}</option>`;

    });

    var html_component_font_type = (html_element_data.style.fontFamily.length == 0?window.getComputedStyle(html_element_data).fontFamily : html_element_data.style.fontFamily);
    $('#text_edit_box_font_type').append('<option  selected value=' + html_component_font_type + ' style="font-family:' + html_component_font_type + '">'+ html_component_font_type +'</option>' + system_uploaded_fonts);//if no font specified for div, get system div set font
   
    
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
    

    if(background_color_rgb_to_hex != document.getElementById('text_edit_box_text_background_color').value ){

        document.getElementById(selected_div.replace(/[a,b,c]/g, 'container')).style.backgroundColor = document.getElementById('text_edit_box_text_background_color').value;//set backgound color
    }
}




//line edit
function component_line_edit(callee_fn_id){

    show_hide('space_component_edit_container');//hide text edit form/box
    show_hide('text_edit_container');//hide line edit form/box
    show_hide('line_component_edit_container', 'show');//show line edit form/box

    selected_div = callee_fn_id;//save id of dive invoked function

    //console.log(selected_div);

}


//space delete
function component_space_edit(callee_fn_id){

    show_hide('line_component_edit_container');//hide line edit form/box
    show_hide('text_edit_container');//hide line edit form/box
    show_hide('space_component_edit_container', 'show');//show line edit form/box

    selected_div = callee_fn_id;//save id of dive invoked function

   // console.log(selected_div);

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