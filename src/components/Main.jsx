import { onSnapshot, collection } from "@firebase/firestore";
import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Product from "./Product";

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productData = onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return productData;
  }, []);

  // delete all products at once
  function massDelete() {
    db.collection("products")
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
      });
  }

  // delete product by ID
  async function deleteById(id) {
    await db.collection("products").doc(id).delete();
  }

  return (
    <>
      <Header handleDelete={massDelete} />

      <main>
        <div className="grid-container">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                sku={product.sku}
                name={product.name}
                price={product.price}
                size={product.size}
                height={product.height}
                width={product.width}
                len={product.len}
                weight={product.weight}
                handleCheck={() => deleteById(product.id)}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
