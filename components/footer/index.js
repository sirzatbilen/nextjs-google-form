import React from "react";
import Link from "next/link";

import style from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      Made with by&nbsp;
      <Link href="https://twitter.com/SirzatBilen" target="_blank">
        Şirzat Bilen
      </Link>
    </footer>
  );
}
