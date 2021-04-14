var list = [
    {id:0, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:1, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:2, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:3, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:4, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:5, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:6, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:7, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:8, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:9, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:10, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:11, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:12, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:13, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:14, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:15, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:16, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:17, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:18, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:19, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:20, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:21, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:22, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:23, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:24, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:25, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:26, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:27, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:28, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
    {id:29, name: 'Branisalva Nedeljkovic', position: 'UI / UX Designer', src: 'imgs/employees/Branislava_Nedeljkovic.png'},
];

var pageCurrent = 0;

$(function () {
    loadFirstPage();
    $('#moreMembers_btn').click(function () {
        pageCurrent++;
        loadMore();
    });
});


function loadFirstPage(){
    var page = ""
    for (i = 0; i < (pageCurrent + 1) * 10; i++) {
        page += memberToHtml(list[i])
    }
    $("#members").append(page);
}


function loadMore(){
    var page = ""
    for (i = pageCurrent * 10; i < (pageCurrent + 1) * 10; i++) {
        if(list[i]){
            page += membersToHtml(list[i], i)
        }
        else{
            $('#moreMembers_btn').css("display", "none");
        }
    }
    $("#members").append(page);
}

function membersToHtml(member, i){
    var memberHtml = 
    '<div class="member" style="opacity: 0; animation: ' + i*0.05 + 's fadein 0.2s linear forwards;">' + 
        '<img src="' + member.src + '" alt="' + member.name + '"  class="member_img">' +
        '<div class="member_data">' +
            '<div class="member_data_name">' +  member.name + '</div>' +
            '<div class="member_data_title">' +  member.position + '</div>' +
        '</div>' +
    "</div>"

    return memberHtml;
}

function memberToHtml(member){
    var memberHtml = 
    '<div class="member" >' + 
        '<img src="' + member.src + '" alt="' + member.name + '"  class="member_img">' +
        '<div class="member_data">' +
            '<div class="member_data_name">' +  member.name + '</div>' +
            '<div class="member_data_title">' +  member.position + '</div>' +
        '</div>' +
    "</div>"

    return memberHtml;
}

// var ctx = document.getElementById('testChart');
// Chart.defaults.global.defaultFontFamily = 'Rationale';
// Chart.defaults.global.defaultFontSize = 70;
// Chart.defaults.global.animation.duration = 1500;
// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['', '', '', '', '', '', '', ''],
//         datasets: [{
//             data: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5],
//             backgroundColor: [
//                 'rgba(1, 161, 246, 1)', // our teams
//                 'rgba(144, 96, 239, 1)', //solving problems
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(0, 126, 230, 1)', // passion for exelence
//                 'rgba(100, 175, 245, 1)', // honesty...
//                 'rgba(1, 179, 249, 1)', // getting...
//                 'rgba(1, 136, 233, 1)', // individual
//             ],
//             borderColor: [
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(255, 255, 255, 1)',
//                 'rgba(255, 255, 255, 1)',
//             ],
//                 borderWidth: 10
//         }]
//     },
//     responsive: true,
//     maintainAspectRatio: true,
//     options: {
//         cutoutPercentage: 55,
//         tooltips: {enabled: false},
//         hover: {mode: null},
//         legend: {
//             display: false
//         },
//         scales: {
//             scaleLabel: {
//                 fontSize: 50
//             }
//         },
//         responsive: true,
//         maintainAspectRatio: true,
//         plugins: {
//             datalabels: {
//                 color: '#fff',
//                 textAlign: 'center',
//                 formatter: function(value, ctx) {
//                     return ctx.chart.data.labels[ctx.dataIndex];
//                 }
//             },
//             deferred: {
//                 yOffset: '500',
//                 delay: 200
//             },
//         },
//     }
// });

function resize() {
var chart = document.getElementById('chartContainer');
    chart.style.width = '600px';
}

function hover1() {
    var chart1 = document.getElementById('chart1');
    var line1 = document.getElementById('line1');
    chart1.style.visibility = "visible";
    chart1.style.opacity = "1";
    line1.style.visibility= "visible";
}

function hover2() {
    var chart1 = document.getElementById('chart2');
    var line1 = document.getElementById('line2');
    chart1.style.visibility = "visible";
    chart1.style.opacity = "1";
    line1.style.visibility= "visible";
}

function hover3() {
    var chart1 = document.getElementById('chart3');
    var line1 = document.getElementById('line3');
    chart1.style.visibility = "visible";
    chart1.style.opacity = "1";
    line1.style.visibility= "visible";
}

function hover4() {
    var chart1 = document.getElementById('chart4');
    var line1 = document.getElementById('line4');
    chart1.style.visibility = "visible";
    chart1.style.opacity = "1";
    line1.style.visibility= "visible";
}

function hover5() {
    var chart1 = document.getElementById('chart5');
    var line1 = document.getElementById('line5');
    chart1.style.visibility = "visible";
    chart1.style.opacity = "1";
    line1.style.visibility= "visible";
}

function hover6() {
    var chart1 = document.getElementById('chart6');
    var line1 = document.getElementById('line6');
    chart1.style.visibility = "visible";
    chart1.style.opacity = "1";
    line1.style.visibility= "visible";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function moveToHomePage() {
    location.replace("index.html");
}


// setTimeout("chart1.style.visibility = 'visible'", 2000);

