import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getProducts } from "@/lib/api";
import { LayoutGrid, LayoutList } from "lucide-react";
import Link from "next/link";
import React from "react";
import FilterLeft from "./_components/filter-options/left-sidebar";
import Image from "next/image";

type Props = { layout: "grid" | "list" };

const ProductsPage = async ({ layout = "grid" }: Props) => {
  const { data } = await getProducts();

  return (
    <div className="w-full max-w-[1320px] py-20 flex flex-col gap-10 mx-auto">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link className="after:content-['/'] after:ml-2" href="/">
            Home
          </Link>
          <span className="text-[var(--color-primary)]">Products</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="whitespace-nowrap">
            Showing <span className="text-[var(--color-primary)]">198 </span>
            result
          </span>
          <div className="flex gap-1">
            <Button variant="outline" size="icon">
              <LayoutGrid />
            </Button>
            <Button variant="outline" size="icon">
              <LayoutList />
            </Button>
          </div>
          <Select defaultValue="newest">
            <SelectTrigger className="py-[5px] px-[11px] gap-[27px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Alphabetically, A-Z</SelectItem>
              <SelectItem value="banana">Alphabetically, Z-A</SelectItem>
              <SelectItem value="lowest">Price: Lowest first</SelectItem>
              <SelectItem value="highest">Price: Highest first</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-6">
        <FilterLeft aggregations={data.aggregations} />
        {layout === "grid" && (
          <div className="grid-products w-full">
            <div
              className="grid-product repeat-3 mb-4 position-relative"
              id="product-list"
            >
              {data.result.map((product) => (
                <div key={product.id} className="wrap-product">
                  <div className="relative">
                    <Link href={`/products/${product.id}`}>
                      <div className="fc_image_product ratio aspect-square">
                        <Image
                          className="w-full h-full object-contain"
                          src={product.image_url}
                          alt={product.title}
                          width={0}
                          height={0}
                          sizes="screen"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="fc_product_info mt-4 md:mt-6">
                    <Link
                      className="product_title"
                      href={`/products/${product.id}`}
                    >
                      {product.title}
                    </Link>
                    <div className="product_price mt-2">
                      <span className="product_current_price">
                        ${product.price}
                      </span>
                      <span className="product_sale_price line-through ml-1">
                        ${product.compare_price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {layout === "list" && <>List view</>}
      </div>
    </div>
  );
};

export default ProductsPage;
