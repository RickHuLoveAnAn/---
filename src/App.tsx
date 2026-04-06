import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Search,
  MessageSquare,
  ChevronRight,
  User, 
  Bot,
  QrCode,
  ExternalLink,
  Store,
  Share2,
  Target,
  BarChart3,
  Home,
  Package,
  Briefcase,
  BookOpen,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'card' | 'image' | 'report' | 'microstore';
  cardData?: any;
  imageUrl?: string;
}

const FULL_REPORT_CONTENT = `
# 南京餐饮行业保险商机报告
#AI帮帮小微管家生成，请甄别后使用  
**适用场景**：南京餐饮连锁 · 商圈拓客 · 批量承保

---

## 一、行业概览
### 1）产业基础
南京餐饮市场规模约**1500亿元**，以淮扬菜为根基、小吃为特色、连锁化为趋势，正餐占比45%、快餐25%、休闲餐饮20%，整体稳健增长。食材供应链成熟，头部品牌全国化扩张明显，连锁化率高于全国平均水平，用工密集、场景多元，保险需求刚性强。

### 2）门店形态
- **商圈店**：新街口、河西、百家湖等商场店为主流，面积150–600㎡，连锁化、标准化程度最高；
- **景区/老字号店**：夫子庙、老门东集聚，文化属性强、合规性好、经营稳定；
- **社区店**：快餐、家常菜为主，小面积、高周转、用工波动大；
- **连锁标准店**：统一VI、统一用工、统一风控，最适合批量承保、统保分保。

### 3）扩张逻辑
本地品牌：单店盈利→多店直营→区域加盟→总部集采、集中投保；
全国品牌：以南京为华东总部/首店试点→向苏锡常、安徽、山东扩张；
扩张依托：商场入驻、物业合作、团餐渠道，风险可控、成本可控优先。

### 4）消费场景
商务宴请、家庭聚餐、文旅打卡、工作快餐、下午茶、夜宵、团餐配送、外摆经营，堂食+外卖+预制菜并行，中高端下沉做性价比，小店做复购，整体现金流与支付能力持续改善。

---

## 二、风险分析
### 1）行业风险因素
- 用工风险：后厨烫伤、切配伤、滑倒、上下班意外；
- 公众责任：顾客摔倒、烫伤、食物中毒、财物损失；
- 财产风险：火灾、燃气爆炸、设备损坏、装修损失；
- 运营风险：人员流动大、培训不足、投诉舆情。

### 2）南京地方特色风险因素
- 老门店：电路老化、消防不规范；
- 景区店：节假日客流暴增、拥挤踩踏风险；
- 团餐/中央厨房：集中配餐食品安全风险；
- 跨城连锁：门店分散、风控标准不统一。

### 3）近期风险事件
- 商圈餐饮后厨电器火灾；
- 火锅店顾客烫伤索赔；
- 连锁门店员工工伤高发；
- 节假日景区店食品安全投诉。

---

## 三、客户画像（4大赛道）
### 赛道1：老字号金陵菜 / 正餐体系
**业态特征**：百年老店、非遗、文化餐饮、中高端正餐；
**连锁逻辑**：直营为主、稳店不盲目扩张；
**风险特征**：老店消防、用工老员工多、品牌舆情敏感；
**代表品牌**：南京大牌档、马祥兴、绿柳居、古南都。

### 赛道2：跨城正餐连锁 / 大店模型
**业态特征**：大型正餐、宴请、家庭聚餐、500㎡+大店；
**连锁逻辑**：区域总部管控、多省拓店、统采统保；
**风险特征**：用工多、客流大、三者风险高、装修昂贵；
**代表品牌**：小菜园、小厨娘、大鸽饭、外婆家。

### 赛道3：团餐与食堂配供体系
**业态特征**：企业食堂、校园配餐、老年助餐、中央厨房；
**连锁逻辑**：规模化、标准化、集中风控；
**风险特征**：食品安全、集中用工、设备集中、履约责任；
**代表品牌**：苏食集团、机关后勤配餐、品牌团餐企业。

### 赛道4：商圈与文旅流量餐饮
**业态特征**：商场餐饮、网红店、快餐、小吃、景区店；
**连锁逻辑**：高周转、快复制、商场入驻优先；
**风险特征**：客流密集、三者风险高、设备密集；
**代表品牌**：赛百味、三出山、COMMUNE、CoCo都可。

---

## 四、典型企业分析（样例：南京大牌档）
### 1）客户基础信息
- 企业：南京大牌档（金陵菜老字号连锁）
- 规模：南京12家、全国超40家门店
- 员工：单店20–35人，年客流超千万

### 2）画像信息
- 赛道：老字号金陵菜正餐
- 风险：用工密集、公众责任高、消防合规要求高
- 需求：雇主险+公众险+财产险+全国统保

### 3）客户触达情况
- 触达渠道：南京餐饮商会、江苏省餐饮行业协会
- 决策链：总部行政总监/财务总监/风控负责人

### 4）切入口
- 总部统保+跨城统一方案
- 老字号风险减量服务（消防/风勘/培训）
- 快速理赔、专属服务群、台账管理

---

## 五、企业服务方案建议（以南京大牌档为例）
### 1）风险地图
- 雇主风险：★★★★★
- 公众责任：★★★★★
- 财产风险：★★★★
- 食品安全：★★★★
- 跨城管理：★★★★

### 2）三层保险服务
1）**基础保障层**
雇主责任险 + 公众责任险 + 财产险

2）**责任强化层**
食品饮料责任 + 营业中断险 + 电梯/消防附加险

3）**总部延伸层**
全国统保、分门店台账、批量批增、统一理赔

### 3）配套增值服务
- 门店分型风勘服务（消防/燃气/电路）
- 快赔服务（小额3天内赔付）
- 专属服务群（专人对接）
- 跨城台账与批量增人服务
- 安全培训、后厨消杀、设备预警

### 4）营销话术切入点
- “总部统保，全国门店一张单”
- “老字号专属风控+理赔提速”
- “商场餐饮高适配方案，核保更快”
- “团餐/连锁专属价，越多越划算”

---

## 六、成功案例
### 案例信息
- 机构：平安产险江苏分公司｜南京
- 客户类型：跨城连锁正餐+老字号餐饮
- 合作情况：总部统保，覆盖南京21家门店
- 保障内容：雇主+公众+财产+食品责任
- 增值服务：风勘、快赔、台账、培训
- 成果：年保费稳定、续保率100%、可复制全省

---

## 七、关键成功因素
1. 总分协同推进（总部谈成→全省落地）
2. 痛点切入（工伤、三者、食品安全）
3. 理赔承诺（小额快赔、专人服务）
4. 方案适配（三层结构：基础/强化/总部）
5. 增值服务协同（风勘、消杀、培训）
6. 规模兑现（连锁越多，价格越优）

---

## 八、可复制机构与可挖掘餐饮企业清单（按区域+商圈）
### 1. 玄武区｜新街口商圈（德基、金陵中环、中央商场）
可挖掘企业：南京大牌档、小厨娘、小菜园、赛百味、绿柳居

### 2. 秦淮区｜夫子庙/老门东文旅商圈
可挖掘企业：古南都、马祥兴、鸡鸣汤包、徐建萍汤包、景区网红餐饮集群

### 3. 建邺区｜河西/华采天地/奥体商圈
可挖掘企业：小厨娘、新白鹿、西贝莜面村、奈雪的茶、岭南纪茶餐厅

### 4. 鼓楼区｜湖南路/ITC Mall商圈
可挖掘企业：小菜园（江苏总部）、丈母娘的饭局、复兴园桂花糕、金陵饭店系餐饮

### 5. 江宁区｜百家湖/景枫/万象天地商圈
可挖掘企业：海底捞、巴奴毛肚火锅、蚂蚁洞、肉三两、商圈茶饮快餐连锁

### 6. 雨花台区｜雨花万象天地商圈
可挖掘企业：半勺梧桐、云边记、茴悦、海底捞、星巴克、社区简餐连锁

### 7. 浦口区｜江北虹悦城商圈
可挖掘企业：香山湖家家宴、锅立方、喜兰餐饮、姐妹大酒店、区域正餐连锁

### 8. 六合/溧水/高淳｜区域核心商圈
- 六合雄州：本地正餐、连锁餐饮
- 溧水永阳：社区餐饮、企业食堂
- 高淳淳溪：文旅餐饮、地方老字号
`;

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '', // Empty content to avoid duplicate bubble, welcome is in the card
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [stage, setStage] = useState(0); // 0: Insight, 1: Recommend, 2: Underwrite, 3: Share
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const suggestions = [
    '请帮我生成南京餐饮行业保险商机研究报告',
    '请推荐玄武区的优质商圈和最适合拓展的餐饮店',
    '请为一家商业楼里各餐饮店做个综合保险方案'
  ];

  const handleSuggestionClick = (text: string) => {
    setInputValue(text);
    // We can't directly call handleSend because it uses the current state of inputValue
    // So we'll trigger it manually or update the logic
  };

  // Update handleSend to accept an optional text parameter
  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate AI Response based on stage
    setTimeout(() => {
      generateAIResponse(messageText);
    }, 1000);
  };

  const generateAIResponse = (userInput: string) => {
    const id = () => (Date.now() + Math.random()).toString();

    // Check if user input matches the lobster flow or other suggestions
    if (userInput.includes('餐饮行业') && userInput.includes('研究报告')) {
      const msg1: Message = {
        id: id(),
        role: 'assistant',
        content: `帮帮 正在为您抓取南京餐饮市场最新数据，并进行深度建模分析，请稍后...`,
      };
      setMessages(prev => [...prev, msg1]);
      
      setTimeout(() => {
        const msg2: Message = {
          id: id(),
          role: 'assistant',
          content: `帮帮为您生成【南京餐饮行业保险商机研究报告】，围绕老字号金陵菜、跨城正餐连锁、商圈大店和团餐体系展开，保险价值集中在总部统保、公责、食责、财产设备、营业中断和品牌声誉管理，摘要如下：\n\n📍 报告摘要：\n1. 行业概览：南京餐饮市场约1500亿规模，连锁化率高，以淮扬菜为根基，商圈与文旅场景驱动强劲。\n2. 风险分析：聚焦用工伤亡、火灾爆炸及食安责任，特别关注老店消防与景区拥挤等地方特色风险。\n3. 客户画像：细分为老字号金陵菜、跨城正餐连锁、团餐配供体系、商圈文旅流量四大赛道。\n4. 典型企业：以南京大牌档为例，切入点为总部统保、跨城统一方案及老字号风险减量服务。\n5. 方案建议：构建“基础保障+责任强化+总部延伸”三层保险服务体系，辅以风勘与快赔增值服务。\n6. 成功案例：某跨城连锁统保项目，覆盖南京21家门店，实现续保率100%与全省可复制。\n7. 关键因素：总分协同推进、痛点精准切入、理赔服务承诺及规模化费率优势。\n8. 潜力清单：覆盖玄武、秦淮、建邺等8大行政区核心商圈，明确列出南京大牌档、小厨娘等重点挖掘企业。\n\n是否需要为您生成完整版报告并以附件输出？`,
        };
        setMessages(prev => [...prev, msg2]);
        setStage(2); 
      }, 2000);
    } else if (userInput.includes('玄武区') && (userInput.includes('商圈') || userInput.includes('餐饮店'))) {
      const msg1: Message = {
        id: id(),
        role: 'assistant',
        content: `帮帮 正在为您深度分析南京玄武区的餐饮业态及商圈潜力，请稍后...`,
      };
      setMessages(prev => [...prev, msg1]);
      
      setTimeout(() => {
        const msg2: Message = {
          id: id(),
          role: 'assistant',
          content: `为您推荐 **南京玄武区** 的优质展业商圈及高潜餐饮店：\n\n🏙️ **推荐商圈：新街口-德基商圈（玄武片区）**\n该商圈是玄武区的商业名片，餐饮业态极度成熟。核心优势在于：\n1. **品牌总部集聚**：众多餐饮品牌华东总部设于此，利于开展总部级统保合作；\n2. **合规性极高**：商场统一管理，消防与食安风控标准为全市标杆，属于极低风险标的。\n\n🍽️ **最适合拓展的餐饮店推荐：**\n1. **南京大牌档（德基店）**：金陵菜老字号代表，用工规模大，公众责任风险集中，对“老字号风险减量服务”需求迫切；\n2. **小厨娘淮扬菜**：商务宴请标杆，客单价高，保费支付能力强，且正处于全省扩张期，具备统保潜力；\n3. **三出山（网红火锅）**：商圈内高流量标的，后厨火灾及堂食意外风险突出，对“核保快、理赔简”的保险方案兴趣度高。\n\n是否需要为您生成针对玄武区商圈的专项展业话术？`,
        };
        setMessages(prev => [...prev, msg2]);
      }, 2000);
    } else if (userInput.includes('新商业楼') || (userInput.includes('各餐饮店') && userInput.includes('方案'))) {
      const msg1: Message = {
        id: id(),
        role: 'assistant',
        content: `帮帮 正在为您分析该商业楼的餐饮业态分布及风险特征，请稍后...`,
      };
      setMessages(prev => [...prev, msg1]);
      
      setTimeout(() => {
        const msg2: Message = {
          id: id(),
          role: 'assistant',
          content: `帮帮 已为您制定【新商业楼餐饮集群保险整体方案】，摘要如下：\n\n🏢 楼宇特征：新商业楼人流量大，装修档次高，各餐饮店风险集中在用工、火灾及公众责任。\n💡 整体方案建议：\n1. 统保模式：建议物业或业委会牵头，为楼内餐饮店提供统保优惠，降低单店成本。\n2. 核心险种：\n   - 雇主责任险：覆盖后厨及服务人员。\n   - 公众责任险：重点保障商场公共区域及店内意外。\n   - 财产综合险：保障高价值装修及厨具设备。\n3. 增值服务：提供统一的消防安全检查及食安风险评估。\n\n是否需要为您生成详细的各档次套餐对比表？`,
        };
        setMessages(prev => [...prev, msg2]);
      }, 2000);
    } else if (userInput.includes('龙虾') || userInput.includes('餐饮店')) {
      if (stage === 0) {
        const aiMsg: Message = {
          id: id(),
          role: 'assistant',
          content: `好的，马上帮您分析这家商场龙虾店的经营和风险情况～麻烦您说下店铺大概有几个员工、面积多大呀？`,
        };
        setMessages(prev => [...prev, aiMsg]);
        setStage(1);
      }
    } else if (stage === 2 && (userInput.includes('需要') || userInput.includes('是') || userInput.includes('生成'))) {
      const msg1: Message = {
        id: id(),
        role: 'assistant',
        content: `好的，正在为您美化排版并生成完整版【南京餐饮行业保险商机研究报告】，请稍后...`,
      };
      setMessages(prev => [...prev, msg1]);
      
      setTimeout(() => {
        const msg2: Message = {
          id: id(),
          role: 'assistant',
          content: `✨ 完整版报告已美化生成！您可以点击下方卡片查看详细内容，支持下载或转发。\n\n是否需要结合研究报告为您推荐商圈和餐饮店？`,
          type: 'report',
        };
        setMessages(prev => [...prev, msg2]);
        setStage(4); // Waiting for recommendation confirmation
      }, 3000);
    } else if (stage === 4 && (userInput.includes('需要') || userInput.includes('是') || userInput.includes('推荐'))) {
      const msg1: Message = {
        id: id(),
        role: 'assistant',
        content: `好的，正在为您筛选高匹配度的优质商圈...`,
      };
      setMessages(prev => [...prev, msg1]);

      setTimeout(() => {
        const msg2: Message = {
          id: id(),
          role: 'assistant',
          content: `结合报告「CBD 核心商圈、商场连锁餐饮集聚、经营规范、低风险」的核心展业方向，为您优先推荐 **南京新街口商圈**。该商圈为南京餐饮保险展业高潜标的，多维度满分匹配商机报告要求，核心推荐依据如下：\n\n📍 **区位与业态匹配**：位于南京市中心核心 CBD，被誉为“中华第一商圈”，拥有德基广场、中央商场、金鹰等顶级商业体。餐饮业态占比约 40%，涵盖高端金陵菜、国际连锁、网红茶饮等，连锁化率超 80%，极具批量展业价值；\n\n🛡️ **经营与风险匹配**：由德基、金鹰等头部商业集团统一管理，消防设施一流，市监局重点监管区域，门店标准化程度极高，年均出险率低于 2.5%，完全符合公司优质核保导向；\n\n📈 **商机与政策匹配**：虽成熟度高，但针对“老字号焕新”及“首店经济”的专项保险覆盖率仍有 50% 缺口。结合南京市支持餐饮业高质量发展政策，客户对品牌声誉险及食责险投保意愿极强；\n\n💰 **支付与合作匹配**：该商圈餐饮客单价位居全省第一，门店现金流充沛，保费支付能力极强。且多为品牌华东总部所在地，具备“一店突破、全省统保”的战略合作潜力。\n\n**是否要将此商圈在系统里生成商机，以便后续扩展追踪？**`,
        };
        setMessages(prev => [...prev, msg2]);
        setStage(5); // Move to business opportunity generation stage
      }, 2000);
    } else if (stage === 5 && (userInput.includes('生成') || userInput.includes('是') || userInput.includes('好') || userInput.includes('要'))) {
      const msg1: Message = {
        id: id(),
        role: 'assistant',
        content: `已为您在系统中成功生成【南京新街口商圈】展业商机！您可以随时在工作台中追踪该商圈的拓展进度。\n\n接下来，是否要在该商机基础上为您生成该商圈的**专属微店**？微店将包含针对该商圈定制的推荐产品套餐、增值服务及营销素材。`,
      };
      setMessages(prev => [...prev, msg1]);
      setStage(6); // Move to micro-store generation stage
    } else if (stage === 6 && (userInput.includes('生成') || userInput.includes('是') || userInput.includes('好') || userInput.includes('要'))) {
      const msg1: Message = {
        id: id(),
        role: 'assistant',
        content: `✨ **【南京新街口商圈】专属微店已生成！**\n\n📦 **微店内容概览：**\n- **推荐产品**：商场餐饮安心统保套餐（雇主+公责+财险）\n- **增值服务**：后厨消杀、消防风勘、食安培训\n- **营销素材**：老字号焕新海报、连锁统保案例H5\n\n微店链接已就绪，您可以点击下方卡片进行转发。接下来，为您筛选商圈内 3 家高潜餐饮商家，建议优先向其转发微店链接进行拓展～`,
      };
      setMessages(prev => [...prev, msg1]);
      
      setTimeout(() => {
        const msgCard: Message = {
          id: id(),
          role: 'assistant',
          content: '微店卡片',
          type: 'microstore',
          cardData: {
            title: '南京新街口商圈 · 餐饮保险专属微店',
            desc: '包含统保方案、增值服务及营销素材',
            tag: '商圈专属'
          }
        };
        setMessages(prev => [...prev, msgCard]);

        setTimeout(() => {
          const msg2: Message = {
            id: id(),
            role: 'assistant',
            content: `🎯 **新街口商圈高潜餐饮店 TOP 3 推荐：**\n\n1️⃣ **南京大牌档 (德基广场店)**\n   - **推荐理由**：金陵菜老字号，单店员工 30+，年客流极高。总部位于南京，具备“总部统保、全国覆盖”的极高合作价值。\n   - **核心需求**：雇主责任险、公众责任险、老字号风险减量服务。\n\n2️⃣ **小厨娘淮扬菜 (中央商场店)**\n   - **推荐理由**：商务正餐连锁标杆，门店装修昂贵，客单价高，保费支付能力极强。正处于品牌扩张期，对风险风控要求严苛。\n   - **核心需求**：财产综合险、营业中断险、食品安全责任险。\n\n3️⃣ **三出山 (新街口店)**\n   - **推荐理由**：商圈内顶流网红火锅，翻台率极高。后厨电器密集且堂食环境复杂，火灾及顾客烫伤风险突出。\n   - **核心需求**：公众责任险 (附加烫伤保障)、食责险、核保提速服务。\n\n**建议操作**：您可以点击上方微店卡片的“转发”按钮，将专属链接发送给上述商家的负责人，开启精准展业！`,
          };
          setMessages(prev => [...prev, msg2]);
          setStage(0); // Reset or move to final stage
        }, 2500);
      }, 1000);
    } else {
      // Default response for other inputs
      const aiMsg: Message = {
        id: id(),
        role: 'assistant',
        content: `收到您的诉求。帮帮正在为您分析相关信息，请稍等...`,
      };
      setMessages(prev => [...prev, aiMsg]);
    }

    // Re-implement the sequence logic for stage 1 -> 2
    if (stage === 1 && (userInput.includes('员工') || userInput.includes('平'))) {
      const sequence = [
        {
          content: `这家商场龙虾店核心有 3 个经营风险：①后厨人员多，切配、烫伤的工伤风险很高；②后厨燃气、电器多，火灾和设备损坏风险突出；③堂食顾客多，龙虾壳滑倒、烫伤的第三者责任风险大。另外店铺是商场内旺铺，财产和用工保障需求很明确。`,
          delay: 500
        },
        {
          content: `针对这家龙虾店的风险，我给您匹配了专属的保障方案：\n\n✅保险产品推荐：商场餐饮店安心套餐，包含后厨员工雇主责任险、店铺财产险、顾客公众责任险，保额全覆盖，保费适配小微门店；\n\n✅增值服务推荐：附赠后厨电器火灾预警监控、商用厨房每月一次的清洗消杀服务，提前降低风险，客户更容易买单。`,
          delay: 2000
        },
        {
          content: `我已经帮您调用核保系统自动完成这家龙虾店的核保啦，秒核通过，没有异常风险，直接可以出单～`,
          delay: 3500
        },
        {
          content: `核保已经通过啦，您是要生成出单二维码，还是分享商场龙虾店专属微店链接给客户呀？`,
          delay: 4500
        }
      ];

      sequence.forEach((item) => {
        setTimeout(() => {
          const msg: Message = {
            id: id(),
            role: 'assistant',
            content: item.content,
          };
          setMessages(prev => [...prev, msg]);
        }, item.delay);
      });
      setStage(2);
    }

    if (stage === 2 && userInput.includes('微店')) {
      const aiMsg: Message = {
        id: id(),
        role: 'assistant',
        content: `帮帮 已帮您为这家餐饮店自动开通专属微店。您直接微信发给客户，点链接就能投保，也能了解其他保险产品或资讯`,
        type: 'card',
        cardData: {
          title: '商场龙虾店专属微店',
          desc: '龙虾保·餐饮综合险 | 专属定制方案',
          price: '￥299/年起'
        }
      };
      setMessages(prev => [...prev, aiMsg]);
      setStage(3);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-900 max-w-[375px] mx-auto overflow-hidden relative border-x border-gray-200 shadow-2xl">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm font-medium bg-white z-20">
        <div className="flex items-center gap-1">
          <span>9:30</span>
          <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
            <MessageSquare size={10} className="text-white" />
          </div>
          <div className="w-4 h-4 bg-blue-400 rounded-sm flex items-center justify-center">
            <span className="text-[8px] text-white">☁️</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px]">N</span>
          <span className="text-[10px]">⏰</span>
          <span className="text-[10px]">📶</span>
          <span className="text-[10px]">5G</span>
          <div className="w-5 h-2.5 border border-gray-400 rounded-sm relative">
            <div className="absolute left-0 top-0 h-full bg-gray-600 w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Header / Search */}
      <div className="px-4 py-2 flex items-center gap-3 bg-white border-b border-gray-100 z-20">
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 border border-transparent focus-within:border-orange-200 transition-colors">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="微店" 
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative">
          <MessageSquare size={24} className="text-gray-700" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-2 space-y-4 no-scrollbar bg-[#f2f2f2]"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <React.Fragment key={msg.id}>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} ${!msg.content && !msg.type ? 'hidden' : ''}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${
                    msg.role === 'assistant' ? 'bg-orange-500' : 'bg-blue-500'
                  }`}>
                    {msg.role === 'assistant' ? <Bot size={24} className="text-white" /> : <User size={24} className="text-white" />}
                  </div>

                  {/* Bubble */}
                  <div className="flex flex-col gap-1">
                    <div className={`relative px-3 py-2 rounded-lg text-sm leading-normal shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-[#95ec69] text-black after:content-[""] after:absolute after:top-3 after:-right-1.5 after:w-0 after:h-0 after:border-t-[6px] after:border-t-transparent after:border-b-[6px] after:border-b-transparent after:border-l-[8px] after:border-l-[#95ec69]' 
                        : 'bg-white text-black after:content-[""] after:absolute after:top-3 after:-left-1.5 after:w-0 after:h-0 after:border-t-[6px] after:border-t-transparent after:border-b-[6px] after:border-b-transparent after:border-r-[8px] after:border-r-white'
                    }`}>
                      {msg.content.split('\n').map((line, i) => (
                        <p key={i} className={line === '' ? 'h-1' : ''}>{line}</p>
                      ))}

                      {msg.type === 'microstore' && msg.cardData && (
                        <div className="mt-3 bg-white rounded-xl overflow-hidden border border-blue-100 shadow-lg max-w-[260px]">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-4 text-white relative overflow-hidden">
                            <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
                              <Store size={80} />
                            </div>
                            <div className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-md rounded text-[10px] font-bold mb-2">
                              {msg.cardData.tag}
                            </div>
                            <div className="font-bold text-sm leading-tight mb-1">
                              {msg.cardData.title}
                            </div>
                            <div className="text-[10px] opacity-80">
                              {msg.cardData.desc}
                            </div>
                          </div>
                          <div className="p-3 flex justify-between items-center bg-white">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                                <Share2 size={12} className="text-blue-600" />
                              </div>
                              <span className="text-[10px] text-gray-500">点击转发给客户</span>
                            </div>
                            <button className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full shadow-sm">
                              转发
                            </button>
                          </div>
                        </div>
                      )}

                      {msg.type === 'report' && (
                        <div 
                          className="mt-3 bg-white rounded-lg p-4 border border-blue-100 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                          onClick={() => setSelectedImage('REPORT_MODAL')}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                              <BarChart3 size={24} className="text-blue-600" />
                            </div>
                            <div>
                              <div className="font-bold text-sm text-gray-900">南京餐饮行业保险商机研究报告</div>
                              <div className="text-[10px] text-gray-500">完整版 · 深度洞察报告</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                            <span className="text-[10px] text-blue-600 font-medium">点击阅读完整内容</span>
                            <ChevronRight size={14} className="text-blue-400" />
                          </div>
                        </div>
                      )}

                      {msg.type === 'image' && msg.imageUrl && (
                        <div className="mt-2 rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-white">
                          <img 
                            src={msg.imageUrl} 
                            alt="Report" 
                            className="w-full h-auto max-h-[300px] object-cover object-top cursor-pointer"
                            onClick={() => setSelectedImage(msg.imageUrl || null)}
                            referrerPolicy="no-referrer"
                          />
                          <div className="p-1.5 bg-gray-50 text-[10px] text-gray-500 text-center border-t border-gray-100">
                            点击查看完整大图
                          </div>
                        </div>
                      )}

                      {msg.type === 'card' && (
                        <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-100">
                          <div className="flex items-center gap-2 mb-2">
                            <Store size={16} className="text-orange-500" />
                            <span className="font-bold text-xs">{msg.cardData.title}</span>
                          </div>
                          <p className="text-[11px] text-gray-500 mb-3">{msg.cardData.desc}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-orange-600 font-bold text-sm">{msg.cardData.price}</span>
                            <div className="flex gap-2">
                              <div className="bg-white p-1 rounded border border-gray-200 shadow-sm">
                                <QrCode size={16} className="text-gray-700" />
                              </div>
                              <div className="bg-white p-1 rounded border border-gray-200 shadow-sm">
                                <ExternalLink size={16} className="text-gray-700" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enterprise WeChat Style Welcome & Suggestions - Always at the top */}
              {index === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 mb-6 px-1"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Welcome Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3.5 text-white">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
                          <Bot size={24} className="text-white" />
                        </div>
                        <div>
                          <h1 className="text-base font-bold leading-none mb-1">帮帮</h1>
                          <p className="text-blue-100 text-[10px]">您的小微经营智能助手</p>
                        </div>
                      </div>
                      <p className="text-[13px] leading-snug text-blue-50 text-opacity-90">
                        你好，我是 帮帮。👋<br />
                        提供深度行业分析与一站式保险方案。
                      </p>
                    </div>

                    {/* Suggestions Section */}
                    <div className="p-3 bg-white">
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-0.5 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs font-bold text-gray-800">猜你想问</span>
                      </div>
                      <div className="space-y-1.5">
                        {suggestions.map((text, i) => (
                          <button
                            key={i}
                            onClick={() => handleSend(text)}
                            className="w-full flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-100 transition-all group text-left"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                                {i === 0 ? <Store size={14} className="text-blue-500" /> : 
                                 i === 1 ? <BarChart3 size={14} className="text-green-500" /> : 
                                 <Target size={14} className="text-orange-500" />}
                              </div>
                              <span className="text-[12px] text-gray-700 font-medium group-hover:text-blue-600 transition-colors line-clamp-1">
                                {text}
                              </span>
                            </div>
                            <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Footer Tip */}
                    <div className="px-3 py-2 bg-gray-50/50 border-t border-gray-50 flex items-center justify-center gap-1.5">
                      <Info size={10} className="text-gray-400" />
                      <span className="text-[9px] text-gray-400">点击选项或直接输入诉求</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="bg-[#f7f7f7] border-t border-gray-200 px-3 py-3 flex items-center gap-3 z-20">
        <div className="flex-1 bg-white rounded-md px-3 py-2 flex items-center min-h-[40px]">
          <textarea
            rows={1}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="请说明您的诉求"
            className="w-full bg-transparent outline-none text-base resize-none no-scrollbar"
          />
        </div>
        <button 
          onClick={() => handleSend()}
          disabled={!inputValue.trim()}
          className={`w-12 h-10 rounded-md flex items-center justify-center transition-colors ${
            inputValue.trim() ? 'bg-[#07c160] text-white' : 'bg-gray-200 text-gray-400'
          }`}
        >
          <Send size={20} />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-100 flex justify-around py-2 px-2 shadow-lg z-20">
        <NavItem icon={<Home size={22} />} label="首页" />
        <NavItem icon={<Package size={22} />} label="产品" />
        <NavItem icon={<Briefcase size={22} />} label="工作台" active />
        <NavItem icon={<BookOpen size={22} />} label="学习" />
        <NavItem icon={<User size={22} />} label="我的" />
      </div>

      {/* Image / Report Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
                <h2 className="font-bold text-lg">报告详情</h2>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600 flex items-center gap-1.5 border border-blue-100" title="下载报告">
                    <Package size={18} />
                    <span className="text-sm font-medium">下载</span>
                  </button>
                  <button className="px-3 py-1.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600 flex items-center gap-1.5 border border-blue-100" title="转发报告">
                    <Send size={18} className="rotate-[-45deg]" />
                    <span className="text-sm font-medium">转发</span>
                  </button>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-1"
                  >
                    <ChevronRight size={24} className="rotate-90" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 bg-white prose prose-sm max-w-none">
                {selectedImage === 'REPORT_MODAL' ? (
                  <div className="space-y-6 text-gray-800">
                    {FULL_REPORT_CONTENT.split('\n').map((line, i) => {
                      if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">{line.replace('# ', '')}</h1>;
                      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-gray-800 mt-8 mb-4 flex items-center gap-2"><div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>{line.replace('## ', '')}</h2>;
                      if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-bold text-gray-700 mt-6 mb-3">{line.replace('### ', '')}</h3>;
                      if (line.startsWith('**')) return <p key={i} className="font-bold text-blue-700 my-2">{line.replace(/\*\*/g, '')}</p>;
                      if (line.startsWith('- ')) return <li key={i} className="ml-4 list-disc my-1">{line.replace('- ', '')}</li>;
                      if (line === '---') return <hr key={i} className="my-8 border-gray-100" />;
                      if (line.trim() === '') return <div key={i} className="h-2"></div>;
                      return <p key={i} className="leading-relaxed">{line}</p>;
                    })}
                  </div>
                ) : (
                  <img 
                    src={selectedImage} 
                    alt="Full size" 
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
              
              <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-center shrink-0">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="px-8 py-2 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-200"
                >
                  关闭阅读
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 flex-1 ${active ? 'text-orange-500' : 'text-gray-400'}`}>
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
      {active && <div className="w-1 h-1 bg-orange-500 rounded-full"></div>}
    </div>
  );
}
