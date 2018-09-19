let colors = ['#933', '#393', '#339'];
let colorNames = ['red-select', 'green-select', 'blue-select'];

let idx = Math.floor(Math.random()*colors.length);

let themeColor = colors[idx];
let cssClass = colorNames[idx];

$('#meta1').prop('content',themeColor);
$('#meta2').prop('content',themeColor);
$('#meta3').prop('content',themeColor);
