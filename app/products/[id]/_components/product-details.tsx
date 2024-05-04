"use client";

import Image from "next/image";
import { useState } from "react";
import {
  formatCurrency,
  calculateProductTotalPrice,
} from "@/app/_helpers/price";
import {
  BikeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TimerIcon,
  Trash2Icon,
} from "lucide-react";
import { Prisma } from "@prisma/client";
import { Card } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import ProductList from "@/app/_components/product-list";
import DiscountBadge from "@/app/_components/discount-badge";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>;
  complementaryProducts: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}

const ProductDetails = ({
  product,
  complementaryProducts,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantityClick = () =>
    setQuantity((currentState) => currentState + 1);
  const handleDecreaseQuantityClick = () =>
    setQuantity((currentState) => {
      if (currentState === 1) return 1;

      return currentState - 1;
    });

  return (
    <div className="py-5">
      <div className="flex items-center gap-[0.375rem] px-5">
        <div className="relative h-6 w-6">
          <Image
            src={product.restaurant.imageUrl}
            alt={product.restaurant.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <span className="text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>

      <h1 className="mb-3 mt-1 px-5 text-xl font-semibold">{product.name}</h1>

      <div className="flex justify-between px-5">
        <div className="">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h2>
            {product.discountPercentage > 0 && (
              <DiscountBadge product={product} />
            )}
          </div>
          <p className="text-sm text-muted-foreground line-through">
            {formatCurrency(Number(product.price))}
          </p>
        </div>

        <div className="flex items-center gap-2 text-center">
          <Button
            size="icon"
            variant="ghost"
            onClick={handleDecreaseQuantityClick}
            className="border border-solid border-muted-foreground"
          >
            {quantity > 1 ? <ChevronLeftIcon /> : <Trash2Icon size={18} />}
          </Button>
          <span className="w-3">{quantity}</span>
          <Button size="icon" onClick={handleIncreaseQuantityClick}>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>

      <div className="px-5">
        <Card className="mt-6 flex justify-around py-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xs">Entrega</span>
              <BikeIcon size={14} />
            </div>

            {Number(product.restaurant.deliveryFee) > 0 ? (
              <p className="text-xs font-semibold">
                {formatCurrency(Number(product.restaurant.deliveryFee))}
              </p>
            ) : (
              <p className="text-xs font-semibold">Grátis</p>
            )}
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xs">Tempo</span>
              <TimerIcon size={14} />
            </div>

            {Number(product.restaurant.deliveryFee) > 0 ? (
              <p className="text-xs font-semibold">
                {formatCurrency(Number(product.restaurant.deliveryFee))}
              </p>
            ) : (
              <p className="text-xs font-semibold">Grátis</p>
            )}
          </div>
        </Card>
      </div>

      <div className="mt-6 px-5">
        <h3 className="mb-4 font-semibold">Sobre</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>

      <div className="mt-6">
        <h3 className="mb-4 px-5 font-semibold">Sucos</h3>
        <ProductList products={complementaryProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;