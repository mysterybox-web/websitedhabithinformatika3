const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

const products = [
  {
    id: 1,
    name: "Basic Fashion Box",
    category: "Fashion",
    price: 30000,
    image: "mysterybox10k.jfif",
    slogan: "Your Fashion Journey Starts Here",
    description: "Paket sederhana untuk melengkapi gaya sehari-hari dengan aksesori fashion yang praktis",
    findItems: ["Gantungan kunci dan aksesori kecil", "Kaus kaki atau wristband", "Aksesori fashion pilihan premium"],
    composition: [
      { label: "Aksesori dasar", percentage: 70 },
      { label: "Kebutuhan fashion sehari-hari", percentage: 25 },
      { label: "Aksesori fashion premium", percentage: 5 }
    ]
  },
  {
    id: 2,
    name: "Level Up Fashion Box",
    category: "Fashion",
    price: 50000,
    image: "mysterybox20k.jfif",
    slogan: "A Little More Style, A Little More You",
    description: "Pilihan yang lebih beragam untuk menambahkan karakter pada outfit sehari-hari",
    findItems: ["Aksesori fashion dasar", "Kaus kaki dan aksesori wearable", "Aksesori fashion premium"],
    composition: [
      { label: "Aksesori fashion dasar", percentage: 60 },
      { label: "Wearable essentials", percentage: 30 },
      { label: "Aksesori fashion premium", percentage: 10 }
    ]
  },
  {
    id: 3,
    name: "Premium Fashion Box",
    category: "Fashion",
    price: 100000,
    image: "mysterybox30k.jfif",
    slogan: "Upgrade Your Everyday Look",
    description: "Kombinasi aksesori dan item fashion yang lebih bervariasi untuk melengkapi gaya personal",
    findItems: ["Aksesori fashion dasar", "Wearable essentials", "Aksesori fashion premium"],
    composition: [
      { label: "Aksesori fashion dasar", percentage: 45 },
      { label: "Wearable essentials", percentage: 35 },
      { label: "Aksesori fashion premium", percentage: 20 }
    ]
  },
  {
    id: 16,
    name: "Streetwear Fashion Box",
    category: "Fashion",
    price: 150000,
    image: "mysterybox50k.jfif",
    slogan: "Make Your Style Stand Out",
    description: "Paket bertema streetwear dengan komposisi item yang lebih beragam dan pilihan aksesori yang lebih premium",
    findItems: ["Aksesori fashion dasar", "Wearable essentials dan aksesori streetwear", "Aksesori fashion premium"],
    composition: [
      { label: "Aksesori fashion dasar", percentage: 30 },
      { label: "Wearable essentials dan aksesori streetwear", percentage: 40 },
      { label: "Aksesori fashion premium", percentage: 30 }
    ]
  },
  {
    id: 17,
    name: "Ultimate Fashion Box",
    category: "Fashion",
    price: 250000,
    image: "mysterybox50k.jfif",
    slogan: "Your Next-Level Fashion Experience",
    description: "Paket Fashion dengan komposisi yang lebih premium untuk kamu yang ingin mengeksplorasi berbagai item fashion dan streetwear",
    findItems: ["Aksesori fashion dasar", "Wearable essentials dan aksesori streetwear", "Aksesori fashion premium"],
    composition: [
      { label: "Aksesori fashion dasar", percentage: 20 },
      { label: "Wearable essentials dan aksesori streetwear", percentage: 40 },
      { label: "Aksesori fashion premium", percentage: 40 }
    ]
  },
  {
    id: 18,
    name: "Gadget Essentials Box",
    category: "Gadgets",
    price: 30000,
    image: "mysterybox10k.jfif",
    slogan: "Small Tech, Everyday Convenience",
    description: "Paket awal untuk kebutuhan teknologi sehari-hari dengan aksesori gadget sederhana dan praktis",
    findItems: ["Cable organizer", "Cable protector", "Phone stand sederhana", "Aksesori kecil untuk perangkat elektronik"]
  },
  {
    id: 19,
    name: "Gadget Starter Box",
    category: "Gadgets",
    price: 50000,
    image: "mysterybox20k.jfif",
    slogan: "Your Everyday Tech Upgrade",
    description: "Pilihan aksesori gadget yang lebih beragam untuk membantu penggunaan perangkat sehari-hari",
    findItems: ["Phone stand", "Cable organizer", "Gadget cleaning tools", "Aksesori pengelolaan kabel"]
  },
  {
    id: 20,
    name: "Basic Gadget Tools Box",
    category: "Gadgets",
    price: 100000,
    image: "mysterybox30k.jfif",
    slogan: "Get More Out of Your Devices",
    description: "Paket aksesori teknologi dengan pilihan alat perawatan dan pendukung perangkat yang lebih lengkap",
    findItems: ["Gadget cleaning kit", "Kabel data atau kabel pengisian daya yang kompatibel", "Phone stand yang lebih kokoh", "Aksesori gadget tambahan"]
  },
  {
    id: 21,
    name: "Gadget Upgrade Box",
    category: "Gadgets",
    price: 150000,
    image: "mysterybox30k.jfif",
    slogan: "A Smarter Tech Setup",
    description: "Tingkatkan pengalaman menggunakan gadget dengan pilihan aksesori yang lebih beragam",
    findItems: ["Kabel pengisian daya", "Phone stand", "Gadget cleaning kit", "Aksesori meja kerja digital"]
  },
  {
    id: 22,
    name: "Gadget Plus Box",
    category: "Gadgets",
    price: 250000,
    image: "mysterybox30k.jfif",
    slogan: "More Accessories, More Possibilities",
    description: "Paket dengan pilihan aksesori gadget yang lebih lengkap untuk mendukung aktivitas belajar, hiburan, dan produktivitas",
    findItems: ["Aksesori perangkat", "Kabel data atau pengisian daya", "Phone stand atau desk accessories", "Perlengkapan perawatan gadget"]
  },
  {
    id: 23,
    name: "Gadget Advanced Box",
    category: "Gadgets",
    price: 300000,
    image: "mysterybox50k.jfif",
    slogan: "Step Up Your Tech Game",
    description: "Paket gadget dengan variasi aksesori yang lebih lengkap dan kemungkinan mencakup perangkat pendukung elektronik sederhana",
    findItems: ["Aksesori gadget", "Perangkat pendukung elektronik", "Desk accessories", "Perlengkapan konektivitas"]
  },
  {
    id: 24,
    name: "Gadget Pro Box",
    category: "Gadgets",
    price: 500000,
    image: "mysterybox50k.jfif",
    slogan: "Better Gear for Better Tech",
    description: "Paket aksesori gadget kelas lebih tinggi untuk pengguna yang ingin melengkapi perangkat dan setup mereka",
    findItems: ["Aksesori gadget berkualitas lebih tinggi", "Perangkat pendukung komputer atau smartphone", "Aksesori meja kerja", "Perlengkapan konektivitas"]
  },
  {
    id: 25,
    name: "Smartphone Mystery Box",
    category: "Gadgets",
    price: 5000000,
    image: "mysterybox50k.jfif",
    slogan: "Your Next Smartphone Experience",
    description: "Paket premium bertema smartphone dengan pilihan perangkat dari berbagai kelas dan merek, bergantung pada konfigurasi paket yang tersedia",
    findItems: ["Smartphone kelas entry-level atau menengah", "Smartphone kelas menengah atas", "Smartphone dengan spesifikasi lebih tinggi"],
    composition: [
      { label: "Smartphone kelas entry-level atau menengah", percentage: 50 },
      { label: "Smartphone kelas menengah atas", percentage: 35 },
      { label: "Smartphone dengan spesifikasi lebih tinggi", percentage: 15 }
    ],
    compositionNote: "Distribusi ini menjelaskan kelompok konfigurasi paket, bukan peluang memperoleh perangkat tertentu; merek, model, kapasitas, dan spesifikasi harus dikonfirmasi"
  },
  {
    id: 26,
    name: "Computer Mystery Box",
    category: "Gadgets",
    price: 7500000,
    image: "mysterybox50k.jfif",
    slogan: "Find Your Next Computer Setup",
    description: "Paket komputer premium yang berfokus pada perangkat komputer atau komponen komputer, konfigurasi akhir bergantung pada isi paket yang ditawarkan",
    findItems: ["Komponen komputer", "Perangkat pendukung komputer", "Paket komponen untuk kebutuhan produktivitas", "Konfigurasi komputer untuk kebutuhan umum"],
    composition: [
      { label: "Paket komponen atau perangkat komputer untuk kebutuhan dasar", percentage: 50 },
      { label: "Paket dengan konfigurasi kelas menengah", percentage: 35 },
      { label: "Paket dengan komponen berperforma lebih tinggi", percentage: 15 }
    ],
    compositionNote: "Distribusi ini menjelaskan kelompok konfigurasi paket, bukan peluang memperoleh perangkat tertentu; paket dapat berisi komputer lengkap, komponen saja, atau aksesori dan bentuk akhirnya harus dikonfirmasi"
  },
  {
    id: 27,
    name: "Gaming PC Mystery Box",
    category: "Gadgets",
    price: 15000000,
    image: "mysterybox50k.jfif",
    slogan: "Build Your Next Gaming Experience",
    description: "Paket premium khusus gaming PC dengan variasi konfigurasi dari kelas gaming dasar hingga kelas berperforma tinggi, setiap konfigurasi memiliki kombinasi komponen yang berbeda",
    findItems: [
      "Standard Gaming Setup: Prosesor entry-level atau menengah, kartu grafis kelas dasar atau menengah jika termasuk, RAM dan penyimpanan sesuai konfigurasi, cocok untuk gaming kasual dan game esports",
      "Performance Gaming Setup: Prosesor kelas menengah, kartu grafis kelas menengah, RAM dan SSD yang sesuai, cocok untuk pengaturan grafis menengah hingga tinggi bergantung pada game dan resolusi",
      "High-Performance Gaming Setup: Prosesor dan kartu grafis kelas lebih tinggi, RAM dan SSD berkapasitas lebih besar sesuai konfigurasi, serta komponen pendukung yang sesuai",
      "Istilah High-Performance bukan jaminan komputer paling mahal atau spesifikasi tertinggi di pasaran, spesifikasi aktual harus dicantumkan sebelum pemesanan"
    ],
    composition: [
      { label: "Standard Gaming Setup", percentage: 60 },
      { label: "Performance Gaming Setup", percentage: 30 },
      { label: "High-Performance Gaming Setup", percentage: 10 }
    ],
    compositionNote: "Komposisi ini menunjukkan kelompok konfigurasi paket, bukan peluang memperoleh hadiah secara acak"
  },
  {
    id: 38,
    name: "Sports Starter Box",
    category: "Sports Equipment",
    price: 50000,
    image: "mysterybox10k.jfif",
    slogan: "Start Moving, Start Playing",
    description: "Paket perlengkapan olahraga sederhana untuk mendukung aktivitas latihan dan permainan sehari-hari",
    findItems: ["Wristband olahraga", "Kaos kaki olahraga", "Botol minum olahraga sederhana", "Resistance band dasar", "Aksesori olahraga kecil"],
    composition: [
      { label: "Training accessories", percentage: 80 },
      { label: "Main sports equipment", percentage: 20 }
    ]
  },
  {
    id: 39,
    name: "Active Player Box",
    category: "Sports Equipment",
    price: 100000,
    image: "mysterybox20k.jfif",
    slogan: "Gear Up for Your Next Game",
    description: "Paket dengan pilihan perlengkapan yang lebih beragam untuk latihan, bermain bersama teman, atau menjaga rutinitas olahraga",
    findItems: ["Hand grip atau resistance band", "Skipping rope", "Kaos kaki olahraga", "Handuk olahraga", "Aksesori latihan"],
    composition: [
      { label: "Training accessories", percentage: 65 },
      { label: "Main sports equipment", percentage: 25 },
      { label: "Footwear and apparel", percentage: 10 }
    ]
  },
  {
    id: 40,
    name: "Sports Performance Box",
    category: "Sports Equipment",
    price: 500000,
    image: "mysterybox30k.jfif",
    slogan: "Bring Your Game to the Next Level",
    description: "Paket perlengkapan olahraga yang lebih serius untuk mendukung performa latihan dan permainan",
    findItems: ["Bola basket dari merek yang tersedia", "Bola futsal atau sepak bola berkualitas", "Raket badminton kelas pemula hingga menengah", "Perlengkapan latihan kebugaran", "Kombinasi aksesori olahraga premium"],
    composition: [
      { label: "Main sports equipment", percentage: 60 },
      { label: "Training accessories", percentage: 25 },
      { label: "Footwear and apparel", percentage: 15 }
    ]
  },
  {
    id: 41,
    name: "Athlete Footwear Box",
    category: "Sports Equipment",
    price: 1000000,
    image: "mysterybox30k.jfif",
    slogan: "Find Your Footwork",
    description: "Paket yang berfokus pada alas kaki olahraga, dengan pilihan yang sesuai untuk beberapa jenis aktivitas dan kebutuhan latihan",
    findItems: ["Sepatu basket", "Sepatu futsal", "Sepatu lari", "Sepatu training", "Aksesori pendukung alas kaki olahraga"],
    composition: [
      { label: "Footwear and apparel", percentage: 80 },
      { label: "Training accessories", percentage: 20 }
    ],
    compositionNote: "Pilihan bergantung pada cabang olahraga, ukuran, model, dan ketersediaan; merek dan model perlu dikonfirmasi"
  },
  {
    id: 42,
    name: "Ultimate Athlete Equipment",
    category: "Sports Equipment",
    price: 5000000,
    image: "mysterybox50k.jfif",
    slogan: "Everything You Need to Play Your Sport",
    description: "Paket perlengkapan atlet yang lebih lengkap untuk mendukung satu cabang olahraga pilihan, baik latihan rutin maupun persiapan kompetisi",
    findItems: [
      "Basketball: bola basket, sepatu, tas, pakaian latihan, dan aksesori pendukung",
      "Futsal / Football: sepatu, bola, shin guards, tas, dan aksesori latihan",
      "Badminton: raket, sepatu, shuttlecock, tas raket, dan aksesori latihan",
      "Swimming: kacamata renang, perlengkapan renang, handuk, tas, dan aksesori latihan",
      "Fitness: resistance bands, dumbbell atau alat sesuai konfigurasi, matras, sarung tangan, dan aksesori",
      "Running: sepatu, pakaian olahraga, running belt, botol minum, dan aksesori lari",
      "Pilihan paket difokuskan pada satu cabang olahraga, bukan seluruh cabang sekaligus"
    ],
    composition: [
      { label: "Main sports equipment", percentage: 55 },
      { label: "Footwear and apparel", percentage: 25 },
      { label: "Training accessories", percentage: 20 }
    ],
    compositionNote: "Contoh komposisi untuk satu cabang olahraga pilihan, bukan peluang hadiah acak; pilihan akhir dikonfirmasi sebelum pemesanan"
  },
  {
    id: 43,
    name: "Home Gym Pro Box",
    category: "Sports Equipment",
    price: 25000000,
    image: "mysterybox50k.jfif",
    slogan: "Build Your Own Training Space",
    description: "Paket equipment gym premium untuk membangun area latihan di rumah dengan pilihan alat yang mendukung berbagai kelompok otot",
    findItems: ["Adjustable dumbbells atau set dumbbell", "Adjustable bench", "Squat rack atau power rack", "Barbell dan weight plates", "Cable machine atau functional trainer", "Pull-up bar, matras latihan, dan aksesori gym"],
    pricePlan: [
      { label: "Adjustable dumbbells", price: 3000000 },
      { label: "Adjustable bench", price: 1500000 },
      { label: "Squat rack", price: 5000000 },
      { label: "Barbell dan weight plates", price: 4500000 },
      { label: "Cable machine konfigurasi dasar", price: 7000000 },
      { label: "Pull-up bar, matras, dan aksesori", price: 1000000 },
      { label: "Pengiriman dan pemasangan", price: 2000000 },
      { label: "Cadangan penyesuaian harga", price: 1000000 }
    ],
    configurationNote: "Harga aktual bergantung pada merek, kapasitas beban, material, ukuran, pengiriman, dan pemasangan; daftar ini contoh konfigurasi dan bukan jaminan semua alat tersedia"
  },
  {
    id: 44,
    name: "Ultimate Full-Body Gym",
    category: "Sports Equipment",
    price: 100000000,
    image: "mysterybox50k.jfif",
    slogan: "Your Ultimate Training Destination",
    description: "Paket gym premium dengan pilihan equipment untuk membangun area latihan full-body, mulai dari latihan kekuatan hingga kebugaran dan conditioning",
    findItems: [
      "Chest and Upper Body: chest press machine, adjustable bench, dan dumbbell set",
      "Back and Pulling: lat pulldown machine, seated row machine, dan pull-up station",
      "Legs and Lower Body: leg press, leg extension, leg curl, dan squat rack",
      "Shoulders and Arms: cable machine, shoulder press, dan dumbbell rack",
      "Core and Functional Training: bench, exercise mats, kettlebells, resistance bands, dan medicine balls",
      "Cardio Equipment: treadmill, stationary bike, dan elliptical trainer jika sesuai konfigurasi",
      "Supporting Equipment: weight plates, barbells, storage racks, flooring mats, dan aksesori gym"
    ],
    pricePlan: [
      { label: "Chest press machine", price: 9000000 },
      { label: "Adjustable bench", price: 2500000 },
      { label: "Dumbbell set dan rack", price: 7500000 },
      { label: "Lat pulldown dan seated row", price: 9000000 },
      { label: "Pull-up station", price: 2000000 },
      { label: "Leg press machine", price: 12000000 },
      { label: "Leg extension dan leg curl", price: 7000000 },
      { label: "Squat rack", price: 5000000 },
      { label: "Cable dan shoulder press station", price: 6000000 },
      { label: "Kettlebells, mats, bands, dan medicine balls", price: 3000000 },
      { label: "Treadmill", price: 10000000 },
      { label: "Stationary bike", price: 5000000 },
      { label: "Barbells, plates, storage, dan flooring", price: 8000000 },
      { label: "Pengiriman dan pemasangan", price: 6000000 },
      { label: "Cadangan penyesuaian harga", price: 8000000 }
    ],
    configurationNote: "Contoh konfigurasi full-body berskala besar; pilihan, jumlah, merek, spesifikasi, kebutuhan ruang, pengiriman, dan pemasangan dapat mengubah total akhir"
  },
  {
    id: 45,
    name: "Book Starter Box",
    category: "Books",
    price: 30000,
    image: "mysterybox10k.jfif",
    description: "Paket bacaan awal dengan pilihan buku sederhana untuk menemani waktu santai",
    estimatedCount: "Sekitar satu buku",
    findItems: ["Novel tipis atau buku edukatif", "Pembatas buku atau aksesori membaca sederhana jika sesuai"]
  },
  {
    id: 46,
    name: "Reading Essentials Box",
    category: "Books",
    price: 50000,
    image: "mysterybox20k.jfif",
    description: "Pilihan bacaan dan aksesori sederhana untuk menemani kebiasaan membaca",
    estimatedCount: "Sekitar satu buku",
    findItems: ["Novel, komik, atau bacaan edukatif", "Pembatas buku, stiker bertema buku, atau aksesori membaca kecil"]
  },
  {
    id: 47,
    name: "Book Explorer Box",
    category: "Books",
    price: 100000,
    image: "mysterybox20k.jfif",
    description: "Paket untuk menjelajahi bacaan dari beberapa genre populer",
    estimatedCount: "Sekitar satu sampai dua buku",
    findItems: ["Novel", "Komik", "Buku pengembangan diri"]
  },
  {
    id: 48,
    name: "Reader's Choice Box",
    category: "Books",
    price: 150000,
    image: "mysterybox30k.jfif",
    description: "Paket dengan pilihan genre yang lebih beragam untuk pengalaman membaca yang berbeda",
    estimatedCount: "Sekitar satu sampai dua buku",
    findItems: ["Novel atau komik", "Buku nonfiksi", "Buku edukatif"]
  },
  {
    id: 49,
    name: "Book Enthusiast Box",
    category: "Books",
    price: 200000,
    image: "mysterybox30k.jfif",
    description: "Paket untuk pembaca aktif dengan variasi bacaan dari beberapa tema",
    estimatedCount: "Sekitar dua sampai tiga buku, bergantung pada harga dan jenis buku",
    findItems: ["Novel", "Komik", "Buku pengetahuan", "Buku pengembangan diri"]
  },
  {
    id: 50,
    name: "Literature Lover Box",
    category: "Books",
    price: 250000,
    image: "mysterybox50k.jfif",
    description: "Paket bacaan dengan variasi genre dan kemungkinan aksesori membaca bertema buku",
    estimatedCount: "Sekitar dua sampai empat buku dengan variasi genre",
    findItems: ["Novel dan komik", "Bacaan nonfiksi atau edukatif", "Aksesori membaca atau merchandise bertema buku jika sesuai"]
  },
  {
    id: 51,
    name: "Ultimate Book Collection",
    category: "Books",
    price: 500000,
    image: "mysterybox50k.jfif",
    description: "Paket buku paling spesial dengan variasi bacaan untuk preferensi genre pilihanmu",
    estimatedCount: "Sekitar dua sampai lima buku",
    findItems: ["Novel dan fiksi", "Komik dan manga", "Nonfiksi dan pengembangan diri", "Buku edukatif", "Kombinasi beberapa genre"],
    premium: true
  },
  {
    id: 28,
    name: "Tiny Surprise Box",
    category: "Toys",
    price: 3000,
    image: "mysterybox10k.jfif",
    slogan: "Small Price, Random Fun",
    description: "Paket mainan sederhana dengan kejutan kecil yang cocok untuk menambah koleksi mainan receh",
    findItems: ["Stiker karakter", "Mainan plastik mini", "Miniatur sederhana", "Mainan kecil atau aksesori mainan"],
    composition: [
      { label: "Mainan sederhana", percentage: 80 },
      { label: "Miniatur dan die-cast", percentage: 20 }
    ]
  },
  {
    id: 29,
    name: "Mini Fun Box",
    category: "Toys",
    price: 10000,
    image: "mysterybox10k.jfif",
    slogan: "A Little Box of Fun",
    description: "Paket mainan kecil dengan pilihan yang lebih beragam untuk menemani waktu santai",
    findItems: ["Mini figure sederhana", "Mainan fidget", "Miniatur kendaraan sederhana", "Mainan kecil untuk koleksi"],
    composition: [
      { label: "Mainan sederhana", percentage: 55 },
      { label: "Miniatur dan die-cast", percentage: 30 },
      { label: "Figure koleksi", percentage: 15 }
    ]
  },
  {
    id: 30,
    name: "Fun Starter Box",
    category: "Toys",
    price: 30000,
    image: "mysterybox20k.jfif",
    slogan: "Let the Fun Begin",
    description: "Paket dengan pilihan mainan yang lebih menarik untuk dimainkan atau dikoleksi",
    findItems: ["Miniatur kendaraan", "Figure kecil", "Puzzle sederhana", "Mainan fidget atau collectible toys"],
    composition: [
      { label: "Mainan sederhana", percentage: 40 },
      { label: "Miniatur dan die-cast", percentage: 30 },
      { label: "Figure koleksi", percentage: 20 },
      { label: "Permainan dan collectible toys", percentage: 10 }
    ]
  },
  {
    id: 31,
    name: "Playtime Box",
    category: "Toys",
    price: 50000,
    image: "mysterybox20k.jfif",
    slogan: "More Toys, More Fun",
    description: "Paket mainan dengan variasi yang lebih luas, dari mainan untuk dimainkan hingga koleksi kecil",
    findItems: ["Mini figure", "Die-cast car sederhana", "Puzzle atau permainan kecil", "Mainan koleksi"],
    composition: [
      { label: "Mainan sederhana", percentage: 25 },
      { label: "Miniatur dan die-cast", percentage: 35 },
      { label: "Figure koleksi", percentage: 25 },
      { label: "Permainan dan collectible toys", percentage: 15 }
    ]
  },
  {
    id: 32,
    name: "Collector Starter Box",
    category: "Toys",
    price: 100000,
    image: "mysterybox30k.jfif",
    slogan: "Start Your Collection",
    description: "Paket untuk penggemar mainan yang ingin mulai membangun koleksi dengan pilihan item yang lebih menarik",
    findItems: ["Die-cast car", "Figure koleksi standar", "Model kit sederhana", "Collectible toy accessories"],
    composition: [
      { label: "Miniatur dan die-cast", percentage: 30 },
      { label: "Figure koleksi", percentage: 30 },
      { label: "Model kit", percentage: 25 },
      { label: "Aksesori koleksi", percentage: 15 }
    ]
  },
  {
    id: 33,
    name: "Collector Plus Box",
    category: "Toys",
    price: 250000,
    image: "mysterybox30k.jfif",
    slogan: "Take Your Collection Further",
    description: "Paket dengan pilihan mainan koleksi yang lebih premium dan variasi item yang lebih menarik",
    findItems: ["Figure koleksi", "Die-cast car dengan detail lebih tinggi", "Model kit", "Collectible toys dan aksesori display"],
    composition: [
      { label: "Miniatur dan die-cast", percentage: 20 },
      { label: "Figure koleksi", percentage: 30 },
      { label: "Model kit", percentage: 25 },
      { label: "Collectibles premium", percentage: 25 }
    ]
  },
  {
    id: 34,
    name: "Premium Toy Box",
    category: "Toys",
    price: 500000,
    image: "mysterybox50k.jfif",
    slogan: "Made for Toy Enthusiasts",
    description: "Paket premium untuk penggemar mainan dan koleksi, dengan fokus pada detail, kualitas, serta pengalaman display",
    findItems: ["Figure koleksi berukuran lebih besar", "Die-cast car premium", "Model kit dengan lebih banyak bagian", "Koleksi mainan bertema tertentu"],
    composition: [
      { label: "Miniatur dan die-cast", percentage: 15 },
      { label: "Figure koleksi", percentage: 30 },
      { label: "Model kit", percentage: 30 },
      { label: "Collectibles premium", percentage: 25 }
    ]
  },
  {
    id: 35,
    name: "Limited Collectible Box",
    category: "Toys",
    price: 1000000,
    image: "mysterybox50k.jfif",
    slogan: "Discover Something Special",
    description: "Paket koleksi premium yang dapat mencakup item edisi khusus jika status dan ketersediaannya sudah terverifikasi",
    findItems: ["Figure koleksi edisi khusus jika terverifikasi", "Die-cast car edisi kolektor jika tersedia", "Model kit premium", "Collectible display items"],
    composition: [
      { label: "Miniatur dan die-cast", percentage: 15 },
      { label: "Figure koleksi", percentage: 30 },
      { label: "Model kit", percentage: 25 },
      { label: "Collectibles premium", percentage: 30 }
    ]
  },
  {
    id: 36,
    name: "Exclusive Collector Box",
    category: "Toys",
    price: 3000000,
    image: "mysterybox50k.jfif",
    slogan: "For the Serious Collector",
    description: "Paket koleksi tingkat tinggi untuk penggemar yang menginginkan item display yang lebih besar, detail, atau eksklusif",
    findItems: ["Figure koleksi premium", "Koleksi die-cast edisi khusus jika terverifikasi", "Model kit berukuran besar", "Set track atau paket lintasan besar sesuai anggaran dan ketersediaan", "Aksesori display koleksi"],
    composition: [
      { label: "Figure koleksi", percentage: 20 },
      { label: "Miniatur dan die-cast", percentage: 20 },
      { label: "Model kit", percentage: 20 },
      { label: "Collectibles premium", percentage: 20 },
      { label: "Large-scale playsets", percentage: 20 }
    ]
  },
  {
    id: 37,
    name: "Ultimate Toy Collector Box",
    category: "Toys",
    price: 5000000,
    image: "mysterybox50k.jfif",
    slogan: "Big Collectibles, Legendary Displays",
    description: "Paket koleksi Toys tertinggi di LUCKY BOX GARUT dengan pilihan kategori item premium, isi aktual dan spesifikasi harus dijelaskan sebelum pemesanan",
    findItems: ["Figure koleksi premium atau edisi khusus jika terverifikasi", "Set track balap berukuran besar jika tersedia", "Die-cast collector set", "Model kit premium", "Display set untuk koleksi mainan"],
    composition: [
      { label: "Figure koleksi", percentage: 10 },
      { label: "Miniatur dan die-cast", percentage: 15 },
      { label: "Model kit", percentage: 20 },
      { label: "Collectibles premium", percentage: 20 },
      { label: "Large-scale playsets", percentage: 35 }
    ]
  },
];

const premiumMinimumPrice = 5000000;
const premiumMaximumPrice = 100000000;
const cartStorageKey = "luckyBoxGarutCart";
const orderHistoryStorageKey = "luckyBoxGarutOrders";

function loadSavedCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    if (!Array.isArray(savedCart)) return [];
    return savedCart.map((item) => {
      const currentProduct = products.find((product) => product.id === item.id);
      const product = currentProduct ? { ...item, ...currentProduct } : item;
      const genre = item.genre || "";
      return {
        ...product,
        genre,
        cartKey: `${product.id}:${genre}`
      };
    });
  } catch {
    return [];
  }
}

let cart = loadSavedCart();
const bookPreferences = new Map();
const readingGenres = [
  "Novel dan Fiksi",
  "Komik dan Manga",
  "Self-Improvement dan Pengembangan Diri",
  "Pengetahuan dan Edukasi",
  "Sejarah dan Biografi",
  "Campuran Semua Genre",
  "Bebas Kejutan"
];
let activeBookProduct = null;
let pendingOrderReview = null;
let currentOrder = null;
let orderConfirmationInProgress = false;

function isPremiumProduct(product) {
  return product.price >= premiumMinimumPrice && product.price <= premiumMaximumPrice;
}

// Menampilkan produk sesuai kategori yang sedang dipilih.
function displayProducts(category = "Semua") {
  const productGrid = document.querySelector("#product-grid");
  if (!productGrid) return;

  const fashionHeading = document.querySelector("#fashion-heading");
  fashionHeading.hidden = category !== "Fashion";
  const gadgetsHeading = document.querySelector("#gadgets-heading");
  gadgetsHeading.hidden = category !== "Gadgets";
  const toysHeading = document.querySelector("#toys-heading");
  toysHeading.hidden = category !== "Toys";
  const sportsHeading = document.querySelector("#sports-heading");
  sportsHeading.hidden = category !== "Sports Equipment";
  const booksHeading = document.querySelector("#books-heading");
  booksHeading.hidden = category !== "Books";

  const visibleProducts = products.filter((product) => {
    const matchesCategory = category === "Semua" || product.category === category;
    return matchesCategory && !isPremiumProduct(product);
  });

  productGrid.innerHTML = visibleProducts.map((product) => {
    const fashionDetails = product.category === "Fashion" ? `
      <p class="product-slogan">${product.slogan}</p>
      <h3>Isi yang Mungkin Kamu Dapat</h3>
      <ul class="fashion-find-list">${product.findItems.map((item) => `<li>${item}</li>`).join("")}</ul>
      <h3>Komposisi Isi Paket</h3>
      <div class="composition-list">
        ${product.composition.map((part) => `
          <div class="composition-item">
            <div class="composition-label"><span>${part.label}</span><strong>${part.percentage}%</strong></div>
            <div class="composition-bar" role="progressbar" aria-label="${part.label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${part.percentage}">
              <span style="width: ${part.percentage}%"></span>
            </div>
          </div>
        `).join("")}
      </div>
    ` : "";
    const gadgetDetails = product.category === "Gadgets" ? `
      <p class="product-slogan">${product.slogan}</p>
      <h3>Isi yang Mungkin Kamu Dapat</h3>
      <ul class="gadget-find-list">${product.findItems.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${product.composition ? `
        <h3>Komposisi Isi Paket</h3>
        <p class="composition-example-label">Example Package Mix</p>
        <div class="composition-list">
          ${product.composition.map((part) => `
            <div class="composition-item">
              <div class="composition-label"><span>${part.label}</span><strong>${part.percentage}%</strong></div>
              <div class="composition-bar" role="progressbar" aria-label="${part.label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${part.percentage}">
                <span style="width: ${part.percentage}%"></span>
              </div>
            </div>
          `).join("")}
        </div>
        <p class="composition-note">${product.compositionNote}</p>
      ` : ""}
    ` : "";
    const toyDetails = product.category === "Toys" ? `
      <p class="product-slogan">${product.slogan}</p>
      <h3>Isi yang Mungkin Kamu Dapat</h3>
      <ul class="toys-find-list">${product.findItems.map((item) => `<li>${item}</li>`).join("")}</ul>
      <h3>Contoh Komposisi Isi</h3>
      <p class="composition-example-label">Example Package Mix</p>
      <div class="composition-list">
        ${product.composition.map((part) => `
          <div class="composition-item">
            <div class="composition-label"><span>${part.label}</span><strong>${part.percentage}%</strong></div>
            <div class="composition-bar" role="progressbar" aria-label="${part.label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${part.percentage}">
              <span style="width: ${part.percentage}%"></span>
            </div>
          </div>
        `).join("")}
      </div>
      <p class="composition-note">Komposisi ini menunjukkan pembagian kategori isi, bukan peluang hadiah acak; item aktual bergantung pada paket yang tersedia dan harus dikonfirmasi</p>
    ` : "";
    const sportsDetails = product.category === "Sports Equipment" ? `
      <p class="product-slogan">${product.slogan}</p>
      <h3>Isi yang Mungkin Kamu Dapat</h3>
      <ul class="sports-find-list">${product.findItems.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${product.composition ? `
        <h3>Contoh Komposisi Perlengkapan</h3>
        <div class="composition-list">
          ${product.composition.map((part) => `
            <div class="composition-item">
              <div class="composition-label"><span>${part.label}</span><strong>${part.percentage}%</strong></div>
              <div class="composition-bar" role="progressbar" aria-label="${part.label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${part.percentage}">
                <span style="width: ${part.percentage}%"></span>
              </div>
            </div>
          `).join("")}
        </div>
        <p class="composition-note">${product.compositionNote || "Persentase menunjukkan pembagian kelompok equipment, bukan peluang memperoleh barang tertentu atau data penawaran terverifikasi"}</p>
      ` : ""}
      ${product.pricePlan ? `
        <h3>Contoh Isi dan Harga</h3>
        <ul class="equipment-price-list">
          ${product.pricePlan.map((item) => `<li><span>${item.label}</span><strong>${rupiah.format(item.price)}</strong></li>`).join("")}
        </ul>
        <p class="configuration-total">Total contoh konfigurasi: ${rupiah.format(product.pricePlan.reduce((total, item) => total + item.price, 0))}</p>
        <p class="composition-note">${product.configurationNote}</p>
      ` : ""}
    ` : "";
    const bookDetails = product.category === "Books" ? `
      <p class="book-count">${product.estimatedCount}</p>
      <h3>Isi yang Mungkin Kamu Dapat</h3>
      <ul class="book-preview-list">${product.findItems.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}</ul>
      <p class="selected-book-genre" data-id="${product.id}">Genre favorit: ${bookPreferences.get(product.id) || "Bebas Kejutan"}</p>
      <span class="product-price">${rupiah.format(product.price)}</span>
      <div class="book-card-actions">
        <button class="button button-secondary view-book-details" type="button" data-id="${product.id}">Lihat Detail</button>
        <button class="button button-primary add-to-cart" type="button" data-id="${product.id}">Tambah ke Keranjang</button>
      </div>
    ` : "";
    const hasProductDetails = ["Fashion", "Gadgets", "Sports Equipment"].includes(product.category);

    return `
      <article class="product-card ${product.category === "Fashion" ? "fashion-card" : ""} ${product.category === "Gadgets" ? "gadget-card" : ""} ${product.category === "Toys" ? "toys-card" : ""} ${product.category === "Toys" && product.price >= 500000 ? "premium-toy-card" : ""} ${product.category === "Sports Equipment" ? "sports-card" : ""} ${product.category === "Sports Equipment" && product.price >= 25000000 ? "premium-sports-card" : ""} ${product.category === "Books" ? "book-card" : ""} ${product.premium ? "premium-book-card" : ""}">
        <img src="FOTO%20FOTO/${product.image}" alt="Gambar paket ${product.name}" onerror="this.src='FOTO%20FOTO/BACKGROUND.jfif.jfif'">
        <div class="product-info">
          <p class="product-category">${product.category}${product.category === "Sports Equipment" && product.price >= 25000000 ? " | Premium Setup" : ""}</p>
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          ${fashionDetails}
          ${gadgetDetails}
          ${toyDetails}
          ${sportsDetails}
          ${bookDetails}
          ${product.category === "Books" ? "" : `
            <span class="product-price">${rupiah.format(product.price)}</span>
            <div class="product-card-actions">
              ${hasProductDetails ? `<button class="button button-secondary view-product-details" type="button" data-id="${product.id}">Lihat Detail</button>` : ""}
              <button class="button button-primary add-to-cart" type="button" data-id="${product.id}">Tambah ke Keranjang</button>
            </div>
          `}
        </div>
      </article>
    `;
  }).join("");
}

// Menggambar ulang isi keranjang dan menghitung subtotalnya.
function updateCart() {
  try {
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  } catch {
    // Keep the in-page cart usable if browser storage is unavailable
  }

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const premiumCartCount = document.querySelector("#premium-cart-count");
  if (premiumCartCount) premiumCartCount.textContent = itemCount;

  const cartItems = document.querySelector("#cart-items");
  if (!cartItems) return;

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const hasSportsPackage = cart.some((item) => item.category === "Sports Equipment");
  const hasPremiumProduct = cart.some((item) => isPremiumProduct(item));
  const sportsOptions = document.querySelector("#sports-order-options");
  if (sportsOptions) sportsOptions.hidden = !hasSportsPackage;
  const premiumDeliveryNote = document.querySelector("#premium-cart-note");
  if (premiumDeliveryNote) premiumDeliveryNote.hidden = !hasPremiumProduct;
  document.querySelector("#cart-count").textContent = itemCount;
  document.querySelector("#cart-total").textContent = rupiah.format(totalPrice);
  document.querySelector("#order-total").textContent = rupiah.format(totalPrice);
  document.querySelector("#product-subtotal").textContent = rupiah.format(totalPrice);
  document.querySelector("#checkout-aside-total").textContent = rupiah.format(totalPrice);
  document.querySelector("#checkout-item-count").textContent = `${itemCount} produk`;
  document.querySelector("#checkout-delivery-info").textContent = hasPremiumProduct
    ? "Pesanan Extra Privilege mendapat penanganan dan pengaturan pengiriman khusus"
    : "Detail pengiriman akan dikonfirmasi sebelum pesanan dilanjutkan";
  const deliveryAddress = document.querySelector("#checkout-delivery-address");
  if (deliveryAddress) {
    deliveryAddress.textContent = document.querySelector("#customer-address").value.trim() || "Alamat belum diisi";
  }
  renderCheckoutItems();

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Keranjang kamu masih kosong</p>";
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <p class="cart-item-name">${item.name}</p>
      ${item.genre ? `<p class="cart-item-option">Genre: ${item.genre}</p>` : ""}
      ${isPremiumProduct(item) ? `<p class="cart-item-option">Extra Privilege | Pengiriman khusus perlu diatur</p>` : ""}
      <div class="cart-item-tools">
        <button type="button" data-action="decrease" data-cart-key="${encodeURIComponent(item.cartKey)}" aria-label="Kurangi jumlah ${item.name}">-</button>
        <span>${item.quantity} x ${rupiah.format(item.price)}</span>
        <button type="button" data-action="increase" data-cart-key="${encodeURIComponent(item.cartKey)}" aria-label="Tambah jumlah ${item.name}">+</button>
        <button class="remove-item" type="button" data-action="remove" data-cart-key="${encodeURIComponent(item.cartKey)}">Hapus</button>
      </div>
    </div>
  `).join("");
}

function addProductToCart(product, genre = "") {
  const cartKey = `${product.id}:${genre}`;
  const cartItem = cart.find((item) => item.cartKey === cartKey);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, genre, cartKey, quantity: 1 });
  }
  updateCart();
}

function renderCheckoutItems() {
  const checkoutItems = document.querySelector("#checkout-items");
  if (!checkoutItems) return;

  if (cart.length === 0) {
    checkoutItems.innerHTML = '<p class="checkout-empty">Keranjang kamu masih kosong</p>';
    return;
  }

  const sportsChoice = document.querySelector("#sports-choice")?.value;
  const equipmentChoice = document.querySelector("#equipment-choice")?.value;
  const shoeSize = document.querySelector("#shoe-size")?.value;
  checkoutItems.innerHTML = cart.map((item) => {
    const options = [
      item.genre ? `Genre: ${item.genre}` : "",
      item.category === "Sports Equipment" && sportsChoice ? `Olahraga: ${sportsChoice}` : "",
      item.category === "Sports Equipment" && equipmentChoice ? `Perlengkapan: ${equipmentChoice}` : "",
      item.category === "Sports Equipment" && shoeSize ? `Ukuran sepatu: ${shoeSize}` : ""
    ].filter(Boolean);

    return `
      <article class="checkout-item">
        <img src="FOTO%20FOTO/${item.image}" alt="${item.name}" onerror="this.src='FOTO%20FOTO/BACKGROUND.jfif.jfif'">
        <div class="checkout-item-main">
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          ${options.map((option) => `<p class="checkout-item-option">${option}</p>`).join("")}
        </div>
        <div class="checkout-item-price">
          <span>${item.quantity} x ${rupiah.format(item.price)}</span>
          <strong>${rupiah.format(item.quantity * item.price)}</strong>
        </div>
      </article>
    `;
  }).join("");
}

const productGrid = document.querySelector("#product-grid");
if (productGrid) {
  displayProducts();

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      displayProducts(button.dataset.category);
    });
  });

  productGrid.addEventListener("click", (event) => {
    const productDetailsButton = event.target.closest(".view-product-details");
    if (productDetailsButton) {
      const product = products.find((item) => item.id === Number(productDetailsButton.dataset.id));
      if (!product) return;

      const composition = product.composition?.length ? `
        <h4>Komposisi Isi Paket</h4>
        <div class="composition-list">
          ${product.composition.map((part) => `
            <div class="composition-item">
              <div class="composition-label"><span>${part.label}</span><strong>${part.percentage}%</strong></div>
              <div class="composition-bar" role="progressbar" aria-label="${part.label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${part.percentage}">
                <span style="width: ${part.percentage}%"></span>
              </div>
            </div>
          `).join("")}
        </div>
      ` : "";
      const pricePlan = product.pricePlan?.length ? `
        <h4>Contoh Isi dan Harga</h4>
        <ul class="equipment-price-list">
          ${product.pricePlan.map((item) => `<li><span>${item.label}</span><strong>${rupiah.format(item.price)}</strong></li>`).join("")}
        </ul>
        <p class="configuration-total">Total contoh konfigurasi: ${rupiah.format(product.pricePlan.reduce((total, item) => total + item.price, 0))}</p>
        <p class="composition-note">${product.configurationNote}</p>
      ` : "";
      const compositionNote = product.compositionNote ? `<p class="composition-note">${product.compositionNote}</p>` : "";

      document.querySelector("#product-detail-content").innerHTML = `
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="product-slogan">${product.slogan}</p>
        <p>${product.description}</p>
        <p class="product-detail-price">${rupiah.format(product.price)}</p>
        <h4>Isi yang Mungkin Kamu Dapat</h4>
        <ul class="product-detail-list">${product.findItems.map((item) => `<li>${item}</li>`).join("")}</ul>
        ${composition}
        ${compositionNote}
        ${pricePlan}
      `;
      document.querySelector("#product-details-dialog").showModal();
      return;
    }

    const detailsButton = event.target.closest(".view-book-details");
    if (detailsButton) {
      activeBookProduct = products.find((item) => item.id === Number(detailsButton.dataset.id));
      const selectedGenre = bookPreferences.get(activeBookProduct.id) || "Bebas Kejutan";
      document.querySelector("#book-detail-content").innerHTML = `
        <p class="product-category">Buku</p>
        <h3>${activeBookProduct.name}</h3>
        <p>${activeBookProduct.description}</p>
        <p class="book-count">Perkiraan jumlah: ${activeBookProduct.estimatedCount}</p>
        <h4>Isi yang Mungkin Kamu Dapat</h4>
        <ul class="book-preview-list">${activeBookProduct.findItems.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p class="book-transparency-note">Jumlah buku adalah perkiraan; judul, edisi, kondisi, dan penerbit tidak dijamin kecuali ditentukan secara khusus</p>
      `;
      document.querySelector(".genre-choice-list").innerHTML = readingGenres.map((genre, index) => `
        <label class="genre-choice" for="book-genre-${index}">
          <input id="book-genre-${index}" type="radio" name="book-genre" value="${genre}" ${genre === selectedGenre ? "checked" : ""}>
          <span>${genre}</span>
        </label>
      `).join("");
      document.querySelector("#book-details-dialog").showModal();
      return;
    }

    const button = event.target.closest(".add-to-cart");
    if (!button) return;

    const product = products.find((item) => item.id === Number(button.dataset.id));
    const genre = product.category === "Books" ? (bookPreferences.get(product.id) || "Bebas Kejutan") : "";
    addProductToCart(product, genre);
  });

  document.querySelector("#customer-address").addEventListener("input", (event) => {
    document.querySelector("#checkout-delivery-address").textContent = event.currentTarget.value.trim() || "Alamat belum diisi";
  });

  ["#sports-choice", "#equipment-choice", "#shoe-size"].forEach((selector) => {
    document.querySelector(selector).addEventListener("change", renderCheckoutItems);
  });

  document.querySelector("#cart-toggle").addEventListener("click", (event) => {
    const panel = document.querySelector("#cart-panel");
    panel.hidden = !panel.hidden;
    event.currentTarget.setAttribute("aria-expanded", String(!panel.hidden));
  });

  document.querySelector("#cart-items").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const cartKey = decodeURIComponent(button.dataset.cartKey);
    const item = cart.find((entry) => entry.cartKey === cartKey);
    if (button.dataset.action === "increase") item.quantity += 1;
    if (button.dataset.action === "decrease") item.quantity -= 1;
    if (button.dataset.action === "remove" || item.quantity <= 0) {
      cart = cart.filter((entry) => entry.cartKey !== item.cartKey);
    }
    updateCart();
  });

  document.querySelector("#order-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const checkoutError = document.querySelector("#checkout-error");
    checkoutError.hidden = true;

    if (cart.length === 0) {
      checkoutError.textContent = "Keranjang kamu masih kosong, pilih produk dulu sebelum meninjau pesanan";
      checkoutError.hidden = false;
      return;
    }

    if (!event.currentTarget.reportValidity()) return;

    const formData = new FormData(event.currentTarget);
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const items = cart.map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      image: item.image,
      unitPrice: item.price,
      quantity: item.quantity,
      genre: item.genre || "",
      options: item.category === "Sports Equipment" ? {
        sport: formData.get("sports-choice") || "",
        equipment: formData.get("equipment-choice") || "",
        shoeSize: formData.get("shoe-size") || ""
      } : {}
    }));

    pendingOrderReview = {
      customer: {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address")
      },
      items,
      subtotal,
      shipping: null,
      discount: 0,
      total: subtotal,
      premiumDelivery: items.some((item) => item.unitPrice >= premiumMinimumPrice),
      sportsPreferences: items.some((item) => item.category === "Sports Equipment") ? {
        budget: formData.get("sports-budget") || "",
        notes: formData.get("sports-notes") || ""
      } : null
    };

    const reviewContent = document.querySelector("#review-order-content");
    reviewContent.replaceChildren();

    function addReviewSection(title, rows) {
      const section = document.createElement("section");
      section.className = "review-section";
      const heading = document.createElement("h3");
      heading.textContent = title;
      section.append(heading);
      rows.forEach((row) => {
        const line = document.createElement("p");
        line.textContent = row;
        section.append(line);
      });
      reviewContent.append(section);
    }

    addReviewSection("Data Pembeli", [
      `Nama: ${pendingOrderReview.customer.name}`,
      `Email: ${pendingOrderReview.customer.email}`,
      `Nomor telepon: ${pendingOrderReview.customer.phone}`,
      `Alamat: ${pendingOrderReview.customer.address}`
    ]);
    addReviewSection("Produk yang Dipesan", items.map((item) => {
      const option = item.genre ? ` | Genre: ${item.genre}` : "";
      const sport = item.options.sport ? ` | Sport: ${item.options.sport}` : "";
      return `${item.name} (${item.category})${option}${sport} | ${item.quantity} x ${rupiah.format(item.unitPrice)} = ${rupiah.format(item.quantity * item.unitPrice)}`;
    }));
    addReviewSection("Informasi Pengiriman dan Total", [
      `Alamat: ${pendingOrderReview.customer.address}`,
      pendingOrderReview.premiumDelivery ? "Exclusive Delivery Service: pesanan premium mendapat penanganan dan pengaturan pengiriman khusus" : "Detail pengiriman akan dikonfirmasi sebelum pesanan dilanjutkan",
      `Subtotal produk: ${rupiah.format(pendingOrderReview.subtotal)}`,
      `Biaya pengiriman: ${pendingOrderReview.shipping === null ? "Belum ditentukan" : rupiah.format(pendingOrderReview.shipping)}`,
      `Total pesanan: ${rupiah.format(pendingOrderReview.total)}`
    ]);
    document.querySelector("#order-review-dialog").showModal();
  });

  document.querySelector("#edit-order").addEventListener("click", () => {
    document.querySelector("#order-review-dialog").close();
  });

  document.querySelector("#confirm-order").addEventListener("click", () => {
    if (!pendingOrderReview || orderConfirmationInProgress) return;
    orderConfirmationInProgress = true;
    const confirmButton = document.querySelector("#confirm-order");
    confirmButton.disabled = true;

    let orderHistory = [];
    try {
      const savedOrders = JSON.parse(localStorage.getItem(orderHistoryStorageKey) || "[]");
      if (Array.isArray(savedOrders)) orderHistory = savedOrders;
    } catch {
      orderHistory = [];
    }

    let orderNumber;
    do {
      const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
      orderNumber = `LBG-${Date.now()}-${randomPart}`;
    } while (orderHistory.some((order) => order.orderNumber === orderNumber));

    currentOrder = {
      ...pendingOrderReview,
      orderNumber,
      orderedAt: new Date().toISOString(),
      orderStatus: "Pesanan Dibuat"
    };
    orderHistory.push(currentOrder);
    try {
      localStorage.setItem(orderHistoryStorageKey, JSON.stringify(orderHistory));
    } catch {
      // The success state remains available in this page if storage is unavailable
    }

    document.querySelector("#success-order-number").textContent = currentOrder.orderNumber;
    document.querySelector("#success-customer-name").textContent = currentOrder.customer.name;
    document.querySelector("#success-customer-email").textContent = currentOrder.customer.email;
    document.querySelector("#success-customer-phone").textContent = currentOrder.customer.phone;
    document.querySelector("#success-customer-address").textContent = currentOrder.customer.address;
    document.querySelector("#success-order-total").textContent = rupiah.format(currentOrder.total);
    document.querySelector("#success-order-status").textContent = currentOrder.orderStatus;
    document.querySelector("#success-order-items").textContent = currentOrder.items.map((item) => {
      const option = item.genre ? ` | Genre: ${item.genre}` : "";
      return `${item.name} (${item.category})${option} | ${item.quantity} x ${rupiah.format(item.unitPrice)}`;
    }).join("\n");
    document.querySelector("#success-delivery-info").textContent = currentOrder.premiumDelivery
      ? "Exclusive Delivery Service: pesanan premium mendapat penanganan dan pengaturan pengiriman khusus"
      : "Detail pengiriman akan dikonfirmasi sebelum pesanan dilanjutkan";
    document.querySelector("#success-order-details").hidden = true;
    document.querySelector("#view-order-details").textContent = "Lihat Detail Pesanan";
    document.querySelector("#checkout-shell").hidden = true;
    document.querySelector("#order-success").hidden = false;

    cart = [];
    updateCart();
    document.querySelector("#order-review-dialog").close();
    document.querySelector("#order-success").scrollIntoView({ block: "start" });
  });

  document.querySelector("#view-order-details").addEventListener("click", (event) => {
    const details = document.querySelector("#success-order-details");
    details.hidden = !details.hidden;
    event.currentTarget.textContent = details.hidden ? "Lihat Detail Pesanan" : "Sembunyikan Detail Pesanan";
    if (!details.hidden && currentOrder) {
      const itemLines = currentOrder.items.map((item) => {
        const genre = item.genre ? ` | Genre: ${item.genre}` : "";
        return `${item.name} (${item.category})${genre} | ${item.quantity} x ${rupiah.format(item.unitPrice)}`;
      });
      details.textContent = [
        `Nama: ${currentOrder.customer.name}`,
        `Email: ${currentOrder.customer.email}`,
        `Nomor telepon: ${currentOrder.customer.phone}`,
        `Alamat: ${currentOrder.customer.address}`,
        ...itemLines,
        `Subtotal produk: ${rupiah.format(currentOrder.subtotal)}`,
        `Biaya pengiriman: ${currentOrder.shipping === null ? "Belum ditentukan" : rupiah.format(currentOrder.shipping)}`,
        `Total pesanan: ${rupiah.format(currentOrder.total)}`,
        `Status pesanan: ${currentOrder.orderStatus}`
      ].join("\n");
    }
  });

  updateCart();

  document.querySelector("#book-dialog-close").addEventListener("click", () => {
    document.querySelector("#book-details-dialog").close();
  });

  document.querySelector("#product-dialog-close").addEventListener("click", () => {
    document.querySelector("#product-details-dialog").close();
  });

  document.querySelector("#book-genre-options").addEventListener("change", (event) => {
    if (!activeBookProduct || event.target.name !== "book-genre") return;
    bookPreferences.set(activeBookProduct.id, event.target.value);
    const selectedGenre = document.querySelector(`.selected-book-genre[data-id="${activeBookProduct.id}"]`);
    if (selectedGenre) selectedGenre.textContent = `Genre favorit: ${event.target.value}`;
  });

  document.querySelector("#book-dialog-add").addEventListener("click", () => {
    if (!activeBookProduct) return;
    const genre = document.querySelector('input[name="book-genre"]:checked').value;
    bookPreferences.set(activeBookProduct.id, genre);
    addProductToCart(activeBookProduct, genre);
    document.querySelector("#book-details-dialog").close();
  });

  updateCart();
  const requestedPremiumId = Number(new URLSearchParams(window.location.search).get("premium"));
  const requestedPremiumProduct = products.find((item) => item.id === requestedPremiumId && isPremiumProduct(item));
  if (requestedPremiumProduct) {
    addProductToCart(requestedPremiumProduct);
    window.history.replaceState(null, "", `${window.location.pathname}#pesan`);
    document.querySelector("#pesan").scrollIntoView({ block: "start" });
  }
}

const premiumGrid = document.querySelector("#premium-product-grid");
if (premiumGrid) {
  const premiumProducts = products.filter(isPremiumProduct);
  const categoryFilter = document.querySelector("#premium-filter-category");
  const priceFilter = document.querySelector("#premium-filter-price");
  const sortFilter = document.querySelector("#premium-sort");
  const premiumResultCount = document.querySelector("#premium-result-count");
  const premiumEmptyState = document.querySelector("#premium-empty-state");
  const detailDialog = document.querySelector("#premium-details-dialog");
  const detailContent = document.querySelector("#premium-detail-content");
  const requestForm = document.querySelector("#premium-form");
  const requestWrap = document.querySelector("#premium-form-wrap");
  const requestProduct = document.querySelector("#premium-product");
  const requestBudget = document.querySelector("#premium-budget");
  const selectedPackage = document.querySelector("#selected-package");
  const requestDialog = document.querySelector("#premium-request-dialog");
  const requestSummary = document.querySelector("#premium-request-summary");
  let activePremiumProduct = null;
  let pendingRequest = null;

  [...new Set(premiumProducts.map((product) => product.category))].forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });

  premiumProducts.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} - ${rupiah.format(product.price)}`;
    requestProduct.append(option);
  });

  function getPriceRange() {
    if (priceFilter.value === "all") return [premiumMinimumPrice, premiumMaximumPrice];
    return priceFilter.value.split("-").map((amount) => Number(amount) * 1000000);
  }

  function renderPremiumProducts() {
    const [minimum, maximum] = getPriceRange();
    const visibleProducts = premiumProducts
      .filter((product) => {
        const categoryMatches = categoryFilter.value === "all" || product.category === categoryFilter.value;
        const priceMatches = product.price >= minimum && product.price <= maximum;
        return categoryMatches && priceMatches;
      })
      .sort((first, second) => sortFilter.value === "low-high" ? first.price - second.price : second.price - first.price);

    premiumGrid.innerHTML = visibleProducts.map((product) => `
      <article class="premium-card exclusive-product-card">
        <img src="FOTO%20FOTO/${product.image}" alt="${product.name}" onerror="this.src='FOTO%20FOTO/BACKGROUND.jfif.jfif'">
        <div class="premium-card-content">
          <span class="exclusive-badge">Exclusive Collection</span>
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <p class="premium-product-price">${rupiah.format(product.price)}</p>
          <p>${product.description}</p>
          <p class="premium-preview">${product.findItems?.slice(0, 2).join(" | ") || "Lihat detail isi paket"}</p>
          <div class="premium-card-actions">
            <button class="button button-secondary premium-view-details" type="button" data-id="${product.id}">Lihat Detail</button>
            <button class="button button-primary premium-add-cart" type="button" data-id="${product.id}">Tambah ke Keranjang</button>
            <button class="button button-primary premium-order-now" type="button" data-id="${product.id}">Pesan Sekarang</button>
          </div>
        </div>
      </article>
    `).join("");

    premiumResultCount.textContent = `${visibleProducts.length} paket premium`;
    premiumEmptyState.hidden = visibleProducts.length > 0;
  }

  function openPremiumDetails(product) {
    activePremiumProduct = product;
    const items = product.findItems?.length ? product.findItems : [product.description];
    const configurationItems = product.pricePlan?.length ? `
      <h3>Contoh Isi dan Harga</h3>
      <ul class="premium-detail-list">${product.pricePlan.map((item) => `<li><span>${item.label}</span><strong>${rupiah.format(item.price)}</strong></li>`).join("")}</ul>
      <p class="premium-detail-total">Configuration total: ${rupiah.format(product.pricePlan.reduce((total, item) => total + item.price, 0))}</p>
    ` : "";

    detailContent.innerHTML = `
      <img class="premium-detail-image" src="FOTO%20FOTO/${product.image}" alt="${product.name}" onerror="this.src='FOTO%20FOTO/BACKGROUND.jfif.jfif'">
      <span class="exclusive-badge">Exclusive Collection</span>
      <p class="product-category">${product.category}</p>
      <h3>${product.name}</h3>
      <p class="premium-product-price">${rupiah.format(product.price)}</p>
      <p>${product.description}</p>
      <h4>Isi yang Mungkin Kamu Dapat</h4>
      <ul class="premium-detail-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${product.estimatedCount ? `<p>${product.estimatedCount}</p>` : ""}
      ${configurationItems}
      <p class="premium-transparency">Isi paket bisa berbeda; merek, model, dan spesifikasi tertentu hanya berlaku jika tercantum di detail produk</p>
      <div class="premium-detail-delivery"><strong>Exclusive Delivery Service</strong><p>Pesanan premium mendapat penanganan dan pengaturan pengiriman khusus</p></div>
    `;
    detailDialog.showModal();
  }

  function goToGlobalCheckout(product) {
    window.location.href = `produk.html?premium=${product.id}#pesan`;
  }

  function showPremiumRequest(productId = "") {
    requestWrap.hidden = false;
    if (productId) {
      requestProduct.value = String(productId);
      requestProduct.dispatchEvent(new Event("change"));
    }
    requestWrap.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector("#premium-name").focus();
  }

  categoryFilter.addEventListener("change", renderPremiumProducts);
  priceFilter.addEventListener("change", renderPremiumProducts);
  sortFilter.addEventListener("change", renderPremiumProducts);

  premiumGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-id]");
    if (!button) return;
    const product = premiumProducts.find((item) => item.id === Number(button.dataset.id));
    if (!product) return;

    if (button.classList.contains("premium-view-details")) openPremiumDetails(product);
    if (button.classList.contains("premium-add-cart")) {
      addProductToCart(product);
      document.querySelector("#premium-cart-status").textContent = `${product.name} ditambahkan ke keranjang`;
    }
    if (button.classList.contains("premium-order-now")) goToGlobalCheckout(product);
  });

  document.querySelector("#premium-dialog-close").addEventListener("click", () => detailDialog.close());
  document.querySelector("#premium-detail-order").addEventListener("click", () => {
    if (activePremiumProduct) goToGlobalCheckout(activePremiumProduct);
  });
  document.querySelector("#show-premium-form").addEventListener("click", () => showPremiumRequest());

  requestProduct.addEventListener("change", () => {
    const product = premiumProducts.find((item) => item.id === Number(requestProduct.value));
    if (!product) return;
    requestBudget.value = product.price;
    selectedPackage.textContent = `${product.name} - ${rupiah.format(product.price)}`;
  });

  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(requestForm);
    const budget = Number(formData.get("budget"));
    if (budget < premiumMinimumPrice || budget > premiumMaximumPrice) {
      requestBudget.setCustomValidity("Choose a budget from Rp5.000.000 to Rp100.000.000");
      requestBudget.reportValidity();
      return;
    }
    requestBudget.setCustomValidity("");

    const product = premiumProducts.find((item) => item.id === Number(formData.get("productId")));
    if (!product) return;

    pendingRequest = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product,
      budget,
      delivery: formData.get("deliveryPreference") || "Discuss after review",
      notes: formData.get("requests") || "None"
    };
    requestSummary.textContent = `Nama: ${pendingRequest.name}\nEmail: ${pendingRequest.email}\nNomor telepon: ${pendingRequest.phone}\nProduk: ${product.name}\nKategori: ${product.category}\nAnggaran: ${rupiah.format(budget)}\nPreferensi pengiriman: ${pendingRequest.delivery}\nCatatan: ${pendingRequest.notes}`;
    requestDialog.showModal();
  });

  document.querySelector("#premium-request-cancel").addEventListener("click", () => requestDialog.close());
  document.querySelector("#premium-request-confirm").addEventListener("click", () => {
    if (!pendingRequest) return;
    const message = document.querySelector("#premium-message");
    message.textContent = `Rincian permintaan untuk ${pendingRequest.product.name} siap ditinjau\nNama: ${pendingRequest.name}\nEmail: ${pendingRequest.email}\nNomor telepon: ${pendingRequest.phone}\nAnggaran: ${rupiah.format(pendingRequest.budget)}\nPreferensi pengiriman: ${pendingRequest.delivery}\nCatatan: ${pendingRequest.notes}`;
    message.hidden = false;
    requestDialog.close();
  });

  requestBudget.addEventListener("input", () => requestBudget.setCustomValidity(""));
  renderPremiumProducts();
  updateCart();
}