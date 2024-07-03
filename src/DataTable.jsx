import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import data from "./data";

const columns = [
  { field: "customer", headerName: "Customer", width: 100 },
  { field: "lastSeen", headerName: "Last Seen", width: 100 },
  { field: "orders", headerName: "Orders", width: 100 },
  { field: "totalSpent", headerName: "Total Spent", width: 100 },
  { field: "latestPurchase", headerName: "Latest Purchase", width: 200 },
  { field: "news", headerName: "News", width: 100 },
  { field: "segments", headerName: "Segments", width: 100 },
];

export default function MyDataGrid() {
  const [filterValue, setFilterValue] = useState("");

  const inputHandler = (e) => {
    const value = e.target.value;
    setFilterValue(value.trim());
  };

  const filteredRows = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(filterValue.toLowerCase())
    )
  );

  return (
    <div style={{ height: 400, width: "100%", overflow: "auto" }}>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="Filter data..."
        style={{ marginBottom: 10 }}
      />
      <div style={{ height: 380, width: "100%" }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={5} />
      </div>
    </div>
  );
}
