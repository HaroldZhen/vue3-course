# Vue 作品實戰班 - 2021夏季

# 第七週 - 進階語法介紹

## 功能畫面
網址: https://haroldzhen.github.io/vue3-course/week7/#/

## 登入
https://haroldzhen.github.io/vue3-course/week7/#/admin/login
![Imgur](https://i.imgur.com/H6DVxGz.jpg)

## 產品管理
網址: https://haroldzhen.github.io/vue3-course/week7/#/admin
![Imgur](https://i.imgur.com/IFH1gz8.jpg)

## 訂單管理
https://haroldzhen.github.io/vue3-course/week7/#/admin/order
![Imgur](https://i.imgur.com/pEpnLx9.jpg)

## 最新消息
https://haroldzhen.github.io/vue3-course/week7/#/admin/article
![Imgur](https://i.imgur.com/E82NYts.jpg)

## 電話接單
https://haroldzhen.github.io/vue3-course/week7/#/admin/phoneOrder
![Imgur](https://i.imgur.com/NRolnIP.jpg)

## 任務說明：
在先前的課程中，已經介紹了登入、產品列表的製作，請同學完成剩下功能，並整合至 Vue Cli 中。另外還要請大家確定好最終作業的主題唷！

### 後台

產品頁面：
- 串接取得、新增、刪除、更新產品 API
- 啟用狀態顯示
- Modal 細節欄位
- 上傳圖片API 
- 分頁功能

訂單頁面：
- 串接取得、刪除、更新訂單 API
- Modal 細節欄位
- 付款狀態切換
- 分頁功能

優惠券頁面：
- 串接取得、新增、刪除、更新優惠券 API
- 啟用狀態顯示
- Modal 細節欄位
- 分頁功能

貼文頁面（加分項目）：
- 串接取得、新增、刪除、更新貼文 API
- 啟用公開狀態
- Modal 細節欄位
- 分頁功能

登入 / 登出

小功能
- alert、loading 元件
- 串接圖片上傳 API

提交難度挑戰：
LV1：完成後台登入/ 登出、產品頁面、訂單頁面＋主題發想內容
LV2：完成 LV1 功能＋優惠券頁面＋主題發想內容
LV3：完成以上功能及撰寫完整的產品文案、圖片


## 課程 API 相關網址：
- [註冊連結、測試管理平台](https://vue3-course-api.hexschool.io/)
- [API 文件](https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D)
- [登入頁面-頁面模板](https://codepen.io/hexschool/pen/poeJxXJ?editors=1010)
- [後台:產品頁面-頁面模板](https://codepen.io/hexschool/pen/vYxOVjd?editors=1000)
- [前台:產品頁面-頁面樣版](https://hexschool.github.io/live-vue3-training-chapter-works/week5/index3.html)
- [每週的範例 github-pages](https://hexschool.github.io/live-vue3-training-chapter-works/)
- [Github repo](https://github.com/hexschool/live-vue3-training-chapter-works)

## 依據使用者需求完成此範例：

作業資源：
依據使用者需求完成此範例：
使用 Vue Cli 完成路由設定
在 Vue Cli 中完成登入、前台表單驗證功能
建立 .env 檔案內容
```
    VUE_APP_API=
    VUE_APP_PATH=
```

## 注意事項：
繳交格式：請透過 GitHub Pages 提交作業以方便助教與講師檢視（作業須附上 Github Pages 及儲存庫）
禁止直接使用範例程式碼提交
如欲參考範例程式碼，請避免複製貼上，請自行重新撰寫
參考範例程式碼，請在繳交作業時附註：「本作業有參考範例程式碼」
參考範例程式碼，請在原始碼內補上註解，讓自己加深學習印象

⭐️ 建議下載原始碼，修改 .env 檔案的 API 及 PATH 即可運作

⭐️ 繳交作業時不用附上帳號密碼，很重要！

## 提交難度挑戰：
LV2：完成 LV1 功能＋優惠券頁面＋主題發想內容

## 助教回饋：

2021-07-06

Hello Harold :

我是六角學院的助教 SONYKO 

作業練習得很好呢！
### 以下為修改小建議：

1. alert 都可以改成 toast 
2. 產品後台 無法刪除產品（ 會跳出找不到產品的 alert ），跳出之後產品列表會成空白。
3. 新增優惠券的 modal button 的文字是更新優惠券，這邊應該是新增。 另外是否啟用沒有勾就無法新增， 這邊建議給他原始值為 false。新增按下去時會先關閉視窗才跳出 alert 回報錯誤， 這邊應該保持視窗開啟狀態給使用者作修改。 或是直接使用表單驗證。
4. 這邊可以改成中文
5. 電話接單 訂單送出時，購物車記得要清空。
6. 卡片跟卡片中間建議要有間隔
7. 首頁動線不太流暢，應該是由購物車頁面進到輸入顧客資訊，不然 customer 頁面會不知道是要做什麼用的 >A < ，購物車也會不知道要怎麼結帳。
8. 登出之後瀏覽器的 token 沒有清除喔。

其他地方沒什麼大問題～

若有疑問也歡迎隨時提出，我們會在線上幫你解答('ω' )