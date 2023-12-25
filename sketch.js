var sound1
function preload(){
  sound1 = loadSound("Power.mp3") //先把音樂檔載入到sound1程式碼中
}

var face_colors = "bc7681-ff9999-f9d2cd-e0777d-b91372".split("-").map(a=>"#"+a)
var eye_colors = "ffddd2-f3e9dc-efd3d7-fbfefb-d9d9d9".split("-").map(a=>"#"+a)

var pos_x=[]
var pos_y= []
var sizes=[]
var colors=[]
var v_y=[] //  移動速度x軸
var v_x=[] //移動速度y軸
var txts //宣告一個變數，txts變數存放著文字框內容



function setup() {
  createCanvas(windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)

  //文字框的設定
  inputElement = createInput("412730649吳羽婕") //產生一個文字方塊
  inputElement.position(30,10) //把文字方塊移到(30,10)
  inputElement.size(180,38) //文字框的寬與高

  inputElement.style ("font-size","16px") //文字框內的文字大小
  inputElement.style("color","#cea3a2")//文字框內的文字顏色
  inputElement.style("background","#a36457")//文字框的背景顏色
  // inputElement.style("border","none")//設定文字框沒有框線

  //"音樂"按鈕的設定
  btnMoveElement = createButton("音樂")//產生一個按鈕，按鈕上有"移動字""
  btnMoveElement.position(30,110) //按鈕的位置
  btnMoveElement.size(80,40)//按鈕的寬與高
  btnMoveElement.style("font-size","20px")//按鈕框內的文字大小
  btnMoveElement.style("color","#242424")//按鈕內的文字顏色
  btnMoveElement.style("background","#8c8c8c")//按鈕的背景顏色
  btnMoveElement.mousePressed (face_move) //按鈕被按下後會執行face_move函數

 //"暫停"按鈕的設定
  btnStopElement = createButton("暫停")//產生一個按鈕，按鈕上有"暫停"字
  btnStopElement.position(130,110) //按鈕的位置
  btnStopElement.size(80,40)//按鈕的寬與高
  btnStopElement.style("font-size","18px")//按鈕框內的文字大小
  btnStopElement.style("color","#242424")//按鈕內的文字顏色
  btnStopElement.style("background","#8c8c8c")//按鈕的背景顏色
  btnStopElement.mousePressed (face_stop) //按鈕被按下後會執行face_stop函數

 //radio的設定，多個選項，只能選一個(單選題)
 radioElement=createRadio()
 radioElement.option("暫停")
 radioElement.option("旋轉")
 radioElement.option("移動")
 radioElement.position(30,65) //選鈕的位置
 radioElement.size(180,30)//選紐的寬與高
 radioElement.style("font-size","18px") //選紐內的文字大小
 radioElement.style("color","#e07a5f")//選紐內的文字顏色
 radioElement.style("background","#f9dcc4")

}


 function draw (){
  background("#d6d2d2") //背景顏色
  for(var i=0;i<pos_x.length;i=i+1) //依照pos_x內有幾筆資料，就會產生幾個物件
  {
    push()
     //txts = imputElement.value();//把文字框的文字內容，放入到txts變數內
     translate(pos_x[i],pos_y[i])
     drawface(colors[i],0,sizes[i])
    pop()
    pos_y[i]=pos_y[i] +v_y[i]
    //?????????????????????????????
    if(pos_y[i]>height ||pos_y[i]<0) //判斷有沒有碰到上下邊，碰到上下邊時，就要刪除所有陣列的該筆資料
    {
      pos_x.splice(i,1) //把碰到邊的陣列元刪除，把第i筆資料刪除1筆資料
      pos_y.splice(i,1)
      sizes.splice(i,1)
      colors.splice(i,1)
      v_y.splice(i,1)
    }
  }
}

function drawface(face_clr=255,eye_clr=0,size=1){ //255與0為預設的值
   push() //自行設定格式
   
   //translate(random(width),random(height)) //原點(0,0)移動到(200,200)
   scale(size)// 先宣告放大縮小的比例尺

   //文字框的顯示格式
    fill("#cea3a2") //文字的顏色
    textSize(50)//文字大小
    text(txts,-100,250) //顯示文字，文字內容為txts，放在位置座標為(50,200)
    }

 function draw (){
  background("#d6d2d2")
  for(var i=0;i<pos_x.length;i=i+1)
  {
    push()
     translate(pos_x[i],pos_y[i])
     drawface(colors[i],0,sizes[i])
    pop()
    pos_y[i]=pos_y[i] +v_y[i]
    //?????????????????????????????
    if(pos_y[i]>height ||pos_y[i]<0) //判斷有沒有碰到上下邊
    {
      pos_x.splice(i,1) //把碰到邊的陣列元刪除
      pos_y.splice(i,1)
      sizes.splice(i,1)
      colors.splice(i,1)
      v_y.splice(i,1)
    }
  }
}


function drawface(face_clr=255,eye_clr=0,size=1){ //255與0為預設的值

  push() //自行設定格式


   //translate(random(width),random(height)) //原點(0,0)移動到(200,200)
   scale(size)//
   fill(face_clr)

   //耳朵
  fill("#bc4749")
  ellipse(570,200,110)
  ellipse(730,200,110)
  fill("#e9c46a")
  ellipse(570,200,70)
  ellipse(730,200,70)
  //臉蛋
  fill("#ef476f")
  ellipse(650,300,250)
  //小臉
  fill("#e9c46a")
  ellipse(650,345,160)
  // 眼睛
  fill("#f8f9fa")
  ellipse(620,250,40)
  ellipse(680,250,40)
  // 眼珠
  fill("#000000")
  ellipse(620,255,20)
  ellipse(680,255,20)
  // 鼻子
  fill("#7f5539")
  ellipse(650,290,50)
  // line(-50,0,-25,-50)  //左邊線條
  // line(50,0,25,-50)  //右邊線條
  // 嘴巴
  fill("#800f2f")
  arc(650,350,100,80,0,PI)  //上嘴唇
  fill("#780000")
  arc(650,350,100,50,0,PI)  //下嘴唇

pop() //原本設定的格式全部取消

}


function mousePressed(){
  pos_x.push(mouseX)
  pos_y.push(mouseY)

  sizes.push(random(0.3,1))
  colors.push(face_colors[int(random(face_colors.length))])
  v_y.push(random(-1,1))
  
}
function face_move(){
sound1.play();

}
function face_stop(){
  sound1.stop();
}
