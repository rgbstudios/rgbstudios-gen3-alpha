let colors = ['#933', '#393', '#339'];
let themeColor = colors[Math.floor(Math.random()*colors.length)];

$('#meta1').prop('content',themeColor);
$('#meta2').prop('content',themeColor);
$('#meta3').prop('content',themeColor);

$('::selection').prop('color', themeColor);