import React, { useState } from "react";
import ProductHeader from "./ProductHeader";
import { db } from "../firebase";
import Footer from "./Footer";

export default function Main() {
  const [typeValue, setTypeValue] = useState("");

  const [userChoice, setUserChoice] = useState({
    sku: "",
    name: "",
    price: "",
    size: "",
    height: "",
    width: "",
    len: "",
    weight: "",
  });

  function submitForm() {
    db.collection("products")
      .add({
        sku: userChoice.sku,
        name: userChoice.name,
        price: userChoice.price,
        size: userChoice.size,
        height: userChoice.height,
        width: userChoice.width,
        len: userChoice.len,
        weight: userChoice.weight,
      })
      .then(() => {
        alert("new product is added!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function selectOption(typeVal) {
    if (typeValue === "dvd") {
      return (
        <div className="form-input">
          <label for="size">Size (MB)</label>
          <input
            onChange={(e) =>
              setUserChoice({ ...userChoice, size: e.target.value })
            }
            type="text"
            id="size"
            value={typeValue.size}
          />
        </div>
      );
    } else if (typeValue === "furniture") {
      return (
        <>
          <div className="form-input">
            <label for="height">Height (CM)</label>
            <input
              onChange={(e) =>
                setUserChoice({ ...userChoice, height: e.target.value })
              }
              type="text"
              id="height"
              value={typeValue.height}
            />
          </div>
          <div className="form-input">
            <label for="width">Width (CM)</label>
            <input
              onChange={(e) =>
                setUserChoice({ ...userChoice, width: e.target.value })
              }
              type="text"
              id="width"
              value={typeValue.width}
            />
          </div>
          <div className="form-input">
            <label for="length">Length (CM)</label>
            <input
              onChange={(e) =>
                setUserChoice({ ...userChoice, len: e.target.value })
              }
              type="text"
              id="length"
              value={typeValue.len}
            />
          </div>
        </>
      );
    } else if (typeValue === "book") {
      return (
        <div className="form-input">
          <label for="weight">Weight (KG)</label>
          <input
            onChange={(e) =>
              setUserChoice({ ...userChoice, weight: e.target.value })
            }
            type="text"
            id="weight"
            value={typeValue.weight}
          />
        </div>
      );
    }
  }

  return (
    <>
      <ProductHeader handleClick={submitForm} />
      <main>
        <div className="grid-container">
          <form id="product-form">
            <div className="form-input">
              <label for="sku">SKU</label>
              <input
                onChange={(e) =>
                  setUserChoice({ ...userChoice, sku: e.target.value })
                }
                type="text"
                id="sku"
              />
            </div>
            <div className="form-input">
              <label for="name">Name</label>
              <input
                onChange={(e) =>
                  setUserChoice({ ...userChoice, name: e.target.value })
                }
                type="text"
                id="name"
              />
            </div>
            <div className="form-input">
              <label for="price">Price ($)</label>
              <input
                onChange={(e) =>
                  setUserChoice({ ...userChoice, price: e.target.value })
                }
                type="text"
                id="price"
              />
            </div>
            <div className="form-input">
              <label for="product-type">TypeSwitcher</label>
              <select
                onChange={(e) => setTypeValue(e.target.value)}
                id="product-type"
              >
                <option value="">Type Switcher</option>
                <option value="dvd">DVD</option>
                <option value="furniture">Furniture</option>
                <option value="book">Book</option>
              </select>
            </div>
            {selectOption(typeValue)}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
