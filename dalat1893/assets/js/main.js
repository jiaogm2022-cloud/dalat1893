/* ===========================
   DALAT 1893 — Main JavaScript
   =========================== */

// ===== i18n TRANSLATIONS =====
const i18n = {
  zh: {
    'nav.story': '品牌故事',
    'nav.products': '礼品系列',
    'nav.craft': '工艺',
    'nav.contact': '联系我们',

    'hero.sub': '越南大叻 · 高原馈礼',
    'hero.desc': '自1893年，大叻以其云雾与芬芳闻名于世<br/>我们将这片高原的馈赠，以最美的形式呈现给您',
    'hero.cta1': '探索礼品系列',
    'hero.cta2': '了解品牌故事',
    'hero.scroll': '向下滚动',

    'story.label': '品牌故事',
    'story.title': '云雾之城的<br/>百年传承',
    'story.p1': '1893年，法国探险家亚历山大·耶尔森在越南中部高原发现了一片云雾缭绕的高地。这里海拔1500米，四季如春，被他命名为"大叻"——一座法式浪漫与东方风情交融的山城自此诞生。',
    'story.p2': '百年以来，大叻以其独特的气候孕育出越南最优质的咖啡、蜂蜜、腰果与朝鲜蓟。这里的出产，因高原冷凉的空气与充沛的雨露，拥有平原难以比拟的醇厚与芬芳。',
    'story.p3': 'DALAT 1893，以这座城市的诞生之年为名，将大叻最纯粹的物产，以精心设计的铁盒礼装呈现——不仅是一份伴手礼，更是一段关于云雾、咖啡香与高原晨光的记忆。',
    'story.stat1': '高原海拔',
    'story.stat2': '年城市历史',
    'story.stat3': '精选礼品系列',

    'products.label': '礼品系列',
    'products.title': '大叻精选 · 匠心礼装',
    'products.desc': '每一款礼品均选用大叻高原原产，以手工制作的复古铁盒精心包装，是馈赠亲友的最佳伴手礼。',

    'craft.label': '包装工艺',
    'craft.title': '铁盒礼装<br/>诉说故事',
    'craft.p1': '每一个DALAT 1893的铁盒，都是一件微型艺术品。我们以大叻的历史地图、法式建筑线条与越南传统纹样为灵感，手工压制出独一无二的浮雕图案。',
    'craft.p2': '铁盒可在礼品内容用尽后，作为储物盒、装饰摆件长期使用——承载的不仅是味道，更是一段旅途的记忆。',
    'craft.f1.title': '复古浮雕铁盒',
    'craft.f1.desc': '以大叻历史地图与法式建筑为图案',
    'craft.f2.title': '原产地溯源',
    'craft.f2.desc': '每盒附有产地证明与农家信息',
    'craft.f3.title': '个性化刻字',
    'craft.f3.desc': '可在铁盒底部定制专属文字',
    'craft.f4.title': '礼品包装服务',
    'craft.f4.desc': '提供精美礼袋与手写贺卡',
    'craft.box1': '大叻咖啡',
    'craft.box2': '高原蜂蜜',
    'craft.box3': '腰果礼盒',

    'sets.label': '礼品套装',
    'sets.title': '精选组合 · 一盒大叻',
    'set1.badge': '畅销',
    'set1.name': '云雾套装',
    'set1.desc': '咖啡 + 蜂蜜 + 香氛蜡烛',
    'set1.items': '3件礼品 · 精美铁盒',
    'set2.badge': '尊享',
    'set2.name': '高原尊享套装',
    'set2.desc': '全系列6款精选 · 礼盒装',
    'set2.items': '6件礼品 · 木质礼盒',
    'set3.name': '初遇大叻',
    'set3.desc': '腰果 + 柿饼 + 朝鲜蓟茶',
    'set3.items': '3件礼品 · 精美铁盒',

    'testimonials.label': '客户评价',
    'testimonials.title': '来自世界各地的心声',
    't1.text': '"第一次在大叻买到这款咖啡礼盒，铁盒的设计太美了，完全没舍得扔掉。咖啡的香气也非常独特，比市面上的越南咖啡更有层次感。"',
    't1.from': '来自新加坡',
    't2.text': '"作为回国礼物送给家人，大家都非常喜欢。包装精致大气，完全不像普通的旅游纪念品，更像是高档礼品店里才有的东西。"',
    't2.from': '来自香港',
    't3.text': '"The packaging is absolutely stunning. I bought the honey and cashew set as a wedding gift and everyone asked where I found such a beautiful present. Will definitely order again!"',
    't3.from': '来自澳大利亚',

    'contact.label': '联系我们',
    'contact.title': '定制专属<br/>礼品服务',
    'contact.desc': '无论是企业礼品定制、婚礼伴手礼还是批量采购，我们都能为您提供专属方案。',
    'contact.addr.title': '门店地址',
    'contact.shipping.title': '全球配送',
    'contact.shipping.desc': '支持国际快递至中国、新加坡、澳大利亚等地',
    'contact.wechat.title': '微信咨询',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.email.title': '邮件',
    'form.name.label': '您的姓名',
    'form.name.placeholder': '请输入姓名',
    'form.contact.label': '联系方式（邮箱或微信）',
    'form.contact.placeholder': '请输入联系方式',
    'form.message.label': '需求说明',
    'form.message.placeholder': '请告诉我们您的需求，例如：礼品数量、定制内容、配送地址等...',
    'form.submit': '发送询价',
    'form.sent': '发送成功！我们会尽快与您联系',

    'footer.tagline': '将大叻高原的馈赠，以最美的形式传递给世界每一个角落。',
    'footer.wechat': '微信',
    'footer.products': '产品系列',
    'footer.fp1': '大叻咖啡',
    'footer.fp2': '高原蜂蜜',
    'footer.fp3': '腰果礼盒',
    'footer.fp4': '朝鲜蓟茶',
    'footer.fp5': '柿饼礼盒',
    'footer.fp6': '香氛系列',
    'footer.fp7': '巧克力系列',
    'footer.fp8': '香料礼盒',
    'footer.fp9': '水果干系列',
    'footer.fp10': '糕点系列',
    'footer.services': '服务支持',
    'footer.fs1': '企业定制',
    'footer.fs2': '婚礼伴手礼',
    'footer.fs3': '国际配送说明',
    'footer.fs4': '退换货政策',
    'footer.fs5': '常见问题',
    'footer.about': '关于品牌',
    'footer.fa1': '品牌故事',
    'footer.fa2': '包装工艺',
    'footer.fa3': '联系我们',
    'footer.bottom': '大叻 · 越南 · 云雾高原',

    'cart.title': '购物车',
    'cart.empty': '购物车是空的',
    'cart.empty.sub': '探索我们的礼品系列',
    'cart.subtotal': '小计',
    'cart.note': '* 最终价格含国际运费，结算时确认',
    'cart.checkout': '立即结算',
    'cart.continue': '继续购物',
    'cart.add': '加入购物车',

    'modal.origin': '产地',
    'modal.weight': '净重',
    'modal.packaging': '包装',
    'modal.shelf': '保质期',
    'modal.add': '加入购物车',
    'modal.close': '关闭',
  },

  en: {
    'nav.story': 'Our Story',
    'nav.products': 'Collections',
    'nav.craft': 'The Craft',
    'nav.contact': 'Contact',

    'hero.sub': 'Da Lat, Vietnam · Highland Gifts',
    'hero.desc': 'Since 1893, Da Lat has been celebrated for its mist and mountain fragrance.<br/>We bring the finest gifts of this highland city to you.',
    'hero.cta1': 'Explore Collections',
    'hero.cta2': 'Our Story',
    'hero.scroll': 'Scroll Down',

    'story.label': 'Our Story',
    'story.title': 'A Century of<br/>Highland Heritage',
    'story.p1': 'In 1893, French explorer Alexandre Yersin discovered a misty highland plateau in central Vietnam. At 1,500 metres above sea level, with spring-like weather all year round, he named it "Da Lat" — a mountain city where French romance and Eastern charm entwine.',
    'story.p2': 'For over a century, Da Lat\'s singular climate has nurtured Vietnam\'s finest coffee, honey, cashews, and artichokes. The cool highland air and generous rainfall bestow a depth of flavour and fragrance that lowland farms simply cannot replicate.',
    'story.p3': 'DALAT 1893 takes its name from the year this city was born. We present the purest produce of Da Lat in beautifully crafted tin gift boxes — not merely a souvenir, but a memory of mist, coffee aroma, and highland mornings.',
    'story.stat1': 'Elevation',
    'story.stat2': 'Years of History',
    'story.stat3': 'Curated Collections',

    'products.label': 'Collections',
    'products.title': 'Da Lat Finest · Artisan Gift Tins',
    'products.desc': 'Every gift is sourced from the Da Lat highlands and presented in a hand-crafted vintage tin box — the perfect souvenir for friends and family around the world.',

    'craft.label': 'The Craft',
    'craft.title': 'Tin Boxes That<br/>Tell Stories',
    'craft.p1': 'Every DALAT 1893 tin is a miniature work of art. Inspired by historical maps of Da Lat, French colonial architecture, and Vietnamese traditional patterns, each box is hand-pressed with unique embossed designs.',
    'craft.p2': 'Once the contents are enjoyed, the tin lives on as a keepsake box or decorative object — carrying not just flavour, but the memory of a journey.',
    'craft.f1.title': 'Vintage Embossed Tins',
    'craft.f1.desc': 'Designs drawn from Da Lat historical maps and French architecture',
    'craft.f2.title': 'Origin Traceability',
    'craft.f2.desc': 'Each box includes a certificate of origin and farmer details',
    'craft.f3.title': 'Personalised Engraving',
    'craft.f3.desc': 'Custom text engraved on the base of the tin',
    'craft.f4.title': 'Gift Wrapping Service',
    'craft.f4.desc': 'Premium gift bag and handwritten card included',
    'craft.box1': 'Da Lat Coffee',
    'craft.box2': 'Highland Honey',
    'craft.box3': 'Cashew Collection',

    'sets.label': 'Gift Sets',
    'sets.title': 'Curated Sets · A Taste of Da Lat',
    'set1.badge': 'Best Seller',
    'set1.name': 'Mist & Highlands Set',
    'set1.desc': 'Coffee + Honey + Scented Candle',
    'set1.items': '3 gifts · Embossed tin box',
    'set2.badge': 'Premium',
    'set2.name': 'Highland Premium Set',
    'set2.desc': 'Full collection of 6 · Wooden gift box',
    'set2.items': '6 gifts · Wooden gift box',
    'set3.name': 'First Encounter',
    'set3.desc': 'Cashew + Persimmon + Artichoke Tea',
    'set3.items': '3 gifts · Embossed tin box',

    'testimonials.label': 'Reviews',
    'testimonials.title': 'Words from Around the World',
    't1.text': '"I picked up this coffee tin on my first visit to Da Lat — the design was so beautiful I couldn\'t bring myself to throw it away. The coffee itself is wonderfully complex, unlike any Vietnamese coffee I\'d tasted before."',
    't1.from': 'From Singapore',
    't2.text': '"I brought these back as gifts for family and everyone was delighted. The packaging is so elegant — nothing like a typical tourist souvenir. It looks like something from a luxury boutique."',
    't2.from': 'From Hong Kong',
    't3.text': '"The packaging is absolutely stunning. I bought the honey and cashew set as a wedding gift and everyone asked where I found such a beautiful present. Will definitely order again!"',
    't3.from': 'From Australia',

    'contact.label': 'Contact',
    'contact.title': 'Bespoke<br/>Gift Services',
    'contact.desc': 'Whether you need corporate gifts, wedding favours, or bulk orders — we offer tailored solutions for every occasion.',
    'contact.addr.title': 'Store Address',
    'contact.shipping.title': 'Worldwide Shipping',
    'contact.shipping.desc': 'We ship internationally to China, Singapore, Australia, and beyond',
    'contact.wechat.title': 'WeChat',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.email.title': 'Email',
    'form.name.label': 'Your Name',
    'form.name.placeholder': 'Enter your name',
    'form.contact.label': 'Contact (Email or WeChat)',
    'form.contact.placeholder': 'Enter your contact details',
    'form.message.label': 'Your Message',
    'form.message.placeholder': 'Tell us about your requirements — quantity, customisation, delivery address...',
    'form.submit': 'Send Enquiry',
    'form.sent': 'Sent! We\'ll be in touch shortly.',

    'footer.tagline': 'Bringing the finest gifts of the Da Lat highlands to every corner of the world.',
    'footer.wechat': 'WeChat',
    'footer.products': 'Collections',
    'footer.fp1': 'Da Lat Coffee',
    'footer.fp2': 'Highland Honey',
    'footer.fp3': 'Cashew Collection',
    'footer.fp4': 'Artichoke Tea',
    'footer.fp5': 'Dried Persimmon',
    'footer.fp6': 'Scents & Oils',
    'footer.fp7': 'Chocolate',
    'footer.fp8': 'Spice Sets',
    'footer.fp9': 'Dried Fruits',
    'footer.fp10': 'Pastries',
    'footer.services': 'Services',
    'footer.fs1': 'Corporate Gifts',
    'footer.fs2': 'Wedding Favours',
    'footer.fs3': 'Shipping Info',
    'footer.fs4': 'Returns Policy',
    'footer.fs5': 'FAQ',
    'footer.about': 'About',
    'footer.fa1': 'Our Story',
    'footer.fa2': 'Our Craft',
    'footer.fa3': 'Contact Us',
    'footer.bottom': 'Da Lat · Vietnam · The Highland City',

    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.empty.sub': 'Explore our gift collections',
    'cart.subtotal': 'Subtotal',
    'cart.note': '* Final price includes international shipping, confirmed at checkout',
    'cart.checkout': 'Checkout',
    'cart.continue': 'Continue Shopping',
    'cart.add': 'Add to Cart',

    'modal.origin': 'Origin',
    'modal.weight': 'Weight',
    'modal.packaging': 'Packaging',
    'modal.shelf': 'Shelf Life',
    'modal.add': 'Add to Cart',
    'modal.close': 'Close',
  }
};

// ===== LANGUAGE STATE =====
let currentLang = localStorage.getItem('dalat_lang') || 'zh';

function t(key) {
  return i18n[currentLang][key] || i18n['zh'][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('dalat_lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
  html.setAttribute('data-lang', lang);

  // Update button label: show the OTHER language
  document.getElementById('langBtn').textContent = lang === 'zh' ? 'EN' : '中文';

  // Update all [data-i18n] text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });

  // Update all [data-i18n-html] innerHTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });

  // Update all [data-i18n-placeholder] placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key] !== undefined) el.setAttribute('placeholder', i18n[lang][key]);
  });

  // Re-render dynamic content
  renderProducts();
  updateCartUI();
}

// ===== PRODUCT DATA =====
const products = [
  /* ── 已有产品 1-6 ── */
  {
    id: 1,
    name:   { zh: '大叻高原咖啡',     en: 'Da Lat Arabica Coffee' },
    nameEn: 'Arabica Coffee',
    category: { zh: '咖啡系列',  en: 'Coffee' },
    price: 168,
    badge: { zh: '畅销', en: 'Best Seller' },
    desc: {
      zh: '大叻海拔1500米高原精选阿拉比卡咖啡豆，经传统日晒处理，入口柔和带有花果香气，余韵悠长。复古铁盒包装，250g装。',
      en: 'Premium Arabica beans from 1,500m elevation, naturally sun-dried for 45 days. A soft, floral cup with lingering fruit notes. 250g in a vintage embossed tin.'
    },
    origin: { zh: '林同省大叻市 · 海拔1500m', en: 'Lam Dong Province, Da Lat · 1,500m elevation' },
    weight: '250g',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '12个月（开封后3个月内饮用）', en: '12 months (consume within 3 months of opening)' },
    color1: '#3d2410', color2: '#5c3820', lidColor: '#4d3018', icon: '☕',
    tags: { zh: ['有机', '手工采摘', '单一产地'], en: ['Organic', 'Hand-picked', 'Single Origin'] },
    details: {
      zh: '每一粒咖啡豆都由大叻当地农户手工采摘，经过严格的品质筛选后，使用传统日晒工艺处理45天。这种方法虽然耗时，但能最大程度保留咖啡豆天然的甜度与果香。建议使用手冲或法压壶冲泡，以80-85°C热水，充分体现其花果香与坚果余韵。',
      en: 'Every bean is hand-picked by local Da Lat farmers and sun-dried for 45 days using traditional methods. This slow process preserves the natural sweetness and fruit complexity. Best brewed as pour-over or French press at 80–85°C to fully express the floral and nutty finish.'
    },
  },
  {
    id: 2,
    name:   { zh: '高原野花蜂蜜',     en: 'Highland Wildflower Honey' },
    nameEn: 'Wildflower Honey',
    category: { zh: '蜂蜜系列', en: 'Honey' },
    price: 148,
    badge: null,
    desc: {
      zh: '采自大叻森林深处，蜜蜂以高原野花为食，蜜质浓稠，色泽金黄。未经任何加热处理，保留全部天然酶活性。250ml精装。',
      en: 'Harvested from deep highland forests where bees feed on Da Lat\'s diverse wildflowers. Raw and unheated to preserve all natural enzymes and antioxidants. 250ml in a glass-lined tin.'
    },
    origin: { zh: '林同省大叻市高原森林', en: 'Lam Dong Province, Da Lat highland forests' },
    weight: '250ml',
    packaging: { zh: '复古浮雕铁盒（内含玻璃瓶）', en: 'Vintage embossed tin (glass bottle inside)' },
    shelfLife: { zh: '24个月', en: '24 months' },
    color1: '#4a3a0e', color2: '#7a6020', lidColor: '#5a4810', icon: '🍯',
    tags: { zh: ['生蜜', '未加热', '天然无添加'], en: ['Raw Honey', 'Unheated', 'No Additives'] },
    details: {
      zh: '大叻高原拥有超过2000种野生植物，包括朝鲜蓟花、咖啡花、桉树花等。蜜蜂采集这些高原特有花蜜，酿成的蜂蜜具有独特的复合花香。我们的蜂蜜全程冷链运输，不经任何加热处理，以保留天然酶活性和营养成分。',
      en: 'The Da Lat highlands host over 2,000 wild plant species including artichoke blossom, coffee flower, and eucalyptus. Bees draw from this extraordinary diversity to produce a honey of remarkable complexity. Cold-chain transported and never heated — every enzyme and nutrient is intact.'
    },
  },
  {
    id: 3,
    name:   { zh: '腰果礼盒',     en: 'Premium Cashew Collection' },
    nameEn: 'Cashew Collection',
    category: { zh: '坚果系列', en: 'Nuts' },
    price: 128,
    badge: { zh: '新品', en: 'New' },
    desc: {
      zh: '越南优质腰果精选，提供原味、盐焗、蜂蜜奶油三种口味。粒粒饱满，香脆可口。铁盒内含独立小包，方便携带分享。',
      en: 'Vietnam\'s finest W180-grade cashews in three flavours: natural, sea-salted, and honey butter. Plump, crisp, and individually portioned inside the tin for easy sharing.'
    },
    origin: { zh: '越南宁顺省 · 精选W180级', en: 'Ninh Thuan Province, Vietnam · W180 grade' },
    weight: '200g (3 packs)',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '6个月', en: '6 months' },
    color1: '#1e3a1e', color2: '#2d5a2d', lidColor: '#254a25', icon: '🥜',
    tags: { zh: ['三种口味', '独立包装', '无防腐剂'], en: ['3 Flavours', 'Individually Packed', 'No Preservatives'] },
    details: {
      zh: '越南是全球最大的腰果出口国，我们严选W180级别（大颗粒）腰果，每粒重约3.5g。三种口味：原味保留腰果天然奶香；盐焗以喜马拉雅粉盐提味；蜂蜜奶油口味使用大叻本地蜂蜜涂层，烤制后香甜酥脆。',
      en: 'Vietnam is the world\'s largest cashew exporter, and we select only W180 grade — the largest, most prized size at ~3.5g per nut. Natural flavour showcases the inherent creaminess; sea-salted uses Himalayan pink salt for a clean, mineral finish; honey butter is glazed with Da Lat honey and roasted to golden perfection.'
    },
  },
  {
    id: 4,
    name:   { zh: '朝鲜蓟茶',     en: 'Artichoke Herbal Tea' },
    nameEn: 'Artichoke Tea',
    category: { zh: '茶饮系列', en: 'Herbal Tea' },
    price: 118,
    badge: null,
    desc: {
      zh: '大叻特产朝鲜蓟花茶，具有独特的草本清香，有助于消化与肝脏保健。每盒20包，铁盒精装，是送礼的健康佳选。',
      en: 'Da Lat\'s signature artichoke herbal tea, prized for its distinctive vegetal sweetness and digestive benefits. 20 tea bags in a heritage tin — a healthy and thoughtful gift.'
    },
    origin: { zh: '林同省大叻市朝鲜蓟农场', en: 'Da Lat artichoke farms, Lam Dong Province' },
    weight: '20 bags × 3g',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '18个月', en: '18 months' },
    color1: '#2d4a1e', color2: '#3d6a2e', lidColor: '#355a25', icon: '🌿',
    tags: { zh: ['草本', '无咖啡因', '健康饮品'], en: ['Herbal', 'Caffeine-free', 'Wellness'] },
    details: {
      zh: '朝鲜蓟是大叻最具代表性的特产之一，因大叻独特的高原气候而品质卓越。其花苞、叶片和茎部均可入茶，富含洋蓟素（Cynarin）与黄酮类化合物。冲泡时将茶包放入沸水中浸泡5-7分钟，可加入少量蜂蜜调味，茶色金黄，口感清爽微苦后回甘。',
      en: 'Artichoke is one of Da Lat\'s most emblematic crops, thriving in the cool highland climate. Buds, leaves, and stems are all used in the blend, delivering a golden brew rich in Cynarin and flavonoids. Steep for 5–7 minutes in boiling water; add a touch of honey for a clean, subtly sweet finish.'
    },
  },
  {
    id: 5,
    name:   { zh: '高原柿饼礼盒',     en: 'Dried Persimmon Gift Box' },
    nameEn: 'Dried Persimmon',
    category: { zh: '特产系列', en: 'Seasonal Specialty' },
    price: 138,
    badge: { zh: '季节限定', en: 'Seasonal' },
    desc: {
      zh: '大叻高原柿子自然晾晒，表面覆盖天然白霜，口感软糯香甜，甜而不腻。每年10-12月限量出产，铁盒礼装极为珍贵。',
      en: 'Sun-dried Da Lat persimmons dusted in natural white sugar frost. Soft, silky, and naturally sweet. Available only Oct–Dec each year — a truly limited highland treasure.'
    },
    origin: { zh: '林同省大叻市 · 自然晾晒', en: 'Da Lat, Lam Dong Province · natural sun-drying' },
    weight: '300g',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '3个月（冷藏6个月）', en: '3 months (6 months refrigerated)' },
    color1: '#5c2d10', color2: '#8a4520', lidColor: '#6a3515', icon: '🍂',
    tags: { zh: ['季节限定', '自然晾晒', '无添加'], en: ['Seasonal Limited', 'Sun-dried', 'No Additives'] },
    details: {
      zh: '大叻柿子得益于昼夜温差大的高原气候，甜度极高、皮薄肉厚。传统晾晒工艺需要45天以上，在特定温湿度条件下，柿子表面自然析出白色果霜（葡萄糖结晶），这是品质的标志。每年仅在柿子成熟季节（10月至12月）限量制作，错过需等明年。',
      en: 'Da Lat persimmons benefit from dramatic highland day-night temperature swings that concentrate natural sugars into an exceptionally thin-skinned, flesh-rich fruit. The 45-day drying process allows glucose crystals to bloom naturally on the surface — the white frost is the mark of quality. Produced in limited quantities from October to December only.'
    },
  },
  {
    id: 6,
    name:   { zh: '大叻香氛蜡烛',     en: 'Da Lat Scented Candles' },
    nameEn: 'Scented Candles',
    category: { zh: '香氛系列', en: 'Scents & Oils' },
    price: 158,
    badge: null,
    desc: {
      zh: '以大叻咖啡豆、森林松木、朝鲜蓟花为灵感调制，三款香型各具特色。纯天然大豆蜡，铁盒即蜡烛容器，燃尽后可二次使用。',
      en: 'Three signature scents inspired by Da Lat: Morning Coffee, Highland Forest, and Artichoke Garden. Pure soy wax in a reusable vintage tin — burns for approx. 45 hours.'
    },
    origin: { zh: '大叻本地调香工坊', en: 'Da Lat local fragrance atelier' },
    weight: '180g (~45hrs burn)',
    packaging: { zh: '复古浮雕铁盒（即蜡烛容器）', en: 'Vintage embossed tin (candle vessel)' },
    shelfLife: { zh: '2年（未开封）', en: '2 years (unopened)' },
    color1: '#1e2d3e', color2: '#2d4050', lidColor: '#253545', icon: '🕯️',
    tags: { zh: ['大豆蜡', '天然香料', '三款香型'], en: ['Soy Wax', 'Natural Fragrance', '3 Scents'] },
    details: {
      zh: '提供三款香型：「晨光咖啡」——以咖啡豆、香草和焦糖为基调，唤起大叻清晨的慵懒时光；「高原松林」——雪松、松木与薄荷，再现1500米云雾中的林间漫步；「朝鲜蓟花园」——清新草本与花卉，带来大叻农场的自然气息。铁盒即蜡烛容器，燃尽后清洗干净可作为储物盒使用。',
      en: 'Three scents: "Morning Coffee" — coffee bean, vanilla, and caramel; a lazy Da Lat dawn in a tin. "Highland Forest" — cedarwood, pine, and mint; the misty trail at 1,500m. "Artichoke Garden" — fresh herbs and wildflowers; the calm of a highland farm. When the candle burns down, clean the tin and reuse it as a keepsake box.'
    },
  },

  /* ── 新增产品 7-20 ── */
  {
    id: 7,
    name: { zh: '风味调味腰果', en: 'Flavoured Cashews' },
    nameEn: 'Flavoured Cashews',
    category: { zh: '坚果系列', en: 'Nuts' },
    price: 128,
    badge: null,
    desc: {
      zh: '甄选越南W180腰果，提供芥末、蜂蜜、冬阴功三种亚洲风味。味道层次丰富，每口都有惊喜。独立小包装，铁盒精装。',
      en: 'Premium W180 cashews in three bold Asian flavours: wasabi, honey glaze, and tom yum. Individually portioned, each pack is a flavour adventure. A crowd-pleasing gift for adventurous palates.',
    },
    origin: { zh: '越南宁顺省 · 精选W180级', en: 'Ninh Thuan Province, Vietnam · W180 grade' },
    weight: '210g (3 packs × 70g)',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '6个月', en: '6 months' },
    color1: '#1a3d35', color2: '#2d5e50', lidColor: '#225048', icon: '🌶️',
    tags: { zh: ['三种口味', '亚洲风味', '独立包装'], en: ['3 Flavours', 'Asian-inspired', 'Individually Packed'] },
    details: {
      zh: '芥末口味以日式芥末粉调制，辛辣刺激中带有回甘；蜂蜜口味使用大叻本地蜂蜜涂层低温慢烤，甜而不腻；冬阴功口味灵感来自泰越交融的东南亚饮食文化，香茅、柠檬叶与辣椒的复合香气令人欲罢不能。三款口味同盒，适合一家人或朋友聚会分享。',
      en: 'Wasabi: Japanese horseradish powder brings a sharp, satisfying heat with a sweet finish. Honey glaze: slow-roasted with Da Lat honey at low temperature for a caramelised crunch. Tom yum: lemongrass, kaffir lime, and chilli — the taste of Southeast Asia in every bite. Three packs, one tin — perfect for sharing.',
    },
  },
  {
    id: 8,
    name: { zh: '带壳夏威夷果礼盒', en: 'Macadamia Nuts in Shell' },
    nameEn: 'Macadamia Nuts',
    category: { zh: '坚果系列', en: 'Nuts' },
    price: 158,
    badge: null,
    desc: {
      zh: '越南高原出产的带壳夏威夷果，果仁饱满油润，奶香浓郁。带壳保鲜更持久，口感比去壳更为鲜活。附赠专用开壳器，铁盒礼装。',
      en: 'Highland-grown macadamia nuts presented whole in shell for maximum freshness. Rich, buttery, and extraordinarily creamy. Includes a dedicated cracker tool. A premium gift with an interactive experience.',
    },
    origin: { zh: '越南西原高原 · 大叻周边产区', en: 'Central Highlands, Vietnam · Da Lat region' },
    weight: '300g',
    packaging: { zh: '复古浮雕铁盒（含开壳器）', en: 'Vintage embossed tin (with nut cracker)' },
    shelfLife: { zh: '6个月', en: '6 months' },
    color1: '#4a3d2a', color2: '#6a5a40', lidColor: '#564833', icon: '🥥',
    tags: { zh: ['带壳保鲜', '附开壳器', '原味天然'], en: ['In-shell Fresh', 'Cracker Included', 'All-natural'] },
    details: {
      zh: '夏威夷果原产于澳大利亚，但越南西原高原因其温差大、土壤肥沃，已成为亚洲重要产区之一。带壳状态下，果仁与空气隔绝，保留最佳的油脂活性与奶香口感。建议收到后在常温阴凉处保存，开壳后尽快食用，以享受最鲜活的风味。铁盒内附专用开壳器，开壳过程本身也是一种有趣的礼品体验。',
      en: 'Although macadamia originates in Australia, Vietnam\'s Central Highlands — with its fertile soil and cool nights — has become a prized Asian growing region. Kept in shell, the nut retains its full oil vitality and buttery fragrance. Store in a cool, dry place and crack only when ready to eat. The included cracker turns the unboxing into a hands-on ritual — half the gift is the experience.',
    },
  },
  {
    id: 9,
    name: { zh: 'Marou单一产地手工巧克力', en: 'Marou Single-Origin Craft Chocolate' },
    nameEn: 'Marou Chocolate',
    category: { zh: '巧克力系列', en: 'Chocolate' },
    price: 198,
    badge: { zh: '精选', en: 'Artisan' },
    desc: {
      zh: 'Marou是越南最具国际声誉的精品巧克力品牌。使用单一产地越南可可豆，每一块巧克力都标注可可种植园坐标与可可含量。铁盒精装限定系列。',
      en: 'Marou is Vietnam\'s most celebrated craft chocolate brand, beloved worldwide. Made from single-origin Vietnamese cacao, each bar is labelled with the plantation coordinates and cacao percentage. Special tin-box collection.',
    },
    origin: { zh: '越南各省单一产地可可园', en: 'Single-origin cacao farms across Vietnam' },
    weight: '4 × 24g bars',
    packaging: { zh: '复古浮雕铁盒（内含4片精装）', en: 'Vintage embossed tin (4 individually wrapped bars)' },
    shelfLife: { zh: '12个月', en: '12 months' },
    color1: '#1e100a', color2: '#3a1e0f', lidColor: '#2a1510', icon: '🍫',
    tags: { zh: ['单一产地', '精品巧克力', '越南出品'], en: ['Single Origin', 'Craft Chocolate', 'Made in Vietnam'] },
    details: {
      zh: 'Marou由两位法国人2011年在越南创立，以越南本土可可为原料，在胡志明市手工制作，迅速获得国际糖果大奖的认可。此礼盒精选4款不同产地的黑巧克力：巴地头顿（72%）、同奈（74%）、林同（74%）与本边省（76%），每款风味各具一格——从果味明亮到泥土醇厚，带领您一次领略越南多样的可可风土。',
      en: 'Founded in 2011 by two Frenchmen, Marou is handcrafted in Ho Chi Minh City from Vietnamese-grown cacao and has won numerous international confectionery awards. This gift tin contains four single-origin dark chocolate bars: Ba Ria-Vung Tau (72%), Dong Nai (74%), Lam Dong (74%), and Ben Tre (76%). From bright fruit to deep earth, each bar tells the story of a different Vietnamese terroir.',
    },
  },
  {
    id: 10,
    name: { zh: '越南风味松露巧克力', en: 'Vietnamese Truffle Chocolates' },
    nameEn: 'Truffle Chocolates',
    category: { zh: '巧克力系列', en: 'Chocolate' },
    price: 168,
    badge: null,
    desc: {
      zh: '以越南本地食材为灵感调制的手工松露巧克力：咖啡、斑斓叶、椰奶、燕窝四款口味。外覆可可粉，内心柔滑如丝。铁盒16颗装。',
      en: 'Handcrafted truffle chocolates inspired by Vietnamese flavours: coffee, pandan leaf, coconut milk, and bird\'s nest. Dusted in cocoa powder, each one melts into something extraordinary. 16 truffles in a heritage tin.',
    },
    origin: { zh: '越南本地手工巧克力坊', en: 'Vietnamese artisan chocolate atelier' },
    weight: '16 truffles (~160g)',
    packaging: { zh: '复古浮雕铁盒（含分隔托盘）', en: 'Vintage embossed tin with divided tray' },
    shelfLife: { zh: '4周（冷藏8周）', en: '4 weeks (8 weeks refrigerated)' },
    color1: '#2a0f2a', color2: '#4a1f3a', lidColor: '#351530', icon: '✨',
    tags: { zh: ['越南风味', '手工制作', '四款口味'], en: ['Vietnamese Flavours', 'Handmade', '4 Flavours'] },
    details: {
      zh: '四款风味各有故事：「大叻咖啡松露」以阿拉比卡咖啡浓缩液融入甘纳许，余韵悠长；「斑斓叶松露」以东南亚特有香草调制，绿意清新；「椰奶松露」以富国岛椰奶提炼，入口即化，椰香浓郁；「燕窝松露」以传统珍贵食材融入现代巧克力工艺，高端而独特。每颗手工滚圆，外覆优质可可粉。',
      en: 'Four flavours, four stories: "Da Lat Coffee" — Arabica espresso in the ganache, bold and lingering. "Pandan Leaf" — Southeast Asia\'s most beloved herb, floral and verdant. "Coconut Milk" — Phu Quoc coconut cream, instantly melting and richly fragrant. "Bird\'s Nest" — a prized Vietnamese delicacy meets artisan chocolate. Each truffle is hand-rolled and dusted in premium Valrhona cocoa powder.',
    },
  },
  {
    id: 11,
    name: { zh: '朔庄榴莲饼', en: 'Soc Trang Durian Cake' },
    nameEn: 'Durian Cake',
    category: { zh: '糕点系列', en: 'Pastries' },
    price: 148,
    badge: null,
    desc: {
      zh: '来自越南榴莲之乡朔庄省的传统榴莲饼，以真实榴莲果肉制作内馅，皮薄馅厚，香气浓郁。铁盒礼装，是榴莲爱好者的终极馈赠。',
      en: 'Traditional durian cakes from Soc Trang — Vietnam\'s durian heartland. Filled generously with real durian flesh, thin-skinned and intensely fragrant. The ultimate gift for durian devotees.',
    },
    origin: { zh: '越南朔庄省 · 传统工艺', en: 'Soc Trang Province, Vietnam · traditional recipe' },
    weight: '200g (8 pieces)',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '3个月（冷藏5个月）', en: '3 months (5 months refrigerated)' },
    color1: '#4a3a0a', color2: '#7a6010', lidColor: '#5a4a0e', icon: '👑',
    tags: { zh: ['真实榴莲果肉', '朔庄特产', '传统配方'], en: ['Real Durian Flesh', 'Soc Trang Origin', 'Traditional Recipe'] },
    details: {
      zh: '朔庄省地处湄公河三角洲，气候湿热，土壤肥沃，出产越南品质最高的榴莲品种之一——月亮榴莲（Sầu riêng Ri6）。榴莲饼以新鲜榴莲果肉为馅，混合绿豆沙与椰奶调制，皮以低筋面粉酥制，表面印有传统花纹。每颗约25g，一口下去榴莲香气四溢，适合作为节日礼品或茶点伴侣。',
      en: 'Soc Trang Province, in the Mekong Delta, produces some of Vietnam\'s most prized durian varieties, including the celebrated Ri6. Each cake is filled with fresh durian flesh blended with mung bean paste and coconut cream, encased in a delicate pastry shell pressed with traditional motifs. ~25g per piece — one bite and the perfume of the Mekong fills the room.',
    },
  },
  {
    id: 12,
    name: { zh: '低温烘干水果干', en: 'Cold-air Dried Tropical Fruits' },
    nameEn: 'Dried Fruits',
    category: { zh: '水果干系列', en: 'Dried Fruits' },
    price: 118,
    badge: null,
    desc: {
      zh: '采用低温冷风干燥技术，最大程度保留水果的天然色泽、营养与风味。提供芒果、菠萝蜜两款，铁盒装，无防腐剂、无添加糖。',
      en: 'Cold-air dried at low temperature to preserve natural colour, nutrition, and full fruit flavour. Available in mango and jackfruit. No preservatives, no added sugar — just pure tropical fruit in a tin.',
    },
    origin: { zh: '越南宁顺省 · 低温冷风工艺', en: 'Ninh Thuan Province, Vietnam · cold-air process' },
    weight: '150g',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '8个月', en: '8 months' },
    color1: '#5a3010', color2: '#8a5020', lidColor: '#6a3e18', icon: '🥭',
    tags: { zh: ['低温工艺', '无添加糖', '两款可选'], en: ['Cold-air Dried', 'No Added Sugar', '2 Varieties'] },
    details: {
      zh: '传统热风烘干会破坏水果中的维生素C与天然色素，而低温冷风干燥技术在45°C以下缓慢去除水果中的水分，完整保留其营养成分与鲜艳色泽。芒果款选用越南盛产的金煌芒果（Cát Hòa Lộc），甜度极高、纤维细腻；菠萝蜜款选取金黄色肉厚果瓣，自然糖分充足，无需额外加糖即香甜诱人。',
      en: 'Conventional hot-air drying destroys Vitamin C and natural pigments. Our cold-air process operates below 45°C, slowly removing moisture while preserving full nutritional value and vivid colour. Mango: Cat Hoa Loc variety — Vietnam\'s sweetest and most sought-after mango, fine-fibred and intensely aromatic. Jackfruit: thick golden lobes, naturally high in sugar — not a grain of sweetener needed.',
    },
  },
  {
    id: 13,
    name: { zh: '冻干榴莲', en: 'Freeze-dried Durian' },
    nameEn: 'Freeze-dried Durian',
    category: { zh: '水果干系列', en: 'Dried Fruits' },
    price: 138,
    badge: { zh: '新品', en: 'New' },
    desc: {
      zh: '采用航天级冻干技术，将榴莲新鲜果肉在零下40°C急冻后升华脱水，锁住100%的香气与营养。一口即酥，入口即化，是最优雅的榴莲体验。',
      en: 'Aerospace-grade freeze-drying: fresh durian flesh is flash-frozen at -40°C and moisture is sublimated away. 100% aroma and nutrition locked in. Shatters like a wafer, dissolves on the tongue — the most refined durian experience possible.',
    },
    origin: { zh: '越南朔庄省Ri6榴莲 · 冻干工艺', en: 'Soc Trang Ri6 durian · freeze-dried' },
    weight: '60g',
    packaging: { zh: '复古浮雕铁盒（充氮保鲜）', en: 'Vintage embossed tin (nitrogen-flushed)' },
    shelfLife: { zh: '12个月', en: '12 months' },
    color1: '#3a5a0a', color2: '#5a8010', lidColor: '#486e0e', icon: '💛',
    tags: { zh: ['冻干技术', '无添加', '浓缩香气'], en: ['Freeze-dried', 'No Additives', 'Concentrated Aroma'] },
    details: {
      zh: '冻干技术最早应用于航天食品，能在不破坏细胞结构的前提下，去除食材中95%以上的水分。冻干后的榴莲保留了新鲜榴莲100%的挥发性香气成分，热量却大幅降低。铁盒内充氮封装，防止氧化。每片榴莲约3mm厚，轻咬即碎，在舌尖迅速溶化，释放出浓郁的奶油榴莲香气——即使是对榴莲气味敏感的人，也往往能接受这种更温和的形式。',
      en: 'Originally developed for space food, freeze-drying removes over 95% of moisture without damaging cellular structure — all volatile aroma compounds remain intact. Nitrogen-flushed in the tin to prevent oxidation. Each slice is ~3mm thick: bite and it shatters; on the tongue it dissolves, releasing a wave of creamy durian perfume. Even guests who hesitate around fresh durian often find this form approachable and addictive.',
    },
  },
  {
    id: 14,
    name: { zh: '富国岛原粒胡椒礼盒', en: 'Phu Quoc Whole Peppercorn Collection' },
    nameEn: 'Phu Quoc Pepper',
    category: { zh: '香料系列', en: 'Spices' },
    price: 128,
    badge: null,
    desc: {
      zh: '富国岛是越南最著名的胡椒产地，以其独特的火山土壤与海岛气候，出产世界顶级胡椒。此礼盒含黑胡椒、红胡椒、绿胡椒三款原粒，铁盒分格精装。',
      en: 'Phu Quoc island is Vietnam\'s most celebrated pepper origin, renowned for its volcanic soil and island microclimate. This gift set contains three whole-berry varieties: black, red, and green — each with a distinct character, presented in a divided vintage tin.',
    },
    origin: { zh: '基安江省富国岛 · 火山土壤产区', en: 'Phu Quoc Island, Kien Giang Province · volcanic terroir' },
    weight: '3 × 30g (black, red, green)',
    packaging: { zh: '复古浮雕铁盒（三格分装）', en: 'Vintage embossed tin (3-compartment)' },
    shelfLife: { zh: '24个月（原粒保质最佳）', en: '24 months (best whole, grind fresh)' },
    color1: '#3a0f0f', color2: '#5a1f1f', lidColor: '#461515', icon: '🌶',
    tags: { zh: ['三色胡椒', '富国原产', '原粒保鲜'], en: ['3 Pepper Varieties', 'Phu Quoc Origin', 'Whole Berry'] },
    details: {
      zh: '富国岛胡椒素有"胡椒之王"的美誉，其香气比普通胡椒浓郁3倍以上，并带有独特的花香与果香底调。黑胡椒：完全成熟后采摘日晒，风味最为浓烈辛辣；红胡椒：完全成熟的红色果实，辣度较低但甜香突出，常用于法式料理；绿胡椒：未成熟时采摘，清新草本香气，适合与海鲜搭配。建议使用前即磨，以保留最佳香气。',
      en: 'Phu Quoc pepper is regarded as among the world\'s finest — its aroma is reportedly three times more intense than ordinary pepper, with floral and fruity undertones unique to the island\'s volcanic soil. Black: fully ripened and sun-dried, the most pungent and spicy. Red: ripe berries with reduced heat and a sweet, complex fragrance prized in French cuisine. Green: harvested unripe, fresh and herbaceous — a natural partner for seafood. Grind just before use for peak aroma.',
    },
  },
  {
    id: 15,
    name: { zh: '西宁虾盐礼盒', en: 'Tay Ninh Shrimp Salt' },
    nameEn: 'Shrimp Salt',
    category: { zh: '调味系列', en: 'Condiments' },
    price: 88,
    badge: null,
    desc: {
      zh: '越南西宁省传统特产，以新鲜河虾与天然海盐研磨配制，鲜咸浓郁，是越南人蘸水果、烤肉的灵魂调味料。铁盒小礼装，独特又实用。',
      en: 'A beloved Vietnamese condiment from Tay Ninh Province, made from freshwater shrimp and natural sea salt. Intensely savoury and aromatic — the essential dipping salt for tropical fruits, grilled meats, and street snacks. A compact, unique, and highly practical gift.',
    },
    origin: { zh: '越南西宁省 · 传统配方', en: 'Tay Ninh Province, Vietnam · traditional recipe' },
    weight: '80g',
    packaging: { zh: '复古浮雕小铁盒', en: 'Small vintage embossed tin' },
    shelfLife: { zh: '12个月', en: '12 months' },
    color1: '#5a1a2a', color2: '#7a2a3a', lidColor: '#6a2030', icon: '🦐',
    tags: { zh: ['越南特产', '天然无添加', '万能调味'], en: ['Vietnamese Specialty', 'All-natural', 'Versatile Condiment'] },
    details: {
      zh: '西宁虾盐（Muối tôm Tây Ninh）是越南最具地方特色的调味料之一，受越南国家地理标志保护。制作工序包括：精选新鲜河虾，与天然海盐按比例混合后，在阳光下发酵晒制数日，再经研磨过筛而成。成品呈玫瑰粉色，带有天然的虾鲜香与微微的海盐咸鲜。越南人通常用来蘸青芒果、杨桃、菠萝，或作为烤肉、炸物的蘸料，是餐桌上不可缺少的调味伴侣。',
      en: 'Muối tôm Tây Ninh holds a Vietnamese geographical indication — only salt made in Tay Ninh with this traditional method bears the name. Fresh river shrimp are combined with natural sea salt, fermented under the sun for several days, then ground to a fine powder. The result is a rose-pink condiment with an intensely savoury, shrimp-forward aroma and a clean salt finish. In Vietnam, it is used to dip green mango, starfruit, and pineapple, or served alongside grilled meats and fried snacks. Addictive, unique, and unexpectedly versatile.',
    },
  },
  {
    id: 16,
    name: { zh: '越南肉桂八角礼盒', en: 'Vietnamese Cinnamon & Star Anise Set' },
    nameEn: 'Cinnamon & Star Anise',
    category: { zh: '香料系列', en: 'Spices' },
    price: 138,
    badge: null,
    desc: {
      zh: '越南清化省出产的顶级肉桂，配以云南型八角，精装于铁盒中。越南肉桂含油量高，香气是普通肉桂的3-4倍，是煮越南河粉、烘焙与调酒的顶级食材。',
      en: 'Premium Vietnamese cinnamon from Thanh Hoa Province paired with whole star anise. Vietnamese cinnamon has 3–4× the essential oil content of common cassia — the secret behind an authentic Pho. An exceptional gift for any serious home cook or mixologist.',
    },
    origin: { zh: '越南清化省肉桂 · 越南八角', en: 'Thanh Hoa Province cinnamon · Vietnamese star anise' },
    weight: '50g cinnamon + 30g star anise',
    packaging: { zh: '复古浮雕铁盒（双格分装）', en: 'Vintage embossed tin (2-compartment)' },
    shelfLife: { zh: '24个月', en: '24 months' },
    color1: '#4a2010', color2: '#6a3018', lidColor: '#5a2a14', icon: '🌿',
    tags: { zh: ['越南特产', '高含油量', '厨师首选'], en: ['Vietnamese Origin', 'High Oil Content', 'Chef\'s Choice'] },
    details: {
      zh: '越南肉桂（Cinnamomum loureiroi）原产于越南北部的清化、谅山等省，其肉桂醛含量高达4%以上，远超普通锡兰肉桂（约1%）或中国肉桂（约2%），香气浓烈而温暖。搭配的八角来自越南北部山区，粒大饱满，茴香脑含量高，是熬制越南河粉汤底（Pho）不可缺少的香料。这两款香料组合，是送给热爱烹饪的朋友最实用也最具越南文化特色的礼物。',
      en: 'Vietnamese cinnamon (Cinnamomum loureiroi) from the northern provinces contains over 4% cinnamaldehyde — nearly four times that of Ceylon cinnamon — delivering an intense, warm, and slightly sweet spice that transforms any recipe. The star anise comes from Vietnam\'s northern highlands: large, full-petalled, and high in anethole. Together they form the aromatic backbone of authentic Pho broth. For the home cook or cocktail enthusiast who takes flavour seriously, this is an exceptional and deeply Vietnamese gift.',
    },
  },
  {
    id: 17,
    name: { zh: '咖啡花蜜', en: 'Coffee Blossom Honey' },
    nameEn: 'Coffee Blossom Honey',
    category: { zh: '蜂蜜系列', en: 'Honey' },
    price: 168,
    badge: { zh: '稀有', en: 'Rare' },
    desc: {
      zh: '咖啡树每年只在收获季前短暂开花数天，蜜蜂在此期间采集咖啡花蜜酿制而成。全球产量极为稀少，风味清雅，带有轻微的茉莉花香与淡淡咖啡余韵。',
      en: 'Coffee trees bloom for only a few days each year before harvest. Bees collect this fleeting blossom nectar to produce one of the world\'s rarest honeys — light, jasmine-scented, with a subtle coffee finish. A genuinely scarce and exquisite gift.',
    },
    origin: { zh: '林同省大叻咖啡园 · 季节限量', en: 'Da Lat coffee plantations, Lam Dong · seasonal limited' },
    weight: '200ml',
    packaging: { zh: '复古浮雕铁盒（内含玻璃瓶）', en: 'Vintage embossed tin (glass bottle inside)' },
    shelfLife: { zh: '24个月', en: '24 months' },
    color1: '#5a4a1e', color2: '#7a6a3a', lidColor: '#685828', icon: '🌸',
    tags: { zh: ['全球稀有', '咖啡花期限产', '未加热生蜜'], en: ['Globally Rare', 'Bloom-season Limited', 'Raw Unheated'] },
    details: {
      zh: '咖啡花蜜之所以稀有，在于咖啡树的花期极短——通常只有3至5天，且往往在清晨短暂绽放后迅速凋落。蜜蜂必须在极短时间内大量采集，而每株咖啡树的产蜜量也远少于其他蜜源植物，使得咖啡花蜜的年产量极为有限。大叻咖啡园在咖啡花盛开期间，将专门蜂箱放置于园中，蜜蜂全程仅采咖啡花，保证花蜜的纯粹性。成品蜜色泽淡金，流动性强，带有细腻的茉莉花香与轻微的草本余韵，与普通咖啡毫无苦涩，反而清雅甜润。',
      en: 'Coffee blossom honey is rare because the coffee tree blooms for only 3–5 days, with flowers opening briefly at dawn before dropping. Bees must collect intensively in an extremely narrow window, and each tree yields far less nectar than other honey plants. In Da Lat, dedicated hives are placed within the plantation during peak bloom to ensure single-source purity. The resulting honey is pale gold and free-flowing, delicately jasmine-scented with a faint herbal finish — nothing like the coffee itself, but unmistakably born from the same tree.',
    },
  },
  {
    id: 18,
    name: { zh: '植物提取精油', en: 'Vietnamese Botanical Essential Oils' },
    nameEn: 'Essential Oils',
    category: { zh: '香氛系列', en: 'Scents & Oils' },
    price: 148,
    badge: null,
    desc: {
      zh: '以越南本地柠檬草、柚子皮为原料，经冷压蒸馏提取的纯植物精油。天然无添加，适用于香薰机、沐浴、按摩。铁盒内含两款各10ml。',
      en: 'Pure botanical essential oils cold-pressed and steam-distilled from Vietnamese lemongrass and pomelo peel. Entirely natural, suitable for diffusers, baths, and massage. Two 10ml bottles presented in a vintage tin.',
    },
    origin: { zh: '越南中部 · 冷压蒸馏提取', en: 'Central Vietnam · cold-press & steam distillation' },
    weight: '2 × 10ml bottles',
    packaging: { zh: '复古浮雕铁盒（含2支棕色玻璃瓶）', en: 'Vintage embossed tin (2 amber glass bottles)' },
    shelfLife: { zh: '2年（避光保存）', en: '2 years (store away from light)' },
    color1: '#1a3a2a', color2: '#2a5040', lidColor: '#224838', icon: '🌿',
    tags: { zh: ['100%天然', '冷压蒸馏', '两款香型'], en: ['100% Natural', 'Cold-pressed', '2 Scents'] },
    details: {
      zh: '柠檬草（Sả）精油：越南中部产的柠檬草油分子细小、渗透性强，香气清新中带有温暖的柑橘底调，是东南亚最具代表性的植物香气之一。常用于香薰机（5-8滴/次）驱蚊提神，或加入基础油按摩舒缓肌肉疲劳。柚子皮精油：以新鲜柚子外皮冷压提取，果香明亮、清爽宜人，带有天然的柑橘甜香，适合放松心情与净化空间。两款精油均经第三方实验室检测，100%纯天然，不含人工香精与稀释剂。',
      en: 'Lemongrass (Sả) oil: Vietnamese central-region lemongrass yields a small-molecule oil with exceptional skin penetration. Fresh and bright with a warm citrus base — one of Southeast Asia\'s most iconic botanical scents. Use in a diffuser (5–8 drops) to repel insects and sharpen focus, or dilute 2% in carrier oil for a muscle-soothing massage. Pomelo peel oil: cold-pressed from fresh pomelo rind — luminous, cheerful citrus sweetness for uplifting spaces and minds. Both oils are third-party lab tested: 100% pure, zero synthetic fragrance, zero diluent.',
    },
  },
  {
    id: 19,
    name: { zh: '彩色春卷皮礼盒', en: 'Coloured Rice Paper Collection' },
    nameEn: 'Rice Paper',
    category: { zh: '特色食材', en: 'Traditional Ingredients' },
    price: 98,
    badge: null,
    desc: {
      zh: '越南传统米纸，以天然蔬果汁着色，呈现玫瑰红、翠绿、姜黄、原色四款。适合制作彩色越南春卷，是外国游客最爱的互动礼品。',
      en: 'Traditional Vietnamese rice paper coloured with natural vegetable and fruit juices: rose, green, turmeric, and natural white. Perfect for making colourful fresh spring rolls — an interactive gift that brings the Da Lat kitchen to life anywhere in the world.',
    },
    origin: { zh: '越南南定省 · 传统手工米纸', en: 'Nam Dinh Province, Vietnam · handmade rice paper' },
    weight: '200g (mixed colours, ~60 sheets)',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '12个月', en: '12 months' },
    color1: '#4a0f0f', color2: '#6a1f1f', lidColor: '#581515', icon: '🌈',
    tags: { zh: ['天然色素', '四色混装', '互动食材礼'], en: ['Natural Dyes', '4 Colours', 'Interactive Food Gift'] },
    details: {
      zh: '越南春卷皮（Bánh tráng）以大米浆铺摊于竹席上蒸制而成，历史悠久。此彩色礼装系列使用全天然蔬果提取色素：玫瑰红来自火龙果汁，翠绿来自斑斓叶汁，姜黄来自姜黄粉，原色为经典大米本色。浸水后即可卷入新鲜蔬菜、虾仁和米粉，制作色彩缤纷的越南春卷。礼盒内含春卷皮使用说明卡片（中英双语），适合送给对越南料理感兴趣的外国朋友，是可以在家"动手体验越南"的互动食材礼品。',
      en: 'Vietnamese rice paper (Bánh tráng) is made by spreading rice batter on bamboo mats and steaming — a technique centuries old. This collection uses entirely natural plant dyes: dragon fruit juice for rose, pandan leaf extract for green, turmeric for gold, and natural rice for white. Soak briefly in water, then wrap fresh vegetables, herbs, shrimp, and noodles for spectacular multicoloured spring rolls. Includes a bilingual (Chinese/English) instruction card. An interactive, hands-on gift that brings the Vietnamese kitchen to any home around the world.',
    },
  },
  {
    id: 20,
    name: { zh: '海阳精装绿豆糕', en: 'Hai Duong Premium Mung Bean Cake' },
    nameEn: 'Mung Bean Cake',
    category: { zh: '糕点系列', en: 'Pastries' },
    price: 118,
    badge: null,
    desc: {
      zh: '海阳绿豆糕是越南国家地理标志保护产品，以去皮绿豆、猪油与糖精制而成，入口即化，甜而不腻。精装铁盒，是中秋及节庆佳礼首选。',
      en: 'Hai Duong mung bean cake holds a Vietnamese geographical indication. Made from husked mung beans, lard, and sugar — it melts on the tongue with a delicate sweetness. A premier festive gift, especially treasured during Mid-Autumn Festival and Tet.',
    },
    origin: { zh: '越南海阳省 · 国家地理标志产品', en: 'Hai Duong Province, Vietnam · GI-protected product' },
    weight: '250g (10 pieces)',
    packaging: { zh: '复古浮雕铁盒', en: 'Vintage embossed tin' },
    shelfLife: { zh: '3个月', en: '3 months' },
    color1: '#1a4a2a', color2: '#2a6a3a', lidColor: '#225830', icon: '🟢',
    tags: { zh: ['地理标志保护', '传统工艺', '节庆礼品'], en: ['GI Protected', 'Traditional Craft', 'Festive Gift'] },
    details: {
      zh: '海阳绿豆糕（Bánh đậu xanh Hải Dương）已有逾百年历史，自古即是越南宫廷进贡的贡品之一，现为越南国家地理标志保护产品，仅在海阳省按传统工艺制作方可冠名。制作工序：将去皮绿豆蒸熟研磨成泥，加入精炼猪油与精制白糖，以模具压制成型。成品质地细腻如粉，入口即化，甜度适中，绿豆清香明显。铁盒10颗装，每颗25g，个别包装。适合作为节日礼品、会议礼品及商务往来伴手礼。',
      en: 'Bánh đậu xanh Hải Dương has over a century of history and was once presented as tribute to the Vietnamese imperial court. Today it holds a national geographical indication: only cakes made in Hai Duong Province using the traditional method may carry the name. Husked mung beans are steamed, ground to a smooth paste, blended with refined lard and sugar, then pressed into individual moulds. The result is a powdery-soft confection that dissolves instantly on the tongue — subtly sweet, cleanly fragrant with mung bean. 10 × 25g individually wrapped pieces per tin. An ideal choice for festive gifting, corporate presentations, and diplomatic exchanges.',
    },
  },
];

// ===== GIFT SET NAMES =====
const setNames = {
  set1: { zh: '云雾套装',     en: 'Mist & Highlands Set' },
  set2: { zh: '高原尊享套装', en: 'Highland Premium Set' },
  set3: { zh: '初遇大叻',     en: 'First Encounter' },
};

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('dalat_cart') || '[]');

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const lang = currentLang;

  grid.innerHTML = products.map(p => {
    const badge = p.badge ? `<div class="product-badge">${p.badge[lang] || p.badge.zh}</div>` : '';
    const tags = (p.tags[lang] || p.tags.zh).map(tag =>
      `<span style="background:var(--cream);color:var(--forest);font-family:'Inter',sans-serif;font-size:0.65rem;letter-spacing:0.1em;padding:0.2rem 0.5rem;border:1px solid var(--border);margin-right:4px;">${tag}</span>`
    ).join('');

    return `
    <div class="product-card fade-in" onclick="openModal(${p.id})">
      ${badge}
      <div class="product-image">
        <div class="product-img-bg" style="background: linear-gradient(135deg, ${p.color1} 0%, ${p.color2} 100%);">
          <div class="product-tin">
            <div class="tin-lid" style="background: linear-gradient(135deg, ${p.lidColor} 0%, ${p.color2} 100%);"></div>
            <div class="tin-body" style="background: linear-gradient(135deg, ${p.color1} 0%, ${p.color2} 100%);">
              <div class="tin-shine"></div>
              <div class="tin-label">
                <span class="tin-name">${p.nameEn.split(' ')[0].toUpperCase()}</span>
                <span class="tin-sub">DALAT 1893</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category[lang]}</div>
        <h3 class="product-name">${p.name[lang]}</h3>
        <p class="product-desc">${p.desc[lang]}</p>
        <div class="product-footer">
          <div class="product-price">¥${p.price} <span>/ ${lang === 'zh' ? '盒' : 'box'}</span></div>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${p.id})">${t('cart.add')}</button>
        </div>
      </div>
    </div>
  `}).join('');

  observeFadeIn();
}

// ===== CART LOGIC =====
function addToCart(id, qty = 1) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, nameZh: product.name.zh, nameEn: product.name.en,
      price: product.price, qty,
      color1: product.color1, color2: product.color2, icon: product.icon });
  }

  saveCart();
  updateCartUI();
  openCart();
}

function addSetToCart(setKey, price) {
  const existing = cart.find(item => item.id === setKey);
  if (existing) {
    existing.qty += 1;
  } else {
    const names = setNames[setKey] || { zh: setKey, en: setKey };
    cart.push({ id: setKey, nameZh: names.zh, nameEn: names.en,
      price, qty: 1, color1: '#1e3a1e', color2: '#2d5a2d', icon: '🎁' });
  }
  saveCart();
  updateCartUI();
  openCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => String(i.id) === String(id));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => String(i.id) !== String(id));
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => String(i.id) !== String(id));
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('dalat_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const lang = currentLang;
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById('cartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <p>${t('cart.empty')}</p>
        <p class="cart-empty-sub">${t('cart.empty.sub')}</p>
      </div>`;
    footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(item => {
      const name = lang === 'zh' ? (item.nameZh || item.nameEn) : (item.nameEn || item.nameZh);
      return `
      <div class="cart-item">
        <div class="cart-item-img" style="background: linear-gradient(135deg, ${item.color1 || '#1e2d1e'} 0%, ${item.color2 || '#2d4a2d'} 100%);">
          <span style="font-size:1.5rem">${item.icon || '🎁'}</span>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${name}</div>
          <div class="cart-item-price">¥${item.price}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕</button>
      </div>`;
    }).join('');
    footerEl.style.display = 'block';
    totalEl.textContent = `¥${total}`;

    // Re-apply static cart text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
    });
  }
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== PRODUCT MODAL =====
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const lang = currentLang;

  const tags = (p.tags[lang] || p.tags.zh).map(tag =>
    `<span style="background:var(--cream);color:var(--forest);font-family:'Inter',sans-serif;font-size:0.65rem;letter-spacing:0.1em;padding:0.25rem 0.6rem;border:1px solid var(--border);">${tag}</span>`
  ).join('');

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-inner">
      <div class="modal-img" style="background: linear-gradient(135deg, ${p.color1} 0%, ${p.color2} 100%);">
        <div class="product-tin" style="transform: scale(1.6);">
          <div class="tin-lid" style="background: linear-gradient(135deg, ${p.lidColor} 0%, ${p.color2} 100%); width:130px; height:18px; border-radius:3px 3px 0 0; margin-bottom:2px; box-shadow:2px 2px 8px rgba(0,0,0,0.2);"></div>
          <div class="tin-body" style="background: linear-gradient(135deg, ${p.color1} 0%, ${p.color2} 100%); width:120px; height:130px; border-radius:4px 4px 8px 8px; display:flex; align-items:center; justify-content:center; box-shadow:4px 8px 20px rgba(0,0,0,0.3); position:relative; overflow:hidden;">
            <div class="tin-shine"></div>
            <div class="tin-label">
              <span style="display:block;font-family:'Playfair Display',serif;font-size:0.7rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.9);">${p.nameEn.split(' ').slice(0,2).join(' ').toUpperCase()}</span>
              <span style="display:block;font-family:'Inter',sans-serif;font-size:0.6rem;letter-spacing:0.15em;color:rgba(255,255,255,0.6);margin-top:4px;">DALAT 1893</span>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-info">
        <div class="modal-category">${p.category[lang]}</div>
        <h2 class="modal-name">${p.name[lang]}</h2>
        <p style="font-family:'Inter',sans-serif;font-size:0.8rem;color:var(--gold-dark);margin-bottom:0.8rem;letter-spacing:0.05em;">${p.nameEn}</p>
        <div class="modal-price">¥${p.price} <span style="font-size:0.8rem;color:var(--text-light);font-family:'Inter',sans-serif;font-weight:400;">/ ${lang === 'zh' ? '盒' : 'box'}</span></div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1.2rem;">${tags}</div>
        <p class="modal-desc">${p.details[lang]}</p>
        <dl class="modal-details">
          <dt>${t('modal.origin')}</dt><dd>${p.origin[lang]}</dd>
          <dt>${t('modal.weight')}</dt><dd>${p.weight}</dd>
          <dt>${t('modal.packaging')}</dt><dd>${p.packaging[lang]}</dd>
          <dt>${t('modal.shelf')}</dt><dd>${p.shelfLife[lang]}</dd>
        </dl>
        <div class="modal-actions">
          <button class="btn-primary" onclick="addToCart(${p.id}); closeModal();" style="flex:1;">${t('modal.add')}</button>
          <button class="btn-ghost" onclick="closeModal();" style="background:var(--forest);color:var(--cream);border-color:var(--forest);">${t('modal.close')}</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('productModal').classList.add('active');
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== SCROLL ANIMATIONS =====
function observeFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = t('form.sent');
    btn.style.background = 'var(--gold-dark)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = t('form.submit');
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}

// ===== SECTION FADE INS =====
function initSectionAnimations() {
  document.querySelectorAll('.story-stats .stat, .craft-features li, .set-card, .testimonial-card, .contact-item').forEach(el => {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.fade-in').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 120);
        });
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.story, .products, .craft, .gift-sets, .testimonials, .contact')
    .forEach(s => observer.observe(s));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language (or default zh) without animation
  const savedLang = localStorage.getItem('dalat_lang') || 'zh';
  currentLang = savedLang;
  document.getElementById('langBtn').textContent = savedLang === 'zh' ? 'EN' : '中文';
  if (savedLang !== 'zh') setLang(savedLang);

  renderProducts();
  updateCartUI();
  initNavbar();
  initContactForm();
  initSectionAnimations();

  // Language toggle
  document.getElementById('langBtn').addEventListener('click', () => {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
  });

  // Cart toggle
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', closeModal);

  // Smooth scroll nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
