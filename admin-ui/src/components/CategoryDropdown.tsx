import { CategoryDTO, getCategorys } from "@/api/category.api";
import { Select } from "antd";
import { useEffect, useState } from "react";

function CategoryDropdown({ onChange }: { onChange: (id: number) => void }) {
  const [category, setCategory] = useState<CategoryDTO[]>([]);

  useEffect(() => {
    getCategorys()
      .then((res) => setCategory(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Select
    className="!bg-transparent ant-select-placeholder h-10.5 w-full"
      onChange={(value) => onChange(value)}
      placeholder="Kategoriya tanlang"
      options={category.map((ctgr) => ({
        value: ctgr.id,
        label: ctgr.title,
      }))}
    />
  );
}

export default CategoryDropdown;
