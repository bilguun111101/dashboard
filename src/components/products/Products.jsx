import React from 'react';
import css from "./Build/Products/products-style.module.scss";

export const Products = () => {
  return (
    <section className={css.products_section}>
      <div className={css.container}>
        <div className={css.add_product_section}></div>
      </div>
    </section>
  )
}