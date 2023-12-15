// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   gdlist:[{
        id:1,
        gdname:"old",
        gdcount:2,
        img:"/pages/images/old.jpg",
        song:[
          {name:"Deja Vu",
           n1:"Post Malone/Justin Bieber"},{name:"Unforgettable",n1:"French Montana/Swae Lee"
          },],


   },
   {
    id:2,
    gdname:"my",
    gdcount:4,
    img:"/pages/images/my.jpg",
    song:[
      {name:"Butterfly",
      n1:"MIYAVI"
    },
      {name:"RISE",
      n1:"The Glitch Mob/Mako/The Word Alive"
    },
      {name:"最果て",
      n1:"SennaRin"
    },
      {name:"Devil Trigger",
      n1:"Ali Edwards"
    },      
      ],

},{
  id:3,
  gdname:"muse",
  gdcount:5,
  img:"/pages/images/muse.jpg",
  song:[
    {name:"Thought Contagion",
    n1:"Muse"
  },
    {name:"Time Is Running Out",
    n1:"Muse"
  },
    {name:"Supremacy",
    n1:"Muse"
  },
    {name:"Supermassive Black Hole (Twilight Soundtrack Version)",
    n1:"Muse"
  }, 
    {name:"Unintended",
     n1:"Muse" 
  },

    ],
},{
  id:4,
  gdname:"ljz329",
  gdcount:14,
  img:"/pages/images/ljz329.jpg",
  song:[
    {name:"TALKING SHIT FREESTYLE",
    n1:"GKLG"
  },
    {name:"也许我明白少了你我不精彩",
    n1:"M1ngZ"
  },
    {name:"埃塞俄比亚摇摆客",
    n1:"SSr/ljz329"
  },
    {name:"Reverse",
    n1:"ljz329/YOUNG/谢帝"
  }, 
    {name:"就现在",
     n1:"ljz329/InnerSa/SSr" 
  }, 
  {name:"空壳",
  n1:"谢帝/ljz329/AR刘夫阳" 
},  
{name:"下雨东京",
n1:"youngki" 
},   
{name:"Rapping freestyle",
n1:"ICE杨长青/ljz329" 
}, 
{name:"Last Day",
n1:"ljz329/YuGo" 
}, 
{name:"超 Groovy (feat. ljz329)",
n1:"Melo/ljz329r" 
}, 
{name:"123 - (Doremi)",
n1:"SSr/ljz329" 
}, 
{name:"碎碎念",
n1:"那奇沃夫/ljz329" 
}, 
{name:"太平洋沙漠",
n1:"ljz329/饺子" 
}, 
{name:"桃花劫",
n1:"SSr/Dobi/饺子/ljz329" 
}, 

],
},{
  id:5,
  gdname:"inpower",
  gdcount:2,
  img:"/pages/images/inpower.jpg",
  song:[
  {name:"假面 (Ghost face)",
  n1:"法老"
},
  {name:"敬昨天，敬今天",
  n1:"李大奔BENZO"
},
  ],
},{
  id:6,
  gdname:"Rb",
  gdcount:8,
  img:"/pages/images/R and B.jpg",
  song:[
    {name:"Love To Lay",
    n1:"The Weeknd"
  },
    {name:"Break Up In a Small Town",
    n1:"Sam Hunt"
  },
    {name:"So Sick",
    n1:"Ne-Yo"
  },
    {name:"U Got It Bad",
    n1:"Usher"
  }, 
    {name:"Nothing On You",
     n1:"B.o.B/Bruno Mars" 
  }, 
  {name:"Because Of You",
  n1:"Ne-Yo" 
},  
{name:"We Belong Together",
n1:"Mariah Carey" 
},   
{name:"True Colors",
n1:"The Weeknd" 
}, 
  ],
},
   ]
    


  },
toGd(event){
  let gdlist = event.currentTarget.dataset.gdlist;
  wx.navigateTo({
    url: '/pages/songlist1/songlist1?gdlist=' + JSON.stringify(gdlist)
  })

},
toLove(){
  wx.navigateTo({
    url: '/pages/songlist1/songlist1'
  })

},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})