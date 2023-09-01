"use client";

import React from "react";
import Questions from "@/components/questions/Questions";
import ChartTable from "@/components/chart/ChartTable";

export default function HomePage() {
  return (
    <>
      <Questions />
      <ChartTable />
    </>
  );
}
