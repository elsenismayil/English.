
const a =[]
const b =[]
const result =[]



function randomIntFromInterval() { // min and max included 
    let word =[
        'surround',
        'consider',
        'discord',
        'significant',
        'enjoyable',
        'attractive',
        'amount',
        'torture',
        'deliver',
        'illegible',
        ' maid',
        ' representative',
        'achievement',
        ' reliable',
        ' rely on',
        ' promise',
        'temper',
        'inhospitable',
        ' hospitable',
        ' initial',
        ' amusing',
        'suffer from',
        'otherwise',
        'break off',
        'assist',
        ' trouble',
        'greet',
        `smart`,
        `tiresome`,
        `charming`,
        `graceful`,
        `rare`,
        `rarely`,
        `fortune`,
        ` fate-tale`,
        `affect`,
        `influence`,
        ` fair`,
        ` reasonable`,
        `therefore`,
        ` defendant`,
        ` guilty`,
        `fraud`,
        `unconscious`,
        `ashamed`,
        `innocent`,
        `shy`,
        `embarrassed`,
        `regret`,
        `regretful`,
        `easy- going`,
        `generation`,
        ` resource`,
        `close`,
        `in order`,
        `abundance`,
        `astonish`,
        ` concern`,
        ` descendant`,
        `wonder`,
        `boundary`,
        `concerned`,
        `remarkable`,
        `plain`,
        `dense`,
        ` thick`,
        ` ambition`,
        ` garbage`,
        `property`,
        ` consciousness`,
        `enlightenment`,
        ` own`,
        ` to be aware of`,
        ` statement`,
        ` description`,
        ` capable`,
        ` steal`,
        `decide`,
        ` decision`,
        ` situation`,
        `greedy`,
        `bound`,
        `distinguish`,
        ` predictability `,
        `be engaged in`,
        `infancy`,
        `infant`,
        ` entire`,
        `pattern`,
        `vary`,
        `
        d??yi??m??k, f??rql??ndirm??k `,
        ` assigned`,
        ` create`,
        `significance`,
        ` to be banned`,
        `fortunately `,
        ` luckily /happily `,
        `unfortunately `,
        ` unluckily/unhappily`,
        `immense`,



    ]




    let aze =[ `??hat?? etm??k`, 
    `d??????nm??k, hesab etm??k`,
    `nifaq,ixtilaf`,
    `m??h??m, ??h??miyy??tli, ??n??mli`,
    `xo??,g??z??l`,
    `c??lbedici`,
    `miqdar`,
    `i??g??nc??, ??zab`,
    `??atdirmaq `,
    `qeyri-qanuni;oxunmaz`,
    `qulluq??u,xadim??`,
    `n??may??nd??`,
    `nailiyy??t,u??ur`,
    `etibarl??,inaml??`,
    `-etibar etm??k,bel ba??lamaq`,
    `s??z verm??k`,
    `xasiyy??t;y??ng??ll????dirm??k`,
    `qonaqsevm??z`,
    `qonaqp??rv??r`,
    `ilkin`,
    `??yl??nc??li`,
    `??ziyy??t ????km??k`,
    `ba??qa c??r,??ks t??qdird??, yoxsa`,
    `k??sm??k, dayand??rmaq`,
    ` yard??m,k??m??k etm??k`,
    `narahatl??q`,
    ` salamlamaq, qar????lamaq
    `,
    ` 
    zir??k,zehinli,yax???? g??r??n????l??
    `,
    ` yorucu,bezdirici `,
    `cazib??dar, c??zbedici`,
    `
    z??rif,n??fis`,
    `seyr??k`,
    ` nadir halda`,
    `
    b??xt,tale; var-d??vl??t`,
    ` b??xt`,
    `t??sir etm??k`,
    `t??sir etm??k`,
    `??dal??tli; sar??????n; yarmarka`,
    ` idrakl??,a??labatan; m??nasib`,
    `
    n??tic??d??; buna g??r??d??`,
    ` m??tt??him , t??qsirkar`,
    `g??nahkar`,
    ` f??r??ldaq????l??q; k ??l??kbaz; aldatmaq`,
    ` d??????nc??siz; bihu??;bix??b??r`,
    ` utancaq;x??cal??tli`,
    ` g??nahs??z , m??sum, pak`,
    ` utancaq`,
    ` ??a??q??n; x??cal??tli`,
    `pe??man olmaq;pe??manl??q`,
    `t????ss??fl?? `,
    ` yolaged??n`,
    `n??sil`,
    ` imkan;v??sait; bacar??q `,
    `yax??n ,baglamaq `,
    ` ??????n ,ondan ??tr??`,
    ` bolluq, b??r??k??t,coxluq`,
    ` heyr??tl??ndirm??k`,
    ` qay????; maraq, narahat olmaq`,
    `n??sil,k??k`,
    `t????cc??b etm??k;g??r??s??n; m??c??z??`,
    `s??rh??d; h??dud `,
    `narahat`,
    ` g??rk??mli;??lam??tdar `,
    ` d??z??nlik; a??kar; sad??; ??irkin `,
    ` s??x`,
    ` s??x; qal??n `,
    `  ????hr??tp??r??stlik; can atma,meyl`,
    ` tullant??, zibil`,
    ` mal, ??mlak `,
    `????ur`,
    ` maarifl??nm??, maarif??ilik`,
    `
    ????xsi, ??z; sahibl??nm??k`,
    ` ????urunda olmaq; agah olmaq `,
    `b??yanat; t??sdiq etm??`,
    ` t??svir`,
    ` qadir , bacar??ql??, qabiliyy??tli`,
    ` o??urlamaq`,
    `q??rara g??lm??k`,
    `q??rar`,
    `v??ziyy??t ; hal`,
    `tamahkar, acg??z`,
    `h??dd qoymaq; serhed; s????ramaq `,
    `
    f??rql??ndirm??k`,
    ` qabaqcadan;??n g??rm??
    `,
    `
    m ??????ul olmaq`,
    ` k??rp??lik`,
    ` k??rp??`,
    ` b??t??v; tam`,
    `model; nax????; n??mun??; ??ablon `,
    `
    d??yi??m??k, f??rql??ndirm??k `,
    `
    t??xmin??n `,
    `
    t??yin; t??yin etm??k`,
    ` yaratmaq
    `,
     `
     ??h??miyy??t; ??n??mlilik `,
     ` qada??an olunmu?? `,
     ` xo??b??xtlikd??n, yax???? ki`,
     ` xo??b??xtlikd??n; yax???? ki`,
     `
     b??db??xtlikd??n; t????ss??f ki`,
     `b??db??xtlikd??n;t????ss??f ki`,
     `m??ht??????m; h??dsiz`,










    ]
    let ozu = document.querySelector( ".ozu").value
    let second = document.querySelector(".second").value
    b[0]=second
    a[0]=ozu
    let randomu = Math.floor(Math.random()*((a[0]*1)-(b[0]*1))+(b[0])*1)
    document.querySelector(".English").innerHTML = word[randomu]
    document.querySelector(".Aze").innerHTML = aze[randomu]
    document.querySelector(".Aze").style.display = "none"
    console.log(aze.length,word.length)

  }


    function goster(){
        document.querySelector(".Aze").style.display = "flex"
    }
  randomIntFromInterval()








  


 