import { getApps, initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";

const sampleData = [
    {   
        id: 1,
        name: "Men's slim fit suit",
        image: ["https://example.com/tshirt1.jpg", "https://example.com/tshirt2.jpg"],
        productSlug: "Men’s-Slim-Fit-Suit",
        description: "A comfortable and stylish t-shirt perfect for everyday wear.",
        newProduct: true,
        premiumProduct: false,
        sizes: ["S", "M", "L", "XL"],
        category: "Clothing",
        reviews: 4.5,
        price: 25.99,
        quantity: 100,
        color: "Blue",
        tags: ["tshirt", "casual", "cotton"],
        Brand: "Brand A",
    },
    {
        id: 2,
        name: "Men's Regular Fit Straight Leg Jean",
        image: ["https://example.com/tshirt1.jpg", "https://example.com/tshirt2.jpg"],
        productSlug: "Men's-Regular-Fit-Straight-Leg-Jean",
        description: "A comfortable and stylish t-shirt perfect for everyday wear.",
        newProduct: true,
        premiumProduct: false,
        sizes: ["S", "M", "L", "XL"],
        category: "Clothing",
        reviews: 4.5,
        price: 25.99,
        quantity: 100,
        color: "Blue",
        tags: ["tshirt", "casual", "cotton"],
        Brand: "Brand A",
    },
    {
        id: 3,
        name: "Mens Fashion Athletic Hoodies",
        image: ["https://example.com/tshirt1.jpg", "https://example.com/tshirt2.jpg"],
        productSlug: "Mens-Fashion-Athletic-Hoodies",
        description: "A comfortable and stylish t-shirt perfect for everyday wear.",
        newProduct: true,
        premiumProduct: false,
        sizes: ["S", "M", "L", "XL"],
        category: "Clothing",
        reviews: 4.5,
        price: 25.99,
        quantity: 100,
        color: "Blue",
        tags: ["tshirt", "casual", "cotton"],
        Brand: "Brand A",
    }
];



//Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBb4S2aDH9qsfM6sXiFFZM6FDF7m_yGHIo",
    authDomain: "betr-beta-task.firebaseapp.com",
    projectId: "betr-beta-task", //Your Project ID
    storageBucket: "betr-beta-task.firebasestorage.app",
    messagingSenderId: "786165749564",
    appId: "1:786165749564:web:03a48eecc2f419369fb039",
    measurementId: "G-NBL5T5P1GB"
};

// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

async function migrateData() {
    try {
        console.log("Firebase Config:", firebaseConfig); // Debug: Check if config is loaded

        const productsCollectionRef = collection(db, "products");

        for (const product of sampleData) {
            // Ensure productSlug is unique
            const docRef = doc(productsCollectionRef, product.productSlug);
            await setDoc(docRef, product, { merge: true });
            console.log(`Added product: ${product.name}`);
        }

        console.log("Data migration complete!");
    } catch (error) {
        console.error("Error migrating data:", error);
    }
}

migrateData();