
# jQuery Color Changer

This is a Jquery Plugins. made by Alifur Rahman. you can use this for change 'color' 'background-color''stroke-color' etc.

## Support

For support, email alifurcoder@gmail.com or check my profile.


## Run Locally

Clone the project

```bash
  git clone https://github.com/alifur-rahman/Color-Changer-alpha-varsion-1.2.git
```

## Lessons Learned

- link the jquery CDN;
- link the color-changer CSS
- link the color-chager JS.
- link the fonts Battalion.
- copy the color-changer HTML and past on project HTML.
- "addColor" use this class in the html which content want to change color.

## Installation

link the fontawsome CDN.
```bash
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
```
link the jquery CDN.
```bash
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```
Add the color-changer CSS.
```bash
<style>
/*========================*/
/*COLOUR CHANGER CSS*/
/*=======================*/

@font-face {
    font-family: Alifur;
    src: url(../fonts/Battalion.ttf);
}

 :root {
    --addColor: #FFB400;
}

.color-changer-area {
    top: 50%;
    left: 0;
    position: fixed;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    z-index: 9999;
    max-width: 8%;
}

.open-icon {
    width: 100%;
    background: #332e2ef2;
    color: #fff;
    height: 55px;
    max-width: 50px;
    font-size: 33px;
    border-radius: 0px 11px 10px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: .5s;
    transition: .5s;
    cursor: pointer;
}

.open-icon:hover {
    max-width: 80px;
    background: #131313;
}

.open-icon:active {
    background: #888;
    color: #c6a76d;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}


/*
 CLOSE Icon
 */

.close-icon {
    width: 100%;
    background: #fff;
    max-width: 250px;
    position: fixed;
    text-align: center;
    left: 0;
    display: none;
    background: #131313;
    border-radius: 6px;
}

.icon-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 19px;
    text-transform: uppercase;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 6px 0;
    color: #fff;
}

.icon-header p {
    padding: 0;
    margin: 0;
    font-size: 17px;
    font-family: tahoma;
    font-weight: 400;
    color: var(--addColor);
}

.icon-header .fa {
    font-size: 26px;
    cursor: pointer;
    padding: 10px;
}

.icon-header .fa:hover {
    color: #977979bf;
}

.hr-separator {
    padding: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 90%;
}


/*
 single close div
 */

.single-close-div {
    margin: 10px 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.single-close-div .fa {
    font-size: 30px;
    margin: 5px;
    display: inline-block;
    padding: 3px;
    cursor: pointer;
}

.button .owner {
    background: var(--addColor);
    padding: 6px 70px;
    margin: 10px;
    border: none;
    font-size: 13px;
    display: inline-block;
    color: #fff;
    font-family: Alifur;
    text-decoration: none;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 6px;
}

.button .owner:hover {
    opacity: .6;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";
}


/*
 custom color
 */

#purple {
    color: purple;
}

#red {
    color: red;
}

#blueviolet {
    color: blueviolet;
}

#blue {
    color: blue;
}

#goldenrod {
    color: goldenrod;
}

#magenta {
    color: magenta;
}

#yellowgreen {
    color: yellowgreen;
}

#orange {
    color: orange;
}

#green {
    color: green;
}

#yellow {
    color: #ffb400;
}

<style/>
```
Add the color-chager JS.
```bash
<script>

$(document).ready(function() {
    //COLOUR CHANGER
    $(".open-icon").click(function() {
        $('.color-changer-area').animate({
            'left': '-100px'
        }, 500);
        $('.close-icon').toggle(1000);

    });
    $('.icon-header .fa').click(function() {
        $('.close-icon').toggle(1000);
        $('.color-changer-area').animate({
            'left': '0'
        }, 500);
    });

    //purple
    $("#purple").click(function() {
        $(":root").css("--addColor", "purple");

    });
    //red
    $("#red").click(function() {
        $(":root").css("--addColor", "red");

    });
    //blueviolet
    $("#blueviolet").click(function() {
        $(":root").css("--addColor", "blueviolet");
    });
    //blue
    $("#blue").click(function() {
        $(":root").css("--addColor", "blue");
    });
    //goldenrod
    $("#goldenrod").click(function() {

        $(":root").css("--addColor", "goldenrod");
    });
    //magenta
    $("#magenta").click(function() {
        $(":root").css("--addColor", "magenta");
    });
    //yellowgreen
    $("#yellowgreen").click(function() {
        $(":root").css("--addColor", "yellowgreen");
    });
    //orange
    $("#orange").click(function() {
        $(":root").css("--addColor", "orange");
    });
    //green
    $("#green").click(function() {
        $(":root").css("--addColor", "green");
    });
    //yellow
    $("#yellow").click(function() {
        $(":root").css("--addColor", "#ffb400");
    });
});

</script>
```
link the fonts Battalion.
```bash
https://github.com/alifur-rahman/Color-Changer-alpha-varsion-1.2/blob/main/fonts/Battalion.ttf
```
Copy the color-changer HTML and past on project HTML.
```bash
  <!-- ================================== -->
    <!-- COLOUR CHANGER -->
    <!-- ================================== -->
    <div class="color-changer-area">
        <div class="open-icon">
            <i class="fa fa-cog fa-spin" aria-hidden="true"></i>
        </div>

        <div class="close-icon">
            <div class="icon-header">
                <p class="add-color">Colour Changer</p>
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <hr class="hr-separator">
            <div class="single-close-div">
                <i id="purple" title="Purple" class="fa fa-tint" aria-hidden="true"></i>
                <i id="red" title="Red" class="fa fa-tint" aria-hidden="true"></i>
                <i id="blueviolet" title="Blueviolet" class="fa fa-tint" aria-hidden="true"></i>
                <i id="blue" title="Blue" class="fa fa-tint" aria-hidden="true"></i>
                <i id="goldenrod" title="Goldenrod" class="fa fa-tint" aria-hidden="true"></i>
            </div>
            <div class="single-close-div">
                <i id="magenta" title="Magenta" class="fa fa-tint" aria-hidden="true"></i>
                <i id="yellowgreen" title="Yellowgreen" class="fa fa-tint" aria-hidden="true"></i>
                <i id="orange" title="Orange" class="fa fa-tint" aria-hidden="true"></i>
                <i id="green" title="Green" class="fa fa-tint" aria-hidden="true"></i>
                <i id="yellow" title="Yellow" class="fa fa-tint" aria-hidden="true"></i>
            </div>
            <div class="button">
                <a class="owner add-bg-color" target="blank" href="https://facebook.com/alifurrahman.rahman.79" role="button">Alifur</a>
            </div>
        </div>
    </div>
```
"addColor" use this class in the html which content want to change color
```bash
addColor
```
As like 
```bash
 <p class="add-color">Colour Changer</p>
```
