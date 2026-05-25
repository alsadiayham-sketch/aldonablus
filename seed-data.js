var SEED_PRODUCTS = [
    {
        name: "حقيبة يد كلاسيكية",
        brand: "Aldo",
        category: "حقائب يد",
        price: 280,
        originalPrice: 350,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
        description: "حقيبة يد أنيقة من الدو بتصميم كلاسيكي مناسب لكل المناسبات",
        sizes: ["وسط"],
        status: "bestseller",
        quantity: 10
    },
    {
        name: "حقيبة كتف جلد",
        brand: "Aldo",
        category: "حقائب كتف",
        price: 320,
        originalPrice: 400,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        description: "حقيبة كتف من الجلد الطبيعي بلون أسود أنيق",
        sizes: ["وسط", "كبير"],
        status: "new",
        quantity: 8
    },
    {
        name: "حقيبة سهرة ذهبية",
        brand: "Aldo",
        category: "حقائب سهرة",
        price: 250,
        originalPrice: 300,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop",
        description: "حقيبة سهرة صغيرة بلون ذهبي لامع مثالية للحفلات",
        sizes: ["صغير"],
        status: "special",
        quantity: 5
    },
    {
        name: "حقيبة ظهر عصرية",
        brand: "Aldo",
        category: "حقائب ظهر",
        price: 350,
        originalPrice: 420,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        description: "حقيبة ظهر عملية وأنيقة للاستخدام اليومي",
        sizes: ["وسط"],
        status: "bestseller",
        quantity: 12
    },
    {
        name: "حقيبة كروس بودي",
        brand: "Aldo",
        category: "حقائب كروس",
        price: 220,
        originalPrice: 280,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop",
        description: "حقيبة كروس بودي صغيرة بسلسلة ذهبية",
        sizes: ["صغير"],
        status: "new",
        quantity: 15
    },
    {
        name: "حقيبة توت كبيرة",
        brand: "Aldo",
        category: "حقائب يد",
        price: 380,
        originalPrice: 450,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
        description: "حقيبة توت واسعة مثالية للعمل والتسوق",
        sizes: ["كبير"],
        status: "bestseller",
        quantity: 7
    },
    {
        name: "حقيبة يد بيج",
        brand: "Aldo",
        category: "حقائب يد",
        price: 290,
        originalPrice: 350,
        image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=400&h=400&fit=crop",
        description: "حقيبة يد بلون بيج فاتح مع تفاصيل ذهبية",
        sizes: ["وسط"],
        status: "new",
        quantity: 9
    },
    {
        name: "حقيبة سهرة سوداء",
        brand: "Aldo",
        category: "حقائب سهرة",
        price: 200,
        originalPrice: 260,
        image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=400&h=400&fit=crop",
        description: "كلتش سوداء أنيقة مع حزام سلسلة قابل للفصل",
        sizes: ["صغير"],
        status: "special",
        quantity: 6
    },
    {
        name: "حقيبة كتف بني",
        brand: "Aldo",
        category: "حقائب كتف",
        price: 310,
        originalPrice: 380,
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop",
        description: "حقيبة كتف بنية كلاسيكية بملمس جلدي فاخر",
        sizes: ["وسط", "كبير"],
        status: "bestseller",
        quantity: 11
    },
    {
        name: "حقيبة يد وردية",
        brand: "Aldo",
        category: "حقائب يد",
        price: 270,
        originalPrice: 330,
        image: "https://images.unsplash.com/photo-1566150902887-9679ecc155ba?w=400&h=400&fit=crop",
        description: "حقيبة يد بلون وردي ناعم مناسبة للربيع والصيف",
        sizes: ["وسط"],
        status: "new",
        quantity: 8
    },
    {
        name: "حقيبة ظهر صغيرة",
        brand: "Aldo",
        category: "حقائب ظهر",
        price: 260,
        originalPrice: 320,
        image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&h=400&fit=crop",
        description: "حقيبة ظهر صغيرة أنيقة للخروجات اليومية",
        sizes: ["صغير"],
        status: "new",
        quantity: 10
    },
    {
        name: "حقيبة كروس مطرزة",
        brand: "Aldo",
        category: "حقائب كروس",
        price: 240,
        originalPrice: 300,
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
        description: "حقيبة كروس بتطريز أنيق وسلسلة معدنية",
        sizes: ["صغير"],
        status: "special",
        quantity: 4
    },
    {
        name: "حقيبة يد حمراء",
        brand: "Aldo",
        category: "حقائب يد",
        price: 300,
        originalPrice: 370,
        image: "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?w=400&h=400&fit=crop",
        description: "حقيبة يد بلون أحمر جريء تضيف لمسة حيوية لإطلالتك",
        sizes: ["وسط"],
        status: "bestseller",
        quantity: 6
    },
    {
        name: "حقيبة كتف سلسلة",
        brand: "Aldo",
        category: "حقائب كتف",
        price: 330,
        originalPrice: 400,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
        description: "حقيبة كتف مع حزام سلسلة ذهبي وتصميم مبطن",
        sizes: ["وسط"],
        status: "new",
        quantity: 7
    },
    {
        name: "محفظة جلد طبيعي",
        brand: "Aldo",
        category: "محافظ",
        price: 150,
        originalPrice: 200,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
        description: "محفظة نسائية من الجلد الطبيعي بعدة جيوب",
        sizes: ["صغير"],
        status: "bestseller",
        quantity: 20
    },
    {
        name: "حقيبة يد مربعة",
        brand: "Aldo",
        category: "حقائب يد",
        price: 290,
        originalPrice: 360,
        image: "https://images.unsplash.com/photo-1606522754091-a05c29a4aef9?w=400&h=400&fit=crop",
        description: "حقيبة يد بتصميم مربع عصري مع إغلاق معدني",
        sizes: ["وسط"],
        status: "new",
        quantity: 9
    },
    {
        name: "حقيبة سفر صغيرة",
        brand: "Aldo",
        category: "حقائب يد",
        price: 400,
        originalPrice: 480,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        description: "حقيبة سفر صغيرة عملية وأنيقة للرحلات القصيرة",
        sizes: ["كبير"],
        status: "special",
        quantity: 4
    },
    {
        name: "حقيبة كروس ميني",
        brand: "Aldo",
        category: "حقائب كروس",
        price: 180,
        originalPrice: 230,
        image: "https://images.unsplash.com/photo-1612902456551-404b5c8b671e?w=400&h=400&fit=crop",
        description: "حقيبة كروس ميني لطيفة للخروجات السريعة",
        sizes: ["صغير"],
        status: "new",
        quantity: 14
    },
    {
        name: "حقيبة يد خضراء",
        brand: "Aldo",
        category: "حقائب يد",
        price: 280,
        originalPrice: 340,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop",
        description: "حقيبة يد بلون أخضر زيتي فاخر",
        sizes: ["وسط"],
        status: "new",
        quantity: 5
    },
    {
        name: "حقيبة كتف بيضاء",
        brand: "Aldo",
        category: "حقائب كتف",
        price: 300,
        originalPrice: 370,
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=400&h=400&fit=crop",
        description: "حقيبة كتف بيضاء أنيقة مع تفاصيل فضية",
        sizes: ["وسط"],
        status: "bestseller",
        quantity: 8
    },
    {
        name: "محفظة صغيرة ملونة",
        brand: "Aldo",
        category: "محافظ",
        price: 120,
        originalPrice: 160,
        image: "https://images.unsplash.com/photo-1606503153255-59d5e417c4b8?w=400&h=400&fit=crop",
        description: "محفظة صغيرة بألوان متعددة وتصميم شبابي",
        sizes: ["صغير"],
        status: "new",
        quantity: 18
    },
    {
        name: "حقيبة سهرة لامعة",
        brand: "Aldo",
        category: "حقائب سهرة",
        price: 230,
        originalPrice: 290,
        image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=400&h=400&fit=crop",
        description: "حقيبة سهرة لامعة مع أحجار كريستالية",
        sizes: ["صغير"],
        status: "special",
        quantity: 3
    }
];

function seedFirestoreData(overwrite) {
    var db = firebase.firestore();
    var batch = db.batch();
    var productsRef = db.collection('projects').doc('aldonablus').collection('products');

    if (overwrite) {
        return productsRef.get().then(function(snapshot) {
            var deleteBatch = db.batch();
            snapshot.docs.forEach(function(doc) { deleteBatch.delete(doc.ref); });
            return deleteBatch.commit();
        }).then(function() {
            return addProducts(db, productsRef);
        });
    } else {
        return addProducts(db, productsRef);
    }
}

function addProducts(db, productsRef) {
    var batch = db.batch();
    SEED_PRODUCTS.forEach(function(product, index) {
        var docRef = productsRef.doc('product_' + (index + 1));
        product.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        product.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
        batch.set(docRef, product);
    });
    return batch.commit().then(function() {
        console.log('Seeded ' + SEED_PRODUCTS.length + ' products successfully!');
        return SEED_PRODUCTS.length;
    });
}
