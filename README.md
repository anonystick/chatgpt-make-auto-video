# Auto-generate videos using ChatGPT

Ví dụ này cung cấp một ý tưởng tạo một `Service Api` sử dụng ChatGPT để tự động tạo video cho dân tiktok và youtube.
Video demo: [5 điều cần làm trước khi lập trình viên về GIÀ](https://youtube.com/shorts/diDMvK3TFXY)

## How to run

1. Đầu tiên nên xem video về "[Sử dụng CHAT GPT 3.5 tự động làm SHORT VIDEO - Hướng dẫn và kèm Source](https://youtu.be/ki3s9-zjbbc)"
2. Lấy `OPENAI_API_KEY` bằng cách login vào [OpenAI](https://platform.openai.com/account/api-keys), nếu chưa có TÀI KHOẢN bạn có thể lấy tài khoản FREE ở [CHATGPT Share tài khoản OpenAI miễn phí hàng tuần (Email + password )](https://youtu.be/j_ObF0lCeDU). Nếu cần thiết vui lòng [TÔI](https://www.youtube.com/c/TipsJavascript).
3. Lấy `CREATOMATE_API_KEY` bằng cách đăng ký (FREE) ở [project settings](https://creatomate.com/docs/api/rest-api/authentication).

Có được `OPENAI_API_KEY` và `CREATOMATE_API_KEY` bạn có thể chạy được rồi. Chú ý hiện tại tôi đang hardCode trong file `index.js`

```
// API keys passed to this script
const creatomateApiKey = 'CREATOMATE_API_KEY'//process.argv[2];
const openAiApiKey = 'OPENAI_API_KEY'//process.argv[3];
```

Nếu như muốn chạy cú pháp như sau:

```
node index.js CREATOMATE_API_KEY OPENAI_API_KEY
```
Thì check `process.argv[2]` và `process.argv[3]` tương ứng với command trên.

# Example output

Video demo: - [5 điều cần làm trước khi lập trình viên về GIÀ](https://youtube.com/shorts/diDMvK3TFXY)

# Ref

Nếu muốn tham khảo thêm có thể truy cập: [Using ChatGPT's API to Auto-Create Social Media Videos by Code](https://creatomate.com/blog/using-chatgpt-api-to-auto-create-social-media-videos-by-code)

# ✅ Follow Me:

- [anonystick blog](https://anonystick.com)
- [anonystick Facebook](https://www.facebook.com/TipJS/)
- [anonystick Youtube](https://www.youtube.com/c/TipsJavascript)

# 👉 Khóa học bankEND nodejs + mongodb ecommerce (30.000 VNĐ)

LINK ĐĂNG KÝ - [Link dăng ký khóa học, tham gia hội viên](https://www.youtube.com/channel/UCky92hx0lZxVBi2BJ6Zm2Hg/join)

1 - [Welcome, welcome, welcome](https://youtu.be/5keK7PRH9pE)

2 - [Những folders và packages cần thiết khi khởi tạo Project](https://youtu.be/qpIfPitAIX0)

3 - [Connect MongoDB to Node.js Using Mongoose và 7 điều lưu ý](https://youtu.be/TiMiJazU4Pc)

4 - [Cách triển khai env cho các level khác nhau](https://youtu.be/jnxsMU5hjqs)

5 - [Sign-up Shop](https://youtu.be/Ha_LFuZ5x1U)

6 - [Middleware apikey and permissions](https://youtu.be/nQxEwBAcYrI)

7 - [Xử lý ErrorHandler trong API](https://youtu.be/hyF1S0nFS7A)

8 - [Make Your API Response use class](https://youtu.be/mvMEn5ofnlQ)

9 - [Login Shop API](https://youtu.be/0O1PlClhmIc)

10 - [Logout vs Authentication](https://youtu.be/vXhNEryxP0E)

11 - [RefreshToken và phát hiện token đã sử dụng bởi hacker và cách xử lý](https://youtu.be/S8yvvRag6Kk)

11.V2 - [FIXED Bug bị sai và tối ưu hơn so với phiên bản cũ](https://youtu.be/sR3YViTbFJ8)

12 - [Create schema Product](https://youtu.be/j1Qb_qMNXzE)

13 - [Create new Product API, áp dụng Factory Pattern](https://youtu.be/57fGKY_zbT4)

14 - [ Api Service Products (Optimal For <= Junior )](https://youtu.be/SCSCiPRba50)

15 - [ Api Service Products (Optimal For > Junior )]

... Next 16# chatgpt-make-auto-video
