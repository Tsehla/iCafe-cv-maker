var express_module = require('express');
var app = express_module(); //express app/aspress as a function

var puppeteer = require('puppeteer');//headless chromium browser//

var filesytem_module = require('fs');

//var fs = require('fs'); //system file read
//var fileUpload = require('express-fileupload');//to allow express multipart/form-data handling

//var PouchDB = require('pouchdb');//pouch db, module
//require('dotenv').config();//dot env module

var server_listen_port = 3000;//port express server is running on//glitch.me require port to be 3000


//__________________________________ routes _____________________________

//++++++++++ static elements ++++++++++
app.use(express_module.static('assets'));


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express_module.urlencoded({limit: '50mb'}));


app.use((req, res, next)=>{// get url of requested resources
        console.log('> ' + req.protocol + '://' + req.get('host') + req.originalUrl);
        next();
    })



// +++++++++ HOME ++++++++
app.get('/', function(req, res){

    res.sendFile(__dirname + "/views/index.html");
    //res.jsonp('hello there');


});

// +++++++++ SAVE UPLOADED FONT ++++++++
app.post('/font_to_base_64_save', function(req,res){ //get file and convert it to base 64 then write result

    //console.log(req.body);

        //save font formate, and clean name of file extension
        var font_data_to_save = `

        @font-face {
            font-family:"${req.body.font_name.trim().replace(/(.tt|.woff|.woff2|.otf|.svg|.eot)/gi,'')}";
            src : url(${req.body.font});
        }
        `;

       // console.log(req.body.font_name.trim().replace(/(.tt|.woff|.woff2|.otf|.svg|.eot)/gi,''));
       //console.log(font_data_to_save )
   
        filesytem_module.appendFile("./assets/site/font_base_64_converted.css",font_data_to_save , (err) => {
            if (err) res.send(err);

           // res.send("Successfully Written to File.");
            res.jsonp(true);

        });
});

//++++++++++ Convert to pdf ++++++++

app.post('/convert', function(req, res){
  
    
   // console.log(req.body);

    html_to_pdf_print(req, res);//print to html

   

})


//create pdf

function html_to_pdf_print(req, res){

    //upload date stamp 
    var date = new Date();			
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var month_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
    var upload_date_time = hour+'-'+minutes+'-'+seconds+(hour>12?daytime='PM':daytime='AM')+', '+day+'-'+month_array[month-1]+'-'+ year + ' '; //add date to file name
    
    //read contents of style sheets


    var bootstrap_min_css = '';//bootstrap css
    var w3_css = ''; //w3c css
    var site_css = ''; //custom site css
    var embedded_fonts = '';//user added fonts

    var line_awesome_css = '';//line awesome//external dependent fonts have been base64 converted & embedded
  

    // read file with w3c css data
    filesytem_module.readFile('./assets/site/w3.css', 'utf8',function read(err, data) {

        if (err) {
            throw err;
        }
        w3_css = data;

        //console.log(w3_css);  
    });

    // read file with bootstrap data
    filesytem_module.readFile('./assets/site/bootstrap.min.css', 'utf8',function read(err, data) {

        if (err) {
            throw err;
        }
        bootstrap_min_css = data;

        //console.log(bootstrap_min_css);  
    });

    filesytem_module.readFile('./assets/site/index.css', 'utf8',function read(err, data) {

        if (err) {
            throw err;
        }
        site_css = data;

        //console.log(site_css);  
    });

    //line awesome fonts & css
    filesytem_module.readFile('./assets/site/line-awesome/css/line-awesome.css', 'utf8',function read(err, data) {

        if (err) {
            throw err;
        }
        line_awesome_css = data;

        //console.log(line_awesome_css);  
    });

       //embedded fonts (base64) converted
       filesytem_module.readFile('./assets/site/font_base_64_converted.css', 'utf8',function read(err, data) {

        if (err) {
            throw err;
        }
        embedded_fonts = data;

        //console.log(line_awesome_css);  
    });


    (async()=>{

       // var browser = await puppeteer.launch();//not work on glitch
        var browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});//required to work on glitch


        var page = await browser.newPage();

        await page.setViewport({width: 1200, height: 800, deviceScaleFactor: 2});
        


        //html body contents
        var html_body_contents =  req.body.data;
      //  await page.goto(`data:text/html,${html_body_contents}`);


      await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head>

            <!-- line awesome css & fonts -->
    
            <style>
                ${embedded_fonts}
            </style>
            <style>
                ${line_awesome_css}
            </style>

            <style>
                ${w3_css}
            </style>
            <style>
                ${bootstrap_min_css}
            </style>
            <style>
                ${site_css}
            </style>
        </head>
        <body>
          ${html_body_contents}
        </body>
      </html>
    `)


        await page.pdf({path: 'assets/resume_pdf/' + upload_date_time +'CV_Resume.pdf', printBackground: true}).then(function(result){
            //console.log('sucess', result);
            res.jsonp({sucess: true, download : 'resume_pdf/' + upload_date_time +'CV_Resume.pdf'});//pdf created, send link for download

        }).catch(function(err){
            //console.log('error', err);
            res.jsonp({sucess: false, download : ''});//send error
        });;

        await browser.close();





    })();


    

}

















//__________________________________ routes end _________________________

app.listen(server_listen_port, function(){
    console.log('------------------------------------------');
    console.log('express server running on 127.0.0.1:'+server_listen_port);
    console.log('------------------------------------------');
})
