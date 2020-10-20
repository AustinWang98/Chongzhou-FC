console.log('script')
var playersData= [
    {
        id :3,
        name:'杨睿',
        number:3,
        img:'player1.jpg'

    } ,
    {
        id :4,
        name:'左向杨',
        number:4,
        img:'players2.jpg'

    } ,
    {
        id :5,
        name:'徐翌纶',
        number:5,
        img:'xu.jpg'
    } ,
    {
        id :6,
        name:'李泽楷',
        number:6,
        img:'players4.jpg'

    } ,
    {
        id :7,
        name:'陈红瑞',
        number:7,
        img:'chenhongrui.jpg'
    } ,
    {
        id :8,
        name:'兰浩宇',
        number:8,
        img:'players4.jpg'

    } ,
    {
        id :9,
        name:'彭靖宇',
        number:9,
        img:'players5.jpg'

    } ,
    {
        id :10,
        name:'陈昭沛',
        number:10,
        img:'chenzhaopei.jpg'
    } ,
    {
        id :11,
        name:'李智杰',
        number:11,
        img:'players4.jpg'

    } ,
    {
        id :12,
        name:'余恒峰',
        number:12,
        img:'424e911c6a3da78fd8fb288e77eb81e0.jpg'

    } ,
    {
        id :14,
        name:'程丛圃',
        number:14,
        img:'14.jpg'
    } ,
    {
        id :15,
        name:'黎景潭',
        number:15,
        img:'15.jpg'
    } ,
    {
        id :16,
        name:'邓继笙',
        number:16,
        img:'deng.jpg'
    } ,
    {
        id :17,
        name:'程鹏烨',
        number:17,
        img:'424e911c6a3da78fd8fb288e77eb81e0.jpg'

    } ,
    {
        id :18,
        name:'郭俊洋',
        number:18,
        img:'guojunyang.jpg'
    } ,
    {
        id :19,
        name:'吴辰俊',
        number:19,
        img:'wu.jpg'
    } ,
    {
        id :20,
        name:'杨俊豪',
        number:20,
        img:'players5.jpg'

    } ,
    {
        id :21,
        name:'杨晟睿',
        number:21,
        img:'yang.jpg'
    } ,
    {
        id :22,
        name:'彭佳锐',
        number:22,
        img:'players2.jpg'

    } ,
    {
        id :23,
        name:'卢渭川',
        number:23,
        img:'lu.jpg'

    } ,
    { id:24,
      name:'陶浩然',
      number:24,
      img:'24.jpg'
    },
    {
        id:25,
        name:'彭佳锐',
        number:25,
        img:'25.jpg'
    },
    {
        id:26,
        name:'包煜睿',
        number:26,
        img:'26.jpg'
    },
    {
        id:27,
        name:'彭俊汐',
        number:27,
        img:'27.jpg'
    },
    
    {id:28,
    name:'夏铭轩',
    number:'28',
    img:'xia.jpg'
    }
    
    ]
    
    
    var cards=$("#cards")  
var data = playersData
for (i=0;i<data.length;i++){
    var myItem=data[i]
    var item = data[i]
        var name = item.name;
        var img = './assets/' + item.img;
        var number = item.number


        console.log(img)
        var titleFinal='<h5 class="card-title">'+ number +'</h5>'
        var textFinal= '<p class="card-text">' + name + '</p>'
        var cardBody = '<div class="card-body">'+titleFinal+textFinal+'</div>'
        var cardImg = '<img src ='+ img +' class="card-img-top" alt="...">'
        var card='<div class="card">'+cardImg + cardBody+'</div>'
        var renderCol='<div class="col-md-3">'+card+'</div>'
        cards.append(renderCol)


}


$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
       

        
