import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { Products } from './components/products/Products';
import { Cart } from './components/cart/Cart';
import React, { useState } from 'react';
import { Billing } from './components/billing/Billing';
import { Payment } from './components/payment/Payment';
import { Order } from './components/order-placed';

export const DataContext = React.createContext();

const data = [
  {
      "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
      "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
      "bestSellingRank": 4,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
      "salePrice": 49.99,
      "manufacturer": "Webroot",
      "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-device-1-year-subscription-mac-windows/1688832.p?id=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIjA0vkveHdEBgpPCyMnLTJ",
      "type": "Software",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
      "customerReviewCount": 5980,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "1688832",
      "categories": [
          "Computer Security Software"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Geek Squad® - Tech Support Membership (1 Year)",
      "shortDescription": "Who has time for frustrating computer issues? With unlimited coverage for all your computing issues, Geek Squad Tech Support is the expert resource you need to keep your PC, Mac or tablet (up to three devices) up and running, no matter where you bought them. Get convenient help any way you'd like: in store, online or on the phone.",
      "bestSellingRank": 7,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1853/1853259_s.gif",
      "salePrice": 199.99,
      "manufacturer": "Geek Squad®",
      "url": "http://www.bestbuy.com/site/geek-squad-tech-support-membership-1-year/1853259.p?id=1218323911480&skuId=1853259&cmp=RMX&ky=2d3GfEmNIjA0vkveHdEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/1853/1853259_sc.jpg",
      "customerReviewCount": 3306,
      "shipping": "Free shipping",
      "salePrice_range": "201 - 500",
      "objectID": "1853259",
      "categories": [
          "Virus & Spyware Removal"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Apple® - 3.3' Lightning-to-USB 2.0 Cable",
      "shortDescription": "Compatible with most Apple&#174; iPad&#174;, iPhone&#174; and iPod&#174; models with a Lightning connector; charges and syncs your device; reversible design",
      "bestSellingRank": 12,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/6652/6652043_s.gif",
      "salePrice": 19.99,
      "manufacturer": "Apple®",
      "url": "http://www.bestbuy.com/site/apple-3-3-lightning-to-usb-2-0-cable/6652043.p?id=1218803451837&skuId=6652043&cmp=RMX&ky=2d3GfEmNIjA0vkveHdEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/6652/6652043_sc.jpg",
      "customerReviewCount": 569,
      "shipping": null,
      "salePrice_range": "1 - 50",
      "objectID": "6652043",
      "categories": [
          "Data Cables"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Google - Chromecast HDMI Streaming Media Player",
      "shortDescription": "Casts online video and music to your HDTV from popular apps like Netflix, YouTube, HBO GO, Hulu Plus, Pandora, Crackle, ESPN, MLB.TV, Google Play Movies & TV, Google Play Music, Chrome* and more; plug in and play; works across platforms; no remote required",
      "bestSellingRank": 17,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/9071/9071056_s.gif",
      "salePrice": 35,
      "manufacturer": "Google",
      "url": "http://www.bestbuy.com/site/google-chromecast-hdmi-streaming-media-player/9071056.p?id=1219013308425&skuId=9071056&cmp=RMX&ky=2d3GfEmNIjA0vkveHdEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/9071/9071056_sc.jpg",
      "customerReviewCount": 5872,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "9071056",
      "categories": [
          "Streaming Media Players"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Kaspersky Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
      "shortDescription": "Provide comprehensive protection to up to three devices in your home",
      "bestSellingRank": 24,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1689/1689012_s.gif",
      "salePrice": 49.99,
      "manufacturer": "Kaspersky Lab",
      "url": "http://www.bestbuy.com/site/kaspersky-internet-security-3-device-1-year-subscription-mac-windows/1689012.p?id=1219060668483&skuId=1689012&cmp=RMX&ky=2d3GfEmNIjA0vkveHdZEBgpPCyMnLTJ",
      "type": "Software",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/1689/1689012_sc.jpg",
      "customerReviewCount": 1252,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "1689012",
      "categories": [
          "Kaspersky Lab"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Logitech - Marathon Mouse M705 Wireless Laser Mouse - Black",
      "shortDescription": "Laser technology; Unifying receiver; wireless USB interface",
      "bestSellingRank": 25,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1325/1325119_s.gif",
      "salePrice": 39.99,
      "manufacturer": "Logitech",
      "url": "http://www.bestbuy.com/site/logitech-marathon-mouse-m705-wireless-laser-mouse-black/1325119.p?id=1218250610754&skuId=1325119&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/1325/1325119_sc.jpg",
      "customerReviewCount": 9,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "1325119",
      "categories": [
          "Wireless Mice"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Toshiba - Satellite 15.6\" Laptop - Intel Celeron - 4GB Memory - 500GB Hard Drive - Jet Black",
      "shortDescription": "Windows 8.1 64-bitTechnical details: Intel&#174; Celeron&#174; processor; 15.6\" display; 4GB memory; 500GB hard driveSpecial features: HDMI outputNote: DVD/CD drive not included",
      "bestSellingRank": 28,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/6841/6841014_s.gif",
      "salePrice": 228.99,
      "manufacturer": "Toshiba",
      "url": "http://www.bestbuy.com/site/toshiba-satellite-15-6-laptop-intel-celeron-4gb-memory-500gb-hard-drive-jet-black/6841014.p?id=1219241419174&skuId=6841014&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/6841/6841014_sc.jpg",
      "customerReviewCount": 14,
      "shipping": "Free shipping",
      "salePrice_range": "201 - 500",
      "objectID": "6841014",
      "categories": [
          "PC Laptops"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "SanDisk - Cruzer 16GB USB 2.0 Flash Drive - Black",
      "shortDescription": "For PC, Mac and Linux; retractable USB connector; drag-and-drop file backup; includes SanDisk SecureAccess software; access to 2GB of YuuWaa Cloud storage",
      "bestSellingRank": 29,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/9226/9226875_s.gif",
      "salePrice": 7.99,
      "manufacturer": "SanDisk",
      "url": "http://www.bestbuy.com/site/sandisk-cruzer-16gb-usb-2-0-flash-drive-black/9226875.p?id=1218062423830&skuId=9226875&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/9226/9226875_sc.jpg",
      "customerReviewCount": 871,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "9226875",
      "categories": [
          "USB Flash Drives"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "SanDisk - Ultra Plus 16GB SDHC Class 10 UHS-1 Memory Card",
      "shortDescription": "Compatible with most devices with a SDHC card slot; 16GB capacity; temperature-, X-ray-, shock- and waterproof design; writeable label",
      "bestSellingRank": 34,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/3142/3142535_s.gif",
      "salePrice": 14.99,
      "manufacturer": "SanDisk",
      "url": "http://www.bestbuy.com/site/sandisk-ultra-plus-16gb-sdhc-class-10-uhs-1-memory-card/3142535.p?id=1219088212869&skuId=3142535&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/3142/3142535_sc.jpg",
      "customerReviewCount": 273,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "3142535",
      "categories": [
          "Secure Digital"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Office Home & Student 2013 - Windows",
      "shortDescription": "Create, communicate and learn using streamlined touch, pen or keyboard commands",
      "bestSellingRank": 39,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/7016/7016127_54x54_s.gif",
      "salePrice": 139.99,
      "manufacturer": "Microsoft",
      "url": "http://www.bestbuy.com/site/office-home-student-2013-windows/7016127.p?id=1218821792097&skuId=7016127&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "Software",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/7016/7016127_105x105_sc.jpg",
      "customerReviewCount": 3510,
      "shipping": "Free shipping",
      "salePrice_range": "201 - 500",
      "objectID": "7016127",
      "categories": [
          "Office Software Suites"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Samsung - Galaxy 2 16.3-Megapixel Digital Camera - White",
      "shortDescription": "21x optical zoom4.8\" scLCD touch screenHigh-definition movie modeBuilt-in Wi-Fi",
      "bestSellingRank": 3009,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/3356/3356045_s.gif",
      "salePrice": 397.99,
      "manufacturer": "Samsung",
      "url": "http://www.bestbuy.com/site/samsung-galaxy-2-16-3-megapixel-digital-camera-white/3356045.p?id=1219091055939&skuId=3356045&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/3356/3356045_sc.jpg",
      "customerReviewCount": 34,
      "shipping": "Free shipping",
      "salePrice_range": "201 - 500",
      "objectID": "3356045",
      "categories": [
          "Point & Shoot Cameras"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Monthly Accidental Protection Plan - Geek Squad",
      "shortDescription": "",
      "bestSellingRank": 48,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/nonsku/default_hardlines_s.gif",
      "salePrice": 9.99,
      "url": "http://www.bestbuy.com/site/monthly-accidental-protection-plan-geek-squad/1752369.p?id=1219064726785&skuId=1752369&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "BlackTie",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/nonsku/default_hardlines_l.jpg",
      "customerReviewCount": null,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "1752369",
      "categories": [
          null
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Insignia™ - 4' Lightning Charge-and-Sync Cable",
      "shortDescription": "Compatible with select Apple&#174; iPad&#174;, iPhone&#174; and iPod&#174; models; lets you charge and sync Apple devices; 4' length",
      "bestSellingRank": 49,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/5019/5019369_s.gif",
      "salePrice": 14.99,
      "manufacturer": "Insignia™",
      "url": "http://www.bestbuy.com/site/insignia-4-lightning-charge-and-sync-cable/5019369.p?id=1219106282393&skuId=5019369&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/5019/5019369_sc.jpg",
      "customerReviewCount": null,
      "shipping": null,
      "salePrice_range": "1 - 50",
      "objectID": "5019369",
      "categories": [
          "Data Cables"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Apple® - EarPods™ with Remote and Mic - White",
      "shortDescription": "In-line remote and mic; compatible with select Apple iPhone, iPod and iPad models; sweat- and water-resistant design",
      "bestSellingRank": 52,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/6848/6848136_s.gif",
      "salePrice": 29.99,
      "manufacturer": "Apple®",
      "url": "http://www.bestbuy.com/site/apple-earpods-with-remote-and-mic-white/6848136.p?id=1218809156050&skuId=6848136&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/6848/6848136_sc.jpg",
      "customerReviewCount": 2524,
      "shipping": null,
      "salePrice_range": "1 - 50",
      "objectID": "6848136",
      "categories": [
          "Headphones"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "HP - 564XL Ink Cartridge - Black",
      "shortDescription": "Compatible with select HP Photosmart printers; black ink; 1 cartridge",
      "bestSellingRank": 53,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1982/1982034_s.gif",
      "salePrice": 23.99,
      "manufacturer": "HP",
      "url": "http://www.bestbuy.com/site/hp-564xl-ink-cartridge-black/1982034.p?id=1218304547043&skuId=1982034&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/1982/1982034_sc.jpg",
      "customerReviewCount": 1550,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "1982034",
      "categories": [
          "Printer Ink"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "SanDisk - Ultra Plus 32GB SDHC Class 10 UHS-1 Memory Card",
      "shortDescription": "Compatible with most devices with a SDHC card slot; 32GB capacity; temperature-, X-ray-, shock- and waterproof design; writeable label",
      "bestSellingRank": 58,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/3142/3142553_s.gif",
      "salePrice": 24.99,
      "manufacturer": "SanDisk",
      "url": "http://www.bestbuy.com/site/sandisk-ultra-plus-32gb-sdhc-class-10-uhs-1-memory-card/3142553.p?id=1219088217648&skuId=3142553&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/3142/3142553_sc.jpg",
      "customerReviewCount": 192,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "3142553",
      "categories": [
          "Secure Digital"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "SanDisk - Cruzer 32GB USB 2.0 Flash Drive - Black",
      "shortDescription": "High-speed USB 2.0 interface for fast data transfer; U3 enabled; PC and Mac compatible",
      "bestSellingRank": 60,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/9288/9288807_s.gif",
      "salePrice": 14.99,
      "manufacturer": "SanDisk",
      "url": "http://www.bestbuy.com/site/sandisk-cruzer-32gb-usb-2-0-flash-drive-black/9288807.p?id=1218075402509&skuId=9288807&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/9288/9288807_sc.jpg",
      "customerReviewCount": 619,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "9288807",
      "categories": [
          "USB Flash Drives"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "SanDisk - Ultra Plus 32GB microSDHC Class 10 UHS-1 Memory Card",
      "shortDescription": "Compatible with most devices with a microSDHC card slot; 32GB capacity; temperature-, X-ray-, shock- and waterproof design; writeable label",
      "bestSellingRank": 63,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/3142/3142635_s.gif",
      "salePrice": 24.99,
      "manufacturer": "SanDisk",
      "url": "http://www.bestbuy.com/site/sandisk-ultra-plus-32gb-microsdhc-class-10-uhs-1-memory-card/3142635.p?id=1219088213853&skuId=3142635&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/3142/3142635_sc.jpg",
      "customerReviewCount": 193,
      "shipping": "Free shipping",
      "salePrice_range": "1 - 50",
      "objectID": "3142635",
      "categories": [
          "Micro SD Memory"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "The Raid 2 (2 Disc) (Unrated) (Ultraviolet Digital Copy) (Blu-ray Disc)",
      "shortDescription": null,
      "bestSellingRank": 64,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/6938/6938047s.jpg",
      "salePrice": 19.99,
      "url": "http://www.bestbuy.com/site/the-raid-2-2-disc-unrated-ultraviolet-digital-copy-blu-ray-disc/6938047.p?id=3231559&skuId=6938047&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "Movie",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/6938/6938047.jpg",
      "customerReviewCount": 1,
      "shipping": null,
      "salePrice_range": "1 - 50",
      "objectID": "6938047",
      "categories": [
          "Movies & TV Shows"
      ],
      "quantity": 1,
      "isInCart": false
  },
  {
      "name": "Whirlpool - 24\" Tall Tub Built-In Dishwasher - Stainless-Steel",
      "shortDescription": "ENERGY STAR Certified\nDigital controls; accommodates up to 14 place settings; 5 wash cycles; high-temperature wash and delay-start options; Quiet Partner II sound-reduction package",
      "bestSellingRank": 3012,
      "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/4279/4279501_s.gif",
      "salePrice": 479.99,
      "manufacturer": "Whirlpool",
      "url": "http://www.bestbuy.com/site/whirlpool-24-tall-tub-built-in-dishwasher-stainless-steel/4279501.p?id=1218492450231&skuId=4279501&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
      "type": "HardGood",
      "image": "http://img.bbystatic.com/BestBuy_US/images/products/4279/4279501_sc.jpg",
      "customerReviewCount": 79,
      "shipping": null,
      "salePrice_range": "201 - 500",
      "objectID": "4279501",
      "categories": [
          "Built-in Dishwashers"
      ],
      "quantity": 1,
      "isInCart": false
  }
]





function App() {

const [users, setUsers] = useState([]);
const [currentUser,setcurrentUser] = useState();

const addUser = (user) => {
    setUsers([...users, user])
}

const updateCurrentUser = (user) => {
    console.log(user);
    setcurrentUser(user);    
    setUsers([...users, user])
}

const removeAll = () => {
    const updatedUser = { 
        ...users, 
        cart: [] 
    };
    updateCurrentUser(updatedUser)
}

 return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login users={users} getcurrentUser={updateCurrentUser}/>} />
          <Route path='signup' element={<Signup users={users} addUser={addUser} />} />
          <Route path='products' element={<Products data={data} user={currentUser} updateCurrentUser={updateCurrentUser}/>} />
          <Route path='cart' element={<Cart user={currentUser} updateCurrentUser={updateCurrentUser}/>} />
          <Route path='billing'element={<Billing user={currentUser}/>}/>
          <Route path='payment'element={<Payment user={currentUser} removeAll={removeAll}/>}/>
          <Route path='order-confirmation' element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
