// ==========================================
// 國中語文常識（二）：四大句型 50 道題庫資料
// ==========================================
// 欄位說明：
// tokens: 語詞拆解方塊陣列
// targetComponents: 對應成分（主語、述語、賓語、繫詞、斷語、表語）
// sentenceType: 句型名稱（敘事句、有無句、判斷句、表態句）
// source: 出處標記
// formula: 通關後的結構解析公式
// difficulty: 'basic' (基礎) 或 'advanced' (進階)
// ==========================================

const QUESTION_BANK = [
  // ==========================================
  // 一、敘事句 (14 題)
  // ==========================================
  // 【基礎題】
  { tokens: ["牛", "吃", "草"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "語文常識二引導例句", formula: "主語（牛）＋ 述語（吃）＋ 賓語（草）", difficulty: "basic" },
  { tokens: ["小明", "遲到了"], targetComponents: ["主語", "述語"], sentenceType: "敘事句", source: "教學建議例句", formula: "主語（小明）＋ 述語（遲到了）［不及物動詞，無賓語］", difficulty: "basic" },
  { tokens: ["我", "愛", "鳥"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "梁實秋〈鳥〉", formula: "主語（我）＋ 述語（愛）＋ 賓語（鳥）", difficulty: "basic" },
  { tokens: ["我", "走了"], targetComponents: ["主語", "述語"], sentenceType: "敘事句", source: "朱自清〈背影〉", formula: "主語（我）＋ 述語（走了）［不及物動詞，無賓語］", difficulty: "basic" },
  { tokens: ["母親", "綻開", "笑靨"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "廖玉蕙〈示愛〉", formula: "主語（母親）＋ 述語（綻開）＋ 賓語（笑靨）", difficulty: "basic" },
  { tokens: ["朋友", "買了", "一件衣料"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "宋晶宜〈雅量〉", formula: "主語（朋友）＋ 述語（買了）＋ 賓語（一件衣料）", difficulty: "basic" },
  { tokens: ["我", "懷念", "你的香水味道"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "習作練習題", formula: "主語（我）＋ 述語（懷念）＋ 賓語（你的香水味道）", difficulty: "basic" },
  // 【進階題】
  { tokens: ["故人", "具", "雞黍"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "孟浩然〈過故人莊〉", formula: "主語（故人）＋ 述語（具）＋ 賓語（雞黍）", difficulty: "advanced" },
  { tokens: ["世人", "盛愛", "牡丹"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "周敦頤〈愛蓮說〉", formula: "主語（世人）＋ 述語（盛愛）＋ 賓語（牡丹）", difficulty: "advanced" },
  { tokens: ["山巒", "靜靜地睡了"], targetComponents: ["主語", "述語"], sentenceType: "敘事句", source: "楊喚〈夏夜〉", formula: "主語（山巒）＋ 述語（靜靜地睡了）［不及物動詞，無賓語］", difficulty: "advanced" },
  { tokens: ["一場大西北雨", "便這樣過去了"], targetComponents: ["主語", "述語"], sentenceType: "敘事句", source: "陳冠學〈田園之秋選〉", formula: "主語（一場大西北雨）＋ 述語（便這樣過去了）［無賓語］", difficulty: "advanced" },
  { tokens: ["故人", "西辭", "黃鶴樓"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "李白〈黃鶴樓送孟浩然之廣陵〉", formula: "主語（故人）＋ 述語（西辭）＋ 賓語（黃鶴樓）", difficulty: "advanced" },
  { tokens: ["慈烏", "失", "其母"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "白居易〈慈烏夜啼〉", formula: "主語（慈烏）＋ 述語（失）＋ 賓語（其母）", difficulty: "advanced" },
  { tokens: ["皇天", "不負", "苦心人"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "敘事句", source: "習作選擇題選項", formula: "主語（皇天）＋ 述語（不負）＋ 賓語（苦心人）", difficulty: "advanced" },

  // ==========================================
  // 二、有無句 (11 題)
  // ==========================================
  // 【基礎題】
  { tokens: ["我", "有", "一部新電腦"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "引導例句", formula: "主語（我）＋ 述語（有）＋ 賓語（一部新電腦）", difficulty: "basic" },
  { tokens: ["我們", "只有", "一個地球"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "教材例句", formula: "主語（我們）＋ 述語（只有）＋ 賓語（一個地球）", difficulty: "basic" },
  { tokens: ["裡邊", "沒", "人"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "朱自清〈背影〉", formula: "主語（裡邊）＋ 述語（沒）＋ 賓語（人）", difficulty: "basic" },
  { tokens: ["天下", "沒有", "白吃的午餐"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "費利曼名言", formula: "主語（天下）＋ 述語（沒有）＋ 賓語（白吃的午餐）", difficulty: "basic" },
  { tokens: ["人", "有", "悲歡離合"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "蘇軾〈水調歌頭〉", formula: "主語（人）＋ 述語（有）＋ 賓語（悲歡離合）", difficulty: "basic" },
  // 【進階題】
  { tokens: ["宅邊", "有", "五柳樹"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "陶淵明〈五柳先生傳〉", formula: "主語（宅邊）＋ 述語（有）＋ 賓語（五柳樹）", difficulty: "advanced" },
  { tokens: ["天下", "無", "不散的筵席"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "民間俗諺", formula: "主語（天下）＋ 述語（無）＋ 賓語（不散的筵席）", difficulty: "advanced" },
  { tokens: ["歌中", "沒有", "你的渴望"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "席慕蓉〈出塞曲〉", formula: "主語（歌中）＋ 述語（沒有）＋ 賓語（你的渴望）", difficulty: "advanced" },
  { tokens: ["湖裡", "有", "十來枝荷花"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "吳敬梓〈王冕的少年時代〉", formula: "主語（湖裡）＋ 述語（有）＋ 賓語（十來枝荷花）", difficulty: "advanced" },
  { tokens: ["強將手下", "無", "弱兵"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "俗諺", formula: "主語（強將手下）＋ 述語（無）＋ 賓語（弱兵）", difficulty: "advanced" },
  { tokens: ["白雲深處", "有", "人家"], targetComponents: ["主語", "述語", "賓語"], sentenceType: "有無句", source: "杜牧〈山行〉", formula: "主語（白雲深處）＋ 述語（有）＋ 賓語（人家）", difficulty: "advanced" },

  // ==========================================
  // 三、判斷句 (12 題)
  // ==========================================
  // 【基礎題】
  { tokens: ["她", "是", "慈母兼任嚴父"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "胡適〈母親的教誨〉", formula: "主語（她）＋ 繫詞（是）＋ 斷語（慈母兼任嚴父）", difficulty: "basic" },
  { tokens: ["交友", "是", "一件有益的事"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "胡適〈父親的信〉", formula: "主語（交友）＋ 繫詞（是）＋ 斷語（一件有益的事）", difficulty: "basic" },
  { tokens: ["知識", "就是", "力量"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "培根名言", formula: "主語（知識）＋ 繫詞（就是）＋ 斷語（力量）", difficulty: "basic" },
  { tokens: ["團結", "即", "力量"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "教材例句", formula: "主語（團結）＋ 繫詞（即）＋ 斷語（力量）", difficulty: "basic" },
  { tokens: ["助人", "為", "快樂之本"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "俗諺", formula: "主語（助人）＋ 繫詞（為）＋ 斷語（快樂之本）", difficulty: "basic" },
  // 【進階題】
  { tokens: ["懷疑與好奇", "為", "科學之母"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "劉真〈論讀書〉", formula: "主語（懷疑與好奇）＋ 繫詞（為）＋ 斷語（科學之母）", difficulty: "advanced" },
  { tokens: ["冰凍三尺", "非", "一日之寒"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "俗諺", formula: "主語（冰凍三尺）＋ 繫詞（非）＋ 斷語（一日之寒）", difficulty: "advanced" },
  { tokens: ["勝敗", "乃", "兵家常事"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "施耐庵《水滸傳》", formula: "主語（勝敗）＋ 繫詞（乃）＋ 斷語（兵家常事）", difficulty: "advanced" },
  { tokens: ["識時務者", "為", "俊傑"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "羅貫中《三國演義》", formula: "主語（識時務者）＋ 繫詞（為）＋ 斷語（俊傑）", difficulty: "advanced" },
  { tokens: ["學問", "為", "濟世之本"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "〈青年守則〉", formula: "主語（學問）＋ 繫詞（為）＋ 斷語（濟世之本）", difficulty: "advanced" },
  { tokens: ["人", "非", "聖賢"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "教材例句", formula: "主語（人）＋ 繫詞（非）＋ 斷語（聖賢）", difficulty: "advanced" },
  { tokens: ["良將", "乃", "國之棟梁"], targetComponents: ["主語", "繫詞", "斷語"], sentenceType: "判斷句", source: "習作選項", formula: "主語（良將）＋ 繫詞（乃）＋ 斷語（國之棟梁）", difficulty: "advanced" },

  // ==========================================
  // 四、表態句 (13 題)
  // ==========================================
  // 【基礎題】
  { tokens: ["工廠設備", "很陳舊"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "引導例句", formula: "主語（工廠設備）＋ 表語（很陳舊）［無動詞］", difficulty: "basic" },
  { tokens: ["認真的女人", "最美麗"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "廣告名句", formula: "主語（認真的女人）＋ 表語（最美麗）［無動詞］", difficulty: "basic" },
  { tokens: ["我身體", "平安"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "朱自清〈背影〉", formula: "主語（我身體）＋ 表語（平安）［無動詞］", difficulty: "basic" },
  { tokens: ["他的舉止", "恭敬自然"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "習作練習題", formula: "主語（他的舉止）＋ 表語（恭敬自然）［無動詞］", difficulty: "basic" },
  { tokens: ["這趟旅程", "十分艱辛"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "習作練習題", formula: "主語（這趟旅程）＋ 表語（十分艱辛）［無動詞］", difficulty: "basic" },
  { tokens: ["下午大雨", "滂沱"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "習作練習題", formula: "主語（下午大雨）＋ 表語（滂沱）［無動詞］", difficulty: "basic" },
  { tokens: ["第一次的感覺", "很奇妙"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "畢璞作品", formula: "主語（第一次的感覺）＋ 表語（很奇妙）［無動詞］", difficulty: "basic" },
  // 【進階題】
  { tokens: ["環堵", "蕭然"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "陶淵明〈五柳先生傳〉", formula: "主語（環堵）＋ 表語（蕭然）［無動詞］", difficulty: "advanced" },
  { tokens: ["河漢", "清且淺"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "佚名〈迢迢牽牛星〉", formula: "主語（河漢）＋ 表語（清且淺）［無動詞］", difficulty: "advanced" },
  { tokens: ["落英", "繽紛"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "陶淵明〈桃花源記〉", formula: "主語（落英）＋ 表語（繽紛）［無動詞］", difficulty: "advanced" },
  { tokens: ["麥可·喬丹球技", "精湛"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "王溢嘉作品", formula: "主語（麥可·喬丹球技）＋ 表語（精湛）［無動詞］", difficulty: "advanced" },
  { tokens: ["朱墨", "爛然"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "陸游〈越州堂日記〉", formula: "主語（朱墨）＋ 表語（爛然）［無動詞］", difficulty: "advanced" },
  { tokens: ["芳草", "鮮美"], targetComponents: ["主語", "表語"], sentenceType: "表態句", source: "陶淵明〈桃花源記〉", formula: "主語（芳草）＋ 表語（鮮美）［無動詞］", difficulty: "advanced" }
];