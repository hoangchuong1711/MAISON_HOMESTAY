import * as React from "react";

import type { Room } from "../data/rooms";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { cn } from "../lib/utils";

type RoomCardProps = React.ComponentPropsWithoutRef<"button"> & {
  room: Room;
};

const RoomCard = React.forwardRef<HTMLButtonElement, RoomCardProps>(
  ({ room, className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn("group text-left", className)}
        {...props}
      >
        <Card className="h-full overflow-hidden border-0 bg-white/90 p-0 shadow-sm ring-1 ring-black/5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
          <div className="relative h-52 w-full overflow-hidden">
            <img
              src={room.images[0]}
              alt={room.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <Badge className="absolute left-4 top-4 bg-white/85 text-zinc-800">
              Sleeps {room.capacity}
            </Badge>
          </div>
          <CardContent className="space-y-2 px-5 pb-5 pt-4">
            <h3 className="text-lg font-semibold text-zinc-900">{room.name}</h3>
            <p className="text-sm text-zinc-600">{room.shortDescription}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-[#4a3a1e]">{room.price}</span>
              <span className="text-xs text-zinc-500">Quick view</span>
            </div>
          </CardContent>
        </Card>
      </button>
    );
  },
);

RoomCard.displayName = "RoomCard";

export default RoomCard;
