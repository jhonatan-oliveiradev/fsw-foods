"use client";

import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <div className="w-full min-w-[266px] max-w-[266px] space-y-3">
        <div className="relative h-[136px] w-full">
          <Image
            src={restaurant.imageUrl}
            fill
            className="rounded-lg object-cover"
            alt={restaurant.name}
          />

          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary bg-white px-2 py-[2px]">
            <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold">5.0</span>
          </div>

          {isFavorite ? (
            <Button
              size="icon"
              className="absolute right-2 top-2 h-7 w-7 rounded-full bg-primary"
              onClick={() => setIsFavorite(false)}
            >
              <HeartIcon size={16} className="fill-white" />
            </Button>
          ) : (
            <Button
              size="icon"
              className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700"
              onClick={() => setIsFavorite(true)}
            >
              <HeartIcon size={16} className="fill-white" />
            </Button>
          )}
        </div>
        {/* TEXTO */}
        <div>
          <h3 className="text-sm font-semibold">{restaurant.name}</h3>
          {/* INFORMAÇÕES DA ENTREGA */}
          <div className="flex gap-3">
            {/* CUSTO DE ENTREGA */}
            <div className="flex items-center gap-1">
              <BikeIcon className="text-primary" size={14} />
              <span className="text-xs text-muted-foreground">
                {Number(restaurant.deliveryFee) === 0
                  ? "Entrega grátis"
                  : formatCurrency(Number(restaurant.deliveryFee))}
              </span>
            </div>
            {/* TEMPO DE ENTREGA */}
            <div className="flex items-center gap-1">
              <TimerIcon className="text-primary" size={14} />
              <span className="text-xs text-muted-foreground">
                {restaurant.deliveryTimeMinutes} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;
