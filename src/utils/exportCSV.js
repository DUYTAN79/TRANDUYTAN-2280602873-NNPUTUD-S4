export const downloadCSV = (data) => {
  if (data.length === 0) return;
  const headers = "ID,Title,Price,Category\n";
  const rows = data.map(p => 
    `${p.id},"${p.title.replace(/"/g, '""')}",${p.price},"${p.category?.name || ''}"`
  ).join("\n");
  
  const blob = new Blob(["\ufeff" + headers + rows], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `products_export.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};