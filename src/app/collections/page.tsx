import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getCollections } from "@/lib/api";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {};

const CollectionsPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  // const redirect = redirect();
  const { data } = await getCollections(
    searchParams?.page?.toString() ?? 1,
    16
  );
  const collections = data.result;
  const numberPage = Array.from(
    Array(Math.ceil(data.total / data.page_size)).keys()
  );

  return (
    <div className="w-full max-w-[1320px] py-20 flex flex-col gap-8 mx-auto">
      <div className="flex gap-2">
        <Link className="after:content-['/'] after:ml-2" href="/">
          Home
        </Link>
        <span className="text-[var(--color-primary)]">Collections</span>
      </div>
      <div className="w-full grid grid-cols-4 gap-4 ">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="border rounded-2xl p-4 flex flex-col items-center gap-4 group cursor-pointer hover:scale-105 transition-all"
          >
            <div className="rounded-2xl w-full aspect-square bg-[#f5f5f5]">
              <Image
                className="w-full h-full object-cover rounded-2xl aspect-square"
                src={collection.banner_url || "/img-placeholder.png"}
                alt="alt"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <h4>{collection.title}</h4>
          </div>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Link
              className={cn(data.page === 1 && "pointer-events-none")}
              href={`/collections?page=${data.page - 1}`}
            >
              <div className="flex items-center h-9 w-9 border rounded justify-center">
                <ChevronLeft className="!fill-none" />
              </div>
            </Link>
          </PaginationItem>
          {numberPage.map((page) => (
            <PaginationItem key={page}>
              <Link href={`/collections?page=${page + 1}`}>
                <div
                  className={cn(
                    "flex items-center h-9 w-9 border rounded justify-center",
                    data.page === page + 1 && "text-[var(--color-primary)]"
                  )}
                >
                  {page + 1}
                </div>
              </Link>
            </PaginationItem>
          ))}
          <PaginationItem>
            <Link
              className={cn(data.page === Math.ceil(data.total / data.page_size) && "pointer-events-none")}
              href={`/collections?page=${data.page + 1}`}
            >
              <div className="flex items-center h-9 w-9 border rounded justify-center">
                <ChevronRight className="!fill-none" />
              </div>
            </Link>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CollectionsPage;
