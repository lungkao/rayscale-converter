# 🎨 Grayscale Converter - JavaScript Version

เวอร์ชัน JavaScript ล้วนๆ ไม่ต้องใช้ PHP หรือ CMS ใดๆ นำไปใช้ในเว็บไหนก็ได้ง่ายๆ

## ✨ Features

- ✅ Grayscale effect ที่ปรับระดับได้ 0-100%
- ✅ รูป/วิดีโอไม่ถูกแปลงเป็นสีเทา (exclude media)
- ✅ Black Ribbon 4 มุม (top-left, top-right, bottom-left, bottom-right)
- ✅ ใช้งานง่าย แค่เพิ่ม script tag เดียว
- ✅ CDN ready
- ✅ ไม่ต้องใช้ PHP หรือ framework
- ✅ ทำงานได้กับเว็บใดๆ

## 🚀 Quick Start

### Method 1: Auto-Init (ง่ายที่สุด)

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/gh/your-repo/grayscale-converter@main/grayscale.js"></script>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### Method 2: With Data Attributes

```html
<script src="grayscale.js" 
        data-intensity="80"
        data-exclude-media="true"
        data-ribbon-enabled="true"
        data-ribbon-position="top-left">
</script>
```

### Method 3: Programmatic (แนะนำ)

```html
<script src="grayscale.js"></script>
<script>
    const gs = new GrayscaleConverter({
        intensity: 80,              // 0-100%
        excludeMedia: true,          // รูป/วิดีโอไม่ถูก grayscale
        ribbonEnabled: true,         // แสดงริบบอน
        ribbonPosition: 'top-left',  // ตำแหน่งริบบอน
        ribbonCDN: 'https://cdn.jsdelivr.net/gh/your-repo@main/images/'
    });
</script>
```

## ⚙️ Configuration Options

```javascript
{
    intensity: 80,              // ระดับ grayscale (0-100)
    excludeMedia: true,         // รูป/วิดีโอไม่ถูก grayscale
    ribbonEnabled: true,        // แสดง black ribbon
    ribbonPosition: 'top-left', // ตำแหน่ง: top-left, top-right, bottom-left, bottom-right
    ribbonCDN: 'https://...',  // CDN URL สำหรับภาพริบบอน
    ribbonImages: {            // กำหนดไฟล์ภาพเอง
        'top-left': 'black_ribbon_top_left.png',
        'top-right': 'black_ribbon_top_right.png',
        'bottom-left': 'black_ribbon_bottom_left.png',
        'bottom-right': 'black_ribbon_bottom_right.png'
    }
}
```

## 📖 API Methods

### Initialize

```javascript
const gs = new GrayscaleConverter({
    intensity: 80,
    excludeMedia: true,
    ribbonEnabled: true,
    ribbonPosition: 'top-left'
});
```

### Change Intensity

```javascript
gs.setIntensity(100); // สีเทาเต็มรูปแบบ
gs.setIntensity(50);  // สีเทาครึ่งทาง
gs.setIntensity(0);   // ปิด grayscale
```

### Toggle On/Off

```javascript
gs.toggle(); // ปิด/เปิด
```

## 🎨 Ribbon Positions

- `top-left` - มุมบนซ้าย
- `top-right` - มุมบนขวา
- `bottom-left` - มุมล่างซ้าย
- `bottom-right` - มุมล่างขวา

## 📂 Project Structure

```
standalone-grayscale-js/
├── grayscale.js          # ไฟล์ JavaScript หลัก
├── index.html            # ตัวอย่างการใช้งาน
├── README.md             # เอกสารนี้
└── images/               # ภาพริบบอน (4 ภาพ)
    ├── black_ribbon_top_left.png
    ├── black_ribbon_top_right.png
    ├── black_ribbon_bottom_left.png
    └── black_ribbon_bottom_right.png
```

## 🌐 CDN Setup

### 1. Upload files to GitHub

```bash
git clone https://github.com/your-username/grayscale-converter
cd grayscale-converter
# copy files
git add .
git commit -m "Initial commit"
git push
```

### 2. Use jsDelivr CDN

```html
<script src="https://cdn.jsdelivr.net/gh/your-username/grayscale-converter@main/grayscale.js"></script>
```

### 3. Set ribbon CDN

```javascript
const gs = new GrayscaleConverter({
    ribbonEnabled: true,
    ribbonCDN: 'https://cdn.jsdelivr.net/gh/your-username/grayscale-converter@main/images/'
});
```

## 📝 Examples

### Example 1: Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
    <script src="grayscale.js"></script>
</head>
<body>
    <h1>My Website</h1>
    <img src="photo.jpg" alt="Photo">
    <script>
        new GrayscaleConverter();
    </script>
</body>
</html>
```

### Example 2: With Controls

```html
<!DOCTYPE html>
<html>
<head>
    <script src="grayscale.js"></script>
</head>
<body>
    <button onclick="gs.setIntensity(100)">Full Grayscale</button>
    <button onclick="gs.setIntensity(0)">Normal</button>
    
    <script>
        const gs = new GrayscaleConverter({ intensity: 50 });
    </script>
</body>
</html>
```

### Example 3: Auto-init with data attributes

```html
<script src="grayscale.js" 
        data-intensity="80"
        data-ribbon-enabled="true"
        data-ribbon-position="top-left">
</script>
```

## 🎯 Use Cases

1. **Memorial/Mourning Websites** - แสดงความสำนึกในพระมหากรุณาธิคุณ
2. **Historical Events** - ทำให้นึกถึงเหตุการณ์สำคัญ
3. **Maintenance Mode** - หน้าเว็บระหว่างบำรุงรักษา
4. **Special Occasions** - วันสำคัญ
5. **A/B Testing** - ทดสอบประสบการณ์ผู้ใช้

## 🔧 Troubleshooting

### ภาพริบบอนไม่แสดง

1. ตรวจสอบ `ribbonEnabled` เป็น `true`
2. ตรวจสอบ `ribbonCDN` ว่าถูกต้อง
3. ตรวจสอบ CORS policy

### Grayscale ไม่ทำงาน

1. ตรวจสอบว่า script ถูก load แล้ว
2. ตรวจสอบ console for errors
3. ตรวจสอบ `intensity` ว่าไม่เป็น 0

### รูปยังเป็นสีเทา

ตั้งค่า `excludeMedia: true`

## 📄 License

MIT License - Use freely in your projects!

## 👤 Author

Pisan Chueachatchai

## 🤝 Contributing

Pull requests are welcome!

---

Made with ❤️ for the Thai community
